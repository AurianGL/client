import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '.';

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
    return (
      <nav className='space-x-3 flex justify-between bg-gray-900 p-2'>
          <div className="space-x-3">
            <Link to='/'>
              <Button>Home</Button>
            </Link>
            <Link to='/feedbacks/new'>
              <Button>Feedbacks</Button>
            </Link>
          </div>
          <div>
            For The Glory of slaanesh
          </div>
				</nav>
    );
}