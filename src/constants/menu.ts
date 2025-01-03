import { StaticImageData } from "next/image";
import image1 from "../assets/menu/photo1.png";
import image2 from "../assets/menu/photo2.png";
import image3 from "../assets/menu/photo3.png";
import image4 from "../assets/menu/photo4.png";
import image5 from "../assets/menu/photo5.png";
import image6 from "../assets/menu/photo6.png";
interface IExtra {
  name: string;
  price: number;
}
interface IDrinks {
  name: string;
  price: number;
}

interface IMenu {
  name: string;
  description: string;
  category: string;
  price: number;
  image: StaticImageData;
  consistance: string[];
  extras: IExtra[];
  drinks: IDrinks[];
}

export const main_menu: IMenu[] = [
  {
    name: "Ice cream",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "desserts",
    price: 9,
    image: image1,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Ice cream",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "desserts",
    price: 9,
    image: image2,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Ice cream",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "desserts",
    price: 9,
    image: image3,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Ice cream",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "desserts",
    price: 9,
    image: image4,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Ice cream",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "desserts",
    price: 9,
    image: image5,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Ice cream",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "desserts",
    price: 9,
    image: image6,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  //hot drinkg
  {
    name: "Tea",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Hot drinks",
    price: 9,
    image: image1,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Tea",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Hot drinks",
    price: 9,
    image: image2,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Tea",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Hot drinks",
    price: 9,
    image: image3,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Tea",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Hot drinks",
    price: 9,
    image: image4,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Tea",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Hot drinks",
    price: 9,
    image: image5,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Tea",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Hot drinks",
    price: 9,
    image: image6,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  //cold drinks
  {
    name: "Fanta",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Cold drinks",
    price: 9,
    image: image1,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Fanta",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Cold drinks",
    price: 9,
    image: image2,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Fanta",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Cold drinks",
    price: 9,
    image: image3,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Fanta",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Cold drinks",
    price: 9,
    image: image4,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Fanta",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Cold drinks",
    price: 9,
    image: image5,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Fanta",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Cold drinks",
    price: 9,
    image: image6,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  //National foods
  {
    name: "Besh-mark",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "National Foods",
    price: 9,
    image: image1,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Besh-mark",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "National Foods",
    price: 9,
    image: image2,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Besh-mark",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "National Foods",
    price: 9,
    image: image3,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Besh-mark",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "National Foods",
    price: 9,
    image: image4,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Besh-mark",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "National Foods",
    price: 9,
    image: image5,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Besh-mark",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "National Foods",
    price: 9,
    image: image6,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  //Eastern coisine
  {
    name: "Sushi",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Eastern cuisine",
    price: 9,
    image: image1,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Sushi",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Eastern cuisine",
    price: 9,
    image: image2,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Sushi",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Eastern cuisine",
    price: 9,
    image: image3,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Sushi",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Eastern cuisine",
    price: 9,
    image: image4,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Sushi",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Eastern cuisine",
    price: 9,
    image: image5,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Sushi",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Eastern cuisine",
    price: 9,
    image: image6,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  //Fast food
  {
    name: "Burger",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Fast food",
    price: 9,
    image: image1,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Burger",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Fast food",
    price: 9,
    image: image2,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Burger",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Fast food",
    price: 9,
    image: image3,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Burger",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Fast food",
    price: 9,
    image: image4,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Burger",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Fast food",
    price: 9,
    image: image5,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
  {
    name: "Burger",
    description:
      "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
    category: "Fast food",
    price: 9,
    image: image6,
    consistance: ["Soda", "cream", "milk", "sugar"],
    extras: [
      {
        name: "Cherry",
        price: 0.9,
      },
      {
        name: "Cherry",
        price: 0.9,
      },
    ],
    drinks: [
      {
        name: "Coca-cola",
        price: 0.9,
      },
      {
        name: "Coca-Cola",
        price: 0.9,
      },
    ],
  },
];
