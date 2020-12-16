import React, {useState} from 'react';
import styles from './index.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Text from '../Text/Text'
import {signupAction} from "../../actions/user/user"
import {connect} from "react-redux";

function isCorrectEmail(email) {
  return email.length >= 5
}

function isCorrectName(name) {
    return name.length >= 5
  }

function isCorrectPassword(password) {
  return password.length >= 5
}

function Signup(props) {
    const [user_data, setUserData] = useState({
        email: '',
        password: '',
        name: '',
        emailError: false,
        passwordError: false,
        nameError: false,
        errorText: ''
    });

    const onSignUp = (event) => {
        event.preventDefault();
        if (!isCorrectName(user_data.name)) {
            setUserData({
                email: user_data.email,
                password: user_data.password,
                name: user_data.name,
                emailError: user_data.emailError,
                passwordError: user_data.passwordError,
                nameError: true,
                errorText: 'Name must be longer than 5 characters'
              });
          return
        }

        if (!isCorrectEmail(user_data.email)) {
            setUserData({
                email: user_data.email,
                password: user_data.password,
                name: user_data.name,
                emailError: true,
                passwordError: user_data.passwordError,
                nameError: user_data.nameError,
                errorText: 'Email must be longer than 5 characters'
              });
    
            return
        }
    
        if (!isCorrectPassword(user_data.password)) {
            setUserData({
                email: user_data.email,
                password: user_data.password,
                name: user_data.name,
                emailError: user_data.emailError,
                passwordError: true,
                nameError: user_data.nameError,
                errorText: 'Password must be longer than 5 characters'
              });

          return
        }
        props.signup({login: user_data.name, email: user_data.email}, user_data.password).then(() => {
          console.log('1');
          props.history.push('/');
        }).catch((error) => {
          setUserData({
            email: user_data.email,
            password: user_data.password,
            name: user_data.name,
            emailError: true,
            passwordError: user_data.passwordError,
            nameError: user_data.nameError,
            errorText: error.message
          });
        })
    };
    
    const onChangeEmail = (event) => {
        setUserData({
            email: event.target.value,
            password: user_data.password,
            name: user_data.name,
            emailError: false,
            passwordError: false,
            nameError: false,
            errorText: false
          });
    };
    
    const onChangePassword = (event) => {
        setUserData({
            email: user_data.email,
            password: event.target.value,
            name: user_data.name,
            emailError: false,
            passwordError: false,
            nameError: false,
            errorText: false
          });
    };
    
    const onChangeName= (event) => {
        setUserData({
            email: user_data.email,
            password: user_data.password,
            name: event.target.value,
            emailError: false,
            passwordError: false,
            nameError: false,
            errorText: false
          });
    };
    
      
    const onToLogin = (event) => {
        event.preventDefault();
    
        props.history.push('/login');
    }
    if (props.loading) {
      return <h1>LOADING...</h1>
    } else {
      return (
        <div className = {styles.mainFrame}>
          <Text textStyle={0} color_name={"blue"}>#TORELAX</Text>
          <form className={styles.wrapper}>
              <div className={styles.brow}>
                  <div></div>
                  <Text textStyle={1} color_name={"blue"}>Sign Up</Text>
                  <Button buttonStyle={1} onClick = {onToLogin}>Login</Button>
              </div>
              <div className={styles.inputs}>
                <Input placeholder="Name" onChange={onChangeName} value={user_data.name} error={user_data.nameError}/>
                <Input type="email" placeholder="Email" onChange={onChangeEmail} value={user_data.email} error={user_data.emailError}/>
                <Input type="password" placeholder="Password" onChange={onChangePassword} value={user_data.password} error={user_data.passwordError}/>
              </div>
              <div className={styles.buttons}>
                <Button onClick={onSignUp} buttonStyle={0} inversed={true}>Sign Up</Button>
              </div>
              <p className={styles.error}>{user_data.errorText}</p>
          </form>
          <div></div>
        </div>  
      )
    }
}

const mapStateToProps = (state) => {
  return {
    loading: state.isFetching,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (...args) => dispatch(signupAction(...args))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
