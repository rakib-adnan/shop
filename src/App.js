import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

    import Category from './components/Admin/Category';
    import Dashboard from './components/Admin/Dashboard';
    import Products from './components/Admin/Products';
    import Tag from './components/Admin/Tag';
    import Dash from './components/Admin/Dash';
    import LogOut from './components/Admin/LogOut';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import ProductSingle from './components/Pages/ProductSingle';
import Shop from './components/Pages/Shop';
import './_assets/css/bundle.css';
import './_assets/css/style.css';
import AddTags from './components/Admin/AddTags';

function App() {
  return (
    <>

     
          <Header/>
           <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/admin' element={ <Dashboard/> }>
              <Route path='/admin/cate' element={ <Category/> }/>
              <Route path='/admin/product' element={ <Products/>  }/>
              <Route path='/admin/tags' element={ <Tag/> }/>
              <Route path='/admin/add-tags' element={ <AddTags/> }/>
              <Route path='/admin/dash' element={ <Dash/> }/>
              <Route path='/admin/logout' element={ <LogOut/> }/>
            </Route>
            <Route path='/shop' element={ <Shop/>}/>
            <Route path='/shop/:name' element={ <ProductSingle/>}/>
       
           </Routes>
          <Footer/>
     
     
      
      
     

    </>
  );
}

export default App;