import React, { useState } from 'react';

function ProductItem(props) {
  const { name, price, count, id, removeProduct, plusNum, minusNum } = props;
  const [doubleClick, setDoubleClick] = useState(false);

  const handleDoubleClick = () => {
    setDoubleClick(true);

    setTimeout(() => {
      setDoubleClick(false);
    }, 300);

    removeProduct(id); // Удаляем товар по двойному клику
  };

  return (
    <div className="todo_product" onDoubleClick={handleDoubleClick}>
      <h2>{name}</h2>
      <p>{price}</p>
      <button className='but' onClick={() => minusNum(count - 1, id)}>-</button>
      {count}
      <button className='but' onClick={() => plusNum(count + 1, id)}>+</button>
    </div>
  );
}

export default ProductItem;