import React, { Component } from 'react';
import Header from '../component/Header';
import IntroSection from '../component/IntroSection';

export default () => (
    <div>
        <Header/>
        <IntroSection />
        <style jsx global>
            {`
                body {
                    color: white
                }
            `}
        </style>
    </div>
)