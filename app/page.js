import CustomComponent from './components/retangulo.js';
import Botton from './components/botton.js'; // Importe o componente Botton
import Header from './components/Header/WrapHeader.js';
import Fundomain from './components/Main/Fundomain.js';
import Icons from './components/Footer/Icons.js';


const Home = () => {
  return (
    <div>
      <Header text="Home"/>
      <CustomComponent />
      <Botton text= "Botão" /> 
      <Fundomain />
      <Icons />
      
    </div>
  );
};

export default Home;


