import React, { Component } from 'react';

class Milestone extends Component {
    render() {
        return (
                <div className="timeline-row">
                    <div className="timeline-info">
                        <div className="timeline-no">
                            <div className="no">{this.props.no}</div>
                        </div>
                        <div className="timeline-title">
                            {this.props.title}
                        </div>
                        <div className="timelime-desc">
                            {this.props.desc}
                        </div>
                    </div>
                      <style jsx>
                    {`
                       
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
                           /* top: 45%;*/
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
                    `}
                </style>
                </div>
        );
    }
}

export default Milestone;