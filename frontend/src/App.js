
import './App.css';
import Contact from './Contact';
import Navigationbar from './Navigationbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import DestinationInfo from './DestinationInfo';
import CreatePackage from "./CRUD/CreatePackage";
import ReadAllPackages from './CRUD/ReadAllPackages';


function App() {
  return (
    <>
    <Navigationbar />
      
      
      <Routes>
        {/*<Route path="/" element={<Home />} ></Route>*/}
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/packages" element={<DestinationInfo/>} ></Route>
        <Route path="/createPackage" element={ <CreatePackage />}/>
        <Route path="/readAll" element={<ReadAllPackages/>} />
   
      </Routes>
      <Footer />
    </>
  );
}

export default App;
