import {getToken} from "./Utility/TokenHelper.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.jsx";
import CardList from "./components/CardList.jsx";
import UserLoginPage from "./pages/UserLoginPage.jsx";
import OtpPage from "./pages/OtpPage.jsx";


const App = () => {
    if(getToken){
        return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path= "/" element={<ProductListPage/>}/>
                        <Route path= "/cart" element={<CardList/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }else {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path= "/" element={<ProductListPage/>} />
                        <Route path= "/login" element= {<UserLoginPage/>} />
                        <Route path= "/otp" element={<OtpPage/>} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
};

export default App;