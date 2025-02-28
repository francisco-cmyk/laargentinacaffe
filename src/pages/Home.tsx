import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Button } from "../Components/button";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { MenuSection } from "./MenuSection";
import { Specials } from "./Specials";
import Map from "../Components/map";

const doorDashLink =
  "https://order.online/store/la-argentina-caffe-miami-32915381/?hideModal=true&pickup=true&redirected=true";

export default function Home() {
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className='flex flex-col min-h-screen w-screen '>
      {/* Navigation */}
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='relative'>
          <div className='absolute inset-0 bg-black/60 z-10' />
          <div className='relative h-[70vh] w-full'>
            <img
              src='https://i.pinimg.com/736x/29/30/a7/2930a73d8eab29fff64a58ed52bf565e.jpg'
              alt='La Argentina Caffe'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              La Argentina Caffe
            </h1>
            <p className='text-xl md:text-2xl mb-8'>
              Authentic Argentinian Cuisine & Coffee
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='bg-secondary text-secondary-foreground hover:bg-zinc-300 hover:text-white '
                onClick={() => scrollToSection("menu")}
              >
                View Menu
              </Button>
              <a href={doorDashLink} target='_blank'>
                <Button
                  size='lg'
                  className='bg-argentina-blue hover:bg-blue-300 text-white '
                >
                  Order Online
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='py-16 container'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='lg:text-3xl text-xl font-bold mb-6'>Our Story</h2>
              <p className='text-muted-foreground mb-4'>
                La Argentina Caffe brings the authentic flavors of Argentina to
                your table. Our passion for quality ingredients and traditional
                recipes has made us a beloved destination for food enthusiasts.
              </p>
              <p className='text-muted-foreground mb-6'>
                Every dish is prepared with care, honoring the rich culinary
                heritage of Argentina while adding our own unique touch. From
                our famous empanadas to our perfectly balanced milanesa
                sandwiches, we promise an unforgettable experience at affordable
                prices.
              </p>
              <Button className='hidden'>Learn More</Button>
            </div>
            <div className='relative lg:h-[400px] rounded-lg overflow-hidden'>
              <img
                src='https://i.pinimg.com/736x/eb/8e/81/eb8e81447d2bf8dd68c62d207d3f51f9.jpg'
                alt='Cafe interior'
                className='object-contain w-full'
              />
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className='py-16 bg-blue-300'>
          <Specials />
        </section>

        {/* Menu Section */}
        <MenuSection />

        {/* Location & Hours Section */}
        <section id='location' className='py-16 bg-blue-300'>
          <div className='container mx-auto px-4'>
            <h2 className='lg:text-3xl text-xl font-bold text-center mb-12 text-argentina-white'>
              Location & Hours
            </h2>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div className='bg-card rounded-lg p-8 shadow-sm'>
                <div className='flex items-start gap-4 mb-6'>
                  <MapPin className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='xl:text-xl text-base font-semibold mb-2'>
                      Our Address
                    </h3>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      2441 NW 77th Terrace
                    </p>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      Miami, FL 33147
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4 mb-6'>
                  <Clock className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='xl:text-xl text-base font-semibold mb-2'>
                      Opening Hours
                    </h3>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      Monday - Friday: 7:00 AM - 5:00 PM
                    </p>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      Saturday: 7:00 AM - 5:00 PM
                    </p>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      Sunday - Closed
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Phone className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='xl:text-xl text-base font-semibold mb-2'>
                      Contact
                    </h3>
                    <p className='text-muted-foreground xl:text-base text-sm '>
                      Phone: (305) 646-1321
                    </p>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      Email: laargentinacaffe@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className='relative h-[400px] rounded-lg overflow-hidden'>
                {/* This would be a map in a real application */}
                <Map />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-card border-t py-12'>
        <div className='container'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-lg font-semibold mb-4'>La Argentina Caffe</h3>
              <p className='text-muted-foreground mb-4'>
                Bringing the authentic taste of Argentina to your neighborhood
                at great prices.
              </p>
              <div className='flex space-x-4'>
                <Link
                  to='https://www.instagram.com/laargcafe?igsh=MWUxZmR3OWNsNzYxdQ=='
                  target='_blank'
                  className='text-muted-foreground hover:text-primary'
                >
                  <Instagram className='h-5 w-5' />
                  <span className='sr-only'>Instagram</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
              <nav className='flex flex-col space-y-2'>
                <Link
                  to='#about'
                  className='text-muted-foreground hover:text-primary'
                  onClick={() => scrollToSection("about")}
                >
                  About Us
                </Link>
                <Link
                  to='#menu'
                  className='text-muted-foreground hover:text-primary'
                  onClick={() => scrollToSection("menu")}
                >
                  Menu
                </Link>
                <Link
                  to='#location'
                  className='text-muted-foreground hover:text-primary'
                  onClick={() => scrollToSection("location")}
                >
                  Location
                </Link>
                <Link
                  to={doorDashLink}
                  target='_blank'
                  className='text-muted-foreground hover:text-primary'
                >
                  Order Online
                </Link>
              </nav>
            </div>
          </div>

          <div className='mt-12 pt-6 border-t text-center text-muted-foreground'>
            <p>
              © {new Date().getFullYear()} La Argentina Caffe. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
