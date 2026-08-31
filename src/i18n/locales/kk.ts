import type { Locale } from "./ru";

const kk = {
  header: {
    logo: {
      home: "Басты бет",
    },

    location: {
      city: "Астана",
      address: "Мекенжайды нақтылаңыз",
      mobileAddress: "қала мен жеткізу мекенжайын нақтылаңыз",
    },

    search: {
      placeholder: "FlipClone-дан іздеу: 1 000 000 тауар",
      title: "Іздеу",
    },

    auth: {
      login: "Кіру",
      loginOrRegister: "Кіру / Тіркелу",
      mySection: "Менің бөлімім",
      orders: "Менің тапсырыстарым",
      contacts: "Байланыстар",
      help: "Көмек",
    },

    cart: {
      cartName: "Себет",
      cartNumber: "2 тауар",
    },

    menu: {
      catalog: "Каталог",
      discounts: "Жеңілдіктер мен акциялар",
      giftCards: "Сыйлық карталары",
      city: "Алматы",
      cart: "Себет",
      favorites: "Таңдаулылар",
      help: "Көмек",
      deliveryMethods: "Жеткізу тәсілдері",
      paymentMethods: "Төлем тәсілдері",
    },
  },
} satisfies Locale;

export default kk;
