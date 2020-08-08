import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import qs from 'qs';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    const paramObj = qs.parse(window.location.search.substring(1), {});
  return (
        <Router>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/"><img alt="" src="https://avatars3.githubusercontent.com/u/2393489?s=200&v=4" width="40" height="40"/> My React Application</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/features" className="nav-link">Features</Link>
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                </Nav>
            </Navbar>
            <div className="full">
                <Switch>
                    <Route path="/features">
                        <h1>Features</h1>
                    </Route>
                    <Route path="/pricing">
                        <h1>Pricing</h1>
                    </Route>
                    <Route path="/">
                        <h1>Home</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
