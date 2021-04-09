import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import 'semantic-ui-css/semantic.min.css';
import firebase from './firebase';
import Spinner from "./Spinner";
import { createStore } from 'redux';
import { Provider , connect} from 'react-redux';
import { composeWithDevTools, composewithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {setUser, clearUser} from './actions';


const store = createStore(rootReducer, composeWithDevTools());
class Root extends React.Component {

  componentDidMount() {
    console.log(this.props.isLoading);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.props.setUser(user);
        this.props.history.push("/");
      }else {
        this.props.history.push('/Login');
        this.props.clearUser();
      }
    })
  }
  render() {
    return this.props.isLoading? <Spinner /> : (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>

    );
  }
}
const mapStaterFromProps = state => ({
isLoading: state.user.isLoading
});

const RootwithAuth = withRouter(connect(mapStaterFromProps, {setUser ,clearUser}) (Root));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootwithAuth />
    </Router>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
