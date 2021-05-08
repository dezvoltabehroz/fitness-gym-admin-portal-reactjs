import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api_base_url, requestOptions } from '../components/EducoGym/config'

class Login extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
         token: localStorage.getItem("token")
      }
   }

   componentDidMount = () => {
      const { token } = this.state;
      if (token != null)
         this.tokenRefresh("1")
   }

   submitHandler = () => {
      const { email, password } = this.state;
      if (email !== '' && password !== '') {
         let obj_body = {
            email: email,
            password: password
         }
         const options = {
            ...requestOptions,
            body: JSON.stringify(obj_body)
         };
         fetch(api_base_url + 'admin/loginAdmin', options)
            .then(response => response.json())
            .then((res) => {
               res.success == true ? this.tokenRefresh(res.data.id) : alert("Email/Password is not correct")
            })
            .catch((error) => { })
      }else{
         alert("Email/Password should not be null")
      }
   }

   tokenRefresh = (id) => {
      const options = {
         ...requestOptions,
         body: JSON.stringify({ id: id })
      };
      fetch(api_base_url + 'registration/refreshToken', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               localStorage.setItem("token", res.data.token);
               this.props.history.push("/booking");
            }
         })
         .catch((error) => {
            this.setState({ isLoading: false })
            // alert(error)
         })
   }

   render() {
      return (
         <div className="authincation">
            <div className="container p-0">
               <div className="row justify-content-center align-items-center authincation-page-area">
                  <div className="col-lg-6 col-md-9">
                     <div className="authincation-content">
                        <div className="row no-gutters">
                           <div className="col-xl-12">
                              <div className="auth-form">
                                 <h4 className="text-center mb-4">
                                    Sign in your account
                                 </h4>

                                 <div className="form-group">
                                    <label className="mb-1"> <strong>Email</strong> </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       onChange={(e) => this.setState({ email: e.target.value })}
                                       value={this.state.email}
                                    />
                                 </div>
                                 <div className="form-group">
                                    <label className="mb-1"> <strong>Password</strong> </label>
                                    <input
                                       type="password"
                                       className="form-control"
                                       onChange={(e) => this.setState({ password: e.target.value })}
                                       value={this.state.password}
                                    />
                                 </div>

                                 <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block" onClick={this.submitHandler}> Sign In</button>
                                 </div>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
};

export default Login;
