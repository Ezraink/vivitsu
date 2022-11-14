import React from 'react';
import './style.css';

function Blog() {
  return (
    <>
        <section>
          <div className="container-fluid">
            <div className="row justify-content-center text-nowrap">
              <div className="col-md-4 d-none d-md-block align-content-center">
                <img src="https://thevivitsu.com/blog/blog_img2.jpg" alt="" width="300"></img>
              </div>
              <div className="col-md-4 col-sm-10  text-center d-block justify-content-center">
                <img src="https://thevivitsu.com/img/favicon.ico" alt="" width="50"></img>
                <h2 className="text-primary p-3">Search what you want?</h2>
                <div className="input-group mb-3 ">
                  <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
                  <input type="text" className="form-control" placeholder="Search blogs.." aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block">
                <img src="https://thevivitsu.com/blog/blog_img1.jpg" alt="" width="300"></img>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid ">
            <div className="row text-center h3 d-flex justify-content-center p-5" >
              <p>Blog Categories</p>
              <div className="col-md-6 d-flex justify-content-center py-2" >
                <a href="blog/ranker.html">
                <div className="card text-black text-decoration-none">
                  <img src="https://thevivitsu.com/blog_sec_img/champions%20trophy%20logo.jpg" className="card-img-top mx-auto" alt="..."></img>
                  <div className="card-body">
                    <h4 className="card-title ">From the Ranker's Section</h4>
                    </div>
                </div>
              </a>
              </div>
              <div className="col-md-6 d-flex justify-content-center py-2">
                <a href="blog/general.html">
                <div className="card">
                  <img src="https://thevivitsu.com/blog_sec_img/general_blog.jpg" className="card-img-top mx-auto" alt="..."></img>
                  <div className="card-body text-black text-decoration-none ">
                    <h4 className="card-title">General</h4>
                  </div>
                </div>
                </a>
            </div>
        
            </div>
          </div>
        </section>

    </>
  )
}

export default Blog