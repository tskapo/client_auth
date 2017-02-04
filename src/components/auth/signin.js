import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'

class Signin extends Component {
    handleSubmitSignin ({ email, password }) {
        console.log("handleSubmitSignin", { email, password });
        this.props.signinUser({ email, password });
    }
    render () {
        const {handleSubmit, fields : { email, password }} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmitSignin.bind(this))} className="form-centered-300">
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} className='form-control' type='email' />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} className='form-control' type='password' />
                </fieldset>
                <br />
                <button action='submit' className='btn btn-primary'>Sign in</button>
            </form> 
        );
    }
};

const reduxFormOptions = {
    form : 'signin',
    fields : ['email', 'password']  
};

export default reduxForm(reduxFormOptions, null, actions)(Signin);