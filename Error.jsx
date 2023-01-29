import * as React from 'react';
import './Error.css';

function Error() {
  return (
    // <div className="error">
    //   <h1 style={{ color: 'black', padding: '10px' }}>
    //     Error during login, sign out and try again!
    //   </h1>
    // </div>
    <div class="wrapper">
  <div class="box">
  <h1>500</h1>
  <p>Error during login</p>
  <p>&#58;&#40;</p>
  <p><a href="/">Sign out and try again!</a></p>
  </div>
  </div>
  );
}

export default Error;
