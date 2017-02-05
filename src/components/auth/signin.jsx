import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'

class Signin extends Component {
    handleSubmitSignin ({ email, password }) {
        this.props.signinUser({ email, password });
    }
    
    renderAlert () {
        if (this.props.errorMessage) {
            return (
                <div className='alert alert-danger'> 
                    <strong>{this.props.errorMessage}</strong>
                </div>
            );
        }
    }

    render () {
        const {handleSubmit, fields : { email, password }} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmitSignin.bind(this))} className="form-centered-300">
                <fieldset className="form-group">
                    <label>ელფოსტა:</label>
                    <input {...email} className='form-control' type='email' />
                </fieldset>
                <fieldset className="form-group">
                    <label>პაროლი:</label>
                    <input {...password} className='form-control' type='password' />
                </fieldset>
                <br />
                {this.renderAlert()}
                <button action='submit' className='btn btn-primary'>შესვლა</button>
            </form> 
        );
    }
};


function mapPropsToState (state) {
    return  {errorMessage : state.auth.error};
}
const reduxFormOptions = {
    form : 'signin',
    fields : ['email', 'password'],
    /*validate (formProps) {
        console.log("SIGNIN", formProps);
    }*/
};

export default reduxForm(reduxFormOptions, mapPropsToState, actions)(Signin);