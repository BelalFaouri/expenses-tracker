import React, {Component} from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';
class Categories extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.state);
    
    return (
      <div>
        <div className='app-body'>
          <div className='categories'>

            <Link to = {`/subtotal/housing`}><button>Housing</button></Link>
            <Link to = {`/subtotal/entertainment`}><button>Entertainment</button></Link>
            <Link to = {`/subtotal/taxes`}><button>Taxes</button></Link>
            <Link to = {`/subtotal/repair`}><button>Repair & and Maintenance</button></Link>
            <Link to = {`/subtotal/fees`}><button>Electricity & Water fees</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Categories
