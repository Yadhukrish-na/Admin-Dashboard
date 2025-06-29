
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Sidebar from "./Admin/Components/Sidebar/Sidebar";
import Navbar from "./Admin/Components/Navbar/Navbar";
import Home from "./Admin/Pages/Home /Home";
import Payment from "./Admin/Pages/PaymentStatus/Payment";
import StoryUploader from "./Admin/Pages/Story/StoryUploader";
import UserDetail from "./Admin/Pages/components/UserDetails";
import UserStatusTable from "./Admin/Pages/components/UserStatusTable";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Sidebar" element={<Sidebar/>}></Route>
    <Route path="/Navbar" element={<Navbar/>}></Route>
    <Route path="/Pay" element={<Payment/>}></Route>
    <Route path="/Status" element={<StoryUploader/>}></Route>
    <Route path="/User" element={<UserDetail/>}></Route>
    <Route path="/Status" element={<StoryUploader/>}></Route>
    <Route path="/Table" element={<UserStatusTable/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
