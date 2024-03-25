
import './App.css';
import './components/AddUser'


/*components*/
import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AddUser from './components/AddUser';
import AllUser from './components/AllUsers';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
       <Route path='/' element={<CodeforInterview />} />
       <Route path='/all' element={<AllUser />} />
       <Route path='/add' element={<AddUser/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
