import React, {Component} from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';

class Subtotal extends Component {
  constructor (props) {
    super(props)
    this.state={
      amountPerMonth:{}
    }
  }
  componentWillMount(){
    var that = this
    $.ajax({
      url: window.location.pathname,
      type: 'get',
      success: (data) => {
        var subTotal=0;
        for(var key in data){
          subTotal+=data[key]
        }
        that.setState({amountPerMonth:data,subTotal:subTotal})
        console.log('data : ',data)
      },
      error: (err) => {
        console.log('err', err)
      }
    })
    console.log(this.props);
  }
  render () {

    console.log(this.state);
    return (
      <div>
        <h1>Category</h1>
        <div className='months'>
          <div>
            <p>Jans</p>
            <p>{this.state.amountPerMonth[1]}</p>
          </div>
          <div>
            <p>Feb</p>
            <p>{this.state.amountPerMonth[2]}</p>
          </div>
          <div>
            <p>Mar</p>
            <p>{this.state.amountPerMonth[3]}</p>
          </div>
          <div>
            <p>April</p>
            <p>{this.state.amountPerMonth[4]}</p>
          </div>
          <div>
            <p>May</p>
            <p>{this.state.amountPerMonth[5]}</p>
          </div>
          <div>
            <p>Jun</p>
            <p>{this.state.amountPerMonth[6]}</p>
          </div>
          <div>
            <p>July</p>
            <p>{this.state.amountPerMonth[7]}</p>
          </div>
          <div>
            <p>Aug</p>
            <p>{this.state.amountPerMonth[8]}</p>
          </div>
          <div>
            <p>Sept</p>
            <p>{this.state.amountPerMonth[9]}</p>
          </div>
          <div>
            <p>Oct</p>
            <p>{this.state.amountPerMonth[10]}</p>
          </div>
          <div>
            <p>Nov</p>
            <p>{this.state.amountPerMonth[11]}</p>
          </div>
          <div>
            <p>Dec</p>
            <p>{this.state.amountPerMonth[12]}</p>
          </div>
        </div>
        <div>
          <p>Subtotal</p>
          <input value={this.state.subTotal}></input>
        </div>
      </div>
    )
  }
}
export default Subtotal
