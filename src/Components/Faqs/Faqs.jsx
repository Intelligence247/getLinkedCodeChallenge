import React from 'react'
import "./Faqs.css"
import Questions from '../Questions'
const Faqs = () => {
    const QandA = [{
        ques:'Can I work on a project I started before the hackathon?',
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor dolores placeat",
    }
    ]
  return (
    <div className='faqWrapper'>
      <div className="faqLeft">
<div className="faqHeader">
    <p>Frequently Ask</p>
    <p>Question</p>
    
</div>
<p>We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0</p>
<div className="allQ">
        {QandA.map((q, i) => (
          <Questions key={i} ques={q.ques} ans={q.ans} />
        ))}
      </div>
      </div>
      <div className="faqRight">
<img src="/Faqimg.png" alt="" />
      </div>
    </div>
  )
}

export default Faqs
