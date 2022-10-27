import React, { useState } from 'react';
import RouteRedirect from './Components/RouteRedirect';

const App = () => {

  const [appName, setAppName] = useState("Login with Facebook and Google using ReactJS and RESTful APIs");

  return (
    <>
      <div>
        <RouteRedirect name={appName} />
      </div>
    </>
  )
}
export default App;