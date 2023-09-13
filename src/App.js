// import logo from './logo.svg';
// import './App.css';
// import Notification from "./Notification";
// import Popup from "./Popup"


// function gotoNextPage() {
//   window.location.href = "https://www.baidu.com";
// }
import LikeButton from "./LikeButton";
function App() {

  return (
    <div className="App">
         <LikeButton />
         <LikeButton liked={true} likedCount={8} />
      </div>

  );
}

export default App;
