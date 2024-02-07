import { Navbar } from '../components/nav';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='public-layout'>
      <Navbar/>
      {children}
    </div>
  );
}
