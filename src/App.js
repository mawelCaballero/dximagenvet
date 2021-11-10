import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import CookieBanner from "react-cookie-banner";
import { Privacity } from './components/privacity/Privacity';

function App() {
  return (
    <div className="App">
      <Header/>
      <Contact/>    
      <Footer/>
      {/* <CookieBanner
      className="cookie-banner"
        message="Si, usamos cookies. Si no te gusta, puedes irte. No te echaremos de menos!"
        onAccept={() => {}}
        buttonMessage="Entendido"
        cookie="user-has-accepted-cookies"
        dismissOnScroll={false}
        link={<Privacity className="button-privacity"/>}
        /> */}
    </div>
  );
}

export default App;
