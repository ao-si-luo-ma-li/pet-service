import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ServiceIcon from '../components/ServiceIcon'

const stats = [
  { value: '500+', label: '服务案例' },
  { value: '98%', label: '客户满意度' },
  { value: '50+', label: '专业团队成员' },
  { value: '7×24', label: '全天候服务' },
]

const whyUs = [
  {
    title: '专业团队',
    desc: '所有服务人员均经过严格培训，持证上岗，用专业守护每一只宠物。',
    emoji: '🎓',
  },
  {
    title: '安全至上',
    desc: '采用宠物友好型产品，全程视频记录，让主人安心托付。',
    emoji: '🛡️',
  },
  {
    title: '个性化服务',
    desc: '尊重每只宠物的独特性格，量身定制专属服务方案。',
    emoji: '💛',
  },
  {
    title: '透明定价',
    desc: '价格公开透明，无隐形消费，让每一分钱都花得明明白白。',
    emoji: '💰',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80"
            alt="可爱宠物"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/80 via-earth-900/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="tag-pill mb-6 !bg-brand-500/20 !text-brand-200 border border-brand-400/30">
              🐾 上海专业宠物服务机构
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              让每一份爱
              <br />
              <span className="text-brand-300">都有专业守护</span>
            </h1>
            <p className="text-earth-100 text-lg sm:text-xl leading-relaxed mb-10">
              上海绰为腾宠物服务有限公司，专注提供宠物场所设计、上门服务、个性化寄养、AI赋能美容等全方位解决方案，用心服务每一个养宠家庭。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary !bg-brand-500 hover:!bg-brand-600 !text-white !py-4 !px-8 text-base">
                浏览服务项目 →
              </Link>
              <Link to="/contact" className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20 !py-4 !px-8 text-base">
                立即预约
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-500 mb-1">{stat.value}</div>
                <div className="text-earth-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="tag-pill mb-4">我们的服务</div>
            <h2 className="section-title">四大核心服务，为爱宠护航</h2>
            <p className="section-subtitle">
              从空间设计到日常照护，从个性化寄养到智能美容，我们用专业与爱心陪伴每一只宠物。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="card p-6 group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-${service.color}-100 text-${service.color}-500 mb-5 p-3 group-hover:scale-110 transition-transform duration-300`}
                  style={{ backgroundColor: '#FFF3E6', color: '#E67E22' }}>
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="font-bold text-earth-900 mb-2 text-base leading-snug">
                  {service.title}
                </h3>
                <p className="text-earth-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center text-brand-500 text-sm font-medium group-hover:gap-2 transition-all">
                  了解更多
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag-pill mb-4">为什么选择我们</div>
              <h2 className="text-3xl md:text-4xl font-bold text-earth-900 mb-6 leading-tight">
                因为爱，所以
                <br />更专业
              </h2>
              <p className="text-earth-500 text-lg leading-relaxed mb-10">
                我们不仅是一家宠物服务公司，更是一群热爱动物的人。我们相信，每一只宠物都是家庭成员，值得被最好的方式对待。
              </p>
              <Link to="/about" className="btn-secondary">
                了解更多 →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUs.map(item => (
                <div key={item.title} className="card p-6">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h4 className="font-bold text-earth-900 mb-2">{item.title}</h4>
                  <p className="text-earth-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-500 to-brand-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好为您的宠物选择最好的了吗？
          </h2>
          <p className="text-brand-100 text-lg mb-10">
            立即联系我们，获取专属服务方案。让您的爱宠享受专业、温暖、贴心的照护服务。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-brand-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              立即预约服务
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200">
              查看全部服务
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
