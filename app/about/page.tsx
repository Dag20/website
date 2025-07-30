
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="py-20" style={{backgroundColor: '#f8fafc'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6" style={{color: '#1f2937'}}>About NextLayer Solutions</h1>
          <p className="text-2xl" style={{color: '#6b7280'}}>Your Partner in Digital Transformation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6" style={{color: '#00aeff'}}>Our Mission</h2>
            <p className="text-lg mb-8" style={{color: '#6b7280'}}>To empower businesses with innovative and secure IT solutions that drive growth and efficiency. We are committed to delivering excellence and building long-term partnerships with our clients.</p>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#00aeff'}}>Our Vision</h2>
            <p className="text-lg" style={{color: '#6b7280'}}>To be a leading IT consulting firm, recognized for our expertise, integrity, and commitment to client success.</p>
          </div>
          <div>
            <div className="bg-gray-300 rounded-2xl shadow-lg" style={{width: '600px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: '#6b7280', fontSize: '18px'}}>Our Team Image</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-16" style={{color: '#1f2937'}}>Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span style={{color: '#6b7280'}}>JD</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#1f2937'}}>Jane Doe</h3>
              <p style={{color: '#00aeff'}}>CEO & Founder</p>
            </div>
            <div className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span style={{color: '#6b7280'}}>JS</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#1f2937'}}>John Smith</h3>
              <p style={{color: '#00aeff'}}>CTO</p>
            </div>
            <div className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span style={{color: '#6b7280'}}>PJ</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#1f2937'}}>Peter Jones</h3>
              <p style={{color: '#00aeff'}}>Lead Consultant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
