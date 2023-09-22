import React from 'react'
import "./Timeline.css"
import TimelineBgCard from './TimelineCards/TimelineBgCard'
import Numbers from './TimelineCards/Numbers'
const Timeline = () => {
  return (
    <div className='timelineWrapper'>
      <div className="timelineHeader">
        <h1>Timeline</h1>
        <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      </div>
      <div className="timelineContent">

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
  )
}

export default Timeline
