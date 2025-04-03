import './App.css';
import { useState, useEffect } from "react";
function App() {
  const [links, setlinks] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/allPass")
      .then(response => response.json())
      .then(data => {
        setlinks(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="App">
      {links.map(item => (
        <div className='box'>
          {item.name && <div className="name">Name: {item.name}</div>}
          <div className='url'>Url: {item.url}</div>
          {item.password && <div className="pass">Password: {item.password}</div>}
          {item.desc && <div className="desc">Description: {item.desc}</div>}
          <div className='but'>
            <a href={item.url} target="_blank">
              Visit Url
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
