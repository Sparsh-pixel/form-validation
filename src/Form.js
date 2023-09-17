import React, { useEffect, useState } from 'react'

function Form() {
    // to store the data
    const data = {
        name: "",
        email:"",
        password: "",
    };

    const [inputData , setInputData] = useState(data);
    // this will show success messages for the user
    const [flag , setflag] = useState(false);
    // to re-render the component
    useEffect (() => {
        console.log("registered")
    },[flag])

    //  to handle the data
    function handleData (e) {
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password){
            alert("all fields mandatory");
        }
        else {
            setflag(true);
        }
        
        
    }


  return (
    <>
    {/* pre is preformatted text with the fixed width font  */}
    <pre>{(flag) ? <h2>hello {inputData.name} , You have successfully registered</h2>: ""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='Header'>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type='text' 
            placeholder='Enter Your Name' 
            name='name'
            value={inputData.name}
            onChange={handleData}
                        
            />
        </div>
        <div>
            <input type='email' 
            placeholder='Enter Your Email Address' 
            name='email'
            value={inputData.email}
            onChange={handleData}
            
            />
        </div>
        <div>
            <input type='password'  
            placeholder='Enter Your Password'  
            name='password'
            value={inputData.password}
            onChange={handleData}
            
            />
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default Form;