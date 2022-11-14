import React from 'react'
import './style.css'
function Explore() {
  return (
        <>
  <section>
 <div className="container-fluid justify-content-center align-content-center bg-white text-center p-5 m-auto  " id="exploreCourses" >
  <div className="row justify-content-center text-wrap">
    <h3>Courses</h3>
  <div className="col-sm-12 col-md-5 col-lg-4 mt-2">
    <div className="card align-items-center p-3" >
    <img className="card-img-top" src="https://thevivitsu.com/img/icai_ca_logo.png" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Chartered Accountancy</h5>
      <p className="card-text">Institute of Chartered Accountants of India</p>
    </div>
  </div>
</div>
<div className="col-sm-12 col-md-5 col-lg-4 mt-2">
  <div className="card align-items-center p-3 " >
    <img className="card-img-top" src="https://thevivitsu.com/img/msub_logo.png" alt="" />
    <div className="card-body">
      <h5 className="card-title">Bachelor of Commerce</h5>
      <p className="card-text">The Maharaja Sayajirao University Baroda
        BCom Semester I</p>
    </div>
  </div>
</div>
<div className="col-sm-12 col-md-5 col-lg-4 mt-2">
  <div className="card align-items-center p-3" >
    <img className="card-img-top" src="https://thevivitsu.com/img/GSEB_logo.png" alt=""/>
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
   </>
  )
}

export default Explore