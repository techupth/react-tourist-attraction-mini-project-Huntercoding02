import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Home() {
  const [resultVacation, setResultVacation] = useState("");
  const [searchVacation, setSearchVacation] = useState([]);

  const getData = async () => {
    const dataVacation = await axios.get(
      `http://localhost:4001/trips?keywords=${resultVacation}`
    );
    setSearchVacation(dataVacation.data.data);
    console.log(dataVacation.data.data);
  };

  useEffect(() => {
    getData();
  }, [resultVacation]);

  return (
    <>
      <div className="title-page">
        <h1>เที่ยวไหนดี</h1>
      </div>
      <div className="search-info">
        <p>ค้นหาที่เที่ยว</p>
        <input
          className="search-input"
          placeholder="หาที่เที่ยวแล้วไปกัน"
          onChange={(event) => {
            setResultVacation(event.target.value);
          }}
        ></input>
        <hr />
      </div>
      {searchVacation.map((item, index) => {
        return (
          <div className="container" key={index}>
            
            <div className="photo-search">
              <img
                className="photo-preview"
                src={item.photos[0]}
                alt="photo views"
                width="550"
                height="350"
              ></img>
            </div>
            <div className="block-detail">
            <div className="Vacation-detail">
            <a href={item.url}><h2> {item.title} </h2></a>
              <p > {item.description.slice(0, 100) + "..."} </p>
              <div className="action">
                <a href={item.url} target="_blank">อ่านต่อ</a>
                <p>
                  หมวด {item.tags[0]} <a link="#">{item.tags[1]}</a>{" "}
                  <a link="#">{item.tags[2]}</a> <a link="#">{item.tags[3]}</a>{" "}
                  และ <a link="#">{item.tags[4]}</a>
                </p>
              </div>
            </div>
            
            <div className="photo-moredetail">
              <img
                src={item.photos[1]}
                className="photo-moredetail-pic1"
                alt="photo views"
                width="150"
                height="150"
              ></img>
              <img
                src={item.photos[2]}
                className="photo-moredetail-pic2"
                alt="photo views"
                width="150"
                height="150"
              ></img>
              <img
                src={item.photos[3]}
                className="photo-moredetail-pic3"
                alt="photo views"
                width="150"
                height="150"
              ></img>
            </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Home;
