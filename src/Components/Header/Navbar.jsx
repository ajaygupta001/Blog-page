 import React from 'react';

 import "./navbar.css";
 



 export default function Navbar() {
   return (
    <nav className='main-nav'>
     {/*1st logo */}
     <div className='logo'>
       <h2>
        <img src="C:\Users\chetan\Desktop\Invoice page\ivoice-generator\src\Images\cashmoj.png" alt="" />
         <span>C</span>ash
         <span>M</span>auj
       </h2>
     </div>
     {/* End logo */}

     {/* Menu Link */}
     <div className='menu-link'>
      <ul>
        <li>
          <a href="https://in.linkedin.com/company/cashmauj">Home</a>
        </li>
        <li>
           <a href="https://in.linkedin.com/company/cashmauj">About</a>
         </li>
         <li>
          <a href="https://in.linkedin.com/company/cashmauj">Careers</a>
        </li>
        <li>
          <a href="https://in.linkedin.com/company/cashmauj">Blog</a>
        </li>
        <li>
          <a href="https://in.linkedin.com/company/cashmauj">Partner program</a>
        </li>
        <li>
          <a href="https://in.linkedin.com/company/cashmauj">Contact</a>
        </li>
      </ul>
      {/* End Menu Link */}
      

      
       
      
      

     </div>





    </nav>
   )
 }
 

  

