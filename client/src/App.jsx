import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Members from "./pages/members/Members";
import EditMember from "./pages/members/EditMember";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:id" element={<EditMember />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// add initial details and fix

export default App;
