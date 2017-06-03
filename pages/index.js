import React, { Component } from 'react';
import Header from '../component/Header';
import IntroSection from '../component/IntroSection';
import Timeline from '../component/Timeline';

export default () => (
    <div>
        <Header/>
        <IntroSection />
        <div className="columns">
            <div className="column">
                <Timeline />
            </div>
            <div className="column">
                
            </div>
        </div>
        <style jsx global>
            {`
                body {
                    color: white;
                    font-family: font-family: 'Open Sans', sans-serif;
                    letter-spacing: 0;
                    font-weight: 400;
                    font-style: normal;
                    text-rendering: optimizeLegibility;
                    -webkit-font-smoothing: antialiased;
                }
                 .text-title {
                            font-weight: normal;
                            color: #fff !important;
                            font-family:  'Open Sans', sans-serif;
                            margin: 0px !important;
                            word-wrap: break-word !important;
                            font-size: 19px !important;
                            line-height: 24px !important;
                            letter-spacing: undefined !important;
                            padding-top: 0px !important;
                            padding-bottom: 0px !important;
                            display: inline !important;
                        }
                        .text-head {
                            font-weight: 700 !important;
                            color: white ;
                            font-family:  'Open Sans', sans-serif;
                            margin: 0px !important;
                            word-wrap: break-word !important;
                            font-size: 42px !important;
                            line-height: 48px !important;
                            letter-spacing: -0.6px !important;
                            padding-top: 6px !important;
                            padding-bottom: 6px !important;
                        }
                        .black {
                            color: black !important;
                        }
                        .large-font {
                            font-weight: 600 !important;
                        }
            `}
        </style>
    </div>
)