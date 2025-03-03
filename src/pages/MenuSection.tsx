import { useState } from "react";
import { Button } from "../Components/button";
import { menuCategories } from "../lib/menu";
import { useTranslation } from "react-i18next";

export function MenuSection() {
  const { t } = useTranslation();
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <section id='menu' className='py-16 container'>
      <h2 className='lg:text-3xl text-xl font-bold text-center mb-12 '>
        {t("our_menu")}
      </h2>
      <div>
        <div className='grid md:grid-cols-2 gap-8'>
          {menuCategories
            .slice(0, showFullMenu ? menuCategories.length : 4)
            .map((category, index) => (
              <div key={`${category.category}-${index}`}>
                <h3 className='lg:text-2xl text-xl font-semibold mb-4 text-argentina-blue'>
                  {t(category.category)}
                </h3>
                <div className='space-y-4'>
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={`${item.name}-${itemIndex}`}
                      className='flex justify-between items-start'
                    >
                      <div className='w-2/3'>
                        <h4 className='lg:text-lg text-sm font-medium'>
                          {t(item.name)}
                        </h4>
                        <p className='lg:text-base text-xs text-muted-foreground'>
                          {t(item.description)}
                        </p>
                      </div>
                      <span className='lg:text-base text-sm font-semibold text-argentina-gold'>
                        {item.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div className='mt-12 text-center'>
          <Button
            size='lg'
            onClick={() => setShowFullMenu(!showFullMenu)}
            className='bg-argentina-blue text-argentina-white hover:bg-argentina-blue/90'
          >
            {showFullMenu ? t("show_less") : t("view_full_menu")}
          </Button>
        </div>
      </div>
    </section>
  );
}
