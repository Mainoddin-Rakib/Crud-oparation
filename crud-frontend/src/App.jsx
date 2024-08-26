import { Route, Routes } from "react-router-dom";
import Deshboard from "./components/Deshboard";
import Header from "./components/Header";
import PostUser from "./components/PostUser";
import Nomatch from './components/Nomatch';
import UpdateUser from './components/UpdateUser';
import './App.css'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/deshboar" element={<Deshboard />} />
        <Route path="/postuser" element={<PostUser />} />
        <Route path="/nomatch" element={<Nomatch />} />
        <Route path="/user/:id" element={<UpdateUser />} />
      </Routes>
    </>
  )
}
export default App;