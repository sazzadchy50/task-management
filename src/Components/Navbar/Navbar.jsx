
import { Navbar } from 'flowbite-react';
import logo from '../../assets/logo.png'




const Menubar = () => {
    return (
        <Navbar fluid rounded className='container mx-auto'>
      <Navbar.Brand >
      <img className='w-14' src={logo} alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white italic">Task Manager</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
   
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        <Navbar.Link href="/login">Login</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default Menubar;