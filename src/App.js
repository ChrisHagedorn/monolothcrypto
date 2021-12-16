import "./App.css";
import Tabs from './Tabs';
import Footer from './Footer';
import Logo from './Logo';
import Hr from './Hr';
import Bg from './Bg';
import Audio from "./Audio";

function App() {

  return (
    <div className="App">
        <Bg/>
        <Logo />
        <Hr/>
        <Tabs />
        <Footer />
        <Audio />
    </div>
  );
}
    
export default App;
