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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        width: '500px',
      }}
    >
      <Card cardData={cardData} />
    </div>

    <Footer />
  </>
);
