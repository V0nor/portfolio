import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home';
import { Error } from '../Error';
import { Curriculo } from '../../Pages/Curriculo';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/resumo" element={<Curriculo />} />
      </Routes>
    </BrowserRouter>
  );
}
