import React from 'react'

const Product = (props) => {
        return (
            <div className="product">
                <h1>Product {props.id}</h1>
                 <h3>Name : {props.name}</h3>
                 <h3>Description: {props.decription}</h3>
                 <h2>Price : {props.price}</h2>
            </div>
        )
}
export default Product