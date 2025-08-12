import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import LogoDark from '@/assets/tiar/logo-dark.svg';
import { CPopupButton } from '@/components/contact/Calendly';

interface MenuItem {
  href: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface MegaMenuProps {
  title: string;
  items: MenuItem[];
  showBrand?: boolean;
  columns?: number;
  className?: string;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "group block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-amber-400 hover:shadow-sm focus:bg-amber-500 focus:shadow-sm focus:text-white",
        "w-full",
        className
      )}
      {...props}
    >
      <div className="text-base font-semibold leading-none text-gray-900 group:text-white">{title}</div>
      <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 group-hover:text-white group-focus:text-white">
        {children}
      </p>
    </a>
  )
})
ListItem.displayName = "ListItem"

const ImagePreview = ({ item }: { item: MenuItem | null }) => {
  if (!item || !item.imageUrl) {
    return (
      <div className="hidden lg:flex sticky top-24 items-center justify-center bg-gray-100/50 rounded-xl h-full">
        <p className="text-gray-500 p-8 text-center">Hover over an item to see a preview.</p>
      </div>
    );
  }

  return (
    <div className="hidden lg:block sticky top-24 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 h-full">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        <Image
          src={item.imageUrl}
          alt={item.imageAlt || ''}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        <Link href={item.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700 mt-4 inline-block">
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
};

export function MegaMenu({
  title,
  items,
  showBrand = false,
  columns = 2,
  className
}: MegaMenuProps) {
  console.log(title);
  const [activeItem, setActiveItem] = React.useState<MenuItem | null>(null);

  React.useEffect(() => {
    const firstItemWithImage = items.find(item => item.imageUrl);
    setActiveItem(firstItemWithImage || items[0] || null);
  }, [items]);

  return (
    <div className={cn(
      "fixed left-4 right-4 bg-white/60 rounded-lg border-t border-gray-100 shadow-lg z-50",
      className
    )}>
      <div className='bg-white m-4 rounded-sm' role="dialog" aria-label={`${title} menu`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="grid gap-8 lg:grid-cols-4">
                {showBrand && (
                  <div className="lg:col-span-1">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="flex flex-col justify-center rounded-lg bg-brand-500 p-6 h-full no-underline outline-none focus:shadow-md hover:shadow-md transition-shadow"
                      >
                        <Image src={LogoDark} alt="logo" width={150} height={150} className="mb-3" />
                        <p className="text-sm leading-relaxed text-white">
                          All-in-One EV Charging Management System.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                )}
                <div className={cn(
                  "grid gap-4",
                  showBrand ? "lg:col-span-3" : "lg:col-span-4",
                  columns === 2 && "md:grid-cols-2",
                  columns === 3 && "md:grid-cols-3",
                  columns === 4 && "md:grid-cols-4"
                )}>
                  {items.map((item, index) => (
                    <div key={index} onMouseEnter={() => setActiveItem(item)}>
                      <ListItem
                        href={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-sm text-gray-600">
                    Need help choosing the right solution?
                    <Link href="/contact" className="ml-1 font-medium text-brand-600 hover:text-brand-700">
                      Contact our experts
                    </Link>
                  </p>
                  <div className="flex gap-3">
                    <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                      <CPopupButton />
                    </div>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-96" aria-hidden={!activeItem?.imageUrl}>
              <ImagePreview item={activeItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}