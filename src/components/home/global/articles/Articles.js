import React from 'react';
import articles from "../../../../assets/img/articlePhoto.png"
import {TiDocumentText} from "react-icons/ti";
import ten from "../../../../assets/img/ten.png"

const Articles = () => {
    return (
        <>

            <section id="articles">
                <div className="container">
                    <div className="articles">

                        <div className="articles--img"></div>

                        <div className="articles--blocks">
                            <div className="articles--blocks__one">
                                <img src={articles} alt="img"/>
                                <span>Статьи</span>
                                <p>
                                    Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training
                                    Center.
                                </p>
                                <div className="articles--blocks__one--icon">
                                    <a href="#"><TiDocumentText/> Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                            <div className="articles--blocks__one">
                                <img src={articles} alt="img"/>
                                <span>Статьи</span>
                                <p>
                                    Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training
                                    Center.
                                </p>
                                <div className="articles--blocks__one--icon">
                                    <a href="#"><TiDocumentText/> Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                            <div className="articles--blocks__one">
                                <img src={articles} alt="img"/>
                                <span>Статьи</span>
                                <p>
                                    Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training
                                    Center.
                                </p>
                                <div className="articles--blocks__one--icon">
                                    <a href="#"><TiDocumentText/> Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                            <div className="articles--blocks__one">
                                <img src={articles} alt="img"/>
                                <span>Статьи</span>
                                <p>
                                    Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training
                                    Center.
                                </p>
                                <div className="articles--blocks__one--icon">
                                    <a href="#"><TiDocumentText/> Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                            <div className="articles--blocks__one">
                                <img src={articles} alt="img"/>
                                <span>Статьи</span>
                                <p>
                                    Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training
                                    Center.
                                </p>
                                <div className="articles--blocks__one--icon">
                                    <a href="#"><TiDocumentText/> Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                            <div className="articles--blocks__one">
                                <img src={articles} alt="img"/>
                                <span>Статьи</span>
                                <p>
                                    Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training
                                    Center.
                                </p>
                                <div className="articles--blocks__one--icon">
                                    <a href="#"><TiDocumentText/> Читать</a>
                                    <a href="#">01.02.2022</a>
                                </div>
                            </div>
                        </div>

                        <div className="articles--btn">
                            <button>Показать больше</button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Articles;