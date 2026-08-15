import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'general',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        type: 'general',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="py-12 md:py-16 border-b border-[#e8e8e8]">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">
            Get in Touch
          </h1>
          <p className="text-lg font-normal text-[#555555] max-w-2xl">
            Have questions? We'd love to hear from you. Reach out for retail inquiries, wholesale partnerships, or general questions.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 md:py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              {/* Address */}
              <div>
                <p className="section-label mb-4">Address</p>
                <div className="space-y-2">
                  <p className="text-base font-normal text-[#111111]">
                    Double Promotion
                  </p>
                  <p className="text-base font-normal text-[#555555]">
                    123 Fashion District<br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div>
                <p className="section-label mb-4">Hours</p>
                <div className="space-y-2">
                  <p className="text-base font-normal text-[#555555]">
                    Monday – Friday<br />
                    10:00 AM – 8:00 PM
                  </p>
                  <p className="text-base font-normal text-[#555555]">
                    Saturday – Sunday<br />
                    11:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div>
                <p className="section-label mb-4">Phone</p>
                <a
                  href="tel:+919876543210"
                  className="text-base font-normal text-[#111111] hover:text-[#555555] transition-colors block"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="section-label mb-4">Email</p>
                <a
                  href="mailto:hello@doubleservice.com"
                  className="text-base font-normal text-[#111111] hover:text-[#555555] transition-colors block"
                >
                  hello@doubleservice.com
                </a>
                <a
                  href="mailto:wholesale@doubleservice.com"
                  className="text-base font-normal text-[#111111] hover:text-[#555555] transition-colors block"
                >
                  wholesale@doubleservice.com
                </a>
              </div>

              {/* Map CTA */}
              <div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#555555] tracking-widest uppercase mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#e8e8e8] px-4 py-3 text-base font-normal text-[#111111] placeholder-[#999999] focus:border-[#111111] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#555555] tracking-widest uppercase mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#e8e8e8] px-4 py-3 text-base font-normal text-[#111111] placeholder-[#999999] focus:border-[#111111] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Type */}
                <div>
                  <label htmlFor="type" className="block text-xs font-medium text-[#555555] tracking-widest uppercase mb-3">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#e8e8e8] px-4 py-3 text-base font-normal text-[#111111] focus:border-[#111111] transition-colors cursor-pointer"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="wholesale">Wholesale Partnership</option>
                    <option value="retail">Retail Customer</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-[#555555] tracking-widest uppercase mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#e8e8e8] px-4 py-3 text-base font-normal text-[#111111] placeholder-[#999999] focus:border-[#111111] transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#555555] tracking-widest uppercase mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-white border border-[#e8e8e8] px-4 py-3 text-base font-normal text-[#111111] placeholder-[#999999] focus:border-[#111111] transition-colors resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className={`btn-primary w-full text-center transition-all ${
                      submitted ? 'bg-[#2d8659]' : ''
                    }`}
                  >
                    {submitted ? '✓ Message Sent' : 'Send Message'}
                  </button>
                </div>

                {/* Note */}
                <p className="text-xs font-normal text-[#555555] text-center">
                  We'll respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-[#F5F5F5] border-t border-[#e8e8e8]">
        <div className="container-max">
          <div className="mb-12">
            <p className="section-label mb-4">Help</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-3">
                  Do you offer wholesale?
                </h3>
                <p className="text-base font-normal text-[#555555] leading-relaxed">
                  Yes, we work with retailers and boutiques. Contact us at wholesale@doubleservice.com for partnership details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-3">
                  What's your return policy?
                </h3>
                <p className="text-base font-normal text-[#555555] leading-relaxed">
                  We offer free returns within 30 days of purchase. Items must be unused and in original condition.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-3">
                  How long does shipping take?
                </h3>
                <p className="text-base font-normal text-[#555555] leading-relaxed">
                  Standard delivery is 3-5 business days for orders within India. Express options available.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-3">
                  Do you have physical stores?
                </h3>
                <p className="text-base font-normal text-[#555555] leading-relaxed">
                  Yes, visit our flagship store in New Delhi or contact us for other retail locations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-3">
                  Are there discounts available?
                </h3>
                <p className="text-base font-normal text-[#555555] leading-relaxed">
                  We occasionally offer seasonal promotions. Subscribe to our newsletter for updates.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-3">
                  How do I care for my items?
                </h3>
                <p className="text-base font-normal text-[#555555] leading-relaxed">
                  Care instructions are included with every purchase. Premium materials require thoughtful care for longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
