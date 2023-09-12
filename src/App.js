// import logo from './logo.svg';
import './App.css';
import Notification from "./Notification";
import Popup from "./Popup"


function gotoNextPage() {
  window.location.href = "https://www.baidu.com";
}

function App() {

  return (
    <div className="App">
      <Popup onClose={() => { } }>
        <Notification title="Notice" message="This is second" severity="important" />
      </Popup>
    </div>
  );
}

export default App;
