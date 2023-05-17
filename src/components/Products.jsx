import React from 'react'
import { data } from '../api/api'

export default function Products({addItem}) {
  return (
    <>
      <div className="row mt-5 pt-5">
        {data.map((value,index) => {
            return   <div key={value.id} className="col-md-4 my-3 text-center">
            <div className="item ">
                <img height={300} className='w-100' src={value.image} alt="" />
                <div className='containItem'>  
                <h6 className='my-4'>{value.title}</h6>
                <span className=''>{value.price}</span>
                </div>
                <button  onClick={() => addItem(value)} className='btn mainColor  text-white w-100'>Add to cart</button>

            </div>
        </div>
        })}
      </div>
    </>
  )
}
