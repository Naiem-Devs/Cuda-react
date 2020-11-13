import React, {Fragment} from 'react'

function ItemList({ products }) {

    console.log(products);

    return (
        <Fragment>
        {
            products!== null 
            ? products.map((item)=>{
                return (
                    <div className='col-6'>
                        <div className="singel_portf">
                            <img src={item.portImg} alt=""/>
                            <h4> {item.itemTitle} </h4>
                        </div>
                    </div> 
                )
            })
            : <div className='col-6'>
                       No Product Found
                    </div> 
        }
        </Fragment>
    )
}

export default ItemList
