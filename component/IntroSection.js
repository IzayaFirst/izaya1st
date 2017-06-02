import React, { Component } from 'react';


class IntroSection extends Component {
    render() {
        return (
            <div>
                <section className="section content-bg">
                    <div className="header">
                        <div className="container">
                            <div className="columns is-desktop">
                                 <div className="column is-4">
                                        <center>
                                            <figure className="image is-128x128">
                                                <img className="avartar" src="/static/profile.jpg"/>
                                            </figure>
                                        </center>
                                </div>
                                 <div className="column is">
                                     <div className="text-head">Patchara1st</div>
                                     <div style={{marginTop: 20}}></div>
                                     <div className="text-title">I'm Web Developer</div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>   
                <style jsx>
                    {`
                        .header {
                            padding-top: 30px;
                            padding-bottom: 30px
                        }
                        .text-title {
                            font-weight: normal !important;
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
                            color: white !important;
                            font-family:  'Open Sans', sans-serif;
                            margin: 0px !important;
                            word-wrap: break-word !important;
                            font-size: 42px !important;
                            line-height: 48px !important;
                            letter-spacing: -0.6px !important;
                            padding-top: 6px !important;
                            padding-bottom: 6px !important;
                        }
                        .avartar {
                                width: 128px !important;
                                height: 128px !important;
                                border-radius: 128px !important;
                        }
                        .content-bg {
                            background-color: #1A3C47 !important;
                            position: relative;
                        }
                    `}
                </style>
            </div> 
        );
    }
}

export default IntroSection;