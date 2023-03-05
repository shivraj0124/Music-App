import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
   
    <div className="container conatinerHome d-flex justify-content-center">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ width: '100%' }}>
      <div className="carousel-inner innrTDi" style={{height:'100%'}}>
         
        <div className="carousel-item active h-100 w-100">
            <Link to="/HindiSong">
            <img src="https://i.pinimg.com/originals/ab/69/76/ab6976576facf8b77013540b2abcf2d1.jpg" className="d-block w-100 h-100" alt="..."/>
            </Link>
        </div>
       
        <div className="carousel-item h-100 w-100 ">
          <Link to="/Marathi">
            <img src="https://images.hungama.com/c/1/95d/27c/17440121/17440121_300x300.jpg" className="d-block w-100 h-100" alt="..."/>
        </Link>
        </div>
        <div className="carousel-item h-100 w-100">
          <Link to="/EnglishSong">
            <img src="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png" className="d-block w-100 h-100" alt="..."/>
        </Link>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}