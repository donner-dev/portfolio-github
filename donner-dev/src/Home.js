// Home.js - Access language strings from context
import React from 'react';
import { useLanguage } from './components/LanguageContext';
import Section from './components/Section/Section';
import ProjectCard from './components/ProjectCard/ProjectCard';
import TextScrambleEffect from './components/TextScrambleEffect';

const Home = () => {
  const { strings, setLanguage } = useLanguage();






  return (
    
    <main>    {/* ex-header */}
      <Section title="Welcome" className="home-section" id="home"> 
        

          <div className="subtitle-display"></div> 
          <TextScrambleEffect />
          <p>Where the magic happens</p>
          <h1>DONNER DEV</h1>
      
          <div class="concepts">
              <div data-section="header" data-value="webdev" id="webdev"> Web Development</div>
              <div data-section="header" data-value="backend" id="backend">Backend Engineer</div>
              <div data-section="header" data-value="uxui" id="uxui">UX/UI and System Designer</div>
              <div data-section="header" data-value="system" id="system">System Engineer</div>
            </div>
      
  
          <a href="#about" class="btn btn-circle">
              <i class="fa fa-angle-double-down"></i>
            </a>
      </Section>

      <Section title="About Me" className="about-section" id="about">
          
        <h1>About Me</h1>
            
                <img  width="300px" src="src/about.jpg" id="selfpic" alt="about-section-img"/>
                      <a href="assets/cv.pdf" class="flex" download="CV_DonnerDEV" id="cv">
                          <span data-section="about" data-value="about_download">Download CV</span>
                      </a>
                


                  <div>
                      <h3 data-section="header" data-value="header_h3">I craft beautiful and user-friendly experiences for the web.</h3>
                      <p data-section="header" data-value="header_p">
                          I'm a passionate and results-oriented front-end developer with a knack for turning complex ideas into clean, intuitive interfaces. I rely on my knowledge in UI/UX design practices and system engineering formation to create engaging and impactful experiences for users.
                      </p>
                      <h3 ><a href="#contact" data-section="header" data-value="header_cta">Let's build something remarkable together. </a></h3>
                  </div>
              

              <ul class="flex">
                  <li data-section="about" data-value="about_li_1"> Hi! I'm Leonor Donner, a  Web Developer based out of Argentina, Corrientes. 
                      I love combining the worlds of logic and creativity to make eye-catching, accessible, and user-friendly websites and applications.
                  </li>
                  <li> 
                      <div data-section="about" data-value="about_li_2">
                          Senior Student in System Engineering, Majoring as System Analyst in <a class="sliding-middle-out" href="https://www.frre.utn.edu.ar/"> UTN - FRRe </a>. I graduated from <a class="sliding-middle-out" href="https://buenosaires.gob.ar/educacion/codo-codo-40"> CODO a CODO </a> 2021 and began my path as a web developer, aided by all the knowledge i acquired through my career as a System Engineer.
                      </div>
                      <img src="src/utn.jpg" id="utnimg" alt="utn" width="100" height="100"/>
                  </li>
                  <li data-section="about" data-value="about_li_3">  When not working or experimenting with code, I like to participate in local community events, write poetry and make art of all kinds. 
                  </li>
              </ul>
              <h2 data-section="about" data-value="about_cta">Explore my <a class="sliding-middle-out" href="#projects">Portfolio</a> to see some examples of my work !</h2>
            
      </Section>

      <Section title="Projects" className="projects-section" id="projects"> 
        
       {/* <ProjectCard></ProjectCard> 
       <ProjectCard></ProjectCard> 
       <ProjectCard></ProjectCard> 
        */}

        <h1 data-section="projects" data-value="p_title">PROJECTS</h1>

    
    
        <ProjectCard>
            <h2 data-section="projects" data-value="p_clb_title">C'est La Brie - Ecommerce Web</h2>  
            <div class="date"> 2024</div>
            <img src="project-clb.png" alt="project-img1"/>
            <p  data-section="projects" data-value="p_clb_desc">
           
              </p>

              <div class="badge">    
                <i class="fa-solid fa-screwdriver-wrench"></i>
                <span data-section="projects" data-value="p_tools">TOOLS :   </span>
                <div class="tags">
                  <div class="tag">TypeScript</div>
                      <div class="tag">NEXT.js</div>
                        <div class="tag">PAYLOAD</div>
                </div>
              </div> 
        </ProjectCard> 


        <ProjectCard>
            <h3> DOMUS Real State UI/UX Case Study </h3>
            <img src="./src/DOMUS.png" alt="project-img3"/>
            <p data-section="projects" data-value="p_domus_desc">
                In this collaborative project, I worked alongside a team of UI designers to develop the web layout for DOMUS, a real estate company. We adhered to industry best practices, including user research and testing, to create an intuitive and visually appealing user interface. This experience solidified my understanding of responsive design, cross-browser compatibility, and effective teamwork.


            </p>
            <div class="date">2022</div>
            
            <span class="badge">  
              <i class="fa-solid fa-screwdriver-wrench"></i>
              <span data-section="projects" data-value="p_tools">TOOLS : </span>
                <div class="tags">
                  <div class="tag">HTML</div>
                    <div class="tag">CSS</div>
                      <div class="tag">JAVA</div>
                        <div class="tag">SPRING Boot</div>
                            <div class="tag">Figma</div>
                  </div>
                 </span> 
        </ProjectCard> 

        <ProjectCard>
            <h3> Caterpillar</h3>
            <img src="./src/CATERPILLAR.png" alt="project-img1"/>

            <p data-section="projects" data-value="p_caterpillar_desc">Tribute game to the classic Snake game with customizable settings on menu built entirely using plain Javascript and DOM manipulation . Just one bug.            </p>
        
            <div class="date">2023</div>


            <span class="badge"> 
              <i class="fa-solid fa-screwdriver-wrench"></i>
              <span data-section="projects" data-value="p_tools">TOOLS : </span>
              <div class="tags">

                  <div class="tag">HTML</div>
                    <div class="tag">CSS</div>
                      <div class="tag">JS</div>
                </div>
            </span> 
        </ProjectCard> 
 


    




      </Section>

      <Section title="Contact Us" className="contact-section" id="contact">
        {/* Render form here */}
      </Section>
      {/* <Footer></Footer> */}
     </main>
  );
};

export default Home;
