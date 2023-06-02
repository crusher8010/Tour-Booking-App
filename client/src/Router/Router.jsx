import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Tours from "../Pages/Tours";
import TourDetails from "../Pages/TourDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import SearchResultList from "../Pages/SearchResultList";
import ThankYou from "../Pages/ThankYou";
import About from "../components/About/About";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/tours" element={<Tours />}></Route>
            <Route path="/tours/:id" element={<TourDetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/tours/search" element={<SearchResultList />}></Route>
            <Route path="/thank-you" element={<ThankYou />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    )
}

export default Router;