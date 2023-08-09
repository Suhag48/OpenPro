import { Routes, Route, BrowserRouter } from "react-router-dom"
import Main_Page from "./routes/Main_Page"
import SignUp_Page from "./routes/SignUp_Page"
import SignIn_Page from "./routes/SignIn_Page"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Main_Page /> } />
          <Route path="/signup" element={ <SignUp_Page /> } />
          <Route path="/signin" element={ <SignIn_Page /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
