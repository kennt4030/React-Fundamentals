import React from 'react';



const JavaScriptConcepts = () => {
    return(
        <div className= 'main' >
            <div className= "mainDiv">
                <h1 className="section-title">JavaScriptConcepts</h1>
                    <dl>
                        <h1>Class Components</h1>
                        <dd>Must extend React.Component</dd>
                        <dd>Must always have a render method</dd>
                        <dd>Will often have a constructor</dd>
                        <dd>Class components are considered the "React way" of writing components</dd>
                        <dd>Known as intelligent components</dd>
                        <dd>Built with ES6 JS Classes</dd>
                        <dd>Have lifecycle hooks/methods, different phases in the lifecycle of the Component where different events can/should happen</dd>
                        <dd>Use export, like functional components</dd>
                        <dd>Multiple class components can be in one file, but only one class component should be exported for each file</dd>
                    </dl>
            </div>
        </div>
       
    );
}

export default JavaScriptConcepts;
