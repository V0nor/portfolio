import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Error } from '../Error';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
