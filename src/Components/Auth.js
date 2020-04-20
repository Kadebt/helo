import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password: '',
        }
 
    }
    handleInput = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }

      handleLogin = () => {
        const body = {
          email: this.state.email,
          password: this.state.password,
        }
    
        axios
          .post('/auth/login', body)
          .then((res) => {
            this.props.history.push('/dashboard')
          })
          .catch((err) => {
            alert('Could not log in')
          })
      }

      handleRegister = () => {
        const body = {
          email: this.state.email,
          password: this.state.password,
        }
    
        axios
          .post('/auth/register', body)
          .then((res) => {
            this.props.history.push('/dashboard')
          })
          .catch((err) => alert('Could not register'))
      }

    render() {
        return(
            <div>
            <input
            maxLength="100"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              this.handleInput(e)
            }}
          />
          <input
                type="password"
                maxLength="20"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  this.handleInput(e)
                }}
              />

            <button
              onClick={() => {
                this.handleLogin()
              }}
            >
              Log in
            </button>

            <button
              onClick={() => {
                this.handleRegister()
              }}
            >
              Register
            </button>
              </div>
        )
    }
}
export default Auth