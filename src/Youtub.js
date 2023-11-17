import React, { useEffect, useState } from 'react';
import "./Youtub.css";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";

const Youtub = () => {
    let [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        try {
            let data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCBXtKnmTjMPov89M0uM51BabN1si3Nmbk&maxResults=60");
            let getdata = await data.json();
            setVideos(getdata.items);
        } catch (error) {
            console.log("Error fetching videos:", error);
        }
       
    }

    return (
        <div className="box11">
            <div className="ic">
                <h1 className='c'><FaHome /></h1>
                <h1 className='c'><SiYoutubeshorts /></h1>
                <h1 className='c'><MdOutlineSubscriptions /></h1>
                <h1 className='c'><FaYoutube /></h1>
                <h1 className='c'><FaArrowDown /></h1>

            </div>
        
        <div className="container">

            {videos.map((video) => (
                <div key={video.id}>
                    <img className='imm'
                        src={video.snippet.thumbnails.default.url}
                        alt={video.snippet.title}
                    />
                    <p className='p'>{video.snippet.title}</p>
                </div>
               
            ))}
        </div>
        </div>
    );
}

export default Youtub;
