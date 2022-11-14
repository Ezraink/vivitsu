import React from 'react'
import './style.css'

function Home() {
  return (
    <div>
        <div className="container-fluid justify-content-center text-center" id="start">
                <div id="carouselExampleIndicators" className="carousel slide p-4" data-bs-ride="true">
                    <div className="carousel-indicators ">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" data-bs-interval="10'
                    00">
                      <div className="carousel-item active p-2" data-bs-interval="500">
                       <h4>Customize</h4>
                       <p className="h6">You can choose one Chapter, one Topic or the Full Book. Customize your study material in your own way</p>

                      </div>
                      <div className="carousel-item  p-2">
                    <h4>Prioritize</h4>
                    <p className="h6">Prioritize your time by studying what is important. Customize the chapters of subjects you want to study.</p>    
                    </div>
                      <div className="carousel-item p-2">
                        <h4>Specialize</h4>
                        <p className="h6">Learn from the best to be the best. Get study material from the expert educators, to get specialized knowledge.</p>    
                    </div>
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
        </div>
        <section>
       <div className="container-fluid justify-content-center align-content-center bg-white text-center p-5  " id="courses" >
        <h3>Courses</h3>
        <div className="row justify-content-center text-wrap">
        <div className="col-sm-12 col-md-5 col-lg-4 mt-2">
          <div className="card align-items-center p-3" >
          <img className="card-img-top" src="https://thevivitsu.com/img/icai_ca_logo.png" alt=""></img>
          <div className="card-body">
            <h5 className="card-title">Chartered Accountancy</h5>
            <p className="card-text">Institute of Chartered Accountants of India</p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-5 col-lg-4 mt-2">
        <div className="card align-items-center p-3 " >
          <img className="card-img-top" src="https://thevivitsu.com/img/msub_logo.png" alt="" ></img>
          <div className="card-body">
            <h5 className="card-title">Bachelor of Commerce</h5>
            <p className="card-text">The Maharaja Sayajirao University Baroda
              BCom Semester I</p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-5 col-lg-4 mt-2">
        <div className="card align-items-center p-3" >
          <img className="card-img-top" src="https://thevivitsu.com/img/GSEB_logo.png" alt=""></img>
          <div className="card-body">
            <h5 className="card-title">Commerce</h5>
            <p className="card-text">Gujarat Secondary and Higher Secondary Education Board
            </p>
          </div>
        </div>
         </div>
       </div> 
       </div>
        </section>
        <section>
            <div className="container-fluid justify-content-center align-content-center text-center m-auto p-5 pb-3 pt-1" id="testimonal">
             
              <h3>TESTIMONIALS</h3>
              <h2>What Clients Say</h2>
              <p>We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is vital in helping us to get it right.</p>

            </div>
        </section>
        <section>
          <div className="container-fluid justify-content-center text-center text-wrap p-5 pt-0" id="testimonal">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-5 col-lg-4 pt-4">
                <div className="card bg-light border-2 border-light shadow ">
                  <div className="card-body p-3">
                    <ul className="list-group  p-2">
                      <li><i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                              <i className="bi bi-star-fill text-warning"></i></li>
                    </ul>
                    <p className="card-text text-black m-3 p-2"><i className="bi bi-quote"></i>
                      I have been an recent customer of Vivitsu. The service they provide is too good. I had received a compilation of past question paper, RTP and MTP from May 18-21 and it was worth absolutely at a competitive price. Best of luck to Vivitsu for their future endeavours.
                      <i className="bi bi-quote"></i></p>
                    <h3 className="card-footer border-0 bg-transparent">Sagar Shetty</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-4 pt-4">
                <div className="card  bg-light border-2 border-light h-100 shadow">
                  <div className="card-body p-3 h-100">
                    <ul className="list-group p-2">
                      <li><i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                              <i className="bi bi-star-fill text-warning"></i></li>
                    </ul>
                    <p className="card-text text-black  m-3 p-2 "><i className="bi bi-quote"></i>
                      Great initiative. Easily accessible, customized and reasonable services offered making it student friendly. 
                      <i className="bi bi-quote"></i></p>
                    <h3 className="card-footer  border-0 bg-transparent p-2">Simran Jasani</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-4 pt-4">
                <div className="card  bg-light border-2 border-light shadow h-100">
                  <div className="card-body p-3">
                    <ul className="list-group p-2">
                      <li><i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                              <i className="bi bi-star-fill text-warning"></i></li>
                    </ul>
                    <hp className="card-text text-black  m-3 p-2"><i className="bi bi-quote"></i>
                      It was helpful as I was looking for Chapter Wise Content and it was great that it was available on Vivitsu. This was my First Step of preparations for Exams as these Compilations helps to test knowledge on each Chapter which is very Important 
                      <i className="bi bi-quote"></i></hp>
                    <h3 className="card-footer border-0 bg-transparent  mt-5 p-2">Kishore LK</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid justify-content-center text-center text-wrap" id="Education-portal">
            <div className="row p-5 m-auto">
              <div className="col-md-6 p-5 m-auto">
                <img src="https://thevivitsu.com/img/indian_first_customisable.jpg" alt="" srcset="" width="100%"></img>
              </div> 
              <div className="col-md-6 m-auto">
                <div className="body-head">
                  <h3>India's 1st 🏆 fully</h3>
                  <h2 className="h2">Customisable</h2>
                  <h3>Educational Portal.</h3>
                  <p >Buy notes of what you want. <mark>One page</mark>, <mark>One topic</mark>,<mark> One chapter</mark> or the<mark>Full Course</mark>. We give you everything under one roof. <mark>Online</mark> or <mark>Offline</mark> everything is possible.</p>
                    <a name="" id="" className="btn" href="#" role="button">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid  justify-content-center text-center text-wrap bg-light" id="register">
            <div className="row p-2 ">
              <div className="col-md-6 m-auto p-lg-5">
                <img src="https://thevivitsu.com/img/1.png" alt="" srcset="" width="80%"></img>
              </div>
              <div className="col-md-6 m-auto p-5">
               <h3 className="body-head text-black">Pick any topic
                Pick any Chapter</h3>
                <h1>Pay as you go</h1>
                <p>We provide you the option to purchase notes chapter wise. You no longer have to pay for the full subject you can customize whatever you require and purchase only that. We provide the option to pay only for what your require.</p>
                <a name="" id="" className="btn" href="#" role="button">Register Now</a>
              </div>
              </div>
          </div>
        </section>
        <section>
          <div className="container-fluid  justify-content-center text-center text-wrap bg-white" id="register">
            <div className="row p-5 m-auto flex-lg-row-reverse ">
              <div className="col-md-6 m-auto p-1 ">
                <img src="https://thevivitsu.com/img/2.png" alt="" srcset="" width="100%"></img>
              </div>
              <div className="col-md-6 m-auto p-2">
               <h2 className="body-head text-black">Not more than</h2>
                <h1>Rs. 1* per page</h1>
                <p>The price of our notes will be cheaper than your neighborhood photocopy store. Why photocopy when you get updated notes sitting at home.</p>
                <a name="" id="" className="btn" href="#" role="button">View All Courses</a>
              </div>
              </div>
          </div>
        </section>
        <section>
          <div className="container-fluid  justify-content-center text-center text-wrap bg-light" id="register">
            <div className="row p-5 ">
              <div className="col-md-6 m-auto p-3 ">
                <img src="https://thevivitsu.com/img/3.png" alt="" srcset="" width="80%"></img>
              </div>
              <div className="col-md-6 m-auto p-3">
               <h2 className="body-head text-black">Anytime &</h2>
                <h1>Anywhere</h1>
                <p>One stop solution for all the notes your course requires. 24*7 availability of the best resources to help you study.</p>
                <a name="" id="" className="btn" href="#" role="button">Register Now</a>
              </div>
              </div>
          </div>
        </section>
        <section>
          <div className="container-fluid  justify-content-center text-center text-wrap " id="register">
            <div className="row p-5 p-lg-2 flex-md-row-reverse">
              <div className="col-md-6 m-auto ">
                <img src="https://thevivitsu.com/img/4.png" alt="" srcset="" width="100%"></img>
              </div>
              <div className="col-md-6 p-5 m-auto">
               <h2 className="body-head text-black">We have notes from <mark>India's finest </mark>at your fingertips
              </h2>
                <p>Access to the finest notes by revered authors, institutions and teachers just a click away.</p>
                <a name="" id="" className="btn" href="#" role="button">Register Now</a>

              </div>
              </div>
          </div>
        </section>
        <section>
          <div className="container-fluid justify-content-center bg-light text-center p-3" >
            <div className="row">
              <div className="col">
              <h6>STRIVING TOWARDS KNOWLEDGE</h6>
              <p className="h5">Start today for getting Online Courses <mark className="text-info">FREE</mark>  to access
              </p>
              <a name="" id="" className="btn" href="#" role="button">Register Now</a>
            </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid justify-content-center bg-white text-center p-3" >
            <div className="row">
              <div className="col">
              <h6>STRIVING TOWARDS KNOWLEDGE</h6>
              <h5>Featured Courses</h5>
              <a name="" id="" className="btn" href="#" role="button">View All Courses</a>
            </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home