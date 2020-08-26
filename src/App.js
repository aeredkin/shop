import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Authorization from './Authorization'
import Sidebar from './Sidebar';
import Terminals from './Terminals';
import Buyers from './Buyers';
import Buyer from './Buyer';
import Other from './Other';

function App() {
  const [img, setImg] = useState(null);
  return (
    <div className="App">
      {img === null ? (<Authorization imgUrl={u => setImg(u)} />) :
        (
          <BrowserRouter>
            <Sidebar img={img} />
            <Switch>
              <Route exact path='/terminals' component={Terminals} />
              <Route exact path='/buyers' component={Buyers} />
              <Route exact path='/buyers/:id' component={Buyer} />
              <Route path='/' component={Other} />
            </Switch>
          </BrowserRouter>
        )
      }
    </div>
  );
}

export default App;
