import React from 'react';
import Articles from "../articles/Articles";

const Hero = () => {
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="hero">
                        <div className="hero--left">
                            <h1>IT образовательная <br/> платформа </h1>
                            <p>Наша образовательная платформа вам <br/> даст необходимые практические <br/>знания для
                                адаптации в IT-сфере.
                            </p>
                        </div>
                        <div className="hero--right">
                            <div className="hero--right__img">
                                {/*<img src={hero} alt="img"/>*/}
                            </div>
                        </div>
                    </div>

                    <div className="articles">
                        <h1>Последние статьи</h1>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Hero;