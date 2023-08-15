import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Forms/Sign In/SignIn";
import SignUp from "./Components/Forms/SignUp/SignUp";
import Wrapper from "./Wrapper/Wrapper";


export const ContextValue = createContext();


const App = () => {
  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <ContextValue.Provider value={{ theme, changeTheme }} >
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
