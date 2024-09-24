import React from 'react'
import "./NewCollections.css"
import Item from "../Item/Item"


const NewCollections = (props) => {

  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr/>
      <div className="collections">
        {props.data.map((item,i)=>{
          return(
            <Item 
            key={i} 
            id={item._id} 
            name={item.name} 
            image={item.image}
            price={item.price}
            
            
            />
       )
        })}
      </div>
    </div>
  )
}

export default NewCollections
