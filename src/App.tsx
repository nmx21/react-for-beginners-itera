
import './App.css';
import { Footer } from './components/Lessons1/Footer';
import { UserCard } from './components/Lessons1/UserCard';
import { HookState } from './components/Lessons2/HookUseState';
import { HookUseEffect } from './components/Lessons2/HookUseEffect';
import HookContext from "./components/Lessons2/HookContext";
import Callback from './components/Lessons2/Callback';
import CustomHook from './components/Lessons2/CustomHook';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const user = {userName:'Guest'}


const HomePage = () =>(
  <div className="App">
    <h1>Home Page</h1>
  </div>
)

const Lessons1 = () => (
  <div className="App">
    <h1>Hello {user.userName}!!!</h1>
    <UserCard />
    <hr />
    <Footer copyright="2022(c)" />
  </div>
)

const Lessons2 = () => (
  <div className="App">
    <h1>Lessons 2</h1>
    <hr />
    <HookState />
    <hr />
    <HookUseEffect />
    <hr/>
    <HookContext />
    <hr/>
    <Callback />
    <hr/>
    <CustomHook />
    <hr/>
    <Footer copyright="2022(c)" />
  </div>
)

const NoMatch = () => (
  <div className="App">
    <h3>
      No match for <code>page</code>
    </h3>
    </div>
)

function App(){
  return(
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lessons1">Lessons 1</Link></li>
          <li><Link to="/lessons2">Lessons 2 (Hook Use State)</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/Lessons1/*' element={<Lessons1 />}/>
          <Route path='/Lessons2/*' element={<Lessons2 />}/>
          <Route path='/*' element ={<NoMatch />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;