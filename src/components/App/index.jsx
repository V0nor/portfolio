import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../../Pages/Home'
import ErrorPage from '../Error'
import CalculadoraIMC from '../../Pages/Projects/Calc'
import { LandingPage } from '../../Pages/Projects/LandingPage'
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/projetos/CalculadoraIMC"
          element={<CalculadoraIMC />}
        ></Route>
        <Route
          path="/projetos/NetflixLP"
          element={<LandingPage />}
        ></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
