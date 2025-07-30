
import { Cloud, Shield, BarChart, Settings } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: <Cloud size={48} style={{color: '#00aeff'}} />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert guidance.',
    },
    {
      icon: <Shield size={48} style={{color: '#00aeff'}} />,
      title: 'Cybersecurity Consulting',
      description: 'Protect your digital assets with our comprehensive cybersecurity solutions.',
    },
    {
      icon: <BarChart size={48} style={{color: '#00aeff'}} />,
      title: 'IT Strategy',
      description: 'Develop a technology roadmap that aligns with your business goals.',
    },
    {
      icon: <Settings size={48} style={{color: '#00aeff'}} />,
      title: 'Managed Services',
      description: 'Offload your IT management to our team of experts and focus on your core business.',
    },
  ]

  return (
    <div className="py-20" style={{backgroundColor: '#f8fafc'}}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-16" style={{color: '#1f2937'}}>Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#1f2937'}}>{service.title}</h2>
              <p style={{color: '#6b7280'}}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
