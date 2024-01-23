import React from 'react'
import { useEffect, useState } from 'react';
import "../../Styles/product.css"


export default function Product() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:4000/shop');
      const productItem = await res.json();
      setItem(productItem);
    })();
  }, []);

const [sortOption,setSortOption]= useState(null)

const handleSort = (option) => {
  let sortedData = [...item]
  if (option === "Price Low to High"){
    sortedData.sort((a,b)=>
      a.product_price - b.product_price
    );
  } else if (option === 'A-Z'){
    sortedData.sort((a,b)=> a.product_name.localeCompare(b.product_name))
  }

  setItem(sortedData);
  setSortOption(option);

  }
 



  return (
    <>
        <div className="filter">
          <h3>Sort By</h3>
          <button onClick={()=> handleSort('Price Low to High')} className='filterbtn'>Price Low to High</button>
          <button onClick={()=> handleSort('A-Z')} className='filterbtn'>A-Z</button>
        </div>

      <div className="contaier">
        <div className="product-grid">
          {item.map((items) => (
            <div className="card stacked">
              <div className="card__content">
                <img src={items.product_img} alt="" className="img__card" />
                <h2 className="card__title">{items.product_name}</h2>
                <p className="card__price">${items.product_price}</p>
                <p className="card__description">{items.product_description}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
