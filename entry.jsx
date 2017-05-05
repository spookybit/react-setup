import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
// import LOL from './congrats';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Congrats/>, root);
	// ReactDOM.render(<LOL/>, root);
});
