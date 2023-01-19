import React from 'react';
import Hero from "./hero/Hero";
import Subscribe from "./subscribe/Subscribe";
import Questions from "./questions/Questions";
import Request from "./request/Request";

const Global = () => {
    return (
        <>
            <Hero/>
            <Subscribe/>
            <Questions/>
            <Request/>
        </>
    );
};

export default Global;