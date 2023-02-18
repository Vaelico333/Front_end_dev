import './App.css';
import { TextoEmma, TextoSarah, TextoShawn } from './components/Texto';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      </div>
      <TextoShawn/>
      <TextoSarah/>
      <TextoEmma/>
    </div>
  );
}

export default App;
