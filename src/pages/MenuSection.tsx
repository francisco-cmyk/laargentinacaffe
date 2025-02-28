import { useState } from "react";
import { Button } from "../Components/button";
import { Separator } from "../Components/separator";
import { menuItems } from "../lib/menu";

export function MenuSection() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  const foodItems = menuItems.filter((items) => items.type == "food");
  const drinkItems = menuItems.filter((items) => items.type === "drink");
  return (
    <section id='menu' className='py-16 container'>
      <h2 className='lg:text-3xl text-xl font-bold text-center mb-12 '>
        Our Menu
      </h2>

      <div className='grid md:grid-cols-2 gap-x-12 gap-y-8'>
        <div>
          <h3 className='lg:text-2xl text-lg font-semibold mb-6'>
            Main Courses
          </h3>
          <div className='space-y-6'>
            {foodItems
              .slice(0, showFullMenu ? foodItems.length : 4)
              .map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className='flex flex-col p-1'
                >
                  <div className='flex justify-between items-center'>
                    <div>
                      <h4 className='text-lg font-medium'>{item.name}</h4>
                      <p className='text-muted-foreground xl:text-base text-sm'>
                        {item.description}
                      </p>
                    </div>
                    <span className='font-semibold'>{item.price}</span>
                  </div>
                  <Separator />
                </div>
              ))}
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-semibold mb-6'>Coffee & Beverages</h3>
          <div className='space-y-6'>
            {drinkItems
              .slice(0, showFullMenu ? drinkItems.length : 4)
              .map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className='flex flex-col p-1'
                >
                  <div className='flex justify-between items-center'>
                    <div>
                      <h4 className='text-lg font-medium'>{item.name}</h4>
                      <p className='text-muted-foreground  xl:text-base text-sm'>
                        {item.description}
                      </p>
                    </div>
                    <span className='font-semibold'>{item.price}</span>
                  </div>
                  <Separator />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className='mt-12 text-center'>
        <Button
          size='lg'
          className='bg-argentina-gold transition-colors hover:bg-argentina-gold/90 font-semibold shadow-none'
          onClick={() => setShowFullMenu(!showFullMenu)}
        >
          {showFullMenu ? "Close full menu" : "View full menu"}
        </Button>
      </div>
    </section>
  );
}
