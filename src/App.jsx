import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar />
                    <div className="content" style={{ "marginTop": 70 }}>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/contact" element={<Contact />} />
                            <Route exact path="/home" element={<Home />} />
                        </Routes>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;