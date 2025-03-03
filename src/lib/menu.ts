export type MenuType = "food" | "drink";

export type MenuItem = {
  name: string;
  price: number;
  description: string;
};

type MenuCategories = {
  category: string;
  type: MenuType;
  items: MenuItem[];
};

export const menuCategories: MenuCategories[] = [
  {
    category: "menu_categories.sandwiches",
    type: "food",
    items: [
      {
        name: "menu_items.croquettes_sandwich",
        description: "menu_items.croquettes_sandwich_desc",
        price: 6.98,
      },
      {
        name: "menu_items.omelette_eggs",
        description: "menu_items.omelette_eggs_desc",
        price: 6.98,
      },
      {
        name: "menu_items.choripan",
        description: "menu_items.choripan_desc",
        price: 6.98,
      },
      {
        name: "menu_items.milanesa_sandwich",
        description: "menu_items.milanesa_sandwich_desc",
        price: 8.0,
      },
      {
        name: "menu_items.chicken_grilled",
        description: "menu_items.chicken_grilled_desc",
        price: 8.0,
      },
      {
        name: "menu_items.lomito",
        description: "menu_items.lomito_desc",
        price: 9.98,
      },
      {
        name: "menu_items.shredded_beef",
        description: "menu_items.shredded_beef_desc",
        price: 9.98,
      },
    ],
  },
  {
    category: "menu_categories.empanadas",
    type: "food",
    items: [
      {
        name: "menu_items.ham_and_cheese_empanada",
        description: "menu_items.ham_and_cheese_empanada_desc",
        price: 2.5,
      },
      {
        name: "menu_items.shredded_beef_empanada",
        description: "menu_items.shredded_beef_empanada_desc",
        price: 2.5,
      },
      {
        name: "menu_items.beef_empanada",
        description: "menu_items.beef_empanada_desc",
        price: 2.5,
      },
      {
        name: "menu_items.spinach_empanada",
        description: "menu_items.spinach_empanada_desc",
        price: 2.5,
      },
      {
        name: "menu_items.chicken_empanada",
        description: "menu_items.chicken_empanada_desc",
        price: 2.5,
      },
      {
        name: "menu_items.croquettes_ham_and_cheese",
        description: "menu_items.croquettes_ham_and_cheese_desc",
        price: 1.0,
      },
      {
        name: "menu_items.fried_cheese_sticks",
        description: "menu_items.fried_cheese_sticks_desc",
        price: 2.0,
      },
    ],
  },
  {
    category: "menu_categories.special_orders",
    type: "food",
    items: [
      {
        name: "menu_items.beef_or_chicken_kebab",
        description: "menu_items.beef_or_chicken_kebab_desc",
        price: 12.0,
      },
      {
        name: "menu_items.chicken_with_lime_sauce",
        description: "menu_items.chicken_with_lime_sauce_desc",
        price: 12.0,
      },
      {
        name: "menu_items.tilapia_in_the_skillet",
        description: "menu_items.tilapia_in_the_skillet_desc",
        price: 12.0,
      },
      {
        name: "menu_items.palomilla_steak",
        description: "menu_items.palomilla_steak_desc",
        price: 12.0,
      },
      {
        name: "menu_items.chicken_picata",
        description: "menu_items.chicken_picata_desc",
        price: 12.0,
      },
      {
        name: "menu_items.chicken_curry_sauce",
        description: "menu_items.chicken_curry_sauce_desc",
        price: 12.0,
      },
      {
        name: "menu_items.shrimp_scampi",
        description: "menu_items.shrimp_scampi_desc",
        price: 12.0,
      },
      {
        name: "menu_items.shrimp_grilled_or_in_sauce",
        description: "menu_items.shrimp_grilled_or_in_sauce_desc",
        price: 12.0,
      },
      {
        name: "menu_items.lomo_saltado",
        description: "menu_items.lomo_saltado_desc",
        price: 12.0,
      },
    ],
  },
  {
    category: "menu_categories.special_lunch",
    type: "food",
    items: [
      {
        name: "menu_items.monday_special",
        description: "menu_items.monday_special_desc",
        price: 10.0,
      },
      {
        name: "menu_items.tuesday_special",
        description: "menu_items.tuesday_special_desc",
        price: 10.0,
      },
      {
        name: "menu_items.wednesday_special",
        description: "menu_items.wednesday_special_desc",
        price: 10.0,
      },
      {
        name: "menu_items.thursday_special",
        description: "menu_items.thursday_special_desc",
        price: 10.0,
      },
      {
        name: "menu_items.friday_special",
        description: "menu_items.friday_special_desc",
        price: 10.0,
      },
      {
        name: "menu_items.saturday_special",
        description: "menu_items.saturday_special_desc",
        price: 10.0,
      },
    ],
  },
  {
    category: "menu_categories.soups",
    type: "food",
    items: [
      {
        name: "menu_items.chicken_soup",
        description: "menu_items.chicken_soup_desc",
        price: 8.0,
      },
      {
        name: "menu_items.beef_soup",
        description: "menu_items.beef_soup_desc",
        price: 10.98,
      },
      {
        name: "menu_items.lentil_soup",
        description: "menu_items.lentil_soup_desc",
        price: 10.98,
      },
      {
        name: "menu_items.tripe_soup",
        description: "menu_items.tripe_soup_desc",
        price: 11.98,
      },
      {
        name: "menu_items.argentinian_soup",
        description: "menu_items.argentinian_soup_desc",
        price: 10.98,
      },
    ],
  },
  {
    category: "menu_categories.breakfast",
    type: "food",
    items: [
      {
        name: "menu_items.scrambled_eggs",
        description: "menu_items.scrambled_eggs_desc",
        price: 8.0,
      },
      {
        name: "menu_items.two_fried_eggs",
        description: "menu_items.two_fried_eggs_desc",
        price: 8.0,
      },
      {
        name: "menu_items.tostado_ham_cheese",
        description: "menu_items.tostado_ham_cheese_desc",
        price: 8.0,
      },
      {
        name: "menu_items.croissant_ham_cheese_or_eggs",
        description: "menu_items.croissant_ham_cheese_or_eggs_desc",
        price: 10.0,
      },
    ],
  },
  {
    category: "menu_categories.coffee_beverages",
    type: "drink",
    items: [
      {
        name: "menu_items.colada",
        description: "menu_items.colada_desc",
        price: 2.5,
      },
      {
        name: "menu_items.cortadito",
        description: "menu_items.cortadito_desc",
        price: 2.5,
      },
      {
        name: "menu_items.cafe_con_leche",
        description: "menu_items.cafe_con_leche_desc",
        price: 2.99,
      },
      {
        name: "menu_items.cafe_con_leche_large",
        description: "menu_items.cafe_con_leche_large_desc",
        price: 3.99,
      },
      {
        name: "menu_items.cafe_americano",
        description: "menu_items.cafe_americano_desc",
        price: 2.0,
      },
      {
        name: "menu_items.tea_mate",
        description: "menu_items.tea_mate_desc",
        price: 2.0,
      },
      {
        name: "menu_items.energy_drinks",
        description: "menu_items.energy_drinks_desc",
        price: 4.15,
      },
      {
        name: "menu_items.agua_de_coco",
        description: "menu_items.agua_de_coco_desc",
        price: 3.11,
      },
      {
        name: "menu_items.bottle_soda",
        description: "menu_items.bottle_soda_desc",
        price: 2.0,
      },
      {
        name: "menu_items.can_soda",
        description: "menu_items.can_soda_desc",
        price: 1.56,
      },
    ],
  },
];

export const doorDashLink =
  "https://order.online/store/la-argentina-caffe-miami-32915381/?hideModal=true&pickup=true&redirected=true";
