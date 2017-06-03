import React, { Component } from 'react';
import Milestone from './subcomponent/Milestone';

class Timeline extends Component {

    render() {
        const timeline = [
            {
                title: "Born on 8th January, 1996",
                desc: "8th January, 1996 the wonderkid is borned to make this world better"
            },
            {
                title: "Started school at Assumption Collage",
                desc: "2002 join school at Assumption Collage"
            }, 
            {
                title: "Graduated high school",
                desc: "2014 Graduated from Assumption Collage in Math-Science"
            },
            {
                title: "Started undergraduate program at KMUTT",
                desc: "2015 Join King Mongkut's University of Technology Thonburi in major of Information Technology"
            },
            {
                title: "Join SIT Programming Bootcamp 2015",
                desc: "Joining the programming camp as a challanger"
            },
            {
                title: "Join SIT Programming Bootcamp 2016",
                desc: "Joining the programming camp as a coach"
            },
            {
                title: "Qualified in Nitad 2017 Innovation challange",
                desc: "Qualified in last 20 teams"
            },
            {
                title: "Join Startup Thailand League 2017",
                desc: "Join KMUTT Hatch startup" 
            },
            {
                title: "Start Internship program 2017 at Getlinks",
                desc: "Be a intern at Getlinks as Web developer" 
            }

        ]
        return (
            <div>
                <div className="how-it-work-section ">
                    <div className="wrapper">
                        <div className="title-timeline">
                             <div className="text-title black large-font">
                                 Biography  
                             </div>
                        </div>
                        {
                            timeline.map((val ,index) => {
                                return(
                                    <Milestone key={index} no={index+1} title={val.title} desc={val.desc} />
                                )
                            })
                        }
                    </div>
                </div>
                 <style jsx>
                    {`
                        .how-it-work-section {
                            background-color: #ffffff;
                            padding-left: 48px;
                        }
                        .wrapper {
                            width: 90%;
                            max-width: 1200px;
                            margin: 0 auto;
                            min-width: 320px;
                        }
                        .no {
                            background-color: #20a5a2;
                            border-radius: 50%;
                            height: 40px;
                            width: 40px;
                            text-align: center;
                            padding: 8px 0;
                            color: #ffffff;
                            font-weight: 600;
                        }
                        .timeline-row {
                            display: table;
                            width: 100%;
                        }
                        .timelime-desc { 
                            font-size: 14px;
                            padding: 15px 0;
                            color: #676767;    
                        }
                        .timeline-no {
                            position: absolute;
                            top: 45%;
                            left: -22px;
                        }
                        .timeline-title {
                            font-size: 20px;
                            font-weight: 600;
                            color: #1a3c48;
                        }
                        .timeline-info {
                            padding: 10px 0px 30px 80px;
                            width: 75%;
                            border-left: dashed 1px #158cb4;
                            position: relative;
                        }
                        .title-timeline {
                            text-transform: uppercase;
                            font-weight: 600;
                            color: #1b3c45;
                            padding: 20px 0px;
                            text-align: center;
                            width: 40%;
                            margin: 0 auto;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Timeline;