import React, {Component} from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor (props) {
    super(props)
    this.state={
      total:0
    }

    this.onChange = this.onChange.bind(this)
    this.addExpense = this.addExpense.bind(this)

  }

  onChange (e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({[name]: value})
  }

  componentWillMount(){
    var that=this;
    $.ajax({
      url: '/expenses',
      type: 'GET',
      success: (data) => {
        console.log('data recieved',data)
        that.setState({total:data})
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }

  addExpense(){
    var that=this;
    $.ajax({
      url: '/expenses',
      type: 'POST',
      data:that.state,
      success: (data) => {
        console.log('send post req successfully')
      },
      error: (err) => {
        console.log('err', err)
      }
    })

    $.ajax({
      url: '/expenses',
      type: 'GET',
      success: (data) => {
        console.log('data recieved',data)
        that.setState({total:data})
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }

  render () {
    console.log(this.state);


    return (
      <div>
        <div className='app-body'>
          <h1>Expenses tracker</h1>
          <div className='input-row'>
            <div>
              <h2 >Date</h2>
              <input id="date" type="month" name="date" onChange={this.onChange}></input>
            </div>
            <div>
              <h2 >Amount</h2>
              <input id="amount" type="text" name="amount" onChange={this.onChange}></input>
            </div>
            <div>
              <h2>Category</h2>
                <select name='category' onChange={this.onChange}>
                  <option value="housing">Housing</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="taxes">Taxes</option>
                  <option value="repair">Repair & Maintenance</option>
                  <option value="elec-water">Electricity & Water fees</option>
                </select>
            </div>
            <button onClick={this.addExpense}>Add</button>
          </div>
          <div className='total'>
            <div>
              <h2 >Total</h2>
              <input type="text" value={this.state.total}></input>
            </div>
            <Link to ={`/categories`}><button>Get Track</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
