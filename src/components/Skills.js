import React from 'react'
import html from "../assets/html.png"
import CSS from "../assets/CSS.png"
import firebase from "../assets/firebase.png"
import github from "../assets/github.png"
import javascript from "../assets/javascript.png"
import material from "../assets/material.png"
import mongoDb from "../assets/mongoDb.jpg"
import node from "../assets/node.jpg"
import react from "../assets/react.png"
import redux from "../assets/redux.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.png"
import post from "../assets/post.png";
import saga from "../assets/saga.png"
import styled from "../assets/styled.png"
import express from "../assets/express.png"

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300 mt-9' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>those are the technology that worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-2 ml-28'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt='html icon'/>
                <p className='my-4'><a href='https://www.w3schools.com/html/' target='blank'> HTML</a>
                </p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='css icon'/>
                <p className='my-4'><a href='https://www.w3schools.com/css/default.asp' target='blank'> CSS</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={firebase} alt='firebase icon'/>
                <p className='my-4'>
                    <a href='https://firebase.google.com/docs?gclid=CjwKCAiAp7GcBhA0EiwA9U0mtsKJn-m1xFyvPt-Jfwstr4-vdx__5yFk4hUAqqQCXfjTelHB_yZAIhoCK-8QAvD_BwE&gclsrc=aw.ds' target='blank'>
                         Firebase</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={github} alt='github icon'/>
                <p className='my-4'><a href='https://github.com/AndargWorku' target='blank'> Github</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={javascript} alt='javascript icon'/>
                <p className='my-4'><a href='https://www.w3schools.com/js/default.asp' target='blank'> javascript</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={material} alt='material icon'/>
                <p className='my-4'><a href='https://v4.mui.com/' target='blank'> Material Ui</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mongoDb} alt='mongoDb icon'/>
                <p className='my-4'><a href='https://www.mongodb.com/home' target='blank'> mongoDb</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={node} alt='node icon'/>
                <p className='my-4'><a href='https://nodejs.org/en/' target='blank'> Node</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={react} alt='react icon'/>
                <p className='my-4'><a href='https://reactjs.org/' target='blank'> React</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={redux} alt='redux icon'/>
                <p className='my-4'><a href='https://redux.js.org/' target='blank'> Redux</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={tailwind} alt='tailwind icon'/>
                <p className='my-4'><a href='https://tailwindcss.com/' target='blank'> Tailwind</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={bootstrap} alt='bootstrap icon'/>
                <p className='my-4'><a href='https://getbootstrap.com/' target='blank'> Bootstrap</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={express} alt='bootstrap icon'/>
                <p className='my-4'><a href='https://expressjs.com/' target='blank'> Express.js</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={styled} alt='bootstrap icon'/>
                <p className='my-4'><a href='https://styled-components.com/' target='blank'> Styled-component</a></p>

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={saga} alt='bootstrap icon'/>
                <p className='my-4'><a href='https://redux-saga.js.org/' target='blank'> Redux-saga</a></p>
                

            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={post} alt='bootstrap icon'/>
                <p className='my-4'><a href='https://www.postgresql.org/' target='blank'> postgressql</a></p>

            </div>
      
      
      
      
        </div>      
    </div>
    </div>
  )
}

export default Skills
