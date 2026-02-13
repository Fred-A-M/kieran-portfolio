import Link from 'next/link'

export default function NavBar() {

  return(
    <div className='absolute w-screen z-10 px-3 h-9 flex justify-between text-base'>
      <Link 
        href='/about'
        className='hover:underline mt-auto'
      >
        <h2>
          ABOUT
        </h2>
      </Link>
      <Link
        href='/'
        className='hover:underline mt-auto'
      >
        <h2>
          KIERAN SLATER
        </h2>
      </Link>
      <Link
        href='/index'
        className='hover:underline mt-auto'
      >
        <h2>
          INDEX
        </h2>
      </Link>
    </div>
  )
}