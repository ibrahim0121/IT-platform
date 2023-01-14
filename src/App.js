import './App.scss';
import LayOut from "./components/layOut/LayOut";
import Log_in from "./components/header/log_in/Log_in";
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="log_in" element={<Log_in/>}/>
            </Routes>
            <Footer/>

        </>
    );
}

export default App;
