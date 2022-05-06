import React,{useRef} from 'react'
import Button from './Button'

const ImperativeaHandle = () => {
    const buttonRef = useRef(null) 
    const handleRef = ()=>{
        buttonRef.current.alterToggle();
    }
  return (
    <div>
        <button onClick={handleRef}>Button from parent</button>
        <Button ref={buttonRef}/>
    </div>
  )
}

export default ImperativeaHandle