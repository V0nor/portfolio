import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../Pages/Home';
import ErrorPage from '../Error';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
