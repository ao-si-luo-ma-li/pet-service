import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
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
          <Link to="/services" className="px-6 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">返回服务列表</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-10 bg-white border-b border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-earth-400 mb-4">
            <Link to="/" className="hover:text-brand-500 transition-colors">首页</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-brand-500 transition-colors">服务项目</Link>
            <span>/</span>
            <span className="text-earth-600">{service.title}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-earth-900 mb-3">{service.title}</h1>
          <p className="text-earth-500 text-sm max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Features - Clean 2-column layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {service.features.map((feature, index) => (
              <div key={feature.title} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-brand-500">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-xl font-bold text-earth-900">{feature.title}</h3>
                  </div>
                  <p className="text-earth-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img src={feature.image} alt={feature.title} className="w-full h-56 object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-brand-50 border-y border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-earth-900 mb-6">服务亮点</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.highlights.map(h => (
              <div key={h} className="flex items-start gap-2">
                <span className="text-brand-500 mt-0.5">✓</span>
                <span className="text-earth-600 text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-earth-900 mb-8">服务流程</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {service.process.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {index + 1}
                </div>
                <div className="text-sm font-medium text-earth-900 mb-1">{item.title}</div>
                <div className="text-xs text-earth-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-earth-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-earth-300 text-sm mb-6">想体验 {service.title}？</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/register" className="px-6 py-2.5 bg-brand-500 text-white text-sm font-medium rounded-lg hover:bg-brand-600 transition-colors">
              立即预约 →
            </Link>
            <Link to="/services" className="px-6 py-2.5 bg-transparent text-white text-sm font-medium rounded-lg border border-earth-600 hover:bg-white/10 transition-colors">
              查看其他服务
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
