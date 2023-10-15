function AddProduct(props){

    const {addItem,name, price} = props

   

    
    


    return(
        <div className="but_area"
        
        >
            <button onClick={() => addItem(name, price)}>Добавить новый товар</button>
        </div>
    )
}

export default AddProduct