import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Header from './components/About/Sharing/Header/Header';
import SelectCourse from './components/ReviewCourse/SelectCourse/SelectCourse';
import Blog from './components/Blog/Blog';


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
     </Routes>
    </div>
  );
}

export default App;
