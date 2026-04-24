import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import { useEffect, useRef, useState } from 'react'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const serviceIcons = {
  habitat: '🏠',
  doorstep: '🚪',
  boarding: '💛',
  grooming: '✨',
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find(s => s.id === id)
  const isAI = id === 'grooming'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-earth-900 mb-4">服务未找到</h2>
          <Link to="/services" className="px-6 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors inline-block">
            返回服务列表
          </Link>
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
          <div className="flex items-start gap-4">
            <span className="text-4xl">{serviceIcons[id] || '🐾'}</span>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-earth-900 mb-3">{service.title}</h1>
              <p className="text-earth-500 text-sm max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI: Pain Points */}
      {isAI && service.painPoints && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full mb-3">行业痛点</div>
                <h2 className="text-2xl font-bold text-earth-900 mb-2">宠物美容门店面临的挑战</h2>
                <p className="text-earth-400 text-sm">传统美容洗护门店的数字化转型痛点</p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.painPoints.map((p, i) => (
                <FadeIn key={p.title} delay={i * 80}>
                  <div className="bg-red-50 border border-red-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-3">{p.icon}</div>
                    <h4 className="font-bold text-earth-900 text-sm mb-2">{p.title}</h4>
                    <p className="text-earth-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 text-xs font-medium rounded-full mb-3">智能应用场景</div>
              <h2 className="text-2xl font-bold text-earth-900 mb-2">五大AI智能应用场景</h2>
              <p className="text-earth-400 text-sm">有效解决行业痛点，提升服务品质与运营效率</p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {service.features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 60}>
                <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-earth-100 hover:shadow-md transition-shadow ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } flex flex-col lg:flex-row`}>
                  <div className="lg:w-1/2 h-56 lg:h-72 relative overflow-hidden group">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-brand-500 text-white text-xs font-medium rounded-full">
                        {feature.badge}
                      </span>
                    </div>
                  </div>
                  <div className={`lg:w-1/2 p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-500 flex items-center justify-center text-sm font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-lg font-bold text-earth-900">{feature.title}</h3>
                    </div>
                    <p className="text-earth-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantages */}
      {isAI && service.advantages && (
        <section className="py-16 bg-earth-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 bg-brand-500/20 text-brand-300 text-xs font-medium rounded-full mb-3">技术优势</div>
                <h2 className="text-2xl font-bold text-white mb-2">宠智灵AI核心优势</h2>
                <p className="text-earth-400 text-sm">技术领先 · 全面覆盖 · 灵活部署 · 效率可见</p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.advantages.map((adv, i) => (
                <FadeIn key={adv.title} delay={i * 80}>
                  <div className="bg-earth-800 rounded-xl p-6 border border-earth-700 hover:border-brand-500/40 transition-colors group">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{adv.icon}</div>
                    <h4 className="font-bold text-white text-sm mb-2">{adv.title}</h4>
                    <p className="text-earth-400 text-xs leading-relaxed">{adv.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights + Process */}
      <section className={`py-16 ${isAI ? 'bg-white' : 'bg-brand-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Highlights */}
            <FadeIn>
              <div>
                <h3 className="font-bold text-earth-900 mb-1">服务亮点</h3>
                <p className="text-xs text-earth-400 mb-6">Service Highlights</p>
                <div className="space-y-3">
                  {service.highlights.map(h => (
                    <div key={h} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-leaf-100 text-leaf-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-earth-600 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Process */}
            <FadeIn delay={150}>
              <div>
                <h3 className="font-bold text-earth-900 mb-1">服务流程</h3>
                <p className="text-xs text-earth-400 mb-6">Service Process</p>
                <div className="space-y-4">
                  {service.process.map((item, index) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        {index < service.process.length - 1 && (
                          <div className="absolute top-9 left-1/2 w-px h-5 bg-brand-200 -translate-x-1/2" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-earth-900">{item.title}</div>
                        <div className="text-xs text-earth-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-brand-500 to-brand-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {isAI ? '体验AI赋能宠物美容新时代' : `体验 ${service.shortTitle} 服务`}
          </h2>
          <p className="text-brand-100 text-sm mb-8">
            {isAI ? '洗护时间缩短20%，客户满意度显著提升' : '立即注册，开启专业宠物服务之旅'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-brand-600 font-bold rounded-lg hover:bg-brand-50 transition-colors shadow-sm"
            >
              立即预约 →
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-colors"
            >
              查看其他服务
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
