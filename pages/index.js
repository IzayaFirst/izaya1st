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
                    color: white;
                    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
                    letter-spacing: 0;
                    font-weight: 400;
                    font-style: normal;
                    text-rendering: optimizeLegibility;
                    -webkit-font-smoothing: antialiased;
                }
            `}
        </style>
    </div>
)