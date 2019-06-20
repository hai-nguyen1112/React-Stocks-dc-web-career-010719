import React, {Component} from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      boughtStocks: [],
      sortValue: "Alphabetically",
      filterValue: "All"
    }
  }

  handleStockClick = (stock, position) => {
    if (position === undefined) {
      this.setState({boughtStocks: [...this.state.boughtStocks, stock]})
    } else {
      this.setState({boughtStocks: [...this.state.boughtStocks].filter(stock => this.state.boughtStocks.indexOf(stock) !== position)})
    }
  }

  handleSortValueChange = e => {
    this.setState({sortValue: e.target.value})
  }

  handleFilterValueChange = e => {
    this.setState({filterValue: e.target.value})
  }

  render() {
    return (
      <div>
        <SearchBar
          sortValue={this.state.sortValue}
          onSort={this.handleSortValueChange}
          onFilter={this.handleFilterValueChange}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                onStockClick={this.handleStockClick}
                sortValue={this.state.sortValue}
                filterValue={this.state.filterValue}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                boughtStocks={this.state.boughtStocks}
                onStockClick={this.handleStockClick}
              />

            </div>
          </div>
      </div>
    )
  }

}

export default MainContainer
