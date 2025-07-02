export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-2 py-12 lg:px-16 md:py-16 mt-8">
      {children}
    </div>
  );
}