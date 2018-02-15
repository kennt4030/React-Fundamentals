
    //  Two ways of adding props through PropsDemo.js and through the _routes.js file

import React, { Component } from 'react';
//         Used when adding props by _routes.js
// import React from   'react';
import PropTypes from 'prop-types';


export default class PropsDemo extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <Title title="CSS Creature" />
                    <Author author="Kenny Johnson" />
                    <CodepenUrl codepenUrl="www.codepen.io" />
                    <Footer date="01/15/2018" />

                        {/* how you would add properties using the _routes.js file
                    <h1>{this.props.title}</h1>
                    <p>{this.props.author}</p>
                    <p>{this.props.codepenUrl}</p>
                    <p>{this.props.date}</p> */}
                    <dl>
                        <dt><h1>Here are a few important things to know about props</h1></dt>
                        <dd>not the same as state, although they are related.</dd>
                        <dd>are received from above from a 'parent' component.</dd>
                        <dd>are immutable, although they can change depending on state.</dd>
                        <dd>are properties, a way to configure a component</dd>
                    </dl>


                </div>
            </div>
        )
    }
}

class Title extends Component {
    render() {
        return (
            <h3>
                {this.props.title}
            </h3>
        );
    }
}

class Author extends Component {
    render() {
        return (
            <h3>
                {this.props.author}
            </h3>
        );
    }
}

class CodepenUrl extends React.Component {
    render() {
        return (
            <h3>
                {this.props.codepenUrl}
            </h3>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <h3>
                {this.props.date}
            </h3>
        );
    }
}


PropsDemo.PropTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    codepenUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

PropsDemo.defaultProps = {
    title: 'Creature',
    author: 'Anon',
    codepenUrl: 'https://codepen.io/',
    date: '01/15/2018'

}


// adding Props using the .map() 

// import React, { Component }from 'react';
// import PropTypes from 'prop-types';
// // import ClassComponentDemo from '../ClassComponentDemo';

// export const Projects = [
//     { title: 'Beast Creature', author: 'Adam Smith', codepenUrl: 'https://codepen.io/Adamws33/pen/KZQxwJ', date: '01/15/2018' },
//     { title: 'Another Beast', author: 'Allison Summers', codepenUrl: 'https://codepen.io/alsummers/pen/vpjXOX', date: '01/15/2018' },
//     { title: 'Beast Mode', author: 'Andres Martin', codepenUrl: 'https://codepen.io/dreMartin/pen/eyVLGN', date: '01/15/2018' },
//     { title: 'Beasty', author: 'Andrew Gunst', codepenUrl: 'https://codepen.io/agunst99/pen/RxMYOM', date: '01/15/2018' },
// ]
// export default class PropsDemo extends Component {
//     constructor(props) {
//         super(props)
//             console.log("PropsDemo class:", props);
//             this.state = { projects: Projects};
//             console.log("state check:", this.state.projects);


//     }

//             render() {
//                 const works = this.state.projects.map((project, i) => {
//                     console.log("Project", project);
//                     console.log("index", i)

//             return(
//                     <div key={i}>
//                         <Title key={i} title={this.props.title} />
//                         <Author key={i} author={this.props.author} />
//                         <CodepenUrl key={i} codepenUrl={this.props.codepenUrl} />
//                         <Footer key={i} date={this.props.date} />
//                         <hr />
//                     </div>

//                 )
//             })

    //         return(
    //             <div className="main">
    //                 <div className="mainDiv">
    //                         <h1>List of Projects</h1>
    //                         <div>
    //                             {works}
    //                             <dl>
    //                                 <dt><h1>Here are a few important things to know about props</h1></dt>
    //                                 <dd>not the same as state, although they are related.</dd>
    //                                 <dd>are received from above from a 'parent' component.</dd>
    //                                 <dd>are immutable, although they can change depending on state.</dd>
    //                                 <dd>are properties, a way to configure a component</dd>
    //                             </dl>
    //                         </div>
    //                 </div>
    //             </div>
    //         )
    //     }
    
    // }



// class Title extends Component {
//     constructor(props) {
//         super(props)
//         console.log("Title props:", props);
//     }
//     render() {
//         return (
//             <p> {this.props.title} </p>
//         );
//     }
// }

// class Author extends Component {
//     constructor(props) {
//         super(props) 
//     }
//         render() {
//             return(
//                 <p> {this.props.author} </p>
//         )
//     }
// }

// class CodepenUrl extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return(
//             <p> {this.props.codepenUrl} </p>
//         )
//     }
// }

// class Footer extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return(
//             <p> {this.props.date} </p>
//         )
//     }
// }


// PropsDemo.propTypes = {
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     codepenUrl: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired
// }

// PropsDemo.defaultProps = {
//     title: 'Generic Creature project',
//     author: 'EFA Student',
//     codepenLink: 'www.codepen.com',
//     date: '01/01/2018'
// }