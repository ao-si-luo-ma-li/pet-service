import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { useRef, useState, useEffect } from 'react'

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
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const serviceEmoji = {
  habitat: '🏠',
  doorstep: '🚪',
  boarding: '💛',
  grooming: '✨',
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-earth-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80"
            alt="宠物"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900 via-earth-900/80 to-transparent" />
        </div>
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-40 w-60 h-60 bg-leaf-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/15 text-brand-300 text-xs font-medium rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
                上海专业宠物服务机构
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                让每一只宠物<br className="hidden md:block" />
                <span className="text-brand-400">都被专业守护</span>
              </h1>
              <p className="text-earth-300 text-base md:text-lg mb-10 leading-relaxed">
                场所设计 · 上门服务 · 个性寄养 · AI赋能美容<br />
                为养宠家庭提供全方位服务解决方案
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white text-sm font-medium rounded-lg hover:bg-brand-400 transition-all hover:shadow-lg hover:shadow-brand-500/25"
                >
                  浏览服务
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  登录 / 注册
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-earth-100">
            {[
              { num: '500+', label: '服务案例', color: 'text-brand-500' },
              { num: '98%', label: '客户满意度', color: 'text-leaf-600' },
              { num: '50+', label: '专业团队', color: 'text-brand-500' },
              { num: '7×24', label: '全天候服务', color: 'text-leaf-600' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 80}>
                <div className="text-center px-6 py-4">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.num}</div>
                  <div className="text-earth-400 text-xs">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 text-xs font-medium rounded-full mb-3">我们的服务</div>
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-2">四大核心服务</h2>
              <p className="text-earth-400 text-sm">一站式宠物服务解决方案</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-earth-200">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 80}>
                <Link
                  to={`/service/${service.id}`}
                  className="block p-8 border-b sm:border-b-0 sm:border-r border-earth-100 last:border-r-0
                             hover:bg-brand-50 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-brand-500 w-0 group-hover:w-full transition-all duration-300" />
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {serviceEmoji[service.id]}
                  </div>
                  <h3 className="font-bold text-earth-900 mb-2 text-sm group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-earth-400 text-xs leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-brand-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    了解详情
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Comparison */}
      <section className="py-16 md:py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 bg-white text-earth-600 text-xs font-medium rounded-full mb-3">核心优势</div>
              <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-2">为什么选择绰为腾</h2>
              <p className="text-earth-400 text-sm">专业 · 透明 · 用心</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-earth-200">
            <FadeIn delay={0}>
              <div className="bg-white p-10">
                <h3 className="font-bold text-earth-900 mb-1 text-sm">我们的服务优势</h3>
                <p className="text-xs text-earth-400 mb-6">Our Advantages</p>
                <ul className="space-y-3">
                  {[
                    '一站式宠物服务解决方案',
                    '专业团队持证上岗',
                    '服务全程视频记录可追溯',
                    '透明定价无隐形消费',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-leaf-100 text-leaf-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-earth-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-white p-10 border-t md:border-t-0 md:border-l border-earth-100">
                <h3 className="font-bold text-earth-900 mb-1 text-sm">为什么选择我们</h3>
                <p className="text-xs text-earth-400 mb-6">Why Choose Us</p>
                <ul className="space-y-3">
                  {[
                    '非笼养、非家庭式寄养模式',
                    '零交叉感染风险保障',
                    '环境熟悉宠物更放松',
                    '按需收费灵活选择',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-brand-100 text-brand-500 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-earth-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-block px-3 py-1 bg-brand-100 text-brand-600 text-xs font-medium rounded-full mb-4">
                  关于我们
                </div>
                <h2 className="text-2xl font-bold text-earth-900 mb-4">
                  上海绰为腾宠物服务有限公司
                </h2>
                <p className="text-earth-500 text-sm leading-relaxed mb-6">
                  我们深知宠物是家庭的一员，更是情感的寄托。因此，我们始终坚持"专业、爱心、责任"的服务理念，致力于为每一只宠物提供贴心、安全、高品质的服务体验。
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/about" className="text-brand-500 hover:text-brand-600 text-sm font-medium transition-colors flex items-center gap-1">
                    了解更多
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <Link to="/login" className="text-earth-400 hover:text-earth-600 text-sm transition-colors">
                    已有账号？登录 →
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '500+', label: '服务案例' },
                  { num: '98%', label: '客户满意度' },
                  { num: '50+', label: '专业团队成员' },
                  { num: '7×24', label: '全天候服务' },
                ].map(stat => (
                  <div key={stat.label} className="bg-brand-50 rounded-xl p-6 text-center hover:shadow-sm transition-shadow">
                    <div className="text-2xl font-bold text-brand-500 mb-1">{stat.num}</div>
                    <div className="text-earth-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-earth-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-leaf-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              准备好体验我们的服务？
            </h2>
            <p className="text-earth-400 text-sm mb-8">
              注册账号，享受专属宠物服务，开启宠物服务之旅
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/register"
                className="px-8 py-3 bg-brand-500 text-white font-bold rounded-lg hover:bg-brand-400 transition-all hover:shadow-lg hover:shadow-brand-500/25"
              >
                立即注册 →
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 bg-transparent text-white font-medium rounded-lg border border-earth-600 hover:border-white/40 hover:bg-white/10 transition-colors"
              >
                查看全部服务
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
