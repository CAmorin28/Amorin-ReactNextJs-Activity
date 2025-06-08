import { useState } from 'react'

export default function AttendeeRegistrationForm() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    dob: '',
    gender: '',
    studentId: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Registration successful for ${formData.lastName}, ${formData.firstName}`)
    setFormData({
      lastName: '',
      firstName: '',
      dob: '',
      gender: '',
      studentId: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="registration-form">
      <h2>Student Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <div className="name-fields">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Surname"
              required
            />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select 
            name="gender" 
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Student ID:</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="23-3499-398"
            pattern="\d{2}-\d{4}-\d{3}"
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}