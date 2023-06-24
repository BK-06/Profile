import SignUp from "./SignUp"
import Profile from "./Profile"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="" Component={SignUp} />
                <Route exact path="login" Component={SignUp} />
                <Route exact path="profile" Component={Profile} />
            </Routes>
        </Router>
    )
}