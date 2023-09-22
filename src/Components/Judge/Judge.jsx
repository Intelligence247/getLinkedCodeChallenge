import React from 'react'
import "./Judge.css"

const Judge = () => {
    const judgeObj =[
         {
        title:'Innovation and Creativity:',
        desc:`Evaluate the uniqueness and creativity of the
        solution. Consider whether it addresses a real-world problem in a novel 
        way or introduces innovative features.`
    },
    {
        title:'Functionality:',
        desc:`Assess how well the solution works. Does it perform its 
        intended functions effectively and without major issues? Judges would
        consider the completeness and robustness of the solution.`
    },
    {
        title:'Impact and Relevance:',
        desc:`Determine the potential impact of the solution 
        in the real world. Does it address a significant problem, and is it relevant 
        to the target audience? Judges would assess the potential social, 
        economic, or environmental benefits.`
    },
    {
        title:'Technical Complexity:',
        desc:`Evaluate the technical sophistication of the solution. 
        Judges would consider the complexity of the code, the use of advanced 
        technologies or algorithms, and the scalability of the solution.`
    },
    {
        title:'Adherence to Hackathon Rules:',
        desc:` Judges will Ensure that the team adhered 
        to the rules and guidelines of the hackathon, including deadlines, use of 
        specific technologies or APIs, and any other competition-specific requirements.`
    },
]
  return (
    <div className='judgeWrapper'>
        <div className="judgeLeft">
      <img src="/judgeImg.png" alt="" />
      </div>
      <div className="judgeRight">
        <div className="judgeHeader">
            <p>Judging Criteria</p>
            <p>Key attributes</p>
        </div>

            {judgeObj.map((j,i)=>(
                <div className="judgeContent" key={i}>
                    <span>{j.title}</span> {j.desc}
                </div>
            ))}
            <button>Read More</button>
      </div>
    </div>
  )
}

export default Judge
