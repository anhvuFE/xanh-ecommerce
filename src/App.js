import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Listing from "./Pages/Listing";

const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);
  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };
  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
        </Routes>
        <Footer />
        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
