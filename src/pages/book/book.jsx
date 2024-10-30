import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

function Book(){


    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_99sz48v', 'template_cvvyb9s', formRef.current, '_s33J6xuP7n0eqqjG')
          .then((result) => {
              console.log(result.text);
              alert('Booked Successfully!');
              window.location.href = "/"
          }, (error) => {
              console.log(error.text);
              alert('Failed to send message. Please try again.');
          });
    
        e.target.reset();
      };

    return(
        <>

<div style={{height:"150px"}}>

</div>
<form ref={formRef} onSubmit={sendEmail} required className="p-4 bg-light rounded shadow">
  <h2 className="text-center mb-4">Book an Appointment</h2>
  
  <div className="mb-3">
    <label htmlFor="date" className="form-label">Select Date</label>
    <input type="date" className="form-control" id="date" name="date" required />
  </div>

  <div className="mb-3">
    <label htmlFor="time" className="form-label">Select Time (IST)</label>
    <div className="d-flex justify-content-between">
      <select className="form-select me-2" name="hour" required>
        {[10, 11, 12, 1, 2, 3, 4, 5, 6].map((h, i) => (
          <option key={i} value={h}>{h}</option>
        ))}
      </select>
      <select className="form-select me-2" name="minute" required>
        {[0, 15, 30, 45].map((min) => (
          <option key={min} value={min}>{min < 10 ? `0${min}` : min}</option>
        ))}
      </select>
      <select className="form-select" name="period" required>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="name" className="form-label">Your Name</label>
    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
  </div>

  <div className="mb-3">
    <label htmlFor="company" className="form-label">Your Company Name</label>
    <input type="text" className="form-control" id="company" name="company" placeholder="Enter your company name" required />
  </div>

  <div className="mb-3">
    <label htmlFor="number" className="form-label">Phone Number</label>
    <input type="tel" className="form-control" id="number" name="number" placeholder="Enter your phone number" required />
  </div>

  <div className="d-grid">
    <button type="submit" className="btn btn-primary">BOOK</button>
  </div>
</form>

<br /><br />
<hr />
        </>
    )
}

export default Book