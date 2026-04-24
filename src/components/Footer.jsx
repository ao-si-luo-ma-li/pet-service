const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#E67E22"/>
    <ellipse cx="12" cy="11" rx="3" ry="4" fill="white" opacity="0.9"/>
    <ellipse cx="24" cy="11" rx="3" ry="4" fill="white" opacity="0.9"/>
    <ellipse cx="10" cy="21" rx="4" ry="5" fill="white" opacity="0.9"/>
    <ellipse cx="26" cy="21" rx="4" ry="5" fill="white" opacity="0.9"/>
    <ellipse cx="18" cy="22" rx="5" ry="6" fill="white" opacity="0.9"/>
  </svg>
)

const footerLinks = {
  services: {
    title: '服务项目',
    links: [
      { label: '场所搭建设计', to: '/service/habitat' },
      { label: '上门服务定制', to: '/service/doorstep' },
      { label: '个性化寄养', to: '/service/boarding' },
      { label: 'AI赋能美容', to: '/service/grooming' },
    ],
  },
  company: {
    title: '关于我们',
    links: [
      { label: '公司简介', to: '/about' },
      { label: '服务理念', to: '/about' },
      { label: '用户登录', to: '/login' },
      { label: '用户注册', to: '/register' },
    ],
  },
  contact: {
    title: '联系信息',
    info: [
      { label: '📍 上海市', icon: 'location' },
      { label: '🏢 上海绰为腾宠物服务有限公司', icon: 'company' },
      { label: '📧 service@chuoweiten.com', icon: 'email' },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon />
              <span className="font-bold text-lg text-white">绰为腾宠物</span>
            </div>
            <p className="text-earth-400 text-sm leading-relaxed">
              每一份爱，都值得专业守护。我们致力于为每一位宠物主人提供安心、放心、贴心的宠物服务解决方案。
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {footerLinks.services.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.links.map(link => (
                <li key={link.to}>
                  <a href={`#${link.to}`} className="text-earth-400 hover:text-brand-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map(link => (
                <li key={link.to}>
                  <a href={`#${link.to}`} className="text-earth-400 hover:text-brand-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {footerLinks.contact.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.contact.info.map((item, i) => (
                <li key={i} className="text-earth-400 text-sm flex items-start gap-2">
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-earth-500 text-sm">
            © {new Date().getFullYear()} 上海绰为腾宠物服务有限公司 版权所有
          </p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-earth-500 text-sm hover:text-brand-400 transition-colors"
          >
            沪ICP备2023019413号-1
          </a>
        </div>
      </div>
    </footer>
  )
}
