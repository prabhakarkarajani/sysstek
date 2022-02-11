import React from 'react';
import { history } from "./helpers";
import pageNotFound from './assets/page_not_found.svg';
const Page404 = ({children}) => {
  return(<div id="notfound">
  <div className="notfound">
  <div className="notfound-404">
  <img src={pageNotFound} alt="page not found"/>
  </div>
  <h2>Oops! Page Not Be Found</h2>
  <p className="u-margin-bottom-small">Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
  <button className="btn btn--yellow" onClick={()=>{ history.push('/')}}>Go to homepage</button>
  </div>
  </div>)
}

export default Page404;
