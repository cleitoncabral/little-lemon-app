import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from '../components/BookingForm'

import HomePage from './homepage'
const Main = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main