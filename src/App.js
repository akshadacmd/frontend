import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";
import Birthday from "./Pages/auth/birthday";
import ForgetPassword from "./Pages/auth/forgetpassword";
import Home from "./Pages/auth/Home";



function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/"element={<Login/>}/>
   <Route path="/register" element={<Register />} />
   <Route path="/birthday" element={<Birthday />} />
  <Route path="/forgetpassword" element={<ForgetPassword />} />
  <Route path="/Home"element={<Home/>}/>
    </Routes>
    </BrowserRouter>
   
   
  );
}
 
export default App;