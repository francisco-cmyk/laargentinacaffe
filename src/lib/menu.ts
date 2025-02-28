export type MenuType = "food" | "drink";

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  type: MenuType;
};

export const menuItems: MenuItem[] = [
  {
    name: "enegry drinks",
    price: "$4.15",
    description: "A variety of energy drinks for your daily needs",
    type: "drink",
  },
  {
    name: "Agua de coco",
    price: "$3.11",
    description: "Coconut water",
    type: "drink",
  },
  {
    name: "Bottle soda",
    price: "$2.07",
    description: "Soda in a bottle",
    type: "drink",
  },
  {
    name: "Can Soda",
    price: "$1.56",
    description: "",
    type: "drink",
  },
  {
    name: "Croquettes Sandwich",
    price: "$7.28",
    description:
      "Ham and cheese croquettes with lettuce, tomatoes, and mayonnaise",
    type: "food",
  },
  {
    name: "Omelette Eggs Sandwich",
    price: "$7.28",
    description: "",
    type: "food",
  },
  {
    name: "Choripan Sandwich",
    price: "$7.28",
    description: "Grill sausage with lettuce, tomatoes, and chimichurri sauce",
    type: "food",
  },
  {
    name: "Milanesa Sandwich",
    price: "$8.38",
    description:
      "Your choice beef or chicken breaded with lettuce, tomatoes and mayonnaise",
    type: "food",
  },
  {
    name: "Chicken Grilled Sandwich",
    price: "$8.38",
    description: "Chesse, bacon, lettuce, tomatoes and mayonnaise",
    type: "food",
  },
  {
    name: "Lomito Sandwich",
    price: "$10.38",
    description:
      "Sautéed beef topped with ham, cheese, fried egg, lettuce and tomatoes",
    type: "food",
  },
  {
    name: "Shredded Beef Sandwich",
    price: "$10.38",
    description: "Carne mechada y queso",
    type: "food",
  },
  {
    name: "Chicken Soup",
    price: "$8.38",
    description: "Sopas del día. 32 oz",
    type: "food",
  },
  {
    name: "Beef Soup",
    price: "$11.48",
    description: "Sopas del día. 32 oz",
    type: "food",
  },
  {
    name: "Lentil Soup",
    price: "$11.48",
    description: "Sopas del día. 32 oz",
    type: "food",
  },
  {
    name: "Tripe Soup",
    price: "$12.48",
    description: "Sopas del día. 32 oz",
    type: "food",
  },
  {
    name: "Argentinian Soup",
    price: "$10.98",
    description: "32 oz. Logro, corn, vegetable and beef",
    type: "food",
  },
  {
    name: "Scrambled Eggs",
    price: "$8.38",
    description: "",
    type: "food",
  },
  {
    name: "Two Fried Eggs",
    price: "$8.38",
    description: "Served with fresh fried bacon, tostada, and coffee",
    type: "food",
  },
  {
    name: "Tostado Ham / Cheese",
    price: "$7.38",
    description: "",
    type: "food",
  },
  {
    name: "Croissant Ham / Cheese or Eggs",
    price: "$10.38",
    description: "Croissant with ham and cheese (or eggs)",
    type: "food",
  },
  {
    name: "Ham and Cheese Empanada",
    price: "$2.58",
    description:
      "Fresh homemade. Bread dough stuffed with ham and cheese, eggs, red peppers",
    type: "food",
  },
  {
    name: "Shredded Beef Empanada",
    price: "$2.58",
    description:
      "Fresh homemade. Bread dough shredded beef, onions, red peppers, green peppers",
    type: "food",
  },
  {
    name: "Beef Empanada",
    price: "$2.58",
    description: "Fresh homemade. Ground beef, onions, potatoes, eggs",
    type: "food",
  },
  {
    name: "Spinach Empanada",
    price: "$2.58",
    description: "Fresh homemade. Bred dough stuffed with spinach and chesse",
    type: "food",
  },
  {
    name: "Chicken Empanada",
    price: "$2.58",
    description: "Fresh homemade. Pollo, onions, green peppers and red peppers",
    type: "food",
  },
  {
    name: "Croquettes Ham and Cheese",
    price: "$1.18",
    description: "Croquetas de jamón y queso",
    type: "food",
  },
  {
    name: "Fried Cheese Sticks",
    price: "$2.18",
    description: "Tequeños",
    type: "food",
  },
  {
    name: "Colada",
    price: "$2.58",
    description: "4 oz",
    type: "drink",
  },
  {
    name: "Cortadito",
    price: "$2.58",
    description: "4 oz",
    type: "drink",
  },
  {
    name: "Café Con Leche",
    price: "$3.18",
    description: "",
    type: "drink",
  },
  {
    name: "Café Americano",
    price: "$2.18",
    description: "12 oz",
    type: "drink",
  },
  {
    name: "Tea / Mate",
    price: "$2.18",
    description: "",
    type: "drink",
  },
  {
    name: "Water / Agua",
    price: "$1.55",
    description: "",
    type: "drink",
  },
  {
    name: "Natural Juices / Jugos Naturales",
    price: "$4.67",
    description: "",
    type: "drink",
  },
];

export const doorDashLink =
  "https://order.online/store/la-argentina-caffe-miami-32915381/?hideModal=true&pickup=true&redirected=true";
