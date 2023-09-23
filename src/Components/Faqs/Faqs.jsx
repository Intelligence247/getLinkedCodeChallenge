import React from 'react'
import "./Faqs.css"
import Questions from './Questions'
import QMark from './QMark'
const Faqs = () => {
    const QandA = [
        {
            ques:'Can I work on a project I started before the hackathon?',
            ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor dolores placeat",
        },
        {
            ques:'What happens if I need help during the hackathon?',
            ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor dolores placeat dolor sit amet consectetur adip",
        },
        {
            ques:'What happens if I don\'t have an idea for a project?',
            ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor dolores placeat dolor sit amet consectetur adip",
        },
        {
            ques:'Can I join a team or do I have to come with one?',
            ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor dolores placeat dolor sit amet consectetur adip",
        },
        {
            ques:"What happens after the hackathon ends",
            ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor dolores placeat dolor sit amet consectetur adip",
        },
        {
            ques:'Can I work on a project I started before the hackathon?',
            ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor dolores placeat dolor sit amet consectetur adip",
        },
    
    ]
  return (
    <div className='faqWrapper' id='faqs'>
      <div className="faqLeft relative">
      <img src="starpurple.png" className='absolute lg:w-max w-[10px] left-[10%] lg:-top-[10%] -top-[5%]  ' alt="" />
        
<div className="faqHeader">
    <p>Frequently Ask</p>
    <p>Question</p>
    
</div>
<p className='py-6 lg:text-start text-center'>We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0</p>
<div className="allQ">
        {QandA.map((q, i) => (
          <Questions key={i} ques={q.ques} ans={q.ans} />
        ))}
      </div>
      </div>
      <div className="faqRight">

        <QMark/>
<img src="/Faqimg.png" alt="" />
      </div>
    </div>
  )
}

export default Faqs