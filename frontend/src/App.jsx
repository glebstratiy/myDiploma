import "./App.css";
import About from "./components/About/About";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import Contacts from "./components/Contacts/Contacts";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services/Services";
import DoctorPage from "./components/Doctors/DoctorPage/DoctorPage";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/account" Component={Profile} />
      <Route path="/about" Component={About} /> 
      <Route path="/appointment" Component={AppointmentForm} />
      <Route path="/registration" Component={Registration} />
      <Route path="/login" Component={Login} />
      <Route path="/contacts" Component={Contacts} /> 
      <Route path="/doctors" Component={Doctors} /> 
      <Route path="/doctors/:id" Component={DoctorPage} /> 
      <Route path="/services" Component={Services} /> 
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;