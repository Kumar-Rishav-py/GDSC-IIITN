import React from "react";
import styles from "../styles/Events.module.css";
import EventsCards from "./Eventscard";

const Events = () =>{
    return(
        <div className={styles.Eventspage}>
        <div className={styles.Headingsection}>
            <div className={styles.head}>
            Events
         </div>   
         <div className={styles.subhead}>
         Take a closer look at our chapter's events!
         </div>
         </div>
         
         <div className={styles.cardsSet}>
            <EventsCards img="eventpic.png" head="info session 2.0"/>
            <EventsCards img="eventpic.png" head="Hack Droid"/>
            <EventsCards img="eventpic.png" head="DevFest Nagpur"/>
         </div>
        <div className={styles.viewmore}>
            View More
            <div className={styles.arrow}>
            <img  src="arrowdown.png"></img>
            </div>
            
        </div>
        
        </div>
    )
}

export default Events;