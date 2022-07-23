import React from 'react';

function Skill() {
    const date = new Date();
    const [month, day, year] = [Number(date.getMonth()) + 1, date.getDate(), date.getFullYear()];
    const dateText = "Final update: " + year + "-" + month + "-" + day;


    return (
        <div className = "container" id = "skill">
            <h1 className = "text-center mb-5">Skill</h1>
            <div className = "container cards">
                <div className = "card-deck mt-lg-5 d-flex flex-column flex-lg-row">
                    <div className = "card mb-5">
                        <img src="html.png" alt = "HTML/CSS" className = "card-img-top d-none d-lg-block cImg"></img>
                        <div className = "card-body">
                            <h5 className = "card-title">HTML / CSS</h5>
                            <p className = "card-text">ある程度は勉強済み。CSSライブラリはBootstrapを使っている。HTMLタグやCSSのスタイルについてはアウトプットをしながら知識を増やしていきたいと思っている。</p>
                            <p className = "card-text"><small>{dateText}</small></p>
                        </div>
                    </div>
                    <div className = "card mb-5">
                        <img src="javascript.png" alt = "JavaScript" className = "card-img-top d-none d-lg-block cImg"></img>
                        <div className = "card-body">
                            <h5 className = "card-title">JavaScript</h5>
                            <p className = "card-text">ある程度は勉強済み。JavaScriptライブラリはReact.jsを使っている。現在はNext.jsを勉強中。まだ調べながらでないとコードが書けない部分が多いので、インプット・アウトプットのバランスを調整していきたい。</p>
                            <p className = "card-text"><small>{dateText}</small></p>
                        </div>
                    </div>
                    <div className = "card mb-5">
                        <img src="ruby.png" alt = "Ruby" className = "card-img-top d-none d-lg-block cImg"></img>
                        <div className = "card-body">
                            <h5 className = "card-title">Ruby</h5>
                            <p className = "card-text">半年ほど前に深く勉強したが、最近は全く触れていないので忘れている部分も多い。Ruby on Railsを中心に学習したので、今一度インプットしなおし、Railsを使って何か作りたいと思っている。</p>
                            <p className = "card-text"><small>{dateText}</small></p>
                        </div>
                    </div>
                </div>
                <div className = "card-deck mt-lg-5 d-flex flex-column flex-lg-row">
                    <div className = "card mb-5">
                        <img src="python.png" alt = "Python/PHP" className = "card-img-top d-none d-lg-block cImg"></img>
                        <div className = "card-body">
                            <h5 className = "card-title">Python / PHP</h5>
                            <p className = "card-text">両方とも基礎中の基礎しか学習していない。今後は需要と必要性に応じてどちらも学習を進めていきたいと考えている。</p>
                            <p className = "card-text"><small>{dateText}</small></p>
                        </div>
                    </div>
                    <div className = "card mb-5">
                        <img src="Unity.png" alt = "Unity" className = "card-img-top d-none d-lg-block cImg"></img>
                        <div className = "card-body">
                            <h5 className = "card-title">Unity</h5>
                            <p className = "card-text">少しずつ学習中。だが、そこまでモチベーションが高いわけではない。Unityの勉強に伴い、C#も少しずつ覚えていきたい。</p>
                            <p className = "card-text"><small>{dateText}</small></p>
                        </div>
                    </div>
                    <div className = "card mb-5">
                        <img src="logo02.png" alt = "Other" className = "card-img-top d-none d-lg-block cImg"></img>
                        <div className = "card-body">
                            <h5 className = "card-title">Other</h5>
                            <p className = "card-text">データベースはMySQL、DevOps系ではDockerを使用した経験はあり。しかし浅学ではあるので、ちゃんとしたアプリ等を制作するためには勉強しないとな...と思っている。</p>
                            <p className = "card-text"><small>{dateText}</small></p>
                        </div>
                    </div>
                </div>
                <div className = "card mt-lg-5 mb-5">
                    <div className = "row no-gutters">
                        <div className = "col-lg-4">
                            <img src="tolearn.png" alt = "ToLearn" className = "card-img-top d-none d-lg-block cImg02"></img>
                        </div>
                        <div className = "col-lg-8">
                            <div className = "card-body">
                                <h5 className = "card-title">To Learn</h5>
                                <p className = "card-text">Git, Github及びAWSを学習したいと考えている。前者はチーム開発に向けた練習のため、後者はデプロイやその他開発に欠かせない機能の習得をするため。</p>
                                <p className = "card-text"><small>{dateText}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;