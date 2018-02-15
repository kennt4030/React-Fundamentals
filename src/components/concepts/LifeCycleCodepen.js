import React from 'react';
import Iframe from 'react-iframe';



export default class LifeCycleCodepen extends React.Component {
    render() {        
        return (
            <div className="main">
                <div className="mainDiv">
                    <Iframe url="https://codepen.io/eduardoboucas/pen/jqWbdb/"
                position="relative"
                width="100%"
                id="myId"
                className="myClassname"
                height="450px"
                allowFullScreen/>
                </div>
            </div>
        );
    }
};




