import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><img alt="" src="https://avatars3.githubusercontent.com/u/2393489?s=200&v=4" weign="40" height="40"/> My React Application</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/features">Features</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/features">
                    <div className="full">
                        <h1>Features</h1>
                    </div>
                </Route>
                <Route path="/pricing">
                    <div className="full">
                        <h1>Pricing</h1>
                    </div>
                </Route>
                <Route path="/">
                    <div className="full">
                        <h1>Home</h1>
                    </div>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
