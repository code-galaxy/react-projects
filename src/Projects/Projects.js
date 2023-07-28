import './Projects.css';
import Project1 from './Project1/Project1';

function Projects() {
   return (
      <div className="Sidebar-site">
         <h1>My pet (React) Projects is here</h1>

         <section className="section">
            <div className="about-project">
               <h1>Project #2</h1>
            </div>
            <div className="app-project">App projects</div>
         </section>

         <section className="section">
            <div className="about-project">
               <h1>Project #1</h1>
               <h3>Counter with use hook useState()</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore, veritatis quidem eaque nam officia et ut soluta porro blanditiis eos ducimus sint a optio necessitatibus perferendis maiores amet quos!</p>
            </div>
            <div className="app-project">{<Project1 />}</div>
         </section>



      </div>
   )
}

export default Projects;