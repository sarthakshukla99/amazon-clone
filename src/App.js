import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import {useStateValue} from './StateProvider'


function App() {

    // const [{user}, dispatch] = useStateValue();

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
    //         if(authUser){
    //             //user is loggedin
    //             dispatch({
    //                 type: 'SET_USER',
    //                 user: authUser
    //             })
    //         }
    //         else{
    //             //user is logged out
    //             dispatch({
    //                 type: 'SET_USER',
    //                 user: authUser
    //             })
    //         }
    //     });

    //     return () => {
    //         // any cleanup op go in here...
    //         unsubscribe()
    //     }

    // },[])

    // console.log(user)

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route
                        path="/checkout"
                        element={
                            <>
                                <Header />
                                <Checkout />
                            </>
                        }
                    />

                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
