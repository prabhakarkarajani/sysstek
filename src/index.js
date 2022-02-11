import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Switch,Route } from 'react-router-dom';
import { history } from "./helpers"
import './index.scss';
import App from './App';
import Page404 from './Page404'; 
import reportWebVitals from './reportWebVitals';

const Main = (props) => {
  return(
  <Router history={history}>
    <Switch>
      <Route path="/404" exact component={Page404} />
      <Route path="/" component={App} {...props}/>
    </Switch>
  </Router>
)};
ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

