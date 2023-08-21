import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/Home-component/HomePage';
import LoginPage from './components/Login-component/LoginPage';
import DeviceListPage from './components/Device-list/DeviceListPage';
import DeviceDetailPage from './components/Device-detail/DeviceDetailPage'; 
import OnboardFormPage from './components/onboard-page/OnboardFormPage'
import Header from './components/header/Header';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.logState.isLoggedIn)
  return(
    <>
    <Header />
    {!isLoggedIn && <LoginPage />}
    <Routes>
      <Route path="/" element={ <HomePage /> }></Route>
      <Route path="/home" element={<HomePage /> }></Route>
      <Route path="/device-list" element={<DeviceListPage /> }></Route>
      <Route path="/device-detail/:id/:name" element={<DeviceDetailPage /> }></Route>
      <Route path="/onboard-device" element={<OnboardFormPage /> }></Route>
      
    </Routes>
    </>
    
  )
}

export default App;
