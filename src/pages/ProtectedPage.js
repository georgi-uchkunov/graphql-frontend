import React from 'react';
import {useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
const ProtectedPage = () => {


    const userLoaded = useSelector(state => state.userLoaded);
    const currentUser = useSelector(state => state.currentUser);
    return <>
        {userLoaded && !currentUser._id ? (
              <Redirect to={{pathname: "/"}} />
            ) : (
            <div className="row text-white">
            You should see this content only as a logged in user
        </div>
        )}
    </>
}

export default ProtectedPage;