import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    title: "Chocolate",
    imageUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/chocolate.webp",
  },
  {
    _id: uuid(),
    title: "Strawberry",
    imageUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262272/ecommerce/strawberry.webp",
  },
  {
    _id: uuid(),
    title: "Pineapple",
    imageUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/pineapple.webp",
  },
  {
    _id: uuid(),
    title: "Vanilla",
    imageUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647262271/ecommerce/vanilla.webp",
  },
];
