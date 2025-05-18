import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function CompaniesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
} 