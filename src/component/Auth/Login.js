import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import firebase from '../../firebase';

// import firebase from 'firebase/app';
class Login extends React.Component {
    state = {
        email: "",
        password: "",
        errors: []
    };

    saveUser = createdUser => {
        return this.state.usersRef.child(createdUser.user.uid).set(
            {name: createdUser.user.displayName,
            avatar: createdUser.user.photoURL}
        );
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handSubmit = event => {
        event.preventDefault();
        //  if (this.isFormValid(this.state)) {
             this.setState({ errors : [], loading: true});
             firebase
             .auth()
             .signInWithEmailAndPassword(this.state.email, this.state.password)
             .then(signeInUser => {
                 console.log(signeInUser);
             })
             .catch(err => {
                 console.error(err);
                 this.setState({
                     errors: this.state.errors.concat(err),
                     loading: false
                 });
             });
        //  }
    
        
    };

    // isFormValid = ({email, password}) => email && password;
    render() {
        const {  email, password, } = this.state;
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWith: 450 }}>
                    <Header as="h1" icon color="violet" textAlign="center">
                        <Icon name="code branch" color="violet" />
                        Login to DevChat
                    </Header>
                    <Form onSubmit={this.handSubmit} size="large">
                        <Segment stacked>

                            <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" onChange={
                                this.handleChange} value={email} type="email" />

                            <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" onChange={
                                this.handleChange} value={password} type="password" />


                            <Button color="violet" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    {/* {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}

                        </Message>
                    )} */}
                    <Message>Done not have accout? <Link to="/register">Register</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}
export default Login;