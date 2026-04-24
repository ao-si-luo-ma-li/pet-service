import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ServiceIcon from '../components/ServiceIcon'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill mb-4">全部服务</div>
          <h1 className="section-title">四大核心服务</h1>
          <p className="section-subtitle">
            为宠物主人提供一站式、全方位、高品质的服务解决方案
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`card overflow-hidden ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 h-64 md:h-80 relative">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/20 to-transparent" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl p-2"
                      style={{ backgroundColor: '#FFF3E6', color: '#E67E22' }}
                    >
                      <ServiceIcon type={service.icon} />
                    </div>
                    <h3 className="text-xl font-bold text-earth-900">{service.title}</h3>
                  </div>
                  <p className="text-earth-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.highlights.map(h => (
                      <li key={h} className="flex items-center gap-2 text-sm text-earth-600">
                        <svg className="w-4 h-4 text-leaf-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/service/${service.id}`}
                    className="btn-primary w-fit"
                  >
                    查看详情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
