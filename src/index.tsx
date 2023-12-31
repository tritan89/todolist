import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// interface task {
//   id: string
//   name :string
//   completed : boolean
// }

declare global{
  interface Task {
  id: string
  name :string
  completed : boolean
}}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const DATA : Task[] = [
  { id: "td_0", name: "Eat", completed: true },
  { id: "td_1", name: "gym", completed: false },
  { id: "td_2", name: "study", completed: false },
];


root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);



