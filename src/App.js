// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import {v4 as uuid} from "uuid"

function App() {
  const [events, setEvents] = useState([]);

  const handleSelect=(info)=>{
    const{start,end}=info;
    const eventNamePrompt=prompt("enter the task");
    if (eventNamePrompt){
      setEvents([...events,{
        start,end,title:eventNamePrompt,id:uuid, 
      },
    ]);
    }
  };

  return (
    <div>
      <FullCalendar
      height={550}
        editable
        selectable
        events={events}
        select={handleSelect}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        // events={[
        //   { title: 'alhad', phone:"8877", date: '2023-02-11' },
        //   { title: 'event 2', date: '2023-02-24' }
        // ]}
       
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today,dayGridMonth,dayGridWeek,dayGridDay, ",
        }}
      />
    </div>
  );
}
export default App;
