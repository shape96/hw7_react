import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import UsersPage from './pages/usersPage/UsersPage';
import ButtonPage from './pages/buttonPage/ButtonPage';
import PostPage from './pages/postPage/PostPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Menu/>
    <Routes>
    <Route index element={<UsersPage/>}/>
    <Route path='button' element={<ButtonPage/>}/>
    <Route path='button2' element={<PostPage/>}/>
    </Routes> 
    </BrowserRouter> 
     


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
