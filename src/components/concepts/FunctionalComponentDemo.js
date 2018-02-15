import React from 'react';
import {Card, CardText, CardBody,CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';

const FunctionalComponentsDemo = function () {
    return (
        <Container className= "main" >
                <Row>
                    <Col>
                        <dl>
                            <dt><h1>functional component</h1></dt>
                            <dd>Functional components allow you to render information to the web page without having to use or change state.</dd>
                            <dt>Presentable</dt>
                            <dd>Often used for simply rendering a small chunk of code to the DOM.</dd>
                            <dt>No "this" keyword.</dt>
                            <dd>Unlike class components, functional ones don't use "this".</dd>
                            <dt>No State</dt>
                            <dd>These are "dumb" components for UI. Not used for complex calculations or anything that is too</dd>
                            <dt>return()</dt>
                            <dd>Must return a single element.</dd>
                        </dl> 
                    </Col>
                </Row>
                <hr />
            <h1>Challenge</h1>
            <Row>
                <Col md="6">
                    <HelloWorldFatArrow className="logo" />
                </Col>
                <Col md="6">
                    <HelloWorld />
                </Col>
            </Row>
        </Container>   
        

    );
};


        // Same as above but using the "fat arrow function".
// const FunctionalComponentsDemo = () => {
//     return (
//         <div className= "main" >
//             <div className= "mainDiv">
                
//                 <div>
//                     Hello React
//                 </div>
//                 <div> 
//                     How are you today?
//                 </div>    
                
//             </div>    
//         </div>

//     );
// };


export default FunctionalComponentsDemo;

const HelloWorld = function () {
    return (
        <div>
            <Card>
            <img width="100%" height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card cap" />
                <CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function() </pre>.</CardText>
                    <Button>Go somewhere, yo</Button>
                </CardBody>
            </Card>
        </div>
    )
};

//Fat Arrow Functional Component - 3 fewer lines. Common in React....
const HelloWorldFatArrow = () =>
    <div>
        <Card>
            <img width="100%" height="280px" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="Card cap" />
            <CardBody>
                <CardTitle>Fat Arrow</CardTitle>
                <CardSubtitle>A JS Library</CardSubtitle>
                <CardText><pre>const HelloWorld = () => </pre>.</CardText>
                <Button>Go somewhere man</Button>
            </CardBody>
        </Card>
    </div>