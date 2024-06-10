import PropTypes from 'prop-types'
import '../../styles/styleWallet.scss'
import { useEffect, useState } from 'react'

function PerAsset({ asset, totalQuantity }) {

  const [transactionsBuy, setBuy] = useState([]);
  const [transactionsSell, setSell] = useState([]);

  const typeOfTransactions = (list, type) => {
    return list !== 0 ? list.filter(value => value.type === type) : 0
  }

  useEffect(() => {
    setBuy(typeOfTransactions(totalQuantity, 'buy'))
    setSell(typeOfTransactions(totalQuantity, 'sell'))
  } ,[ totalQuantity ])

  

  return (
    <tr>
        <td>{ asset.symbol }</td>
        <td>{ asset.productName }</td>
        <td>{ asset.currentPrice }</td>
        <td>{ totalQuantity !== 0 ? transactionsBuy
                  .reduce((total, transaction) => total + transaction.quantity, 0) - 
                transactionsSell
                  .reduce((total, transaction) => total + transaction.quantity, 0) : 0 } {asset.symbol}
        </td>
        <td>{ ((totalQuantity !== 0 ? transactionsBuy
                  .reduce((total, transaction) => total + transaction.quantity, 0) - 
                transactionsSell
                  .reduce((total, transaction) => total + transaction.quantity, 0) : 0 ) 
                * asset.currentPrice
              ).toFixed(2) } USD
        </td>
    </tr>
  )
}

PerAsset.propTypes = {
    asset: PropTypes.object.isRequired,
    totalQuantity: PropTypes.array.isRequired,
}

export default PerAsset
