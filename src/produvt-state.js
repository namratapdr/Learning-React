import React , {Component} from 'react'
import Product from './componnents/layouts/product-display'
import Products from './product'

class Display extends Component{
    constructor(){
        super()
        this.state = {
            display: Products
        }
    }
    render(){
        const productItems = this.state.display.map(item => <Product key={item.id} id={item.id} name={item.name} description={item.description} price={item.price}/>)
        return(
            <div className="display">
                {productItems}
            </div>
        )
    }
}

export default Display