import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Welcome';
import Home from './Home';

const RouteRedirect = (props) => {
    const title = props.name;
    return (
        <div>
            <p>{title}</p>
            <div>
                <BrowserRouter >
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>

        </div>
    )
}
export default RouteRedirect;