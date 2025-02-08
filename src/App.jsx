import React from 'react'

const App = () => {

  return <User
  img="https://picsum.photos/id/237/200/300"
  name="Priyanshu Jha"
  age={22}
  isMarraid={false}
  hobbies={["Coding", "Reading", "Singing"]}
  />
};

const User =(props)=>{
return(
  <section>
    <img src="https://picsum.photos/id/237/200/300" alt="picture" />
    <h1>Name: {props.name}</h1>
    <h1>Age: {props.age}</h1>
    <h1>isMarraid: {props.isMarraid}</h1>
    <h1>Hobbies: {props.hobbies}</h1>
  </section>
)
}

export default App