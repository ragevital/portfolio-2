import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from '../../components/projects/ProjectsCard'

const Projects = () => {
  return (
    <section id='projects'
    className='w-full py-20 borde-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
        <Title 
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects" />
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <a href="https://github.com/ragevital/PIZZA-ORDER" target="_blank">
            <ProjectsCard 
            title="PIZZA ORDER" 
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
            src="../../assets/images/projectOne.png"/>
            </a>

            <a href="https://github.com/ragevital/SUDOKU" target="_blank">
            <ProjectsCard 
            title="SUDOKU" 
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
            src="../../assets/images/projectTwo.png"/>
            </a>

            <a href="" target="_blank">
            <ProjectsCard 
            title="DERNIER PROJET" 
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
            src="../../assets/images/projectThree.jpg"/>
            </a>
            
            
        </div>
    </section>
  )
}

export default Projects