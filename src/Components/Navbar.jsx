import React from 'react'
import {Link} from 'react-router-dom'
function Navbar(){
    return (
        <div className='container d-flex justify-content-center fs-4 my-0' >
            <nav className="navbar navbar-expand-lg navbar-light bg-light  my-0">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1" to="/">Muxic</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-5">
                            <Link className="nav-link ms-3" aria-current="page" to="/Marathi">Marathi</Link>
                            <Link className="nav-link ms-3" aria-current="page" to="/">Hindi</Link>
                            <Link className="nav-link ms-3" aria-current="page" to="/">International</Link>
                            <Link className="nav-link ms-3" aria-current="page" to="/">Punjabi</Link>
                          
                        </div>
                    </div>
                </div>
            </nav> 
            </div>      
    )
}

export default Navbar;