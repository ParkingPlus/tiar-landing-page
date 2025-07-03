import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go back home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              Contact support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
