import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Forms/Sign In/SignIn";
import SignUp from "./Components/Forms/SignUp/SignUp";
import Wrapper from "./Wrapper/Wrapper";
import { useCookies } from "react-cookie";


export const ContextValue = createContext();


const App = () => {
  const [theme, setTheme] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies] = useCookies(["token"]);
  const changeTheme = () => {
    setTheme(!theme);
  };
  useEffect(() => {
     // Check if a token is present in cookies
     if (cookies.token) {
      setIsAuthenticated(true);
     }
  }, []);
  return (
    <ContextValue.Provider value={{ theme, changeTheme,isAuthenticated }} >
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ContextValue.Provider>
  );
};

export default App;
