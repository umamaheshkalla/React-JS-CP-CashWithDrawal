import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {initialAmount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({
      initialAmount: prevState.initialAmount - value,
    }))
  }

  getFirstChar = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {initialAmount} = this.state
    const name = 'Sarah Williams'
    const initialChar = this.getFirstChar(name)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <p className="initialChar">{initialChar}</p>
            <h1 className="name">Sahara Williams</h1>
          </div>
          <div className="balance-amount">
            <p className="your-balance">Your Balance</p>
            <div>
              <h1 className="amount">{initialAmount}</h1>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <h1 className="withdraw">Withdraw</h1>
            <p className="withdraw-in">CHOOSE SUM (IN RUPEES)</p>
            <ul className="values-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denomination={eachDenomination}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
