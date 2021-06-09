import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AccountDataService from '../../api/AccountDataService';

class NewAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountType: '',
            accountName: '',
            showNewAccountMessage: false,
            networkError: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }


    validate(values) {
        let errors = {};
        console.log('validate.values:', values);
        const letterNumber = /^[0-9a-zA-Z\-\s]+$/;
        this.setState({ showNewAccountMessage: false})
        
        if (!values.accountName) {
            errors.accountName = 'Account Name is empty'
        } else if (values.accountName===null || values.accountName.trim()==='') {
            errors.accountName = 'Account Name is empty'
        } else if (!(values.accountName.trim().match(letterNumber))) {
            errors.accountName = 'Only alphanumeric values are allowed'
        }
        console.log('validate.errors:', errors);
        return errors;
    }

    onSubmit = (values) => {
        console.log('onsubmit:', values);
        

        let newAccountInfo = {
            accountType: values.accountType,
            accountName: values.accountName
        }

        AccountDataService.createAccount(newAccountInfo)
            .then((response) => {
                this.setState({ showNewAccountMessage: true})
                this.setState({ networkError: false})
            })
            .catch(error => {
                console.log('Error in listAccount:', error);
                this.setState({ networkError: true})
            }                
            );

        console.log('onsubmit: newAccountInfo:', newAccountInfo);
    }

    render() {
        let { accountType, accountName } = this.state;

        return (
            <div className="container">
                <h1>Create a New Account</h1>
                <Formik
                initialValues={{ accountType, accountName }}
                    validate={this.validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={this.onSubmit}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="accountName" component="div" className="alert alert-danger" />
                                {this.state.showNewAccountMessage && <div className="alert alert-success">Account created</div>}
                                {this.state.networkError && <div className="alert alert-warning">Network error, Pl try again in some time.</div>}
                                <fieldset className="form-group">
                                    <label>Account Type</label>
                                    <Field className="form-control" type="text" name="accountType" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Account Name</label>
                                    <Field className="form-control" type="text" name="accountName" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Create New Account</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    }

}

export default NewAccount;