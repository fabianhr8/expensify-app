import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expensify</h1>
        <p>Get your expenses under control</p>
        <button className='button' onClick={startGoogleLogin}>Log in with Google</button>
        <button className='button' onClick={startFacebookLogin}>Log in with FB</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage) ;
