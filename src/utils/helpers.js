import { OFFER_TYPES } from "./enums";

export const formatPrice = (amount) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
export const convertTitle = (title) => title.replace(/\s/g, "-");

// companyId : {companyInfo}

export const companies = {
  "0": {
    name: "Select Company",
    offers: {},
  },
  "1": {
    name: "Infosys",
    offers: {
      // array as there might be multiple offers for different quantities of the same item. to scale the application
      "1": [
        { offerType: "QUANTITY", offerApplicableMinQuantity: 2, offer: 1, description: "Buy 2 pizzas, get one free on Small Pizza" },
        { offerType: "QUANTITY", offerApplicableMinQuantity: 3, offer: 2, description: "Buy 3 pizzas, get two free on Small Pizza" },
      ],
    },
  },
  "2": {
    name: "Amazon",
    offers: {
      // mutiple offers on price drop for differnet quantities of the same item
      "3": [
        {
          offerType: "PRICE",
          offerApplicableMinQuantity: 1,
          discount: 95,
          description: "Buy upto 2 Large pizzas & get a discount of $95 on each Pizza",
        },
        {
          offerType: "PRICE",
          offerApplicableMinQuantity: 3,
          discount: 110,
          description: "Buy 3 or more Large pizzas, Get a discount of $110 on each Pizza",
        },
      ],
    },
  },
  "3": {
    name: "Facebook",
    offers: {
      "2": [{ offerType: "QUANTITY", offerApplicableMinQuantity: 4, offer: 1, description: "Buy 4 pizzas, get one free on Medium Pizza" }],
      "3": [{ offerType: "PRICE", offerApplicableMinQuantity: 1, discount: 5, description: "Get a discount of $5 on each Large Pizza" }],
    },
  },
};

export const calculateCartValue = (companyId, cart) => {
  const company = companies[companyId];
  const { offers } = company;
  let finalCartValue = 0;
  if (Object.keys(offers).length === 0) {
    for (let count = 0; count < cart.length; count += 1) {
      const item = cart[count];
      const { price, quantity } = item;
      const subtotal = price * quantity;
      item.subtotal = subtotal;
      finalCartValue += subtotal;
    }
  } else {
    for (let i = 0; i < cart.length; i += 1) {
      const item = cart[i];
      const { quantity, price, id } = item;
      const offersOnPizza = offers[id];
      const initialTotal = quantity * price;
      if (offersOnPizza && offersOnPizza.length > 0) {
        // find the closest offer in the array of offers
        const closestOffersArray = offersOnPizza.filter((e) => {
          const { offerApplicableMinQuantity, offer = 0 } = e;
          return offerApplicableMinQuantity + offer <= quantity;
        });
        const closestOffer = closestOffersArray[closestOffersArray.length - 1];
        let finalDiscount = 0;
        if (closestOffer) {
          const { offerApplicableMinQuantity, offer = 0, discount = 0, offerType } = closestOffer;
          if (offerType === OFFER_TYPES.QUANTITY) {
            finalDiscount = Math.floor(quantity / (offerApplicableMinQuantity + offer)) * offer * price;
          } else {
            finalDiscount = quantity * discount;
          }
        }
        const subTotal = initialTotal - finalDiscount;
        item.subtotal = subTotal;
        finalCartValue += subTotal;
      } else {
        item.subtotal = initialTotal;
        finalCartValue += initialTotal;
      }
    }
  }
  return finalCartValue;
};

export const pizzas = [
  {
    id: "1",
    title: "Small Pizza",
    quantity: 0,
    price: 269.99,
    url: "https://lirp-cdn.multiscreensite.com/000d55a4/dms3rep/multi/opt/About-640w.jpg",
    description: "10'' pizza for one person",
  },
  {
    id: "2",
    title: "Medium Pizza",
    quantity: 0,
    price: 322.99,
    url:
      "https://content3.jdmagicbox.com/comp/noida/r4/011pxx11.xx11.180830082714.n9r4/catalogue/" +
      "domino-s-pizza--sector-31-noida-pizza-outlets-3x5ntwfuns.jpg",
    description: "12'' pizza for two people",
  },
  {
    id: "3",
    title: "Large Pizza",
    quantity: 0,
    price: 394.99,
    url:
      "https://content3.jdmagicbox.com/comp/bhopal/n9/0755px755.x755.130917122813.y9n9/catalogue/" +
      "domino-s-pizza-indrapuri-bhopal-pizza-outlets-vo9yenr20h.jpg",
    description: "15'' pizza for four people",
  },
];
