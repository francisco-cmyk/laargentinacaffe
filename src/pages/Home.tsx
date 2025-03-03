import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Button } from "../Components/button";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { MenuSection } from "./MenuSection";
import { Specials } from "./Specials";
import Map from "../Components/map";
import { useTranslation } from "react-i18next";
import { doorDashLink } from "../lib/menu";

export default function Home() {
  const { t } = useTranslation();

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
              {t("Authentic_Argentinian_Cuisine")}
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='bg-argentina-gold  px-4 py-2 rounded-md transition-colors hover:bg-argentina-gold/90 font-semibold'
                onClick={() => scrollToSection("menu")}
              >
                {t("view_menu")}
              </Button>
              <a href={doorDashLink} target='_blank'>
                <Button
                  size='lg'
                  className='bg-argentina-blue hover:bg-blue-300 text-white '
                >
                  {t("order_online")}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='py-16 container'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='lg:text-3xl text-xl font-bold mb-6'>
                {t("our_story")}
              </h2>
              <p className='text-muted-foreground mb-4'>
                {t("our_story_bio_1")}
              </p>
              <p className='text-muted-foreground mb-6'>
                {t("our_story_bio_2")}
              </p>
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
              {t("location_and_hours")}
            </h2>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div className='bg-card rounded-lg p-8 shadow-sm'>
                <div className='flex items-start gap-4 mb-6'>
                  <MapPin className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='xl:text-xl text-base font-semibold mb-2'>
                      {t("our_address")}
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
                      {t("opening_hours")}
                    </h3>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      {`${t("monday")} - ${t("friday")} 7:00 AM - 5:00 PM`}
                    </p>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      {`${t("saturday")}  7:00 AM - 5:00 PM`}
                    </p>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      {`${t("sunday")} - ${t("closed")} `}
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Phone className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='xl:text-xl text-base font-semibold mb-2'>
                      {t("contact")}
                    </h3>
                    <p className='text-muted-foreground xl:text-base text-sm '>
                      {`${t("phone")} (305) 646-1321`}
                    </p>
                    <p className='text-muted-foreground xl:text-base text-sm'>
                      Email: laargentinacaffe@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className='relative h-[400px] rounded-lg overflow-hidden'>
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
                {t("our_story_bio_3")}
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
              <h3 className='text-lg font-semibold mb-4'>{t("quick_links")}</h3>
              <nav className='flex flex-col space-y-2'>
                <Link
                  to=''
                  className='text-muted-foreground hover:text-primary'
                  onClick={() => scrollToSection("about")}
                >
                  {t("about_us")}
                </Link>
                <Link
                  to=''
                  className='text-muted-foreground hover:text-primary'
                  onClick={() => scrollToSection("menu")}
                >
                  {t("menu")}
                </Link>
                <Link
                  to=''
                  className='text-muted-foreground hover:text-primary'
                  onClick={() => scrollToSection("location")}
                >
                  {t("location")}
                </Link>
                <Link
                  to={doorDashLink}
                  target='_blank'
                  className='text-muted-foreground hover:text-primary'
                >
                  {t("order_online")}
                </Link>
              </nav>
            </div>
          </div>

          <div className='mt-12 pt-6 border-t text-center text-muted-foreground'>
            <p>
              © {new Date().getFullYear()} {t("rights_reserved")}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
