import React from 'react'
import "./Timeline.css"
import TimelineBgCard from './TimelineCards/TimelineBgCard'
import Numbers from './TimelineCards/Numbers'
import MobileCard from './MobileCard'
const Timeline = () => {
  const mobileData = [
    {
      title: 'Hackathon Announcement',
      desc: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023"

    },
    {
      title: 'Teams Registration begins',
      desc: `Interested teams can now show their interest 
      in the getlinked tech hackathon 1.0 2023 by 
      proceeding to register`,
      date: "November 18, 2023"

    },
    {
      title: `Teams Registration ends`,
      desc: `Interested Participants are no longer Allowed
      to register`,
      date: "November 18, 2023"

    },

    {
      title: `Announcement of the accepted teams
      and ideas`,
      desc: `All teams whom idea has been accepted into 
      getlinked tech hackathon 1.0 2023 are formally 
      announced`,
      date: "November 18, 2023"

    },
    {
      title: `Getlinked Hackathon 1.0 Offically Begins`,
      desc: `Accepted teams can now proceed to build 
      their ground breaking skill driven solutions`,
      date: "November 18, 2023"

    },
    
    {
      title: 'Demo Day',
      desc: `Teams get the opportunity to pitch their 
      projects to judges. The winner of the 
      hackathon will also be announced on this day`,
      date: "November 18, 2023"

    },

  ]
  return (
    <div className='timelineWrapper relative' id='timeline'>
      <img src="starpurple.png" className='absolute lg:w-max w-[10px] left-[20%] top-[15%]  ' alt="" />
      <img src="starwhite.png" className='absolute lg:w-max w-[10px] left-[90%] top-[50%]  ' alt="" />
      <img src="stargray.png" className='absolute lg:w-max w-[10px] left-[10%] top-[90%]  ' alt="" />


      <div className="timelineHeader">
        <h1>Timeline</h1>
        <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      </div>
      <div className="timelineContent">

{/* MobileViewBegins */}
<div className="mobileView">
  {mobileData.map((m,i)=>(
    <MobileCard
    key={i}
    num={i+1}
    title={m.title}
    desc= {m.desc}
    date = {m.date}

    />
  ))} 
</div>
{/* DesktopView */}
        
<div className="desktopView">
      <div className="timelineLeft">
        <TimelineBgCard
        txt1="Hackathon Announcement"
        txt2={`The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register`}
        style={'text-end'}
        />
        <p className='text-2xl text-primaryPurple text-end'>Novermber 18, 2023</p>
        <TimelineBgCard
         txt1="Teams Registration ends"
         txt2="Interested Participants are no longer Allowed to
         register"
        style={'text-end'}

         />

        <p className='text-2xl text-primaryPurple text-end'>Novermber 18, 2023</p>
        <TimelineBgCard
         txt1="Getlinked Hackathon 1.0 Offically Begins"
         txt2="Accepted teams can now proceed to build their
         ground breaking skill driven solutions"
        style={'text-end'}

         />

        <p className='text-2xl text-primaryPurple text-end'>Novermber 18, 2023</p>

      </div>

      <div className="timelineCenter space-y-3.5">
        <Numbers
        num={'1'}
        />
         <Numbers
        num={'2'}
        />
         <Numbers
        num={'3'}
        />
         <Numbers
        num={'4'}
        />
         <Numbers
        num={'5'}
        />
         <Numbers
        num={'6'}
        />
      </div>
      <div className="timelineRight">
      <p className='text-2xl text-primaryPurple text-start'>Novermber 18, 2023</p>
      <TimelineBgCard
         txt1="Teams Registration begins"
         txt2="Interested teams can now show their interest in the
         getlinked tech hackathon 1.0 2023 by proceeding to register"
         />
      <p className='text-2xl text-primaryPurple text-start'>Novermber 18, 2023</p>
      <TimelineBgCard
         txt1="Teams Registration begins"
         txt2="IAnnouncement of the accepted teams
         and ideas"
         />
      
      <p className='text-2xl text-primaryPurple text-start'>Novermber 18, 2023</p>
      <TimelineBgCard
         txt1="Demo Day"
         txt2="Teams get the opportunity to pitch their projects to judges.
         The winner of the hackathon will also be announced on
         this day"
         />

      </div>
    </div>
    </div>
    </div>
  )
}

export default Timeline
