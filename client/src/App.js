import logo from './logo.svg';
import './App.css';
import { Header } from './components/common/header/Header';
import { PhotoLandscape } from './components/photo-landcape/PhotoLandscape';
import { RecentPhotos } from './components/recent-photos/RecentPhotos';
import { Footer } from './components/common/footer/Footer';

function App() {
  return (
    <main role="main">
      <Header />
      <PhotoLandscape />
      <RecentPhotos />
      <Footer />      
      </main>
     

  );
}

export default App;
