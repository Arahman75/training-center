import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Header from './components/About/Sharing/Header/Header';
import SelectCourse from './components/ReviewCourse/SelectCourse/SelectCourse';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import NotFound from './components/About/Sharing/NotFound/NotFound';
import Footer from './components/About/Sharing/Footer/Footer';
import ConfirmCourse from './components/ConfirmCourse/ConfirmCourse';
import RequireAuth from './components/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/selectCourse' element={<SelectCourse></SelectCourse>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/confirm' element={
        <RequireAuth> <ConfirmCourse></ConfirmCourse></RequireAuth>
      }></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
