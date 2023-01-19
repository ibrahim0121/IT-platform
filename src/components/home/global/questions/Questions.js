import React from 'react';
import {BsQuestionLg} from "react-icons/bs"
import ArrowSvg from "../../../../assets/svg/ArrowSvg";


class AccordionItem extends React.Component {
    render() {
        const {accordion, onHeaderClick, isOpen} = this.props;
        return (
            <div className='accordion__item accordion-part'>
                <div style={{display:'flex' , justifyContent:'space-between'}} className={`accordion-part__header ${(isOpen) ? 'accordion-part__header_opened' : ''}`}
                     onClick={onHeaderClick}>
                    {accordion.title}
                    <div className={`arrow ${isOpen ? 'active' : ''}`}>
                        <ArrowSvg />
                    </div>
                </div>
                {(isOpen) &&
                    <div className="accordion-part__body">
                        <p className="accordion-part__text">
                            {accordion.text}
                        </p>
                    </div>
                }
            </div>

        )
    }
}

class AccordionList extends React.Component {
    state = {
        activeAccordion: 0,
    };

    headerClick = (index) => (
        this.setState(prev => ({
                activeAccordion: prev.activeAccordion === index ? -1 : index,
            })
        ));

    render() {
        const accordionElement = this.props.accordions.map((item, index) =>
            <AccordionItem
                key={item.title}
                accordion={item}
                isOpen={this.state.activeAccordion === index}
                onHeaderClick={this.headerClick.bind(null, index)}
            />
        );

        return (
            <div className='accordion__list'>
                {accordionElement}
            </div>
        )
    }
}

const accordions = [
    {
        title: 'Что такое зарезервированные слова в программировании?',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam assumenda beatae debitis delectus, dolor ducimus, eius enim error eum expedita harum id impedit inventore itaque laboriosam nulla obcaecati odit omnis quae quaerat quam quia, ratione repellendus sequi totam voluptate. Architecto earum error voluptas voluptate.'
    },
    {
        title: 'Могу ли я отказаться от автопродления подписки',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam assumenda beatae debitis delectus, dolor ducimus, eius enim error eum expedita harum id impedit inventore itaque laboriosam nulla obcaecati odit omnis quae quaerat quam quia, ratione repellendus sequi totam voluptate. Architecto earum error voluptas voluptate.'
    },
    {
        title: 'Могу ли я вернуть деньги',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam assumenda beatae debitis delectus, dolor ducimus, eius enim error eum expedita harum id impedit inventore itaque laboriosam nulla obcaecati odit omnis quae quaerat quam quia, ratione repellendus sequi totam voluptate. Architecto earum error voluptas voluptate.'
    },
    {
        title: 'Какие направление в IT самые актуальные',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam assumenda beatae debitis delectus, dolor ducimus, eius enim error eum expedita harum id impedit inventore itaque laboriosam nulla obcaecati odit omnis quae quaerat quam quia, ratione repellendus sequi totam voluptate. Architecto earum error voluptas voluptate.'
    }, {
        title: 'Нужно ли учить другой язык программирования, перед изучением языка С++?',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam assumenda beatae debitis delectus, dolor ducimus, eius enim error eum expedita harum id impedit inventore itaque laboriosam nulla obcaecati odit omnis quae quaerat quam quia, ratione repellendus sequi totam voluptate. Architecto earum error voluptas voluptate.'
    }, {
        title: 'Платформа обнавляется?',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam assumenda beatae debitis delectus, dolor ducimus, eius enim error eum expedita harum id impedit inventore itaque laboriosam nulla obcaecati odit omnis quae quaerat quam quia, ratione repellendus sequi totam voluptate. Architecto earum error voluptas voluptate.'
    }, {
        title: 'Как я могу получить доступ ка всем курсом',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam assumenda beatae debitis delectus, dolor ducimus, eius enim error eum expedita harum id impedit inventore itaque laboriosam nulla obcaecati odit omnis quae quaerat quam quia, ratione repellendus sequi totam voluptate. Architecto earum error voluptas voluptate.'
    },

];


const Questions = () => {
    return (
        <>
            <section id="questions">
                <div className="container">
                    <div className="questions">
                        <div className="questions--left">
                            <h1>Остались <br/> вопросы?</h1>
                            <BsQuestionLg className="icon"/>
                        </div>
                        <div className="questions--right">
                            <div className='accordion'>
                                <AccordionList accordions={accordions}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Questions;