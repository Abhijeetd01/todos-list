import React from 'react'

export default function Footer() {
  let footerBg={
    background:"#fff",
    margin:"0 auto"
  }
  return (
    <>
      <footer> 
        <div class="card">
          {/* <div class="card-header">
            Featured
          </div> */}
          <div class="card-body" style={footerBg}>
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </footer></>
  )
}
