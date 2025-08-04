import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white '>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
        
         <ProjectCard 
        image = "https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg"
        title="Chat application" 
        main="This is a basic chatapp using node js and express " 
        demoLink = "https://chatapp-44lg.onrender.com"
        sourceLink="https://github.com/Gouravkumar26/chatApp"/> 
         
         
        <ProjectCard 
        image = "https://internal-blog.contentstudio.io/wp-content/uploads/2023/03/Group-4-1.png"
        title="URL Shortner" 
        main="This is a basic link shoryner using node js" 
        demoLink = "https://short-url-p4s8.onrender.com"
        sourceLink="https://github.com/Gouravkumar26/short-url"/> 
         
         
        <ProjectCard 
        image = "https://th.bing.com/th/id/OIP.aLGzGG27TWIHgaTJNOyv0wHaE7?w=263&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
        title="TO Do List" 
        main="This is a basic dashboard website using node js , curd API, Postman" 
        demoLink = "https://to-do-list-imnj.onrender.com/users"
        sourceLink="https://github.com/Gouravkumar26/Dashboard"/>
         
         
        <ProjectCard 
        image = "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
        title="Ecommerce" 
        main="This is a basic ecommerce plateform using react js" 
        demoLink = "https://ecommerce-teal-sigma.vercel.app/"
        sourceLink="https://github.com/Gouravkumar26/ecommerce"/>
         
         
        <ProjectCard 
        image = "https://images.klipfolio.com/website/public/7eab5172-6fe0-4304-9e9d-4750646a9791/powermetrics-dashboard_0.png"
        title="DashBoard Website" 
        main="This is a basic dashboard website using react js" 
        demoLink = "https://dashboard-red-three-32.vercel.app/dashboard"
        sourceLink="https://github.com/Gouravkumar26/Dashboard"/>
         
         
        <ProjectCard 
        image = "https://i.pinimg.com/736x/6e/b8/c5/6eb8c54cf4981851c812b2ac10efeafd.jpg"
        title="cartstore" 
        main="Basic shoping website"
        demoLink="https://cartstore-sigma.vercel.app/" 
        sourceLink="https://github.com/Gouravkumar26/Cartstore"/>
         
         
        <ProjectCard 
        image = "https://th.bing.com/th/id/OIP.LumP4EYv7yACElcaAg8LgAHaDt?w=349&h=175&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
        title="Apple ui clon" 
        main="This is a clon of apple Ui "
        demoLink="https://apple-clone-phi-six.vercel.app/"
        sourceLink="https://github.com/Gouravkumar26/apple-clone" />
         
         
        <ProjectCard 
        image = "https://t3.ftcdn.net/jpg/03/28/82/42/360_F_328824244_h8ln41Hd3sh985TASxWVMmZ2w5LYSYvz.jpg"
        title="Landing page" 
        main="simple page design"
        demoLink="https://index-axkl.vercel.app/"
        sourceLink="https://github.com/Gouravkumar26/day1" />
      </div>

    </div>
  )
}

export default Projects