import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss'
import { SignInForm } from './components/forms/SignInForm';
import { SignUpForm } from './components/forms/SignUpForm';
import { LoginLayout } from './components/Layouts/LoginLayout/LoginLayout';
import { useAppDispatch } from './hooks';
import { useEffect } from 'react';
import { checkAuth } from './store/slices/userSlice/requests';
import { NotFound } from './pages/404/NotFound';
import { Layout } from './components/Layouts/Layout/Layout';
import { Products } from './pages/Products/Products';
import { Home } from './pages/Home/Home';
import { Categories } from './pages/Categories/Categories';

function App() {
const dispatch = useAppDispatch();
const navigate = useNavigate();
useEffect(() => {
 if(localStorage.getItem('Bearer')) {
  dispatch(checkAuth());
 } else {
  navigate('/sign-in', {replace: true});;
 }
},[])
 

  return (
    
      <Routes>
        <Route element={<LoginLayout/> }>
          <Route path='/sign-in' element={<SignInForm/>}/> 
          <Route path='/sign-up' element={<SignUpForm/>}/> 
        </Route>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/categories' element={<Categories/>}/>
        </Route>
       
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App
