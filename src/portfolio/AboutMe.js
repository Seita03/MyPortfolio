import '../App.css';
import React from 'react';

function AboutMe() {
    return (
        <div className = "jumbotron" id = "aboutMe">
            <h1 className = "mb-5 text-center">About Me</h1>
            <div className = "container mt-lg-5 d-flex flex-column flex-lg-row justify-content-center">
                <img src = "logo01.png" alt = "logo01" id = "Logo01" className = "align-self-center mr-lg-5"></img>
                <p className = "ml-lg-5 text-center text-lg-left mt-5 mt-lg-0">プログラミングを独学で学ぶ大学生。<br></br>
                    エンジニア就職を目指している。<br></br>
                    現在の目標は知識の深化と技術の向上。<br></br>
                    プログラミングスクールのアシスタントとしても精進している。<br></br>
                    趣味はスポーツ観戦やYouTube視聴。<br></br>
                    好きなものはねこ。</p>
            </div>
        </div>
    )
}

export default AboutMe;