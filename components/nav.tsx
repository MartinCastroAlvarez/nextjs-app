import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      &nbsp;
      | 
      &nbsp;
      <Link href="/about">About</Link>
    </nav>
  );
}
