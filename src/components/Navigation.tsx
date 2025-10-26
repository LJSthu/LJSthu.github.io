import Link from 'next/link';

interface NavigationProps {
  currentPage: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Talks', path: '/talks' },
    // { name: 'Teaching', path: '/teaching' },
    { name: 'Miscellanea', path: '/misc' },
  ];

  return (
    <>
      <hr className="mb-4 border-gray-100" />
      <h3 className="mb-4 text-2xl">
        {pages.map((page, index) => (
          <span key={page.path}>
            {index > 0 && <span className="font-bold mx-2">/</span>}
            {currentPage === page.name ? (
              <span className="font-bold">{page.name}</span>
            ) : (
              <Link href={page.path} className="font-bold text-blue-800 hover:underline">
                {page.name}
              </Link>
            )}
          </span>
        ))}
      </h3>
      <hr className="mb-6 border-gray-100" />
      
    </>
  );
}
