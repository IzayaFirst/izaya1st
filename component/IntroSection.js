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
                                            <figure className="image is-148x148">
                                                <img className="avartar" src="/static/profile.jpg"/>
                                            </figure>
                                        </center>
                                </div>
                                 <div className="column is">
                                     <div className="text-head">Patchara1st</div>
                                     <div style={{marginTop: 20}}></div>
                                     <div className="text-title">
                                         Technology, Anime and Games, Passionate.  
                                     </div>
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
                        .avartar {
                                width: 148px !important;
                                height: 148px !important;
                                border-radius: 148px !important;
                                border: #fff 2px solid
                        }
                        .content-bg {
                            background-color: #1A3C47 !important;
                            position: relative;
                            z-index: 999;
                            box-shadow: 0 2px 5px rgba(0, 0, 0, .5) !important;
                        }
                    `}
                </style>
            </div> 
        );
    }
}

export default IntroSection;