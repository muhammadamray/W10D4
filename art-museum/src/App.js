import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';

// console.log(harvardArt);

function App() {
  return (
    // <h1>Hello from App</h1>
    <GalleryNavigation galleries = {harvardArt.records} />
  );
}

export default App;
