import { useEffect, useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
function Home({data, handleProduct}) {
  // const [data1,setData1] = useState(JSON.parse(localStorage.getItem('Cart'))||  []);

  return (
  <>
  
<h1 className='head'>Hurry Up! Shop Now</h1>
{/* <Link to='/cart'>
<img className='CartImg' src="Cart.png" width={'120px'} alt="" />
</Link> */}
  <div className="container">
    
  {data.length>0&&data.map((item)=>{
      return (
      <div>
        <img src={item.image} height={'200px'} width={'100%'} alt="" />
        <div> <span>Title :- </span>{item.title}</div>
        <h4>Category :- {item.category}</h4>

        <h3>Price :- {item.price}</h3>
        <button   onClick={()=> handleProduct(item)}  className='button-74'>Add to Cart</button>
        </div>)
     })}
     </div>
     
  </>
  );
}

export default Home;
