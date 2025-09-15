import Link from 'next/link';
import Image from 'next/image';
import { menuItems, MenuItem } from '@/data/menuItem'; // adjust the path as needed
import Logo from '@/assets/tiar/logo.svg';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-brand-900/30 text-gray-800 relative overflow-hidden">
      {/* Subtle pattern overlay for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo & Contact */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image src={Logo} alt="logo" width={150} height={150} />
          </div>
          <p className="text-sm text-gray-900 mb-4 leading-relaxed">
          Leading the way to a future of zero-emission mobility.
          </p>
          <div className="text-sm space-y-2 text-gray-900">
            <p className="flex items-start gap-2">
              <span className="text-brand-600">📍</span>
              <span>Jl. Benda, Jl. H. Sainin no. 39 Kemang, Jakarta Selatan 12560 Indonesia</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brand-600">📞</span>
              <span>+1 (412) 983-3798 (Indonesia)</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-brand-600">✉️</span>
              <span>support@tiar.ai</span>
            </p>
          </div>
        </div>

        {/* Dynamic Menu Columns */}
        {Object.entries(menuItems).map(([sectionKey, items]) => (
          <div key={sectionKey}>
            <h4 className="text-lg font-semibold mb-4 capitalize text-gray-800">
              {sectionKey === 'aboutUs' ? 'About Us'
                : sectionKey === 'useCase' ? 'Use Cases'
                : sectionKey === 'offerings' ? 'Offerings'
                : sectionKey === 'resources' ? 'Resources'
                : sectionKey}
            </h4>
            <ul className="space-y-2">
              {items.map((item: MenuItem) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-800 hover:text-brand-500 transition-colors duration-200 inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-brand-300/40 py-6 text-center text-sm text-gray-600 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          &copy; {new Date().getFullYear()} Tiar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
