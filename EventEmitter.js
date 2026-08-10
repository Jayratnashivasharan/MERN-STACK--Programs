const EventEmmitter=require("events");
const event=new EventEmmitter();
event.on("welcome",()=>{
    console.log("Welcome Event Triggered");
});
event.emit("welcome")