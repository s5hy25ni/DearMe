import { useContext, useEffect, useState } from "react";

import CheckHeader from './../components/CheckHeader'

const recommendVideo = () => {
    var collection2 = document.querySelectorAll(".collection2");
    function handleClick(event) {
        collection2.forEach((e) => {
            e.classList.remove("click");
        });
        event.target.classList.add("click");
    }
    collection2.forEach((e) => {
        e.addEventListener("click", handleClick);
    });
    
    return (
        <div className="video_app">
            <div className="video_wrap">
                <CheckHeader/>
                <div className="video_collection">
                    <span>
                        <div className="collection2">전체</div>
                        <div className="collection2">여행/일상</div>
                        <div className="collection2">먹방</div>
                        <div className="collection2">동물</div>
                    </span>
                </div>
                <div className="contents">
                     <div className="firstLine">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xUfeABR2BaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div> 
                    <div className="firstLine">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6r6Oj8xoAPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="firstLine">
                         <iframe width="560" height="315" src="https://www.youtube.com/embed/wmaJCu1mjII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="secondLine">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/lprh1FLJJbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="secondLine">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/r2rqghEwyaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="secondLine">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9UvAM1nStQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default recommendVideo;