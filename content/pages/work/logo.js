import React from 'react';
import Animated from './logo.svg';

import injectSheet from "react-jss";
import { connect } from "react-redux";

const styles = theme => ({
    logoDiv: {
      "&:hover": {
        transform: "rotate(-60deg) translateY(-60px) translateX(100px)"
      }
    }
});

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.logoDiv}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 262.49">
  <path fill="none" d="M11.89 199.49H450.5v81H11.89z"/>
  <path fill="#000" d="M15.64 250.96v-52.5h7.5v46.87h13.13v5.63H15.64zm37.65.53c-2.64 0-4.9-.4-6.78-1.2-1.89-.8-3.39-1.98-4.5-3.52s-1.92-3.36-2.43-5.44c-.5-2.08-.76-4.5-.76-7.25v-19.04c0-2.75.25-5.16.76-7.2.5-2.06 1.32-3.84 2.43-5.35s2.61-2.65 4.5-3.42a18.08 18.08 0 016.78-1.14c5.12 0 8.8 1.46 11.07 4.4 2.27 2.92 3.4 7.16 3.4 12.71v19.04c0 2.72-.26 5.11-.77 7.2-.52 2.08-1.34 3.9-2.45 5.45s-2.61 2.73-4.5 3.54a17.04 17.04 0 01-6.75 1.21zm-5.46-8.53c1 1.58 2.82 2.37 5.46 2.37s4.46-.79 5.46-2.37c1.01-1.58 1.51-3.91 1.51-7v-22.8c0-3.04-.5-5.31-1.5-6.82s-2.81-2.25-5.47-2.25c-2.66 0-4.48.75-5.48 2.25s-1.5 3.78-1.5 6.83v22.8c0 3.08.5 5.41 1.52 7zm26.5 8v-52.5h7.5v22.5l11.25-22.5h9.37l-11.28 20.62 13.15 31.88h-9.37l-9.38-24.38-3.74 7.5v16.88h-7.5zm32.75 0v-52.5h20.62v5.62h-13.12v16.88h9.37v5.62h-9.37v18.75h13.12v5.63h-20.62zm38.9.53c-4.72 0-8.33-1.4-10.82-4.16s-3.88-6.57-4.17-11.37l7.5-1.88c.37 7.5 2.87 11.25 7.5 11.25 3.75 0 5.62-1.87 5.62-5.62 0-1.12-.15-2.15-.45-3.1a8.21 8.21 0 00-1.4-2.6 17.65 17.65 0 00-1.7-1.9c-.5-.48-1.2-1.07-2.08-1.78l-9.37-7.5c-1.72-1.34-3.09-3.06-4.12-5.14s-1.53-4.45-1.53-7.1c0-3.87 1.2-6.95 3.6-9.23s5.59-3.43 9.55-3.43c4.26 0 7.64 1.04 10.15 3.12 2.51 2.08 4.06 5.02 4.65 8.83.06.41.12.98.2 1.7l-7.5 1.88c-.02-.34-.07-.83-.14-1.5a11.46 11.46 0 00-2.24-5.73c-1.17-1.43-2.87-2.15-5.12-2.15-1.8 0-3.18.5-4.16 1.51-.97 1-1.46 2.4-1.46 4.2 0 2.95 1.25 5.42 3.75 7.42l9.37 7.5c5 4.04 7.5 8.87 7.5 14.5 0 3.85-1.18 6.85-3.56 9.02s-5.56 3.25-9.56 3.25zm18.61-.53v-52.5h7.5v22.5h13.12v-22.5h7.5v52.5h-7.5v-24.38H172.1v24.38h-7.5zm47.81 0v-52.5h11.63c5.49 0 9.36 1.12 11.62 3.37s3.38 6.12 3.38 11.63v20.62c0 5.77-1.14 10.02-3.44 12.76s-6.17 4.12-11.62 4.12H212.4zm7.5-5.63h4.13c1.23 0 2.29-.1 3.17-.33s1.59-.64 2.14-1.23.97-1.16 1.28-1.7.54-1.37.66-2.5.2-2.07.22-2.8.03-1.87.03-3.42v-18.02l-.01-2.28c-.01-.56-.04-1.24-.1-2.01s-.11-1.38-.21-1.83-.24-.95-.41-1.51-.4-.99-.66-1.3-.59-.64-.97-.98-.82-.6-1.32-.77-1.08-.3-1.74-.4-1.4-.17-2.23-.17h-3.98v41.25zm23.7 5.63v-52.5h20.62v5.62h-13.13v16.88h9.38v5.62h-9.38v18.75h13.13v5.63h-20.63zm35.07 0l-11.25-52.5h7.5l5.54 28.12 1.93 13.13 2-13.13 5.53-28.12h7.5l-11.25 52.5h-7.5zm22.85 0v-52.5h5.63l13.12 32.46v-32.46h7.5v52.5h-5.33l-13.42-34.92v34.92h-7.5zm30.47 0l11.25-52.5h7.5l11.25 52.5h-7.5l-2.81-13.13h-9.38l-2.81 13.13h-7.5zm11.25-18.75h7.5l-3.75-22.5-3.75 22.5zm22.97 18.75v-52.5h5.63l13.12 32.46v-32.46h7.5v52.5h-5.33l-13.42-34.92v34.92h-7.5zm34.1 0v-52.5h7.5v52.5h-7.5z"/>
  <g stroke-linejoin="round" stroke-miterlimit="10">
    <path fill="#57A" stroke="#000" stroke-width="3" d="M413.65 100.66L289.07 166.6l-11.62-18.92L387.7 90.12z"/>
    <path fill="#57A" stroke="#000" stroke-width="3" d="M277.45 30.67l7.83-19.2L415 82.29l-1.35 18.38-25.95-10.54z"/>
    <g stroke="#FFF" stroke-linecap="round">
      <circle cx="403.69" cy="87.28" r="5.98"/>
      <path fill="none" d="M401.35 84.92l4.21 4.93M401.35 89.44l4.21-4.52"/>
    </g>
  </g>
  <g stroke-linejoin="round" stroke-miterlimit="10">
    <path fill="#57A" stroke="#000" stroke-width="3" d="M9.54 103.88l124.58 65.94 11.62-18.92L35.48 93.34z"/>
    <path fill="#57A" stroke="#000" stroke-width="3" d="M145.74 33.89L137.9 14.7 8.19 85.5l1.35 18.38 25.94-10.54z"/>
    <g stroke="#FFF" stroke-linecap="round">
      <circle cx="19" cy="90.6" r="5.98"/>
      <path fill="none" d="M16.66 88.24l4.21 4.93M16.66 92.76l4.21-4.52"/>
    </g>
  </g>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
    <path fill="#E34" stroke="#000" stroke-width="3.00003" d="M236.54 6.67l18.23 7.27L192.4 170.2l-18.22-7.27z"/>
    <g stroke="#FFF">
      <circle cx="188.12" cy="154.96" r="5.96"/>
      <path fill="none" d="M185.78 152.61l4.2 4.91M185.78 157.11l4.2-4.5"/>
    </g>
  </g>
</svg>
</div>
  );
}
export default injectSheet(styles)(App);