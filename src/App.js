import { BrowserRouter as
Router,
Routes,
Route } from "react-router-dom";
import Users from "./components/Users";
import EditUser from "./components/EditUser";

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Users />}/>
        <Route path='/crud-users' element={<Users />}/>
        <Route path='/edit/:id' element={<EditUser />}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;
