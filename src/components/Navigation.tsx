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
      <nav aria-label="Primary" className="mb-4">
        {/* 小屏允许横向滚动，避免挤换行；到 sm 及以上恢复正常 */}
        <div className="overflow-x-auto sm:overflow-visible -mx-4 px-4">
          {/* 小屏不换行（配合滚动）；sm 及以上允许换行 */}
          <ol className="flex items-center flex-nowrap sm:flex-wrap gap-3 sm:gap-4 text-base sm:text-2xl">
            {pages.map((page) => {
              const isActive = currentPage === page.name;
              return (
                <li
                  key={page.path}
                  className="relative pl-3 first:pl-0 before:content-['/'] first:before:content-[''] before:absolute before:left-0 before:font-bold"
                >
                  {isActive ? (
                    <span className="font-bold">{page.name}</span>
                  ) : (
                    <Link
                      href={page.path}
                      className="font-bold text-blue-800 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {page.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
      <hr className="mb-6 border-gray-100" />
    </>
  );
}
