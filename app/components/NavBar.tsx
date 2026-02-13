import Link from 'next/link'

export default function NavBar() {

  return(
    <div className='absolute w-screen z-10 px-3 h-10 flex justify-between items-center text-base'>
      <Link 
        href='/about'
        className='hover:underline'
      >
        <h2>
          ABOUT
        </h2>
      </Link>
      <Link
        href='/'
        className='hover:underline'
      >
        <h2>
          KIERAN SLATER
        </h2>
      </Link>
      <Link
        href='/work'
        className='hover:underline'
      >
        <h2>
          INDEX
        </h2>
      </Link>
    </div>
  )
}