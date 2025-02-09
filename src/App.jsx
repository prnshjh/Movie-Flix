const ValidPassword=()=><h1>Valid Password</h1>;
const InvalidPassword=()=><h2>Invalid passowrd</h2>;

const Password=({isValid})=>{
  return isValid? <ValidPassword/>:<InvalidPassword/>
};

const App = () => {
  return (
    <div>
      <Password isValid={false}/>
    </div>
  )
}

export default App