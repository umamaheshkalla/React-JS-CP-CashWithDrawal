import './index.css'

const DenominationItem = props => {
  const {denomination, updateBalance} = props
  const {value} = denomination
  const onupdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button className="button" onClick={onupdateBalance} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
