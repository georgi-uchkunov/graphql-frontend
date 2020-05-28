import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/actions';

const RegisterForm = () => {

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatchAddUser = () => {
        dispatch(addUser({
            firstName,
            lastName,
            email,
            userType: 'regular',
            password,
        }));
    }

    return <form>
        <div className="form-group text-white">
            <label htmlFor="first-name">First name</label>
            <input type="text"
                className="form-control"
                onChange={e => setFirstName(e.target.value)}
                id="first-name" 
                placeholder="Insert your first name here"/>
        </div>
            <div className="form-group text-white">
            <label htmlFor="last-name">Last name</label>
            <input 
                type="text"
                onChange={e => setLastName(e.target.value)}
                className="form-control" 
                id="last-name" 
                placeholder="Insert your last name here"/>
        </div>
        <div className="form-group text-white">
            <label htmlFor="register-email">Email</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setEmail(e.target.value)}
                id="register-email"
                placeholder="Insert your email here"/>
        </div>
        <div className="form-group text-white">
            <label htmlFor="register-password">Password</label>
            <input 
                type="password" 
                className="form-control" 
                onChange={e => setPassword(e.target.value)}
                id="register-password" 
                placeholder="Insert your pasword here"/>
        </div>
        <button type="button" className="btn btn-success mb-2 ml-2" onClick={dispatchAddUser}>Register!</button>
    </form>
}

export default RegisterForm;