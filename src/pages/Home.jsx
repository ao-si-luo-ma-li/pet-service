import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-earth-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&q=80"
            alt="宠物"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-2xl">
            让每一只宠物<br className="hidden md:block" />都被专业守护
          </h1>
          <p className="text-earth-200 text-base md:text-lg mb-8 max-w-xl">
            上海绰为腾宠物服务有限公司，为养宠家庭提供全方位宠物服务解决方案。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/services" className="px-6 py-2.5 bg-brand-500 text-white text-sm font-medium rounded-lg hover:bg-brand-600 transition-colors">
              浏览服务 →
            </Link>
            <Link to="/register" className="px-6 py-2.5 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              登录 / 注册
            </Link>
          </div>
        </div>
      </section>

      {/* Services - Clean Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-earth-900 mb-2">我们的服务</h2>
          <p className="text-earth-500 text-sm mb-10">Our Services</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-earth-200 border border-earth-200">
            {services.map(service => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="bg-white p-8 hover:bg-brand-50 transition-colors group"
              >
                <div className="text-3xl mb-4">{
                  service.id === 'habitat' ? '🏠' :
                  service.id === 'doorstep' ? '🚪' :
                  service.id === 'boarding' ? '💛' :
                  '✨'
                }</div>
                <h3 className="font-bold text-earth-900 mb-1 text-sm group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-earth-400 text-xs leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Clean Comparison */}
      <section className="py-16 bg-brand-50 border-y border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-white p-10 md:border-r border-earth-100">
              <h3 className="font-bold text-earth-900 mb-1">我们的服务优势</h3>
              <p className="text-xs text-earth-400 mb-6">Our Advantages</p>
              <ul className="space-y-3">
                {[
                  '一站式宠物服务解决方案',
                  '专业团队持证上岗',
                  '服务全程视频记录可追溯',
                  '透明定价无隐形消费',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-leaf-500 mt-0.5">✓</span>
                    <span className="text-earth-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10">
              <h3 className="font-bold text-earth-900 mb-1">为什么选择我们</h3>
              <p className="text-xs text-earth-400 mb-6">Why Choose Us</p>
              <ul className="space-y-3">
                {[
                  '非笼养、非家庭式寄养模式',
                  '零交叉感染风险保障',
                  '环境熟悉宠物更放松',
                  '按需收费灵活选择',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-500 mt-0.5">✓</span>
                    <span className="text-earth-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-earth-900 mb-3">上海绰为腾宠物服务有限公司</h2>
              <p className="text-earth-500 text-sm leading-relaxed mb-6">
                我们深知宠物是家庭的一员，更是情感的寄托。因此，我们始终坚持"专业、爱心、责任"的服务理念，致力于为每一只宠物提供贴心、安全、高品质的服务体验。
              </p>
              <Link to="/about" className="text-brand-500 hover:text-brand-600 text-sm font-medium transition-colors">
                了解更多关于我们 →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '500+', label: '服务案例' },
                { num: '98%', label: '客户满意度' },
                { num: '50+', label: '专业团队成员' },
                { num: '7×24', label: '全天候服务' },
              ].map(stat => (
                <div key={stat.label} className="text-center p-6 bg-brand-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-500 mb-1">{stat.num}</div>
                  <div className="text-earth-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-earth-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">准备好体验我们的服务？</h2>
          <p className="text-earth-400 text-sm mb-8">注册账号，享受专属宠物服务</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/register" className="px-6 py-2.5 bg-brand-500 text-white text-sm font-medium rounded-lg hover:bg-brand-600 transition-colors">
              立即注册 →
            </Link>
            <Link to="/services" className="px-6 py-2.5 bg-transparent text-white text-sm font-medium rounded-lg border border-earth-600 hover:bg-white/10 transition-colors">
              查看全部服务
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
