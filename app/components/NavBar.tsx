'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function NavBar() {
  const pathname = usePathname();
  
  if (pathname === '/') {
    return null;
  }

  return (
    <div className='w-screen z-10 px-3 h-10 flex justify-between items-center'>
      {pathname !== '/about' ? (
        <Link
          href='/about'
          className='hover:font-medium'
        >
          <h2>
            ABOUT
          </h2>
        </Link> 
        ) : (
          <h2 className='font-medium'>
            ABOUT
          </h2>
        )
      }
      
      
      <h2>
        KIERAN SLATER
      </h2>
     

     {pathname !== '/work' ? (
        <Link
          href='/work'
          className='hover:font-medium'
        >
          <h2>
            INDEX
          </h2>
        </Link> 
        ) : (
          <h2 className='font-medium'>
            INDEX
          </h2>
        )
      }
    </div>
  )
}