import React from 'react'
import "../Styles/Section2.scss"
import q1 from '../images/q1.svg';
import q2 from '../images/q2.svg';
import q3 from '../images/q3.svg';
import q4 from '../images/q4.svg';

const Section2 = () => {
  return (
      <section class="about-aist">
          <h1>Why AIST?</h1>
          <p>AIST is an Ed-Tech (Learning) Platform. The Idea is reinvent how students learn and transform learning into
              fun by their
              learning classes. It is a fun and proud thing that we can lead students to achieve their dreams to
              contribute to life in
              the future. With educational methods that prioritize the needs of students and adequate knowledge, we hope
              that the
              knowledge gained can be used as well as possible wherever all the students from our institute are located.
          </p>
          <div class="content-row">
              <div class="content-col">
                  <div class="content-img"><img src={q1} alt=""/></div>
                  <h2>Learn Anything</h2>
              </div>
              <div class="content-col">
                  <div class="content-img"><img src={q2} alt=""/></div>
                  <h2>Learn Together</h2>
              </div>
              <div class="content-col">
                  <div class="content-img"><img src={q3} alt=""/></div>
                  <h2>Learn With Experts</h2>
              </div>
              <div class="content-col">
                  <div class="content-img"><img src={q4} alt=""/></div>
                  <h2>Lifetime Access</h2>
              </div>
          </div>
      </section>
  )
}

export default Section2
