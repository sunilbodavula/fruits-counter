// Write your code here
import Component from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count">0</span> mangoes <span>0</span>{' '}
            bananas
          </h1>
          <div className="cards-container">
            <div className="card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" type="button">
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
