import React ,{useRef,useEffect}from 'react'
import "./App.css"
const App = () => {

  const inputRef=useRef();

  useEffect(()=>{
    inputRef.current.focus()
  },[]);
  return (
    <div>
      <input ref={inputRef} placeholder="Auto Focus"/>
    </div>
  )
}

export default App
