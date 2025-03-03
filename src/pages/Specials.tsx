import { Button } from "../Components/button";
import { Card, CardContent } from "../Components/card";
import { doorDashLink, MenuItem } from "../lib/menu";
import { useTranslation } from "react-i18next";

type MenuItemWithPic = MenuItem & { image: string };

const specialItems: MenuItemWithPic[] = [
  {
    name: "menu_items.ham_and_cheese_empanada",
    description: "menu_items.ham_and_cheese_empanada_desc",
    price: 2.5,
    image:
      "https://amsterdambakingcompany.com/cdn/shop/files/IMG_8959-2.jpg?v=1717954507&width=1920",
  },
  {
    name: "menu_items.milanesa_sandwich",
    description: "menu_items.milanesa_sandwich_desc",
    price: 8.3,
    image:
      "https://tatoremiami.com/wp-content/uploads/2020/05/Mila-Sandwich.jpg",
  },
  {
    name: "menu_items.choripan",
    description: "menu_items.choripan_desc",
    price: 7.28,
    image:
      "https://tarasmulticulturaltable.com/wp-content/uploads/2016/02/Choripan-Argentinian-Chorizo-Sandwiches-1-of-3.jpg",
  },
];

export function Specials() {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h2 className='lg:text-3xl text-xl font-bold text-center mb-12 text-argentina-white'>
        {t("todays_specials")}
      </h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {specialItems.map((item, index) => (
          <Card key={`${item.name}-${index}`} className='p-0'>
            <div className='relative max-h-48 w-full'>
              <img
                src={item.image}
                alt='Argentinian food'
                className='object-cover h-[200px] w-[600px] rounded-t-lg'
              />
            </div>
            <CardContent className='p-6'>
              <h3 className='text-xl font-bold mb-2'>{t(item.name)}</h3>
              <p className='text-muted-foreground mb-4'>
                {t(item.description)}
              </p>
              <div className='flex justify-between items-center'>
                <span className='text-lg lg:font-bold font-semibold text-argentina-gold'>
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
                <a href={doorDashLink} target='_blank'>
                  <Button variant='outline' size='sm'>
                    {t("order_now")}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
