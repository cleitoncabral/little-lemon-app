import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './homepage'
const Main = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HomePage />}>Homepage</Route>
        {/* <Route path="/booking" element={<BookingPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Main