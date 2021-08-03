import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <>
      <Link className='p-4' to='/'>
        Home
      </Link>
      <Link className='p-4' to='/recipes'>
        Recipes
      </Link>
      <Link className='p-4' to='/about'>
        About
      </Link>
      <Link className='p-4' to='/contact'>
        Contact
      </Link>
    </>
  )
}

export default Links
