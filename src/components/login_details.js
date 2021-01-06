import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import "../App.css"
import List from './list'
import Form from './form'


class Logindetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            url: "",
            c: 0

        };
    }

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.name);
        this.setState({ name: response.profileObj.name });
        this.setState({ email: response.profileObj.email });
        this.setState({ url: response.profileObj.imageUrl });
        this.setState({ c: 1 });
        localStorage.setItem('c', JSON.stringify(response.c));
    }
    render() {
        if (this.state.c === 0) {
            return (
                <div className="container">
                    <div className="App-title">
                        <h2>Please Login</h2>
                        <GoogleLogin
                            clientId="1001884627595-u9nm0t20j3r0ijf0sfaa5on4nd13oc3p.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>

                </div>
            )
        }
        else {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="App-text">
                                <img src={this.state.url} alt={this.state.name} />
                                <h3>Name : {this.state.name}</h3>
                                <h5>Email : {this.state.email}</h5>
                            </div>
                        </div>

                        <div className="col-md-8 text-center text-light">
                            <h1>Welcome</h1>
                            <Form />
                            <hr />
                            <h1>Order List</h1>
                            <List />
                        </div>
                        <div className="col-md-1">

                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Logindetails;