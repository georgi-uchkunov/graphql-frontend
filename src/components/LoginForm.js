import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions';

const RegisterForm = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatchLogin = () => {
        dispatch(login({
            email,
            password,
        }));
    }

    return <form className = "form bg-primary">
        <div className="form-group text-white">
            <label htmlFor="login-email">Email</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setEmail(e.target.value)}
                id="login-email"
                placeholder="Insert email here"/>
        </div>
        <div className="form-group text-white">
            <label htmlFor="login-password">Password</label>
            <input 
                type="password" 
                className="form-control" 
                onChange={e => setPassword(e.target.value)}
                id="login-password" 
                placeholder="Insert password here"/>
        </div>
        <button type="button" className="btn btn-success mb-2 ml-2" onClick={dispatchLogin}>Sign In</button>
    </form>
}

export default RegisterForm;