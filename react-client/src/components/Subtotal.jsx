import React, {Component} from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';

class Subtotal extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount(){
    var that = this
    $.ajax({
      url: window.location.pathname,
      type: 'get',
      success: (data) => {
        console.log('client-ajax')
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
          <p>Jan</p>
          <p>Feb</p>
          <p>Mar</p>
          <p>April</p>
          <p>May</p>
          <p>Jun</p>
          <p>July</p>
          <p>Aug</p>
          <p>Sept</p>
          <p>Oct</p>
          <p>Nov</p>
          <p>Dec</p>
        </div>
      </div>
    )
  }
}
export default Subtotal
