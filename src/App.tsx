import * as React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"

const App: React.FC = (): JSX.Element =>
  <Routes>
    <Route path='/pokemons' element={<Home />} />
  </Routes>

export default App
