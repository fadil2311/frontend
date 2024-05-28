import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Employees from "./pages/Employees";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Login />} />
          <Route path="/dashboard" element = {<Dashboard />} />
          <Route path="/users" element = {<Users />} />
          <Route path="/employees" element = {<Employees />} />
          <Route path="/user/add" element = {<AddUser />} />
          <Route path="/user/edit/:id" element = {<EditUser />} />
          <Route path="/employee/add" element = {<AddEmployee />} />
          <Route path="/employee/edit/:id" element = {<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;