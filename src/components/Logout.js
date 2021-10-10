import React, { useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import { useHistory } from 'react-router';





const Logout = (props) => {

    const history = useHistory()

    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(res => {
                // console.log(res)
                localStorage.removeItem("token");
                history.push('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div>
            <p>You have been logged out.</p>
        </div>
    );
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.