import React from 'react'

const Prodinfo = () => {
    const prod=[
        {
            id:1,
            name:"Phone",
            price:"$699"
        },
        {
            id:2,
            name:"Laptop",
            price:"$899"
        },
        {
            id:2,
            name:"HeadPhones",
            price:"$399"
        }
    ]
  return (
    <div>
        {prod.map((prod)=>(
            <div key={prod.id}>
         <h1>Name: {prod.name}</h1>
         <h1>Price: {prod.price}</h1>
         
            </div>

        ))}
    </div>
  )
}

export default Prodinfo