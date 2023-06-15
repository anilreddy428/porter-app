import './App.css';
import SignUp from './components/signup';
import LogIn from './components/login';
import PorterPort from './components/porterApp';
import Conditions from './components/conditions';
import { ToastContainer} from 'react-toastify';

// import "swiper/css/bundle";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserDetails from './components/Userdetails';

import BottomSlide from './components/slidebottom';
import FilterDetails from './components/filter';

//login for protected routes
const ProtectedRoute =(props) =>{ 
  const token = localStorage.getItem("EcommerAuthToken");
  const hasLoggedIn = token !== "";
  if(hasLoggedIn) return props.children;
  return <Navigate to="/login"/>
}
//login for unprotected routes
const UnProtectedRoute =(props) =>{ 
  const token = localStorage.getItem("EcommerAuthToken");
  const hasLoggedIn = token !== "";
  if (hasLoggedIn) return props.children;
  return <Navigate to="/Productfeed" />
 }

function App() {
  
  
  return (
    <div className="App">
       <ToastContainer 
     position="top-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
    />
    
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<SignUp/>}/>
            <Route path="/" element={ <PorterPort />}/>   
            <Route path="/conditions" element={<Conditions/>}/>
            <Route path="/Userdetails" element={<UserDetails />}/>
            <Route path="/filter" element={<FilterDetails />}/>
            <Route path="/login" element={
        <UnProtectedRoute>
          <LogIn />
          </UnProtectedRoute>
      }/>
      <Route path="/signup" element={
        <UnProtectedRoute>
          <SignUp />
        </UnProtectedRoute>
      }/>
      <Route path="/referal/:referalid" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;