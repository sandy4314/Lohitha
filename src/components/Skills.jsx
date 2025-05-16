import React from 'react'
import SkillCard from '../cards/SkillCard'

const Skills = () => {
    const data=[{
        title:"Programming",
        name:"heart",
        skills:["Python","Java","C"]
    },
    {
     title:"Web Development",
        name:"heart",
        skills:["HTML","CSS","JavaScript","React Js","Tailwind CSS","PHP"]
    },
    {
     title:"Database",
        name:"heart",
        skills:["SQL","MONGODB"]
    },
    {
     title:"Tools & platforms",
        name:"heart",
        skills:["Git","Github","Netlify","Google Colab","Render","VS Code"]
    }
]
  return (
    <div id="skills" className='mt-10'>
        <h1 className='text-center font-bold text-3xl'>My Skills</h1>
        <h1 className='mt-2 text-center text-gray-600 text-lg'> Here are my technical skills across various domains.</h1>
        <div className="mt-10 grid grid-cols-1 place-items-center  md:grid-cols-2  gap-y-4 items-start">


        {data.map((d,i)=>(
            <SkillCard key={i} title={d.title} name={d.name} skills={d.skills}/>
        ))}
        </div>
    </div>
  )
}

export default Skills