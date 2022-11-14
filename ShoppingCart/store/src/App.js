import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //contains bootstrap stylesheets

import StoreNavBar from './components/navbar';
import Store from './pages/Store';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailure from './pages/PaymentFailure';
import {BrowserRouter, Routes, Route} from "react-router-dom";





function App() {
  return (
    <div className = "vw-100 vh-100 storepage-bgimage" >
      <StoreNavBar></StoreNavBar>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store/>}/> 
          <Route path ="success" element={<PaymentSuccess/>}/>
          <Route path ="failure" element={<PaymentFailure/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
