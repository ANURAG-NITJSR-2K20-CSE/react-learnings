import ClockHeading from './components/clockheading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/currenttime';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App() {
  let currentDate = new Date().toLocaleDateString();;
  let currentTime = new Date().getTime();
  return (
    <center>
       <ClockHeading />
       <ClockSlogan />
       <CurrentTime />
    </center>
  )
}

export default App
