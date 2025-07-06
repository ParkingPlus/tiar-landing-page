import Link from 'next/link';
import Image from 'next/image';
import { menuItems } from '@/data/menuItem'; // adjust the path as needed
import Logo from '@/assets/tiar/logo-dark.svg';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-800 to-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo & Contact */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image src={Logo} alt="logo" width={150} height={150} />
          </div>
          <p className="text-sm text-white/80 mb-4">
          Leading the way to a future of zero-emission mobility.
          </p>
          <div className="text-sm space-y-2 text-white/80">
            <p>
              📍 Jl Benda, Jl. H. Sainin, Ps. Minggu, Kota Jakarta Selatan, 12560
            </p>
            <p>
              📞 +62 812 3456 7890 (Indonesia)
            </p>
            <p>
              ✉️ contact@tiar.id
            </p>
          </div>
        </div>

        {/* Dynamic Menu Columns */}
        {Object.entries(menuItems).map(([sectionKey, items]) => (
          <div key={sectionKey}>
            <h4 className="text-lg font-semibold mb-4 capitalize">
              {sectionKey === 'aboutUs' ? 'About Us'
                : sectionKey === 'useCase' ? 'Use Cases'
                : sectionKey === 'offerings' ? 'Offerings'
                : sectionKey === 'resources' ? 'Resources'
                : sectionKey}
            </h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
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
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/60 bg-brand-900">
        &copy; {new Date().getFullYear()} Tiar. All rights reserved.
      </div>
    </footer>
  );
}
