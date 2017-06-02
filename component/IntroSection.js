import React, { Component } from 'react';


class IntroSection extends Component {
    render() {
        return (
            <div>
                <section className="content-bg">
                    <div className="headerContainer">
                        Hello world
                    </div>
                </section>   
                <style jsx>
                    {`
                        .content-bg {
                            background-color: #e62117 !important;
                        }
                        .headerContainer {
                                padding-top: 20px;
                                padding-bottom: 20px;
                                padding-right: 20px;
                                width: 100%;
                                height: 100%;
                                display: table;
                        }
                    `}
                </style>
            </div> 
        );
    }
}

export default IntroSection;