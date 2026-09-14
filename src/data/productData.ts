import airFryer from "@/assets/products/air-fryer.webp";
import athleticJoggers from "@/assets/products/athletic-joggers.webp";
import basicTshirt from "@/assets/products/basic-tshirt.webp";
import brickFlowerBouquet from "@/assets/products/brick-flower-bouquet.webp";
import brickPoliceStation from "@/assets/products/brick-police-station.webp";
import brickSpaceFreighter from "@/assets/products/brick-space-freighter.webp";
import brickSportsCar from "@/assets/products/brick-sports-car.webp";
import brickWizardCastle from "@/assets/products/brick-wizard-castle.webp";
import ceramicDinnerwareSet from "@/assets/products/ceramic-dinnerware-set.webp";
import classicJeans from "@/assets/products/classic-jeans.webp";
import cordlessDrill from "@/assets/products/cordless-drill.webp";
import cottonHoodie from "@/assets/products/cotton-hoodie.webp";
import hardShellSuitcase from "@/assets/products/hard-shell-suitcase.webp";
import ledDeskLamp from "@/assets/products/led-desk-lamp.webp";
import oversizedJacket from "@/assets/products/oversized-jacket.webp";
import portableSpeaker from "@/assets/products/portable-speaker.webp";
import powerBank from "@/assets/products/power-bank.webp";
import smartWatch from "@/assets/products/smart-watch.webp";
import wirelessHeadphones from "@/assets/products/wireless-headphones.webp";
import yogaMat from "@/assets/products/yoga-mat.webp";

type ProductSection = {
  key: string;
  name: string;
  items: ProductType[];
};

export type ProductType = {
  id: number;
  image: string;
  price: number;
  name: string;
  description?: string;
};

const productSections: ProductSection[] = [
  {
    key: "first",
    name: "Lego",
    items: [
      {
        id: 1,
        image: brickFlowerBouquet,
        price: 950,
        name: "Lego Icons Цветочный букет",
        description:
          "Декоративный букет из деталей конструктора для сборки и интерьера.",
      },
      {
        id: 4,
        image: brickSpaceFreighter,
        price: 1500,
        name: "Lego Star Wars Millennium Falcon",
        description:
          "Легендарный космический корабль из вселенной Звездных Войн.",
      },
      {
        id: 5,
        image: brickSportsCar,
        price: 850,
        name: "Lego Technic Porsche 911",
        description:
          "Коллекционная модель спортивного автомобиля с высокой детализацией.",
      },
      {
        id: 6,
        image: brickPoliceStation,
        price: 350,
        name: "Lego City Police Station",
        description:
          "Игровой набор с полицейским участком, вертолетом и фигурками.",
      },
      {
        id: 7,
        image: brickWizardCastle,
        price: 600,
        name: "Lego Harry Potter Hogwarts Castle",
        description:
          "Миниатюрная копия замка Хогвартс для настоящих фанатов магии.",
      },
    ],
  },
  {
    key: "second",
    name: "Одежда",
    items: [
      {
        id: 2,
        image: oversizedJacket,
        price: 300,
        name: "Куртка оверсайз",
        description: "Удобная зимняя куртка с водоотталкивающим покрытием.",
      },
      {
        id: 8,
        image: cottonHoodie,
        price: 150,
        name: "Худи хлопковое",
        description: "Мягкое худи с начесом и карманом-кенгуру.",
      },
      {
        id: 9,
        image: classicJeans,
        price: 250,
        name: "Джинсы классические",
        description: "Прямые синие джинсы из плотного денима.",
      },
      {
        id: 10,
        image: basicTshirt,
        price: 80,
        name: "Футболка базовая",
        description: "Однотонная футболка из 100% хлопка.",
      },
      {
        id: 11,
        image: athleticJoggers,
        price: 180,
        name: "Спортивные брюки",
        description: "Легкие джоггеры для тренировок и отдыха.",
      },
    ],
  },
  {
    key: "third",
    name: "Разное",
    items: [
      {
        id: 3,
        image: wirelessHeadphones,
        price: 500,
        name: "Беспроводные наушники",
        description: "Наушники с активным шумоподавлением и мощным басом.",
      },
      {
        id: 12,
        image: smartWatch,
        price: 1200,
        name: "Умные часы",
        description: "Фитнес-трекер с AMOLED экраном и датчиком пульса.",
      },
      {
        id: 13,
        image: portableSpeaker,
        price: 450,
        name: "Портативная колонка",
        description: "Влагозащищенная колонка с чистым звуком на 10 Вт.",
      },
      {
        id: 14,
        image: powerBank,
        price: 250,
        name: "Внешний аккумулятор (Powerbank)",
        description: "Батарея на 20 000 мАч с поддержкой быстрой зарядки.",
      },
      {
        id: 15,
        image: ledDeskLamp,
        price: 150,
        name: "Настольная LED лампа",
        description: "Стильная лампа с регулировкой яркости и цвета света.",
      },
      {
        id: 20,
        image: cordlessDrill,
        price: 650,
        name: "Аккумуляторная дрель-шуруповерт",
        description: "Компактный инструмент с аккумулятором для домашних работ.",
      },
      {
        id: 21,
        image: airFryer,
        price: 900,
        name: "Аэрогриль",
        description: "Компактный аэрогриль с механической регулировкой времени.",
      },
      {
        id: 22,
        image: ceramicDinnerwareSet,
        price: 400,
        name: "Набор керамической посуды",
        description: "Комплект тарелок, мисок и кружек из матовой керамики.",
      },
      {
        id: 23,
        image: yogaMat,
        price: 120,
        name: "Коврик для йоги",
        description: "Нескользящий тренировочный коврик с ремнем для переноски.",
      },
      {
        id: 24,
        image: hardShellSuitcase,
        price: 700,
        name: "Чемодан на колесах",
        description: "Прочный чемодан среднего размера с телескопической ручкой.",
      },
    ],
  },
];

export default productSections;
