import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import Card from '../components/Card/Card';
import { cardData } from '../components/Card/assets/cardData';

export const Home = () => (
  <>
    <Header />
    <main>
      <h1>Home</h1>
    </main>
    <Card cardData={cardData} />

    <Footer />
  </>
);
