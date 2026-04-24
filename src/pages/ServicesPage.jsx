import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-earth-900 mb-3">服务项目</h1>
          <p className="text-earth-500">专业 · 透明 · 用心</p>
        </div>
      </section>

      {/* Service Comparison - 2x2 Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-earth-200">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white px-10 py-12 flex flex-col ${
                  index % 2 === 1 ? 'md:border-l-0' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-xl font-bold text-earth-900 mb-1">{service.title}</h2>
                    <p className="text-sm text-earth-400">{service.shortTitle} · Pet Service</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-500 font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-8 flex-1">
                  {service.highlights.map(h => (
                    <li key={h} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-earth-600 text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Image + CTA */}
                <div>
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-48 object-cover mb-6"
                  />
                  <Link
                    to={`/service/${service.id}`}
                    className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 text-sm font-medium transition-colors"
                  >
                    查看详情
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Clean Comparison */}
      <section className="py-16 bg-brand-50 border-y border-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* 上门服务 */}
            <div className="bg-white p-10 md:border-r border-earth-100">
              <h3 className="text-xl font-bold text-earth-900 mb-1">我们的服务</h3>
              <p className="text-sm text-earth-400 mb-8">Our Services</p>
              <ul className="space-y-4">
                {[
                  '一站式宠物服务解决方案',
                  '专业团队持证上岗',
                  '服务全程视频记录可追溯',
                  '透明定价无隐形消费',
                  '7×24小时应急响应',
                  '个性化定制服务方案',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-leaf-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-earth-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why us */}
            <div className="bg-white p-10">
              <h3 className="text-xl font-bold text-earth-900 mb-1">为什么选择我们</h3>
              <p className="text-sm text-earth-400 mb-8">Why Choose Us</p>
              <ul className="space-y-4">
                {[
                  '非笼养、非家庭式寄养',
                  '无交叉感染风险',
                  '无应激反应担忧',
                  '环境熟悉宠物更放松',
                  '专业品控流程标准化',
                  '按需收费灵活选择',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-earth-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-earth-500 mb-6">如有疑问，欢迎联系咨询</p>
          <Link to="/login" className="inline-flex items-center justify-center px-8 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 transition-colors">
            立即预约服务 →
          </Link>
        </div>
      </section>
    </>
  )
}
