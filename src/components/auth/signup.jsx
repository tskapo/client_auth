// TODO : სარეგისტრაციო ფორმის ვალიდაცია არ მუშაობს, ობიექტი განუსაზღვრელია

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'

const form = 'signup";'
const fields = ['email', 'password', 'passwordConfirm'];

class Signup extends Component {
    render () {
        const {handleSubmit, fields : { email, password, passwordConfirm }} = this.props;
        return (
            <form className="form-centered-300">
                <fieldset className="form-group">
                    <label>ელფოსტა:</label>
                    <input {...email} className='form-control' type='email' />
                     {email.touched && email.error && <div className="error">{email.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>პაროლი:</label>
                    <input {...password} className='form-control' type='password' />
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>პაროლის დადასტურება:</label>
                    <input {...passwordConfirm} className='form-control' type='password' />
                    {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
                </fieldset>
                <br />
                <button action='submit' className='btn btn-primary'>რეგისტრაცია</button>
            </form> 
        );
    }
};

function validate_old(formProps = {}) {
    console.log('formProps', formProps)
    let errors = {};
    if (!formProps.email || formProps.email.length === 0) {
        errors.paasowrd = "გთხოვთ შემოიყვანოთ ელფოსტის მისამართი";
    } else if (!formProps.password || formProps.password.length < 6) {
        errors.paasowrd = "პაროლის სიგრძე უნდა იყოს არანაკლები 6 ასონიშანი";
    } else if (formProps.password !== formProps.passwordConfirm) {
        errors.passwordConfirm = "პაროლი და მისი დადასტურება ერთმანეთს არ ემთქვევა";
    }
    return errors;
}

function validate(formProps) {
    console.log("formProps : ", formProps);
    const errors = {};

    return errors;
}


export default reduxForm({ form, fields, validate })(Signup);