import React from 'react'
import "./contactform.css"

export default function ContactForm() {
  return (
    
<div class="card">
  <h2>Get In Touch</h2>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label>First Name</label>
        <input type="text" />
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Mobile</label>
        <input type="number" />
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Email</label>
        <input type="email" />
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Query</label>
        <input type="text" />
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label>Message</label>
        <textarea></textarea>
      </div>
    </div>

    <div class="col">
      <input type="submit" value="Submit" />
    </div>
  </div>
</div>


    
  )
}

