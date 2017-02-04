import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

debugger
class Signin extends Component {
    handleFormSubmit = ({ email, password }) => {
        console.log(email, password);
        this.props.signinUser({ email, password });
    }
    render () {
        const {handleSubmit, fields : { email, password }} = this.props;
        return (
            <form 
                className="w3-container w3-card w3-small w3-center w3-border-0 form-signin" 
                onSubmit={handleSubmit(this.handleFormSubmit)}
            >
                <fieldset className="w3-border-0">
                    <label className="w3-text-blue">ელფოსტა</label>
                    <input {...email} className='w3-input w3-border' type='text' />
                </fieldset>
                <fieldset className="w3-border-0">
                    <label className="w3-text-blue">პაროლი</label>
                    <input {...password} className='w3-input w3-border' type='text' />
                </fieldset>
                <br />
                <button action='submit' className='w3-btn w3-blue'>შესვლა</button>
            </form> 
        );
    }
};

const reduxFormOptions = {
    form : 'signin',
    fields : ['email', 'password']  
};

debugger
export default reduxForm(reduxFormOptions, null, actions)(Signin);