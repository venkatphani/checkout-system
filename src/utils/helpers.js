export const formatPrice = (amount) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
export const convertTitle = (title) => title.replace(/\s/g, "-");

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
