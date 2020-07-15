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
                <Navbar.Brand href="/">My React Application</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/features">Features</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/features">
                    <div>
                        <h1>Features</h1>
                    </div>
                </Route>
                <Route path="/pricing">
                    <div>
                        <h1>Pricing</h1>
                    </div>
                </Route>
                <Route path="/">
                    <div>
                        <h1>Home</h1>
                    </div>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
