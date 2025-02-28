import { Button } from "../Components/button";
import { Link } from "react-router-dom";
import { doorDashLink } from "../lib/menu";
import { Menu, Phone } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../Components/popover";

export function Header() {
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <header className='sticky top-0 z-40 w-full  bg-argentina-blue text-argentina-white backdrop-blur supports-[backdrop-filter]:bg-argentina-blue/70'>
      <div className='md:container flex h-16 items-center px-3 '>
        <div className='mr-4 hidden md:flex'>
          <Link to='/' className='mr-6 flex items-center space-x-2'>
            <span className='font-bold text-xl '>La Argentina Caffe</span>
          </Link>
          <nav className='flex items-center space-x-6 text-sm font-medium'>
            <Link
              to='#about'
              className='transition-colors hover:text-foreground/80'
              onClick={() => scrollToSection("about")}
            >
              About
            </Link>
            <Link
              to='#menu'
              className='transition-colors hover:text-foreground/80'
              onClick={() => scrollToSection("menu")}
            >
              Menu
            </Link>
            <Link
              to='#location'
              className='transition-colors hover:text-foreground/80'
              onClick={() => scrollToSection("location")}
            >
              Location
            </Link>
            <Link
              to={doorDashLink}
              target='_blank'
              className='bg-argentina-gold  px-4 py-2 rounded-md transition-colors hover:bg-argentina-gold/90 font-semibold'
            >
              Order Online
            </Link>
          </nav>
        </div>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <a href='tel:+13056461321'>
              <Button
                variant='outline'
                className='hidden md:flex text-argentina-blue'
              >
                <Phone className='mr-2 h-4 w-4' />
                Call Now
              </Button>
            </a>
          </div>
          <nav className='flex items-center md:hidden w-full justify-between'>
            <Link to='/' className='flex items-center'>
              <span className='font-bold text-lg'>La Argentina Caffe</span>
            </Link>
            <Popover>
              <PopoverTrigger>
                <Menu />
              </PopoverTrigger>
              <PopoverContent className='w-52 text-sm flex flex-col p-2 mr-2'>
                <Link
                  to='#about'
                  className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2'
                  onClick={() => scrollToSection("about")}
                >
                  About
                </Link>
                <Link
                  to='#menu'
                  className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2'
                  onClick={() => scrollToSection("menu")}
                >
                  Menu
                </Link>
                <Link
                  to='#location'
                  className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2'
                  onClick={() => scrollToSection("location")}
                >
                  Location
                </Link>
                <Link
                  to='tel:+13056461321'
                  className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2'
                >
                  Call now
                </Link>
                <Link
                  to={doorDashLink}
                  target='_blank'
                  className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2'
                >
                  Order Online
                </Link>
              </PopoverContent>
            </Popover>
          </nav>
        </div>
      </div>
    </header>
  );
}
