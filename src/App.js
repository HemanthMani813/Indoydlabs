import './App.css';
import QuizGame from './components/QuizGame';
//import QRCode from './components/QRCode';

function App() {
  return (
    <div className='quizgame_container'>
      <h1>QuizGame</h1>
      
      <div className='container'>
      {/* <QRCode/> */}
      <QuizGame/>

      </div>
      
    </div>
  );
}

export default App;
