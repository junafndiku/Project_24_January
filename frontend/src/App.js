

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
import ReadTours from './CRUD/ReadTours';
import ReadOne from "./CRUD/ReadOne";
import UpdateItem from "./CRUD/UpdateItem";


function App() {
  return (
    <div className="page-container">
    <Navigationbar />

    <div className="page-content">
      <Routes>
        {/*<Route path="/" element={<Home />} ></Route>*/}
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/packages" element={<DestinationInfo/>} />
        <Route path="/createPackage" element={ <CreatePackage />}/>
        <Route path="/readAll" element={<ReadAllPackages/>} />
        <Route path="/readTours" element={<ReadTours/>} />
        <Route path="/readOne/:id" element={<ReadOne />} />
          <Route path="/createPackage" element={<CreatePackage />} />
          <Route path="/update/:id" element={<UpdateItem />} />

      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

