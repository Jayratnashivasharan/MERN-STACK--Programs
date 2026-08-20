import { useState } from 'react'
import './App.css'

const initialForm = { fullName: '', email: '', phone: '', city: '', message: '' }

function App() {
  const [formData, setFormData] = useState(initialForm)
  const [submittedData, setSubmittedData] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmittedData(formData)
  }

  function handleEdit() {
    setFormData(submittedData)
    setSubmittedData(null)
  }

  if (submittedData) return (
    <main className="page-shell">
      <section className="details-card" aria-labelledby="details-title">
        <div className="success-icon" aria-hidden="true">✓</div>
        <p className="eyebrow">Submitted successfully</p>
        <h1 id="details-title">Your details</h1>
        <p className="intro">Thanks, {submittedData.fullName}. Here is the information you sent.</p>
        <dl className="details-list">
          <div><dt>Full name</dt><dd>{submittedData.fullName}</dd></div>
          <div><dt>Email address</dt><dd>{submittedData.email}</dd></div>
          <div><dt>Phone number</dt><dd>{submittedData.phone || 'Not provided'}</dd></div>
          <div><dt>City</dt><dd>{submittedData.city || 'Not provided'}</dd></div>
          <div className="message-detail"><dt>Message</dt><dd>{submittedData.message || 'No message provided'}</dd></div>
        </dl>
        <button className="secondary-button" type="button" onClick={handleEdit}>Edit details</button>
      </section>
    </main>
  )

  return (
    <main className="page-shell">
      <section className="form-card" aria-labelledby="form-title">
        <p className="eyebrow">Get in touch</p>
        <h1 id="form-title">Send us your details</h1>
        <p className="intro">Fill in the form and we will show you a summary on the next page.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>Full name <span aria-hidden="true">*</span><input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" autoComplete="name" required /></label>
            <label>Email address <span aria-hidden="true">*</span><input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" required /></label>
            <label>Phone number<input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" autoComplete="tel" /></label>
            <label>City<input name="city" value={formData.city} onChange={handleChange} placeholder="Your city" autoComplete="address-level2" /></label>
          </div>
          <label className="message-field">Message<textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help..." rows="4" /></label>
          <button className="submit-button" type="submit">Send details <span aria-hidden="true">→</span></button>
        </form>
      </section>
    </main>
  )
}

export default App
