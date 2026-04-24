import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { useRef, useState, useEffect } from 'react'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.06 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className="transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// Service card with hover detail
function ServiceCard({ service, index }) {
  const emojis = { habitat: '🏠', doorstep: '🚪', boarding: '💛', grooming: '✨' }
  const colors = {
    habitat: { bg: '#FFF7ED', border: '#FED7AA', text: '#C2410C', dot: '#F97316' },
    doorstep: { bg: '#F0FDF4', border: '#BBF7D0', text: '#15803D', dot: '#22C55E' },
    boarding: { bg: '#FFF7F7', border: '#FED7E2', text: '#9D174D', dot: '#F43F5E' },
    grooming: { bg: '#EFF6FF', border: '#BFDBFE', text: '#1D4ED8', dot: '#3B82F6' },
  }
  const c = colors[service.id] || colors.grooming

  return (
    <FadeIn delay={index * 100}>
      <Link
        to={`/service/${service.id}`}
        className="group block bg-white rounded-2xl border border-earth-100 overflow-hidden
                   hover:shadow-xl hover:shadow-earth-900/5 transition-all duration-500 hover:-translate-y-1"
      >
        {/* Color accent bar */}
        <div className="h-1" style={{ background: c.dot }} />

        <div className="p-7">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="w-12 h-12 rounded-1.5xl flex items-center justify-center text-2xl"
              style={{ background: c.bg }}>
              {emojis[service.id]}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
              <svg className="w-5 h-5" style={{ color: c.dot }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-earth-900 mb-2 text-base group-hover:transition-colors"
            style={{ color: c.text }}>
            {service.title}
          </h3>

          {/* Description - shown on hover */}
          <p className="text-earth-400 text-xs leading-relaxed mb-5 line-clamp-3">
            {service.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5">
            {service.highlights.slice(0, 2).map(h => (
              <div key={h} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: c.dot }} />
                <span className="text-earth-500 text-xs">{h}</span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-5 pt-4 border-t border-earth-100 flex items-center justify-between">
            <span className="text-xs font-medium" style={{ color: c.text }}>
              查看详情
            </span>
            <div className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-8"
              style={{ background: c.bg, color: c.dot }}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#0C0A09' }}>
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1800&q=85"
            alt="宠物"
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-earth-900/90 to-earth-900/50" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(230,126,34,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <FadeIn>
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-medium"
                style={{ background: 'rgba(230,126,34,0.15)', color: '#FB923C', border: '1px solid rgba(230,126,34,0.3)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                专注宠物服务 · 上海
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-6 tracking-tight">
                每一只宠物<br />
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #FB923C, #FBBF24)' }}>
                  都值得被专业守护
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-earth-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                上海绰为腾宠物服务有限公司，为养宠家庭提供场所设计、上门服务、个性寄养、AI赋能美容等全方位解决方案。
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg"
                  style={{ background: '#E67E22' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#C96A1A'}
                  onMouseLeave={e => e.currentTarget.style.background = '#E67E22'}
                >
                  浏览全部服务
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-white transition-all duration-200 border border-white/20 hover:bg-white/10"
                >
                  登录 / 注册
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Floating service pills */}
          <FadeIn delay={200}>
            <div className="flex flex-wrap gap-3 mt-14 max-w-2xl">
              {[
                { label: '场所设计', icon: '🏠' },
                { label: '上门服务', icon: '🚪' },
                { label: '个性寄养', icon: '💛' },
                { label: 'AI美容', icon: '✨' },
              ].map(item => (
                <Link
                  key={item.label}
                  to="/services"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.06)', color: '#D6D3D1', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats bar */}
      <section className="bg-white -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-earth-100">
            {[
              { num: '500+', label: '服务案例', accent: '#E67E22' },
              { num: '98%', label: '客户满意度', accent: '#22C55E' },
              { num: '50+', label: '专业团队', accent: '#E67E22' },
              { num: '7×24', label: '全天候服务', accent: '#22C55E' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 60}>
                <div className="py-8 text-center px-4">
                  <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: stat.accent }}>
                    {stat.num}
                  </div>
                  <div className="text-earth-400 text-xs">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                style={{ background: '#FFF7ED', color: '#C2410C' }}>
                专业服务
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-1">
                    四大服务，为爱宠护航
                  </h2>
                  <p className="text-earth-400 text-sm">从设计到护理，一站式解决方案</p>
                </div>
                <Link to="/services" className="hidden md:flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors">
                  查看全部
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="mt-8 text-center md:hidden">
              <Link to="/services" className="text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors">
                查看全部服务 →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AI Grooming Feature Spotlight */}
      <section className="py-16 md:py-20 overflow-hidden" style={{ background: '#0C0A09' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-5"
                  style={{ background: 'rgba(59,130,246,0.15)', color: '#93C5FD' }}>
                  <span>✨</span> 核心服务亮点
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  AI赋能<br />宠物美容新时代
                </h2>
                <p className="text-earth-400 text-sm leading-relaxed mb-6">
                  融合宠智灵宠物AI大模型与传统美容技艺，通过多模态视觉识别、情绪分析与健康评估，为每只宠物量身定制最合适的护理方案。
                </p>

                {/* Feature list */}
                <div className="space-y-3 mb-8">
                  {[
                    { icon: '🎯', text: '皮肤病识别准确率超97%' },
                    { icon: '😊', text: '情绪识别，3秒内响应' },
                    { icon: '📋', text: '个性化护理方案智能推荐' },
                    { icon: '📁', text: '美容健康档案全周期管理' },
                  ].map(item => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-earth-300 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/service/grooming"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg"
                  style={{ background: '#3B82F6' }}
                >
                  了解AI美容详情
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(168,85,247,0.1))', transform: 'scale(1.05)' }} />
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80"
                  alt="AI宠物美容"
                  className="relative w-full h-80 object-cover rounded-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl shadow-xl"
                  style={{ background: '#1E3A5F' }}>
                  <div className="text-white text-xs font-medium mb-1">准确率</div>
                  <div className="text-2xl font-bold text-blue-400">97%+</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
                  alt="关于我们"
                  className="w-full h-72 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl flex items-center justify-center text-5xl shadow-lg"
                  style={{ background: '#FFF7ED' }}>
                  🐾
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{ background: '#FFF7ED', color: '#C2410C' }}>
                  关于我们
                </div>
                <h2 className="text-2xl font-bold text-earth-900 mb-4">
                  上海绰为腾宠物服务有限公司
                </h2>
                <p className="text-earth-500 text-sm leading-relaxed mb-5">
                  我们深知宠物是家庭的一员，更是情感的寄托。因此，我们始终坚持"专业、爱心、责任"的服务理念，致力于为每一只宠物提供贴心、安全、高品质的服务体验。
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: '专业团队', desc: '持证上岗，定期培训' },
                    { label: '安全至上', desc: '视频记录，全程可追溯' },
                    { label: '透明定价', desc: '无隐形消费，明码标价' },
                    { label: '个性化', desc: '尊重每只宠物独特需求' },
                  ].map(item => (
                    <div key={item.label} className="p-3 rounded-xl" style={{ background: '#FAFAF9' }}>
                      <div className="text-xs font-bold text-earth-900 mb-0.5">{item.label}</div>
                      <div className="text-xs text-earth-400">{item.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Link to="/about" className="text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors">
                    了解更多 →
                  </Link>
                  <Link to="/login" className="text-sm text-earth-400 hover:text-earth-600 transition-colors">
                    已有账号？登录
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E67E22, #C2410C)' }}>
        {/* Decorative */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <div className="text-4xl mb-4">🐾</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              准备好开启宠物服务之旅？
            </h2>
            <p className="text-orange-100 text-sm mb-8">
              注册账号，免费预约体验 · 专属服务顾问全程跟进
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/register"
                className="px-8 py-3.5 bg-white text-brand-600 font-bold rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
              >
                立即注册免费体验 →
              </Link>
              <Link
                to="/services"
                className="px-8 py-3.5 bg-transparent text-white font-medium rounded-xl border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-colors"
              >
                浏览服务
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
