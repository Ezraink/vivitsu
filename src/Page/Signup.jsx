import React from 'react'
import './style.css'

function Signup() {
  return (
    <div>
        <section>
                <div className="row">
                    <div className="col-md-6 text-center">
                      <h4>Student's Sign Up</h4>
                        <img src="https://thevivitsu.com/img/Sign%20Up-Student.jpg" className="d-none d-md-block p-5 align-self-center" alt="" srcset="" width="80%"/>
                    </div>
                    <div className="col-md-6">
                        <form action="signindb.php" method="post">
                          <div className="row">
                            <div className=" col-md-6 mb-1 p-4 pb-0 ">
                                <label for="Name" className="form-label text-info">Full Name</label>
                                <input type="Text" className="form-control text-black-50 " id="Name" placeholder="Enter name" name="userName"/>
                              </div>
                              <div className=" col-md-6 mb-1 p-4 pb-0 ">
                                <label for="PhoneNumber" className="form-label text-info ">Phone Number</label>
                              <input type="tel" className="form-control text-black-50" id="PhoneNumber" placeholder="Enter Phone Number" name="PhoneNumber"/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-3 p-4 pb-0 pt-2">
                              <label for="Email" className="form-label text-info">Email</label>
                              <input type="email" className="form-control text-black-50" name="Email" id="Email" placeholder="Enter Email"/>
                            </div>
                            <div className=" col-md-6 mb-3 p-4 pb-0 pt-2">
                              <label for="ReferralCode" className="form-label text-info ">Referral Code<small className="text-black bold">(Get 100 Points)</small></label>
                              <input type="number" className="form-control" placeholder="Enter Refferal Code"/>
                            </div>
                            </div>
                            <div className="row">
                              <label for="Course" className="form-label text-info p-4 pb-0 pt-0 ">Your Goals</label>
                            <div className=" col-md-6 mb-3 p-4 pb-0 pt-0">
                             <select className="form-control">
                              <option value="CA">Chartered Accountancy</option>
                              <option value="BCOM">Bachelor Of Commerce</option>
                              <option value="Comm">Commerce</option>
                             </select>
                            </div>
                             <div className=" col-md mb-3 p-4 pb-0 pt-0">
                             <select className="form-control" placeholder='Select Semester'>
                              <option value="Sem1">Semeter I</option>
                              <option value="Sem2">Semester II</option>
                              <option value="Sem3">Semester III</option>
                              <option value="Sem4">Semester VI</option>
                              <option value="Sem5">Semester V</option>
                               <option value="Sem6">Semester VI</option>
                             </select>
                            </div>
                           
                            <input type="text" className="form-control" placeholder="Enter your other goals (optional) "/>
                                <div class="input-group-text">
                                <input class="form-check-input mt-0 border-0" type="radio" value="" aria-label="Radio button for following text input"/>
                                </div>
                                <input type="text" class="form-control" aria-label="Text input with radio button"/>
                                </div>
                       <button type="submit" className="btn btn-primary" name="submit">Submit</button>
                      </form>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Signup