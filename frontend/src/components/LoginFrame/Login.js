import React, {useState} from 'react';
import styles from './index.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Text from '../Text/Text'
import {loginAction} from "../../actions/user/user"
import {connect} from "react-redux";


function isCorrectEmail(email) {
  return email.length >= 5
}

function isCorrectPassword(password) {
  return password.length >= 5
}

function Login(props) {
    const [user_data, setUserData] = useState({
        email: '',
        password: '',
        emailError: false,
        passwordError: false,
        errorText: ''
    });

    const onLogin = (event) => {
        event.preventDefault();
        if (!isCorrectEmail(user_data.email)) {
            setUserData({
                email: user_data.email,
                password: user_data.password,
                emailError: true,
                passwordError: user_data.passwordError,
                errorText: 'Email must be longer than 5 characters'
              });
    
            return
        }
    
        if (!isCorrectPassword(user_data.password)) {
            setUserData({
                email: user_data.email,
                password: user_data.password,
                emailError: user_data.emailError,
                passwordError: true,
                errorText: 'Password must be longer than 5 characters'
              });

          return
        }

        props.login(user_data.email, user_data.password).then(() => {
          console.log('1');
          props.history.push('/');
        }).catch((error) => {
          setUserData({
            email: user_data.email,
            password: user_data.password,
            emailError: true,
            passwordError: true,
            errorText: error.message
          });
        })
    };
    
    const onChangeEmail = (event) => {
        setUserData({
            email: event.target.value,
            password: user_data.password,
            emailError: false,
            passwordError: false,
            errorText: false
          });
    };
    
    const onChangePassword = (event) => {
        setUserData({
            email: user_data.email,
            password: event.target.value,
            emailError: false,
            passwordError: false,
            errorText: false
          });
    };
    
      
    const onToSignUp = (event) => {
      event.preventDefault();
  
      props.history.push('/signup');
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
                  <Text textStyle={1} color_name={"blue"}>Login</Text>
                  <Button buttonStyle={1} onClick = {onToSignUp}>SignUp</Button>
              </div>
              <div className={styles.inputs}>
                <Input type="email" placeholder="Email" onChange={onChangeEmail} value={user_data.email} error={user_data.emailError}/>
                <Input type="password" placeholder="Password" onChange={onChangePassword} value={user_data.password} error={user_data.passwordError}/>
              </div>
              <div className={styles.buttons}>
                <Button onClick={onLogin} buttonStyle={0} inversed={true}>Login</Button>
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
    error: state.error,
    loading: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (...args) => dispatch(loginAction(...args))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
