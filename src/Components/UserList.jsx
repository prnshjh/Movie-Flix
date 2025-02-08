import React from 'react'

const UserList = () => {
    const users=[
        {
            id:1, 
            name:"Priyanshu",
            age:21
        },
        {
            id:2, 
            name:"Rimmu",
            age:20
        },
        {
            id:3, 
            name:"Prisha",
            age:0
        }
    ]
  return (
    <div>{users.map((user)=>(
      <div key={user.id}>
        <h1>Name:{user.name}</h1>
        <h1>Age: {user.age}</h1>
      
      </div>
    )

    )}</div>
  )
}

export default UserList