import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import ServiceIcon from '../components/ServiceIcon'
import { useEffect } from 'react'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find(s => s.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-earth-900 mb-4">服务未找到</h2>
          <Link to="/services" className="btn-primary">返回服务列表</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/85 to-earth-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="tag-pill mb-4 !bg-brand-500/20 !text-brand-200 border border-brand-400/30">
              服务项目
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-earth-100 text-lg leading-relaxed mb-8">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.highlights.map(h => (
                <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/10">
                  <svg className="w-3.5 h-3.5 text-brand-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">服务详情</h2>
            <p className="section-subtitle">专业、细致、个性化的服务体验</p>
          </div>

          <div className="space-y-16">
            {service.features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-500 flex items-center justify-center text-lg font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl font-bold text-earth-900">{feature.title}</h3>
                  </div>
                  <p className="text-earth-500 text-lg leading-relaxed">{feature.desc}</p>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-sm ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">服务流程</h2>
            <p className="section-subtitle">简单五步，轻松享受专业服务</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="card p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-earth-900 mb-2">{item.title}</h4>
                  <p className="text-earth-500 text-sm">{item.desc}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-brand-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-earth-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-earth-900 mb-4">
            想体验我们的服务？
          </h2>
          <p className="text-earth-500 text-lg mb-8">
            点击下方按钮，立即联系我们获取 {service.shortTitle} 服务报价与方案定制。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary !py-4 !px-8">
              立即预约 →
            </Link>
            <Link to="/services" className="btn-secondary !py-4 !px-8">
              查看其他服务
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
