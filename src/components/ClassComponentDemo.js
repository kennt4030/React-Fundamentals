// import React, { Component } from 'react';


// export default class ClassComponentDemo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { simpleMessage: "Welcom user!!!" };
//     }

//     render() {
//         return (
//             <h1>Hello</h1>
//         );
//     }
// }

// //At this point we're doing nothing with the state that we initialize in our constructor. Below please see how we will use that state within the application.
// export default class ClassComponentDemo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {simpleMessage: "Welcome user!!!"};
//     }

//     render() {
//         return (
//             <div className= "main">
//                 <div className= "mainDiv">
//                     <classComponentNotes />
//                     <h4>
//                         {this.state.simpleMessage}
//                     </h4>
//                 </div>
//             </div>
//         );
//     }
// }

// const classComponentNotes = function () {
//     return (
//         <div>
//             <h1>Class Components</h1>
//             <p>Class components are considered the "React way" of writing components.</p>
//             <dl>
//                 <dt>ES6 JS Classes</dt>
//                 <dd>Built on these, must understand them.</dd>
//                 <dt>Must extend Component</dt>
//                 <dd>Class components need to extend the React Component.</dd>
//                 <dt>render()</dt>
//                 <dd>Class components must always have a render method.</dd>
//                 <dt>export</dt>
//                 <dd>Only one class Component exported per file.</dd>
//             </dl>
//         </div>
//     )
// }

//Such structure is quite common and allows us to easily separate concerns and work with components in a 
//highly modularized way. To remove the ClassComponentNotes from the app, 
//all we have to do now is remove the call.


import React, { Component } from 'react';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'


export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { incrementCount: 0, decrementCount: 0 };
    }

    incrementCount = () => {
        console.log("increment called");
        this.setState(
            { incrementCount: this.state.incrementCount + 1 }
        );
    };
    
    decrementCount = () => {
        this.setState(
            { decrementCount: this.state.decrementCount - 1}
        );
    };

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <ClassComponentNotes />
                    <hr />
                    <h1>like it!!!</h1>
                    <h4>
                    <button onClick={this.incrementCount}>
                        <FaThumbsUp />
                        {this.state.incrementCount}
                    </button>
                    </h4>
                    <h1>Dislike it!!!</h1>
                    <h4>
                        <button onClick={this.decrementCount}>
                            <FaThumbsDown />
                            {this.state.decrementCount}
                        </button>
                    </h4>
                </div>
            </div>
        );
    }
}



const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>must extend Component </dt>
                <dd>Class components need to extend the React Component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    );
};