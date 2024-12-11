import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Register from "./Components/Register";
import Login from "./Components/Login";
import DashBoard from "./Components/Dasboard";
import Logout from "./Components/Logout";
const App = () => {
  const [data, setData] = useState();
  return (
    <div>
      {JSON.stringify(data)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/register" element={<Register regData={setData} />} />
            <Route path="/login" element={<Login regLogin={data} />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard regDash={data} />} />
          <Route path="/logout" element={<Logout regLog={setData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;