import ProductItem from "./ProductItem"

function ProductBlock(props){
    const {item, removeProduct, plusNum, minusNum} = props
    return(
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            {item.map(elem => <ProductItem
                                key={elem.id}
                                id={elem.id}
                                name={elem.name}
                                price={elem.price}
                                count={elem.count}
                                removeProduct={removeProduct}
                                plusNum={plusNum}
                                minusNum={minusNum}           
            />)}
            
        </div>
    )
}

export default ProductBlock
