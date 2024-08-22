import React from "react";
import { useState } from "react";
import formImage from '../../assets/formImage.png';
import backgroundImage from '../../assets/backgroundImage.png';
import './index.css'

const RegistrationForm = () => {
    const myStyle = {
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: '505px',
        maxHeight: '575px',
        top: '28px',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
      });

    const [errors, setErrors] = useState({
        name: '',
        company: '',
        email: '',
      });

      const [message, setMessage] = useState('');

      const validateField = (name, value) => {
        let errorMessage = '';

        if (name === 'name' && !value.trim()) {
            errorMessage = 'Name is required.';
        }

        if (name === 'company' && !value.trim()) {
            errorMessage = 'Company is required.';
        }

        if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) {
                errorMessage = 'Email is required.';
            } else if (!emailPattern.test(value)) {
                errorMessage = 'Email is not valid.';
            }
        }

        return errorMessage;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Validate the field and set the error if any
        const error = validateField(name, value);

        setFormData({
            ...formData,
            [name]: value,
          });

        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const validateForm = () => {
        const { name, company, email } = formData;
        let validationErrors = {};

        validationErrors.name = validateField('name', name);
        validationErrors.company = validateField('company', company);
        validationErrors.email = validateField('email', email);

        setErrors(validationErrors);
        
        // Check if the form has no errors
        return !Object.values(validationErrors).some(error => error);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {

            const savedData = JSON.parse(localStorage.getItem('formData'));
            if (savedData && JSON.stringify(savedData) === JSON.stringify(formData)) {
                setMessage('Form has already been submitted with this data.');
            } else {
                localStorage.setItem('formData', JSON.stringify(formData));
                setMessage('Form submitted successfully!');
                setFormData({name: '', company: '', email: ''})
            }
        }
      };

  return (
    <div className="registration"> 
    <div style={myStyle}>
    <img className='form-image'  src={formImage} alt="form"/>
    </div>
     

      <div className="form-container">
        <div className="form-desc"> 
            <p className="form-heading">Registration</p>
            <p className="form-statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name <span style={{color: 'red'}}>*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name"
            />
            {errors.company && <span className="error">{errors.company}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address<span style={{color: 'red'}}>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <button className="form-button" type="submit">Register</button>
        </form>
        <br></br>
        {message && <p style={{marginTop: '20px', fontWeight: 'bold'}} className="form-message">{alert(message)}</p>}
      </div>

    </div>
  )
}

export default RegistrationForm;