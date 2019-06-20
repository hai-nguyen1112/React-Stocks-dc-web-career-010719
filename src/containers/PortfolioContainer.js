import React from 'react'
import Stock from '../components/Stock'

const PortfolioContainer = ({boughtStocks, onStockClick}) => {
  let boughtStockCards = boughtStocks.map(boughtStock => <Stock key={boughtStocks.indexOf(boughtStock)} position={boughtStocks.indexOf(boughtStock)} stock={boughtStock} onStockClick={onStockClick}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {boughtStockCards}
    </div>
  )
}

export default PortfolioContainer
