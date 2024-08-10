import React from 'react'
import './Health.css'
 
export default function Health() {
  return (
    <>
    <div className='Health-bg-color'>
    <div className="health-center">
      <div className="header-health-main ">
       
      </div>
    </div>
   
 
    <div className="container-the-fluid">
    <div className='container-fluid'>
  <div className='row'>
    <div className='col-md-4 mb-4'>
      <div className='card '>
        <img src='/images/cycle.png' className='cycle' alt='Cycle' />
        <span className='health-text-card'>
        <div className='card-body'>
          <p className='card-text-font'>Cycling improves your heart, blood vessels, and lungs, which can reduce the risk of cardiovascular disease.</p>
        </div>
        </span>
      </div>
    </div>
 
    <div className='col-md-4 mb-4'>
      <div className='card'>
        <img src='/images/jump-rope.png' className='cycle' alt='Cycle' />
        <span className='health-text-card'>
        <div className='card-body'>
          <p className='card-text-font'>Jumping rope works your calf muscles,  hamstrings, glutes, abs, oblique muscles, forearms, biceps,  and chest muscles.</p>
        </div>
        </span>
      </div>
    </div>
 
    <div className='col-md-4 mb-4'>
      <div className='card'>
        <img src='/images/pullup.png' className='cycle' alt='Cycle' />
        <span className='health-text-card'>
        <div className='card-body'>
          <p className='card-text-font'>strengthen muscles, improve posture, and support strong bones. Pull-ups are a convenient and effective exercise.</p>
        </div>
        </span>
      </div>
    </div>
  </div>
</div>
 
 
       
       
       <div className="content-health-paragrph ">
            <h6> <b>Health Center - The Life School</b></h6>
            <p><b>HEALTH CENTER</b></p>
            <p className='text-content-paragrph'>At Life School, we prioritize the health, safety, and well-being of every student as a core element of our educational environment. Our comprehensive Health and Safety Program (HSP) is designed to cultivate a safe and nurturing atmosphere, where students can thrive both academically and personally. By integrating regular health assessments, safety drills, and wellness initiatives, we ensure that our students are well-protected and informed about their own health and safety.</p>
         
        </div>
    </div>
 </div>
 </>
  )
}