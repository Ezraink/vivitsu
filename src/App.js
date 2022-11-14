import './Page/style.css';
import {Route, Routes,Link} from 'react-router-dom'
import Home from './Page/Home';
import Blog from './Page/Blog';
import UserLogin from './Page/UserLogin';
import Signup from './Page/Signup'
import Explore from './Page/Explore';
import Footer from './Page/Footer';
import ReferEarn from './Page/ReferEarn';
function App() {
  return (
    <>
    <header>
    <ul className="nav nav-tabs justify-content-around pt-2 pb-2" id="firstNavbar">
      <li className="nav-item">

<a className="nav-link border-0 bi bi-ticket-perforated text-white" aria-current="page" href="#">&nbsp; &nbsp;Store Promotions</a>
</li>
<li className="nav-item dropdown border-1 border-white">
<a className="nav-link dropdown-toggle text-white " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Promotions</a>
<ul className="dropdown-menu justify-content-center">
<li className=" border-1 text-white p-2 text-center" id="topitem"><p><i className="bi bi-cart h6 p-2">0 <a href="#" className="active text-decoration-none text-white p-1" role="button">Checkout</a></i>
<i className="bi bi-piggy-bank h6 p-2 text-center">-0</i></p>
</li>
<p className="text-center text-white h6">Promotion applied on checkout</p>
<ul className="dropdown-item-grp  bg-white shadow m-auto p-2 m-2 mt-3">
<ul className="main list-unstyled p-2 m-1"><a className="dropdown-item" href="#">
<li><h6><i className="bi bi-circle"></i>&nbsp;FIRSTBUY</h6></li>
<li><h3 className="badge p-2">SAVE 15%</h3></li>
<li className="text-dark">Get 15% off on your first purchase</li>
<li className="bg-light text-black-50">Use code:FIRSTBUY</li>
</a></ul>
<ul className="main list-unstyled  p-2 m-1 "><a className="dropdown-item" href="#">
<li><h6><i className="bi bi-circle"></i>&nbsp;FIRSTBUY1</h6></li>
<li className="text-dark">
Get Past Paper which includes last 5 Attempts for just Rs50.
</li>
<li className="bg-light text-black-50">Use code:FIRSTBUY1</li>
</a></ul>
<ul className="main list-unstyled  p-2 m-1"><a className="dropdown-item" href="#">
<li><h6><i className="bi bi-circle"></i>&nbsp;SHIPITFREE</h6></li>
<li><h3 className="badge p-2">SAVE 100% ON DELIVERY</h3></li>
<li className="text-dark">Get free delivery for Product cost above Rs.1000</li>
<li className="bg-light text-black-50">Use code:SHIPITFREE</li>
</a></ul>
<ul className="main list-unstyled  p-2 m-1 "><a className="dropdown-item" href="#">
<li><h6><i className="bi bi-circle "></i>&nbsp;BCOMDIS</h6></li>
<li><h3 className="badge p-2">SAVE 100% ON DELIVERY</h3></li>
<li className="text-dark">Get Free Delivery pan India</li>
<li className="bg-light text-black-50 ">Use code:BCOMDIS</li>
</a></ul>
</ul>
</ul>
</li>
  </ul>
    <nav className="navbar navbar-expand-xl navbar-collapse-xxl bg-white " id="secondNavbar">
  <div className="container-fluid justify-content-between" id='navbar'>
    <Link to="/" className="navbar-brand p-0">
    <img src="https://thevivitsu.com/img/logo.png" width="200" alt=''/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className='navbar-nav justify-content-center border-1 '>
        <ul className="navbar-nav mb-2 mb-lg-0 ">
        <li classNameName="nav-item">
          <Link to='/Explore' className="nav-link active">Explore</Link>
        </li>
        <li className="nav-item">
          <Link to="/Blog"className="nav-link active">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login"className="nav-link active" >MCQs</Link>
        </li>
        <li className="nav-item">
          <Link to="/Signup"className="nav-link active" >PDF</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login"className="nav-link active" >Mentorship</Link>
        </li>
        <ul className="nav nav-tabs border-0" >
            <li className="nav-item dropdown  ">
                  <a className="nav-link active dropdown-toggle border-0" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" >Free Resources</a>
                  <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton" id="navDropdown">
                    <li>
                      <a className="dropdown-item border-0  text-white " href="#">
                        Chartered Accountancy
                      </a>
                      <ul className="dropdown-menu dropdown-submenu bg-dark ">
                        <li>
                          <a className="dropdown-item text-white" href="#">Final</a>
                        </li>
                        <li>
                          <a className="dropdown-item text-white" href="#">Intermediate</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
            </li>
          </ul>
      </ul>
      </div>
      <div className="navbar-nav ms-auto " id="navbarnav">
                
                <Link className="nav-link active" to='/Login'><i className="bi bi-cart h3"></i></Link>
                
                <Link  className="nav-link active " to='/Refer&Earn'><i className="bi bi-wallet h4"></i>&nbsp;Refer & Earn</Link>
                
                <Link className="nav-link active" to='/Signup'><i className="bi bi-person h3"></i>&nbsp; Sign Up</Link>
                
                <Link className="nav-link active"  to="/Login"><i className="bi bi-box-arrow-in-right h3"></i>&nbsp;Login</Link>
      </div>
    </div>
  </div>
</nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Explore' element={<Explore/>}/>
        <Route path='/Login' element={<UserLogin/>}/>
        <Route path='/Refer&Earn' element={<ReferEarn/>}/>
        <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </header>
    <Footer/>
    </>
  )
}

export default App;
