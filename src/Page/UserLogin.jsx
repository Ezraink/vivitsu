import React from 'react'

function UserLogin() {
  return (
    <div>
       <section>
    <div className="container-fluid justify-content-center">
        <div className="row m-auto ">
            <div className="col-md-6  text-center  p-1">
              <h2>Student's Login</h2>
              <img src="https://thevivitsu.com/img/Login-Student.png" alt="" srcset="" width="80%"></img>
            </div>
            <div className="col-md-6 mt-5 p-5">
                <form action="login.php" method="post">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter Mobile Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span class="input-group-text btn btn-primary" id="basic-addon2">Send OTP</span>
                  </div>
                    <div className="mb-3 ">
                      <input type="text" className="form-control" id="exampleInputOTP" placeholder="Enter OTP"></input>
                    </div>
                    <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary border-0" >Submit</button>
                    </div>
                    <div className="mb-3 text-center">
                    <a href="SignIn.html" type="button" className="btn bg-black ">Sign In</a>
                 </div>
                  </form>

            </div>
        </div>
           </div>
          </section>
    </div>
  )
}

export default UserLogin