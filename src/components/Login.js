import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import styled from 'styled-components';



// * [x] In `Login.js`, build all UI and state functionality needed to capture a username and password. 
//       On a successful login, redirect user to the `View.js` component.

// * [x] **Make sure that the input for your username and password includes the id="username" and id="password" attributes. Codegrade autotests will fail without them.**
// * [x] **Make sure that the submit button to your login form includes the id="submit" attribute.  Codegrade autotests will fail without them.**

// * [x] In `Login.js`, add a p tag that will display an error if one occurs. Add in all state functionality needed to support error display.
// * [x] **Make sure your error p tag has an id="error" attribute attached. Codegrade autotests will fail without them.**

// * [x] Construct an http request that retrieves an auth token from the server when the username `Lambda` and the password `School` is passed into the request. Complete successful login auth flow and redirect to `View.js.`
// * [x] Display an appropriate error message when login is not successful.




const Login = (props) => {


    const [login, setLogin] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState('')
    // console.log(error)


    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", login)
            .then((res) => {
                // console.log('RES =', res)
                localStorage.setItem("token", res.data.token);
                props.history.push('/view');
            })
            .catch((err) => {
                // console.log(err.response.data.error);
                setError(err.response.data.error)
            });
    };


    return (
        <ComponentContainer>
            <ModalContainer>
                <h1>Welcome to Blogger Pro</h1>
                <h2>Please enter your account information.</h2>


                <form onSubmit={handleLogin}>

                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={login.username}
                        onChange={handleChange}
                    />

                    <input
                        id="password"
                        type="text"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                    />
                    <button id="submit">SUBMIT</button>

                </form>

                <p id="error">{error}</p>

            </ModalContainer>
        </ComponentContainer>
    );
}

export default Login;




//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.









const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
