import { useState,useEffect } from "react";
import axios from "axios";


function Home () {
    const [resultVacation,setResultVacation]=useState('')
    const [searchVacation,setSearchVacation]=useState([])

    const getData = async()=>{
        const dataVacation = await axios.get(`http://localhost:4001/trips?keywords=${resultVacation}`)
        setSearchVacation(dataVacation.data.data)
        console.log(dataVacation.data.data)
    } 

    useEffect(()=>{
        getData()
    },[resultVacation])

    const truncateDescription = (description) => {
        return description.length > 100 ? description.slice(0, 100) + "..." : description;
    };

    return(
        <>
        <div className="titel-page">
            <h1>เที่ยวไหนดี</h1>
        </div>
        <div className="search-info">
            <p>ค้นหาที่เที่ยว</p>
            <input
            placeholder="หาที่เที่ยวแล้วไปกัน"
            onChange={(event)=>{
                setResultVacation(event.target.value)
            }}
            
            ></input>
            <hr />
        </div>
        {searchVacation.map((item,index)=>{
                return(
                    <div key={index}>
                <div className="photo-search">
                <img
                src={item.photos[0]}
                alt="photo views"
                width="350"
                height="350"></img>
                </div>
                <div className="Vacation-detail">
                <h2> {item.title} </h2>
                <p> {truncateDescription(item.description)} </p>
                <div className="action">
                <a href={item.url}>อ่านต่อ</a>
                <p>หมวด {item.tags[0]} <a link ="#" >{item.tags[1]}</a> <a link ="#">{item.tags[2]}</a> <a link ="#">{item.tags[3]}</a> และ <a link ="#">{item.tags[4]}</a></p>
                </div>
                </div>
                <div className="photo-moredetail">
                <img src={item.photos[1]}
                alt="photo views"
                width="250"
                height="250"></img>
                <img src={item.photos[2]}
                alt="photo views"
                width="250"
                height="250"></img>
                <img src={item.photos[3]}
                alt="photo views"
                width="250"
                height="250"></img>
                </div>
            </div>
                )
            })}
                
            
            
        </>
    )
}
export default Home