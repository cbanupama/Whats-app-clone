import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
       <Login></Login>
      ) : (
 <div className="app__body">
 <Router>
     <Sidebar/>
   <Switch>
     <Route path="/rooms/:roomId">
        <Chat />
     </Route>
     <Route path="/">
         <Chat />
     </Route>
   </Switch>
   </Router>

</div>
      )}
    
    </div>
  );
}

export default App;
