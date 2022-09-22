// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.tsx'
// // import './index.css'

// // ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // )

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root') as HTMLElement
// )

import { render } from "preact";
// import "./index.css";
import { Foo } from "./Foo.tsx";
import { ReactComponent } from "./Compat.tsx";

function App() {
	return (
		<div>
			<h1>Hello from Preact</h1>
			<Foo />
			<h2>Compat</h2>
			<ReactComponent />
		</div>
	);
}

render(<App />, document.getElementById("app")!);