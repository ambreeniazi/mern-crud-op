import Header from './components/header/Header'
import {Route,Routes} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Postuser from './components/postuser/Postuser';
import Updateuser from './components/update_user/UpdateUser';
import Nomatch from './components/nomatch/Nomatch';
import Footer from './components/footer/Footer';
function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Dashboard/>}></Route>
    <Route path='/user' element={<Postuser/>}></Route>
    <Route path='/user/:id' element={<Updateuser/>}></Route>
    <Route path='*' element={<Nomatch/>}></Route>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
