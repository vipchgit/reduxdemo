import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex h-12 bg-blue-400 justify-around text-yellow-50 justify-items-center items-center'>
      <span className='font-medium'>Redux Tutorial</span>
      <nav>
        <Link className="mx-3 hover:text-orange-200" to="/">Redux Basic</Link>
        <Link className="mx-3 hover:text-orange-200" to="/thunk">Redux Thunk</Link>
        <Link className="mx-3 hover:text-orange-200" to="/hook">Redux Hook</Link>
      </nav>
    </header>
  );
};

export default Header;
