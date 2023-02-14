import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../Pages/Home';
import ErrorPage from '../Error';
import CalculadoraIMC from '../Calc'
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path='/projetos' element={<ViewPage/>} 
        ></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
