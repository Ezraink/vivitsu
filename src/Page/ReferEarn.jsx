import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Signup from './Signup'

function ReferEarn() {
  return (
    <>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <p className='display-4'>Vivitsu brings you an amazing chance of earning points to your wallet!</p>
                 <p>Don't miss this chance. Get yourself some points as well as useful study material. Click, share and earn.</p>   
                 <Link to='/Signup' className="nav-link active"/>
            </div>
        </div>
        <div class="row">
            <p><strong>How do I refer ?</strong></p>
            <p>It only takes 3 simple steps to change someone's life!</p>
            <div class="col-md-4 ">
            <div class="card">
                <img src="https://thevivitsu.com/img/signup_share.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
            <div class="col-md-4 ">
            <div class="card">
                <img src="https://thevivitsu.com/img/apply_code.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
            <div class="col-md-4 ">
            <div class="card">
                <img src="https://thevivitsu.com/img/referral_benefits.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    <Routes>
        <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default ReferEarn