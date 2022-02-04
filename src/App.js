import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home';
import Items from './component/Items';
import Addcarditempage from './component/Addcarditempage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/items/:slug" component={Items} />
        <Route path="/addcard_item" component={Addcarditempage} />
      </BrowserRouter>
    </>
  );
}

export default App;



