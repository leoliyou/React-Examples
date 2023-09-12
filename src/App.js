// import logo from './logo.svg';
import './App.css';
import Notification from "./Notification";


function App() {
  return (
    <div className="App">
      <Notification
        title="Notice"
        message="this is the message"
        severity="urgent "
      />
      <Notification
        title="Notice"
        message="this is the message"
        severity="important"
      />
      <Notification
        title="Notice"
        message="this is the message"
        severity="general"
      />
    </div>
  );
}

export default App;
