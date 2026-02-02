import './App.css';
import Contact from './Contact';
import Navigationbar from './Navigationbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import About from './About';
import DestinationInfo from './DestinationInfo';
import CreatePackage from "./CRUD/CreatePackage";
import ReadAllPackages from './CRUD/ReadAllPackages';
import ReadTours from './CRUD/ReadTours';
import UpdateItem from "./CRUD/UpdateItem";
import ProtectedRoute from "./Auth/ProtectedRoute";
import { UserContextProvider } from "./Auth/UserContext";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Reservation from './Reservation';
import SecondPart from './SecondPart';


function App() {
  return (
    <div className="page-container">
      <UserContextProvider>
    <Navigationbar />

    <div className="page-content">
      <Routes>
        <Route path="/" element={<SecondPart />} ></Route>
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/addContact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/packages" element={<DestinationInfo/>} />
        <Route path="/createPackage" element={ <ProtectedRoute><CreatePackage /></ProtectedRoute>}/>
        <Route path="/readAll" element={<ProtectedRoute><ReadAllPackages/></ProtectedRoute>} />
        <Route path="/readTours/:region" element={<ReadTours/>} />
          <Route path="/update/:id" element={<UpdateItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

      </Routes>
      </div>
      <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;

