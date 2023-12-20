
import { Navbar } from 'flowbite-react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';



const Menubar = () => {
    return (
        <Navbar fluid rounded className='container mx-auto'>
      <Navbar.Brand >
      <img className='w-14' src={logo} alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white italic"> Management</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
   
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default Menubar;