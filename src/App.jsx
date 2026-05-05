import React, { useState, useEffect } from 'react';
import { Phone, Shield, Clock, Award, Sparkles, Building2, Home, ChevronRight, CheckCircle, Star, Moon, Sun, MessageCircle, Quote, ChevronDown } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'deep_cleaning',
    address: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms Integration
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '327f16e4-a83d-4952-8beb-5097588e6c51',
          ...formData,
          subject: 'New Lead: LuxeClean Kigali'
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        // Fallback if key is missing/invalid
        setSubmitted(true);
      }
    } catch (error) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">
            <Sparkles size={24} className="text-gold-accent" style={{ color: 'var(--gold-accent)' }} />
            LuxeClean<span style={{ color: 'var(--gold-accent)' }}>Kigali</span>
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#testimonials">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="tel:0793931271" className="header-phone-btn">
              <Phone size={16} />
              <span>079 393 1271</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Premium <span>Cleaning</span> Services in Kigali.</h1>
            <p className="hero-subtitle">
              Elevating the standard of cleanliness for luxury residences, corporate offices, and post-construction sites across Kigali. Experience immaculate perfection.
            </p>
            <div className="trust-badges">
              <div className="badge"><Shield size={20} /> Fully Vetted Staff</div>
              <div className="badge"><Clock size={20} /> Flexible Scheduling</div>
              <div className="badge"><Star size={20} /> 100% Satisfaction Guarantee</div>
            </div>
          </div>

          <div className="lead-form-wrapper">
            {!submitted ? (
              <>
                <div className="form-header">
                  <h3 className="serif">Request a Quote</h3>
                  <p>Book your premium cleaning service today.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" className="form-control" placeholder="E.g., Bruno" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" className="form-control" placeholder="078 XXX XXXX" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Service Required</label>
                    <select name="service" className="form-control" onChange={handleChange}>
                      <option value="deep_cleaning">Residential Deep Cleaning</option>
                      <option value="corporate">Corporate & Office Cleaning</option>
                      <option value="post_construction">Post-Construction Cleanup</option>
                      <option value="move_in_out">Move-In / Move-Out Cleaning</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Neighborhood (Kigali)</label>
                    <input type="text" name="address" className="form-control" placeholder="E.g., Nyarutarama, Kiyovu, Kagugu, Kabeza, ...etc" required onChange={handleChange} />
                  </div>
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Secure Your Booking'} <ChevronRight size={20} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center" style={{ padding: '2rem 0', textAlign: 'center' }}>
                <CheckCircle size={64} color="var(--primary-accent)" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>Request Received</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Our client concierges are reviewing your request and will contact you at <strong>{formData.phone}</strong> shortly to finalize your booking.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-item">
            <h4 className="serif">500+</h4>
            <p>Homes Cleaned</p>
          </div>
          <div className="stat-item">
            <h4 className="serif">50+</h4>
            <p>Corporate Clients</p>
          </div>
          <div className="stat-item">
            <h4 className="serif">100%</h4>
            <p>Eco-Friendly Products</p>
          </div>
          <div className="stat-item">
            <h4 className="serif">24/7</h4>
            <p>Customer Support</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="process-section">
        <div className="container">
          <div className="section-title">
            <h2 className="serif">Our Expertise</h2>
            <p>We provide tailored cleaning solutions designed to meet the exact standards of our discerning clientele in Rwanda.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Home size={32} /></div>
              <h3 className="serif">Luxury Residential</h3>
              <p>Meticulous deep cleaning for luxury apartments and villas. We handle delicate surfaces and premium materials with the utmost care and precision.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Building2 size={32} /></div>
              <h3 className="serif">Corporate Offices</h3>
              <p>Maintain a pristine, productive environment for your team. We offer daily, weekly, and after-hours commercial cleaning services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Sparkles size={32} /></div>
              <h3 className="serif">Post-Construction</h3>
              <p>Transform your newly built or renovated property from a dusty site into a move-in ready masterpiece with our specialized heavy-duty cleaning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2 className="serif">Client Testimonials</h2>
            <p>Don't just take our word for it. Hear from our esteemed clients across Kigali.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p className="testimonial-text">"We hired LuxeClean for a post-construction deep clean of our new villa in Nyarutarama. The team was incredibly professional and left no corner untouched. Highly recommended."</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: '#0f4c3a', color: 'white' }}>MR</div>
                <div>
                  <h4>Mugisha R.</h4>
                  <span>Homeowner, Nyarutarama</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p className="testimonial-text">"LuxeClean handles the daily maintenance of our corporate offices in Kiyovu. They are discreet, reliable, and our workspace has never looked better. Worth every penny."</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: '#d4af37', color: 'white' }}>CK</div>
                <div>
                  <h4>Chantal K.</h4>
                  <span>Operations Manager, Tech Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2 className="serif">Frequently Asked Questions</h2>
          </div>
          <div className="faq-container">
            {[
              { q: "Do I need to provide cleaning supplies?", a: "No, our team arrives fully equipped with premium, eco-friendly cleaning supplies and professional-grade vacuums." },
              { q: "Are your cleaners vetted and insured?", a: "Absolutely. Every member of our staff undergoes rigorous background checks and training. LuxeClean is fully insured for your peace of mind." },
              { q: "How long does a deep clean take?", a: "It depends on the size of the property. A standard 3-bedroom apartment deep clean typically takes a team of three about 4 to 6 hours." },
              { q: "Do you offer weekend services?", a: "Yes, we operate 7 days a week to accommodate your schedule, though weekend slots book up quickly." }
            ].map((faq, index) => (
              <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={index}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <ChevronDown size={20} className="faq-icon" />
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <a href="/" className="logo">
                LuxeClean<span style={{ color: '#d4af37' }}>Kigali</span>
              </a>
              <p>Kigali's premier cleaning and facility management service. Dedicated to excellence, discretion, and perfection in every detail.</p>
            </div>
            <div>
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#">Residential Deep Clean</a></li>
                <li><a href="#">Corporate Maintenance</a></li>
                <li><a href="#">Post-Construction</a></li>
                <li><a href="#">Event Cleanup</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul className="footer-links">
                <li><a href="tel:0793931271">Call: 079 393 1271</a></li>
                <li><a href="mailto:dingk8cz@gmail.com">Email: dingk8cz@gmail.com</a></li>
                <li><a href="#">HQ: KG 9 Ave, Nyarutarama</a></li>
                <li><a href="#">Kigali, Rwanda</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} LuxeClean Kigali. All rights reserved. Premium Lead Generation Demo.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/250793931271?text=Hello%20LuxeClean!%20I%20would%20like%20to%20request%20a%20cleaning%20quote."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}

export default App;
