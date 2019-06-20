import React, {useState, useEffect} from 'react'
import Stock from '../components/Stock'

const StockContainer = ({onStockClick, sortValue, filterValue}) => {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => setStocks(stocks))
  })

  let stockCards = [...stocks]
                  .sort(sortValue === "Price" ? (a, b) => a.price - b.price : (a, b) => a.name.localeCompare(b.name))
                  .filter(filterValue === "All" ? stock => stock : filterValue === "Tech" ? stock => stock.type === "Tech" : filterValue === "Finance" ? stock => stock.type === "Finance" : stock => stock.type === "Sportswear")
                  .map(stock => <Stock key={stock.id} stock={stock} onStockClick={onStockClick}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  )
}

export default StockContainer
