import Container from './ui/container';
import Link from 'next/link';
import MainNav from './main-nav';
import getCategories from '@/actions/get-categories';
import NavbarActions from './navbar-actions';

const Navbar = async () => {

  const categories = await getCategories()


  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex items-center h-16'>
          <Link href={'/'} className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='text-2xl font-black'>STORE</p>
          </Link>
          <MainNav data={categories}/>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
