import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile' },
];

const authLinks: NavLink[] = [
  { href: '/signup', label: 'Sign Up' },
  { href: '/login', label: 'Login' },
];

export default function NavLinks() {
  return (
    <nav className="flex items-center justify-between space-x-4 md:space-x-6 text-sm md:text-base font-medium py-4">
      <div className="flex items-center space-x-4 md:space-x-6">
      {links.map((link) => (
        <Link
            key={link.href}
            href={link.href}
            className="relative px-3 py-2 rounded-md text-balance hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {link.label}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent hover:bg-blue-500 dark:hover:bg-blue-400 transition-all duration-200"></span>
        </Link>
      ))}
      </div>
      <div className="flex items-center space-x-4 md:space-x-6">
        {authLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative px-3 py-2 rounded-md text-balance hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent hover:bg-blue-500 dark:hover:bg-blue-400 transition-all duration-200"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}