import { React, useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./Styles/App.css";
const api = process.env.REACT_APP_APIURL;
const token = process.env.REACT_APP_TOKEN;
const App = () => {
  const [change, setChange] = useState("false");
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [proj, setProj] = useState();
  const handleToggle = () => {
    setChange(!change);
  };

  const raw_data = async () => {
    const response = await fetch(`${api}/api/catagories`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    //  console.log(data);
    //setPosts(data.data);
    setProj(data.data[0].attributes.UID);
  };

  useEffect(() => {
    try {
      raw_data();
    } catch (e) {
      console.error(e);
    }
  }, []);
  if (!proj) return <div>Loading...</div>;
  return (
    <div className="App">
      <div className="content">
        <div className="title">
          <div
            className={`${change ? "ham" : "change"}`}
            onClick={() => {
              handleToggle();
              setNavbarOpen(!navbarOpen);
            }}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="name">Olivia Parsons</div>

          <a
            href="https://www.instagram.com/olivia_parsons_art/?hl=en-gb"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="instagram" />{" "}
          </a>
        </div>
        <div className="nav">
          {navbarOpen ? (
            <Navbar
              navbarOpen={navbarOpen}
              setNavbarOpen={setNavbarOpen}
              handleToggle={handleToggle}
              project={proj}
            />
          ) : null}
        </div>

        {!navbarOpen ? <Main /> : null}
      </div>
    </div>
  );
};

export default App;
