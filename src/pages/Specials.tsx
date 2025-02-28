import { Button } from "../Components/button";
import { Card, CardContent } from "../Components/card";
import { doorDashLink, MenuItem } from "../lib/menu";

type MenuItemWithPic = MenuItem & { image: string };

const specialItems: MenuItemWithPic[] = [
  {
    name: "Ham and Cheese Empanada",
    price: "$2.58",
    description:
      "Fresh homemade. Bread dough stuffed with ham and cheese, eggs, red peppers",
    type: "food",
    image:
      "https://amsterdambakingcompany.com/cdn/shop/files/IMG_8959-2.jpg?v=1717954507&width=1920",
  },
  {
    name: "Milanesa Sandwich",
    price: "$8.38",
    description:
      "Delicious milanesa sandwich with your choice beef or chicken breaded with lettuce, tomatoes and mayonnaise",
    type: "food",
    image:
      "https://tatoremiami.com/wp-content/uploads/2020/05/Mila-Sandwich.jpg",
  },
  {
    name: "Choripan Sandwich",
    price: "$7.28",
    description:
      "Grill sausage with lettuce, tomatoes, and chimichurri sauce from the streets of Argentina to your corner of Miami",
    type: "food",
    image:
      "https://tarasmulticulturaltable.com/wp-content/uploads/2016/02/Choripan-Argentinian-Chorizo-Sandwiches-1-of-3.jpg",
  },
];

export function Specials() {
  return (
    <div className='container'>
      <h2 className='lg:text-3xl text-xl font-bold text-center mb-12 text-argentina-white'>
        Today's Specials
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
              <h3 className='text-xl font-bold mb-2'>{item.name}</h3>
              <p className='text-muted-foreground mb-4'>{item.description}</p>
              <div className='flex justify-between items-center'>
                <span className='text-lg font-bold'>{item.price}</span>
                <a href={doorDashLink} target='_blank'>
                  <Button variant='outline' size='sm'>
                    Order Now
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
