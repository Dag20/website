
const ContactPage = () => {
  return (
    <div className="py-20" style={{backgroundColor: '#f8fafc'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6" style={{color: '#1f2937'}}>Contact Us</h1>
          <p className="text-2xl" style={{color: '#6b7280'}}>We'd love to hear from you. Reach out to us for a free consultation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8" style={{color: '#00aeff'}}>Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2" style={{color: '#1f2937'}}>Name</label>
                <input type="text" id="name" name="name" className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 transition-all" style={{borderColor: '#d1d5db', focusRingColor: '#00aeff'}} />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2" style={{color: '#1f2937'}}>Email</label>
                <input type="email" id="email" name="email" className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 transition-all" style={{borderColor: '#d1d5db'}} />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2" style={{color: '#1f2937'}}>Message</label>
                <textarea id="message" name="message" rows={5} className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 transition-all" style={{borderColor: '#d1d5db'}}></textarea>
              </div>
              <button type="submit" className="text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition duration-300" style={{backgroundColor: '#00aeff'}}>
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8" style={{color: '#00aeff'}}>Our Location</h2>
            <div className="space-y-6 mb-8">
              <p className="text-lg" style={{color: '#6b7280'}}>123 Tech Avenue, Suite 100<br/>Silicon Valley, CA 94000</p>
              <p className="text-lg" style={{color: '#6b7280'}}><strong style={{color: '#1f2937'}}>Phone:</strong> (123) 456-7890</p>
              <p className="text-lg" style={{color: '#6b7280'}}><strong style={{color: '#1f2937'}}>Email:</strong> info@nextlayer.com</p>
            </div>
            <div className="w-full h-64 rounded-xl shadow-lg flex items-center justify-center" style={{backgroundColor: '#f3f4f6'}}>
              <span style={{color: '#6b7280', fontSize: '18px'}}>Google Maps Embed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
