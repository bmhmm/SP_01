import React from 'react'
import {useRef} from 'react'
import axios from '../axiosConfig'
import { useNavigate } from 'react-router-dom'



function Login() {

  const navigate = useNavigate();

    const emailDom = useRef(null);
    const passwordDom = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault(); 
 
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if( !emailValue ||   !passValue ) {
        alert('Please provide all required information');
        return; 
    }

        try {
           const {data} = await axios.post('/users/login', {
               
                email: emailValue,
                password: passValue
            });
            alert('login successful');
            localStorage.setItem('token', data.token);
            // localStorage.setItem('user', JSON.stringify(data.user));

            // console.log(data)
            navigate('/');
        } catch (error) {
            alert(error?.response?.data?.msg)
            console.log(error.response)
        }
    }

  return (
    <section>
        <form onSubmit={handleSubmit}>
           
          <div>
              <span> email :---</span>
              <input ref={emailDom} type="email" placeholder="email"/>
          </div>
          <br />
          <div>
              <span> password :---</span>
              <input ref={passwordDom} type="passwprd" placeholder="password"/>
          </div>
          <button type="submit">Login</button>

        </form>
    </section>
  )
}

export default Login
