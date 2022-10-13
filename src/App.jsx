import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar";

import FoodOutlet from "./Pages/FoodOutlet";
import Addoutlet from "./Pages/Addoutlet";
import Addfood from "./Pages/Addfood";
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from "./Pages/Foods";



class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar />
                    <div className="content" style={{ "marginTop": 70 }}>
                        <Routes>
                            <Route exact path="/" element={<Foods />} />
                            <Route exact path="/FoodOutlet" element={<FoodOutlet />} />
                            <Route exact path="/Addoutlet" element={<Addoutlet />} />
                            <Route exact path="/Addfood" element={<Addfood />} />
                            <Route exact path="/Updatefood" element={<Addfood />} />
                            <Route exact path="/foods" element={<Foods />} />

                        </Routes>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;