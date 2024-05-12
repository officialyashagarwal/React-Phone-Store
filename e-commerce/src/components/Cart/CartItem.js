import React from 'react'

export default function CartItem({item,value}) {
    const {id, title, img, price, total, count} = item;
    const {increase, decrease, remove} = value;
  return (
    <div className='row my-1 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img className='img-fluid' src={img} alt="product" style={{width: "5rem", height:"5rem"}}/>
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'> product : </span>
        {title}
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'> product : </span>
        {price}
      </div>

      <div className='.col-10 mx-auto col-lg-2 my-2 my-lg-2'>
        <div className='d-flex justify-content-center'>
            <div>
                <span className='btn btn-black mx-1' onClick={() => decrease(id)} >-</span>
                <span className='btn btn-black mx-1' >{count}</span>
                <span className='btn btn-black mx-1' onClick={() => increase(id)}>+</span>
            </div>
        </div>
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={() => remove(id)}>
            <i className="fa-solid fa-trash"></i>    
        </div>  
      </div>

      <div className='col-10 mx-auto col-lg-2'>
        <strong>item total : $ {total}</strong>
      </div>
    </div>
  )
}
