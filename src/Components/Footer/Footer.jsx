import React from "react";
import "./footer.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />



export default function Footer() {
 return (
    <div className="footer">
       <div className="containers">
             <div className="rows">
         <h2 className="footer-logo">
           <img src="C:\Users\chetan\Desktop\Invoice page\ivoice-generator\src\Images\cashmoj.png" alt="" />CashMauj
          </h2>
         <p className="footer-para">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>
        <div className="footer-col">
        <h1>About Us</h1>
          <ul>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Aim</a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Vision</a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Testimonials</a></li>
          </ul>
          </div>

          <div className="footer-col">
          <ul>
            <h1>Services</h1>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Writing</a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Internships</a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Coding</a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Teaching</a></li>
          </ul>
          </div>

          <div className="footer-col">
          <ul>
            <h1>Contact Us</h1>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Uttar Pradesh</a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Ahemdabad</a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Indore</a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">Mumbai</a></li>
          </ul>
          </div>

          <div className="footer-col">
          <ul>
            <h1>Social Media</h1>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </a></li>
            <li><a href="https://in.linkedin.com/company/cashmauj?original_referer=https%3A%2F%2Fwww.google.com%2F">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </a>
            </li>
          </ul>
          </div>
        </div>
     </div>
    </div>
  )
}


  

