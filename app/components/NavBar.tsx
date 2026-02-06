import Link from 'next/link'

export default function NavBar() {

  return(
    <div className='absolute w-screen z-10 pt-2.5 px-2.5 flex justify-between text-center'>
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
        href='/index'
        className='hover:underline'
      >
        <h2>
          INDEX
        </h2>
      </Link>
    </div>
  )
}