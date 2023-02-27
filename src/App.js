import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import {v4 as uuid} from "uuid"
import "./App.css"

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
