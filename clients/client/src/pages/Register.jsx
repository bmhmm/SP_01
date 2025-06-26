import React from 'react'
import {useRef} from 'react'
import axios from '../axiosConfig'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();

    const usernameDom = useRef(null);
    const firstnameDom = useRef(null);
    const lastnameDom = useRef(null);
    const emailDom = useRef(null);
    const passwordDom = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault(); 
    const usernameValue = usernameDom.current.value;
    const firstnameValue = firstnameDom.current.value;
    const lastnameValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if(
        !usernameValue || 
        !firstnameValue || 
        !lastnameValue || 
        !emailValue || 
        !passValue
    ) {
        alert('Please provide all required information');
        return; 
    }

        try {
            await axios.post('/users/register', {
                username: usernameValue,
                firstname: firstnameValue,
                lastname: lastnameValue,
                email: emailValue,
                password: passValue
            });
            alert('Registration successful, please login');
            navigate('/login');
        } catch (error) {
            alert('something went wrong')
            console.log(error.response)
        }
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
           <div>
              <span> username :---</span>
              <input ref={usernameDom} type="text" placeholder="username"/>
          </div>
          <br />
          <div>
              <span> firstname :---</span>
              <input ref={firstnameDom} type="text" placeholder="firstname"/>
          </div>
          <br />
          <div>
              <span> lastname :---</span>
              <input ref={lastnameDom} type="text" placeholder="lastname"/>
          </div>
          <br />
          <div>
              <span> email :---</span>
              <input ref={emailDom} type="email" placeholder="email"/>
          </div>
          <br />
          <div>
              <span> password :---</span>
              <input ref={passwordDom} type="passwprd" placeholder="password"/>
          </div>
          <button type="submit">Register</button>

        </form>
    </section>
  )
}

export default Register
