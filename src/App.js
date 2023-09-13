// import logo from './logo.svg';
import './App.css';
// import Notification from "./Notification";
// import Popup from "./Popup"


// function gotoNextPage() {
//   window.location.href = "https://www.baidu.com";
// }
// import LikeButton from "./LikeButton";
import { useState, useEffect } from 'react';
import LikeButton from './LikeButton';
function App() {
  const [page, setPage] = useState(1);
  const [option, setOption] = useState("react")
  const [issues,setIssues]=useState([])
  useEffect(
    () => {
      console.log("current page", page)

      fetch('https://api.github.com/repos/facebook/' +option+ '/issues?page='+page)
        .then((res) => res.json())
        .then((data) => {
          console.log({ data })
          setIssues(data)
        })
    }
 ,[page, option] )

    useEffect(() => {
      console.log("current option", option);
    }, [option]);

    useEffect(() => {
      console.log("page loader");
    }, []);


  return (
    <div style={{ paddingLeft: "20px;" }}>
      <h2>Page{page}</h2>
      <div>
        <button onClick={() => setPage(Math.max(1, page - 1))}>Preview</button>
        <button onClick={() => setPage(Math.min(5, page + 1))}>Next</button>
      </div>
{/*
      <h3>Selected:{option}</h3>
      <select onChange={(evt) => setOption(evt.target.value)}>
        <option value="most popular">Most Popular</option>
        <option value="most viewed">Most Viewed</option>
        <option value="recent added">Recent Added</option>
      </select> */}

      <h3>Selected:{option}</h3>
      <select onChange={(evt) => setOption(evt.target.value)}>
        <option value="react">react</option>
        <option value="create-react-app">create-react-app</option>

      </select>

      <ul>
        {issues.map((issue) => {
          return <li>{issue.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
