// import cardExample from './cardExample.png';

export const cardData = {
  id: 123243212,
  author: 'Aneta Maszczak',
  authorPosition: 'IT director',
  timestamp: 1632044887906,
  likes: 12,
  content: 'How the hell am I supposed to work??? ',
  // imageUrl: cardExample,
  imageUrl: null,
  link: {
    url: `https://www.youtube.com/watch?v=ZTYSAl9Npqw`,
    title:
      'Męskie Granie Orkiestra 2021 (Daria Zawiałow, Dawid Podsiadło, Vito Bambino) - I Ciebie też, bardzo',
    image: 'https://i.ytimg.com/vi/ZTYSAl9Npqw/maxresdefault.jpg',
    description:
      'Authors:Text: Daria Zawiałow, Dawid Podsiadło, Vito BambinoComposition: Bartosz Dziedzic, Aleksander KrzyżanowskiMix/mastering - Piotr PrzedboraVocals: Daria...',
    siteName: 'Youtube',
  },
  comments: [
    {
      id: 1,
      author: 'Mateusz',
      content: 'Comment 1',
      replies: [
        {
          id: 11,
          author: 'Edyta',
          content: 'Comment 11 ',
          replies: [],
        },
      ],
    },
    {
      id: 2,
      author: 'Tomasz K.',
      content: 'Comment 2',
      replies: [],
    },
  ],
};
