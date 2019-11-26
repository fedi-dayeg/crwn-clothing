import React from 'react';
import './sign-in.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        //console.log(event);
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:''});
        }catch (e) {
            console.log('Error', e)

        }
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});

    };

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Sign in with you email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        handleChange={this.handleChange}
                        value={this.state.email} required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        handleChange={this.handleChange}
                        value={this.state.password} required
                    />

                    <div className='buttons'>

                    <CustomButton type='submit' >
                            Sign In
                    </CustomButton>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google {''}
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;