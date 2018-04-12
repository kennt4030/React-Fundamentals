import React from 'react';
import Home from './Home';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import ClassComponentDemo from '../ClassComponentDemo';
import PropsDemo from '../concepts/PropsDemo';
import JSXRules from '../concepts/JSXRules';
import JavaScriptConcepts from '../concepts/JavaScriptConcepts';
import Codepen from '../concepts/LifeCycleCodepen';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import MovieSearchApp from '../apps/movie-search-app/MovieApp';
import Resources from './Resources';



export const routes = [ //these paths are arrays due to the square brackets
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/functionalcomponent',
      exact: true,
      sidebar: () => <div>FunctionalComponentDemo</div>,
      main: () => <div>< FunctionalComponentDemo /></div>
    },
    {
      path: '/JSXRules',
      exact: true,
      sidebar: () => <div>JSXRules</div>,
      main: () => <JSXRules />
    },
    {
      path: '/JavaScriptConcepts',
      exact: true,
      sidebar: () => <div>JavaScript_Concepts</div>,
      main: () => <JavaScriptConcepts />
    },
    {
      path: '/ClassComponentDemo',
      exact: true,
      sidebar: () => <div>Class Components</div>,
      main: () => <ClassComponentDemo />
    },
    {
      path: '/PropsDemo',
      exact: true,
      sidebar: () => <div>Props Demo</div>,
      main: () => <PropsDemo />
    },

    //**************How to add props using the _routes.js file */
    // {
    //   path: '/propsdemo',
    //   exact: true,
    //   sidebar: () => <div>Props Demo</div>,
    //   main: () => <div>
    //                 <PropsDemo title="Beast with a Beard" author="Adam Smith" codepenUrl="https://codepen.io/Adamws33/pen/KZQxwJ" date="01/15/2018" />
    //                 <PropsDemo title="Celtic Beast" author="Allison Summers" codepenUrl="https://codepen.io/alsummers/pen/jYzyZZ" date="01/15/2018" />
    //                 <PropsDemo title="Beast from Caracas" author="Andres (Dre) Martin" codepenUrl="https://codepen.io/dreMartin/pen/eyVLGN" date="01/15/2018" />
    //                 <PropsDemo title="Beast with the Flue" author="Andrew Gunst" codepenUrl="https://codepen.io/agunst99/pen/RxMYOM" date="01/15/2018" />
    //               </div>
    // },
    {
      path: '/LifeCycleCodepen',
      exact: true,
      sidebar: () => <div>Life Cycle Diagram</div>,
      main: () => <Codepen />,
    },
    {
      path: 'TimePiecesApp ',
      exact: true,
      sidebar: () => <div>Time Based Apps</div>,
      main: () => <TimePiecesApp />
    },
    {
      path: '/movie',
      exact: true,
      sidebar: () => <div>Movie Search App</div>,
      main: () => <MovieSearchApp />,
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
  },
]