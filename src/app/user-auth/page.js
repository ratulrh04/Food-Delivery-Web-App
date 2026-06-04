import React from 'react';
import CustomerHeader from '../_components/CustomerHeader';
import RestuarantFooter from '../_components/RestuarentFooter';
import UserSingUp from '../_components/UserSingUp';

const UserAuth = () => {
    return (
        <div>
            <CustomerHeader/>
             <div className='container'>
                 <h1>user auth</h1>
                <UserSingUp/>
             </div> 
            <RestuarantFooter/>
        </div>
    );
};

export default UserAuth;