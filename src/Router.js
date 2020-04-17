import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const routes = [
    {
        path: ""
    }
]

export default function RouteConfig() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link>
                        </Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
}