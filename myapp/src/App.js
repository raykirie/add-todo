import { useState } from 'react';
import './App.css';
import ProductBlock from './components/ProductBlock';
import AddProduct from './components/AddProduct';

function App() {

  const data = [
    {id: 1, name: 'Велосипед', price: 1000, count: 1},
    {id: 2, name: 'Самокат', price: 700, count: 1},
    {id: 3, name: 'Ролики', price: 1300, count: 2},
    {id: 4, name: 'Сноуборд', price: 19000, count: 4}
    ]

  const [items, setItems] = useState(data);

  function removeProduct(id) {
    let removedProduct = items.filter(elem => elem.id !== id);
    setItems(removedProduct);
  }

  function plusNum(count, id){
    if (count > 25) {
      alert('Кол-во не может быть больше 25');
      return;
    }
    const productItem = items.find(item => item.id === id);
    const productItemIndex = items.findIndex(item => item.id === id);
    const newItems = [...items];
    productItem.count = count;
    newItems[productItemIndex] = productItem;
    setItems(newItems);

    
  }

  function minusNum(count, id){
    const productItem = items.find(item => item.id === id);
    const productItemIndex = items.findIndex(item => item.id === id);
    let newItems;
    if (count === 0) {
      newItems = items.filter(item => item.id !== id);
      setItems(newItems);
    } else {
      productItem.count = count;
      newItems = [...items];
      newItems[productItemIndex] = productItem;
      setItems(newItems);
    }
  }



  function addItem(){
    const infos = prompt()
    const [name, price] = infos.split(' ');
    let newItem = {
      id: Date.now(),
      name: name,
      price: price,
      count: 1
    }
    setItems([...items, newItem])
  }






  return (
    <div className='main'>
        <AddProduct addItem={addItem}/>
        <ProductBlock
        item={items}
        removeProduct={removeProduct}
        plusNum={plusNum}
        minusNum={minusNum}
        />
    </div>
  );
}

export default App;
