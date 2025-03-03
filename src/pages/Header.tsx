import { Button } from "../Components/button";
import { Link } from "react-router-dom";
import { doorDashLink } from "../lib/menu";
import { Globe, Menu, Phone, ShoppingCart } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../Components/popover";
import { Separator } from "../Components/separator";
import { useTranslation } from "react-i18next";

type LanguageOption = {
  label: string;
  value: "en" | "fr" | "es";
};

export function Header() {
  const { t, i18n } = useTranslation();

  const languages: LanguageOption[] = [
    {
      label: t("english"),
      value: "en",
    },
    { label: t("spanish"), value: "es" },
    { label: t("french"), value: "fr" },
  ];

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
              to=''
              className='transition-colors hover:text-foreground/80'
              onClick={() => scrollToSection("about")}
            >
              {t("about")}
            </Link>
            <Link
              to=''
              className='transition-colors hover:text-foreground/80'
              onClick={() => scrollToSection("menu")}
            >
              {t("menu")}
            </Link>
            <Link
              to=''
              className='transition-colors hover:text-foreground/80'
              onClick={() => scrollToSection("location")}
            >
              {t("location")}
            </Link>
            <Link
              to={doorDashLink}
              target='_blank'
              className='bg-argentina-gold  px-4 py-2 rounded-md transition-colors hover:bg-argentina-gold/90 font-semibold'
            >
              {t("order_online")}
            </Link>
          </nav>
        </div>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full md:flex md:items-center flex-1 gap-x-3 md:w-auto md:flex-none'>
            <a href='tel:+13056461321'>
              <Button
                variant='outline'
                className='hidden md:flex text-argentina-blue'
              >
                <Phone className='mr-2 h-4 w-4' />
                {t("call_now")}
              </Button>
            </a>
            <Popover>
              <PopoverTrigger className='md:flex hidden'>
                <Globe />
              </PopoverTrigger>
              <PopoverContent className='w-52 text-sm flex flex-col p-2 mr-2 mt-2'>
                {languages.map((language) => (
                  <div
                    key={language.label}
                    className='cursor-pointer'
                    onClick={() => i18n.changeLanguage(language.value)}
                  >
                    <p className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2 font-medium'>
                      {language.label}
                    </p>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
          </div>
          <nav className='flex items-center md:hidden w-full justify-between'>
            <Link to='/' className='flex items-center'>
              <span className='font-bold text-lg'>La Argentina Caffe</span>
            </Link>
            <div className='flex gap-x-2'>
              <Popover>
                <PopoverTrigger>
                  <Menu />
                </PopoverTrigger>
                <PopoverContent className='w-52 text-sm flex flex-col p-2 mr-2'>
                  <Link
                    to=''
                    className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2 font-semibold'
                    onClick={() => scrollToSection("about")}
                  >
                    {t("about")}
                  </Link>
                  <Link
                    to=''
                    className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2 font-semibold'
                    onClick={() => scrollToSection("menu")}
                  >
                    {t("menu")}
                  </Link>
                  <Link
                    to=''
                    className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2 font-semibold'
                    onClick={() => scrollToSection("location")}
                  >
                    {t("location")}
                  </Link>
                  <Separator className='mt-1' />
                  <Link
                    to='tel:+13056461321'
                    className='flex items-center gap-x-2 transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2 font-semibold'
                  >
                    <Phone size={14} />
                    {t("call_now")}
                  </Link>
                  <Link
                    to={doorDashLink}
                    target='_blank'
                    className=' flex items-center gap-x-2 transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2 font-semibold'
                  >
                    <ShoppingCart size={14} />
                    {t("order_online")}
                  </Link>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger className=''>
                  <Globe size={17} />
                </PopoverTrigger>
                <PopoverContent className='w-52 text-sm flex flex-col p-2 mr-2 '>
                  {languages.map((language) => (
                    <div
                      key={language.label}
                      className='cursor-pointer'
                      onClick={() => i18n.changeLanguage(language.value)}
                    >
                      <p className='transition-colors hover:bg-secondary rounded-sm hover:text-foreground/80 p-2 font-medium'>
                        {language.label}
                      </p>
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
