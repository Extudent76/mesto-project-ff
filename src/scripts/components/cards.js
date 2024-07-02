const cuteImage = new URL ("../../images/Милашкинсы.jpeg", import.meta.url);
const frendsImage = new URL ("../../images/Кентики.jpeg", import.meta.url);
const babyImage = new URL ("../../images/Малышка.jpg", import.meta.url);
const workImage = new URL ("../../images/Работа.jpeg", import.meta.url);
const vibeImage = new URL ("../../images/Музыка.jpeg", import.meta.url);
const metupImage = new URL ("../../images/Мероприятия.jpeg", import.meta.url);


export const initialCards = [
    {
      name: "Милашкинсы",
      link: cuteImage,
    },
    {
      name: "Кентики",
      link: frendsImage,
    },
    {
      name: "Малышка",
      link: babyImage,
    },
    {
      name: "Будущая работа",
      link: workImage,
    },
    {
      name: "Музыка",
      link: vibeImage,
    },
    {
      name: "Яндекс тусовки",
      link: metupImage,
    }
];