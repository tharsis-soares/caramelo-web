import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Particles from 'react-particles-js'
import Contato from './components/Contato'

function App() {
  return (
    <>
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "square",
            stroke: {
              width: 6,
              color: "#fff"
            }
          }
        }
      }}
    

    />
    <Navbar />
    <Header />
    <Contato />
    </>
  );
}

export default App;
