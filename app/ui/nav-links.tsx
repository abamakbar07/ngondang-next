import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile' },
  { href: '/signup', label: 'Signup' },
  { href: '/login', label: 'Login' },
];

export default function NavLinks() {
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
        className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
      >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}