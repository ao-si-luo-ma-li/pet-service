import { Link } from 'react-router-dom'

const values = [
  {
    title: '爱与责任',
    desc: '我们对待每一只宠物如同家人，用爱与责任守护它们的健康与快乐。',
    icon: '❤️',
  },
  {
    title: '专业专注',
    desc: '深耕宠物服务行业，持续学习国际先进理念，不断提升专业服务水平。',
    icon: '🎯',
  },
  {
    title: '诚信透明',
    desc: '价格公开透明，服务全程记录，用真诚赢得每一位客户的信任。',
    icon: '🤝',
  },
  {
    title: '持续创新',
    desc: '积极引入新技术、新方案，为宠物与主人带来更优质的服务体验。',
    icon: '✨',
  },
]

const team = [
  {
    name: '张明',
    role: '创始人 & CEO',
    desc: '资深宠物行业从业者，15年宠物店运营管理经验。',
    avatar: '👨‍💼',
  },
  {
    name: '李娜',
    role: '首席宠物护理师',
    desc: '国家认证宠物美容师，擅长各类犬种美容造型。',
    avatar: '👩‍🎨',
  },
  {
    name: '王强',
    role: '空间设计师',
    desc: '专业宠物场所设计师，主导设计超过100个宠物空间项目。',
    avatar: '👨‍🎨',
  },
  {
    name: '陈芳',
    role: '客户服务总监',
    desc: '宠物心理咨询师，专注提升宠物与主人的服务体验。',
    avatar: '👩‍💼',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill mb-4">关于我们</div>
          <h1 className="section-title">上海绰为腾宠物服务有限公司</h1>
          <p className="section-subtitle">
            用专业守护爱宠，用爱心陪伴每一程
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                alt="我们的故事"
                className="rounded-2xl shadow-md w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-earth-900 mb-6">我们的故事</h2>
              <div className="space-y-4 text-earth-500 leading-relaxed">
                <p>
                  上海绰为腾宠物服务有限公司成立于上海，是一家专注于为养宠家庭提供全方位、专业化宠物服务的创新型企业。
                </p>
                <p>
                  我们深知，宠物不仅是家庭的一员，更是主人情感的寄托。因此，我们始终坚持"专业、爱心、责任"的服务理念，致力于为每一只宠物提供最贴心、最安全、最高品质的服务体验。
                </p>
                <p>
                  从宠物饲养场所的精心设计，到上门服务的便捷贴心；从个性化寄养的温暖陪伴，到AI赋能美容的科技创新——我们用多元化的服务矩阵，满足不同养宠家庭的多样化需求。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">我们的价值观</h2>
            <p className="section-subtitle">指导我们每一次服务背后的核心理念</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-earth-900 mb-2">{v.title}</h3>
                <p className="text-earth-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">核心团队</h2>
            <p className="section-subtitle">一群热爱动物的专业人士，为您的爱宠保驾护航</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(t => (
              <div key={t.name} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center text-4xl mx-auto mb-4">
                  {t.avatar}
                </div>
                <h4 className="font-bold text-earth-900 mb-1">{t.name}</h4>
                <div className="text-brand-500 text-sm font-medium mb-3">{t.role}</div>
                <p className="text-earth-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-500 to-brand-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">期待与您相遇</h2>
          <p className="text-brand-100 text-lg mb-8">
            无论您有任何宠物服务需求，我们都随时准备为您提供帮助。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-600 font-bold rounded-lg hover:bg-brand-50 transition-all shadow-lg"
          >
            联系我们 →
          </Link>
        </div>
      </section>
    </>
  )
}
