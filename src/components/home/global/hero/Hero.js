import React from 'react';
// import coding from '../../../images/Ellipse4.png'
// import Ellipse3 from '../../../images/Ellipse 3.png'
import men from '../../../../assets/img/herobgggggg.png'
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
                                {/*<img className="menImage" src={men}/>*/}
                            </div>
                        </div>
                    </div>

                    <div className="articless">
                        <h1>Последние статьи</h1>

                    </div>
                </div>

            </section>

        </>
    );
};

export default Hero;