import React, { useState } from 'react'
import logo from './assets/Images/logo-black.svg'
import logoWhite from './assets/Images/logo-white.svg'
import hero from './assets/Images/hero.jpg'
import img2 from './assets/Images/tech-sis3.jpg'
import img3 from './assets/Images/tech-sis.jpg'
import gmail from './assets/Images/gmail.png'
import whatsapp from './assets/Images/whatsapp.png'
import linkedIn from './assets/Images/linked-in.png'
import arrow from './assets/Images/arrow.svg'
import './App.css'

import members from './assets/Images/members.png'
import tutors from './assets/Images/tutors.png'
import resources from './assets/Images/resources.png'

import FAQ_card from './components/FaqCard'

function App() {

  const [menuShown, setMenu] = useState(false)
  const [scroll, setScroll] = useState(0)

  window.addEventListener('scroll', () => {
    setScroll(window.scrollY)
  })

  const AllQuestions = [
    "What is the total duration of the webinar/program#The program duration for all students is 3 to 4 weeks of extensive income-generating course",

    "Will all students be taught only about investments#No. Due to the fact that many do not have full interest in investment, WIN also introduced other skill-acquisition programs for people that may have interest in graphic design and software development. Skills also serve as investments",

    "Is the program free#No, but WIN has made it very affordable for many to access (as low as 2000 Naira only). Regardless our training retains good quality",

    "Why is it for females only#We know the struggles of being a female worker in most societies, hence we are educating all females, young or old, on how to generate steady income on their own in any part of the world",

    "What if I don't have any capital to invest#You are adviced to loan from either your family, friends or WIN, in agreement to payback with 20% interest and have the rest of the profit to yourself",

    "Can we get loans from WIN#Absolutely! as stated in the previous question, you can definitely loan some money as capital from WIN. With of course some of your personal information like National Identification Number (NIN) or National Passport. And finally, in agreement to pay only 20% interest back.",

    "How does WIN earn their money# WIN generates income by it's number of loan it gives out to various individuals and businesses. And also from adverts that are being run in the community pages to boost members and non-members business",

    "Asking something else#For further inquiries, contact us on whatsapp or send us an email at talk2womeninvestors@gmail.com ",
  ]

  function scrollTo(where) {
    if (where !== 'FAQS' || where !== 'why') {
      document.querySelector(`.${where}`).scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      document.querySelector(`.${where}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <>

      <img onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={scroll < 100 ? { bottom: '-50px' } : { bottom: '2rem' }} src={arrow} className="backToTop w-10 h-10 fixed bottom-8 right-8 z-30 -rotate-90 bg-purp rounded-full p-2 cursor-pointer shadow-lg shadow-[#00000040] duration-500" />


      <div className="nav sticky z-50 top-0 p-5 md:px-10 flex justify-between items-center backdrop-blur-sm bg-purp shadow-lg">
        <div className="flex">
          <img src={logo} draggable="false" alt="WIN" className="logo w-20 cursor-pointer opacity-40 " />
        </div>

        <div className="links hidden items-center md:flex gap-8 font-semibold text-sm">
          <div onClick={() => { scrollTo('about') }} className="link text-[#ffffffd1] hover:text-pink cursor-pointer">About</div>
          <div onClick={() => { scrollTo('why') }} className="link text-[#ffffffd1] hover:text-pink cursor-pointer">Insight</div>
          <div onClick={() => { scrollTo('FAQS') }} className="link text-[#ffffffd1] hover:text-pink cursor-pointer">FAQs</div>
          <div onClick={() => { scrollTo('footer') }} className="link text-[#ffffffd1] hover:text-pink cursor-pointer">Contact us</div>
          <a href="###" className="register ml-5 cursor-pointer font-semibold rounded-md text-white bg-[#2897ff] p-3 px-5 text-sm hover:bg-white hover:text-black">Register +</a>
        </div>

        <div onClick={() => { setMenu(true) }} className="hamb md:hidden flex flex-col gap-1 cursor-pointer duration-200 hover:bg-[#ffffff15] aspect-square items-center justify-center rounded-lg p-2 border-2 border-[#ffffff15]">
          <div className="line h-[2px] rounded-md w-5 bg-white"></div>
          <div className="line h-[2px] rounded-md w-5 bg-white"></div>
          <div className="line h-[2px] rounded-md w-5 bg-white"></div>
        </div>

        <div style={menuShown ? { visibility: 'visible' } : { visibility: 'hidden' }} onClick={() => { setMenu(false) }} className="MOBILEMENU fixed flex flex-col items-center justify-center top-0 md:hidden left-0 w-full h-[100vh] bg-[#000000d7] z-[90]">
          <div className="links flex w-full flex-col items-center justify-center gap-8 font-semibold text-lg">
            <div onClick={() => { scrollTo('about') }} className="link text-[#ffffffd1] hover:text-pink cursor-pointer">About</div>
            <div onClick={() => { scrollTo('why') }} className="link text-[#ffffffd1] hover:text-pink cursor-pointer">Insight</div>
            <div onClick={() => { scrollTo('FAQS') }} className="link text-[#ffffffd1] hover:text-pink cursor-pointer">FAQs</div>
            <div onClick={() => { scrollTo('where') }} className="link text-[#ffffffd1] hover:text-pink cursor-pointer">Contact us</div>
            <a href='###' className="register mt-5 cursor-pointer font-semibold rounded-md text-white bg-[#2897ff] p-3 px-5 text-lg hover:bg-white hover:text-black">Register +</a>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: 'url(' + hero + ')' }} className="w-full h-[80vh] md:h-[95vh] bg-center bg-blend-overlay bg-slate-700 bg-cover bg-no-repeat">


        <div style={{ textShadow: '#000000030 2px 2px 6px' }} className="hero  justify-center h-[90vh] text-white p-4 md:p-10 text-center flex flex-col w-full items-center ">
          <p className="leading-normal font-black max-w-[400px] text-2xl md:text-4xl">Invest Fearlessly, Become Independent!</p>
          <p className="text-sm opacity-75 text-center leading-normal w-full p-5 px-0 md:px-5 mt-2 max-w-[600px]">Take charge of your financial destiny with our exclusive Women Investors program for Ladies of all ages. Become a part of a global community, let's grow together!</p>

          <div onClick={() => { scrollTo('about') }} style={{ wordSpacing: '2px' }} className="start duration-200 bg-pink hover:bg-slate-900 mt-5 flex gap-3 p-4 rounded-md font-semibold cursor-pointer">Start your Journey <img draggable="false" src={arrow} className='w-5' /></div>
        </div>
      </div>

      <div className="w-full md:p-5 md:-mt-16 flex justify-center">
        <div className="w-full flex shadow-md max-w-[650px] p-5 bg-[#ffffff50] md:rounded-md backdrop-blur-[5px]">

          <div className="w-1/3 text-center flex flex-col items-center gap-2">
            <p style={{ textShadow: '#00000045 2px 2px 6px' }} className="w-full text-xl md:text-3xl text-[#191919] md:text-white font-bold">5K+</p>
            <p className="w-full text-xs md:text-md text-gray-700">Members</p>
          </div>

          <div className="w-1/3 border-x border-x-gray-400 text-center flex flex-col items-center gap-2">
            <p style={{ textShadow: '#00000045 2px 2px 6px' }} className="w-full text-xl md:text-3xl text-[#191919] md:text-white font-bold">1000+</p>
            <p className="w-full text-xs md:text-md text-gray-700">Resources</p>
          </div>

          <div className="w-1/3 text-center flex flex-col items-center gap-2">
            <p style={{ textShadow: '#00000045 2px 2px 6px' }} className="w-full text-xl md:text-3xl text-[#191919] md:text-white font-bold">50+</p>
            <p className="w-full text-xs md:text-md text-gray-700">Trainers</p>
          </div>

        </div>
      </div>



      <div className="about flex flex-col md:flex-row gap-5 md:p-5">

        <div className="who flex w-full flex-col items-center md:border-r md:border-r-gray-400">
          <p className=" w-full text-center p-5  mt-8 text-2xl font-bold">Who are We?</p>

          <p className="text-gray-500 text-center px-5 max-w-[800px]">We are a passionate and inclusive community dedicated to empowering women in the world of investments.
            At Women Investors Network, we firmly believe that financial independence and knowlwdge are essential tools for women to
            shape their futures and create a lasting impact on the world.
          </p>
        </div>

        <div className="mission flex w-full flex-col items-center">
          <p className=" w-full text-center p-5 mt-8 text-2xl font-bold">Our Mission</p>
          <p className="text-gray-500 text-center px-5 max-w-[800px]">Our mission is to provide a supportive platform where women can access valuable resources, educational content, and expert insights, at a very affordable cost, to confindently navigate the complexities of investing. We are commited to ensuring that females from all backgrounds can achieve and thrive financial success.
          </p>
        </div>

      </div>
      <div className="w-full flex justify-center p-5">
        <img src={img2} className='w-full max-w-[750px] rounded-xl' />
      </div>

      <div className="why flex w-full flex-col items-center">
        <p className="w-full text-center p-5  mt-8 text-2xl font-bold">Why Learn with Us?</p>

        {/* ----------- Cards Section ----------- */}

        <div className="Cards w-full gap-5 p-5 md:px-14 flex flex-col md:flex-row">

          <div className="card md:hover:scale-105 duration-150 rounded-md shadow-lg bg-[#ffffff50] p-5 md:w-1/3 flex flex-col items-center gap-4 w-full ">
            <img src={members} draggable="false" className="w-14 " />
            <p className=" font-semibold text-center text-lg">Wholesome Community</p>

            <p className="text-center text-sm mb-10">Our extremely welcoming global community amongst female investors from various parts of the world was birthed in order to create an effective learning environment for you.</p>
          </div>

          <div className="card md:hover:scale-105 duration-150 rounded-md shadow-lg bg-[#ffffff50] p-5 md:w-1/3 flex flex-col items-center gap-4 w-full ">
            <img src={tutors} draggable="false" className="w-14  p-1" />
            <p className=" font-semibold text-center text-lg">Expert Tutors</p>

            <p className="text-center text-sm mb-10">We made sure to recruit only the best, most seasoned trainers in different fields that are dedicated to guiding you through your journey.</p>
          </div>

          <div className="card md:hover:scale-105 duration-150 rounded-md shadow-lg bg-[#ffffff50] p-5 md:w-1/3 flex flex-col items-center gap-4 w-full ">
            <img src={resources} draggable="false" className="w-14  p-2" />
            <p className=" font-semibold text-center text-lg">Resources</p>

            <p className="text-center text-sm mb-10">Availability of resourses that include e-books, high quality educational materials, expert webinars and as well, <b>investment capital</b> (Terms and conditions apply). </p>
          </div>

        </div>
      </div>
      <div className="w-full flex justify-center p-5">
        <img src={img3} className='w-full max-w-[750px] rounded-xl' />
      </div>

      <div className="FAQS">
        <p className="w-full text-center p-5 mt-8 text-2xl font-bold">Frequently Asked Questions</p>


        <div className="FAQ-cards flex flex-col w-full gap-5 p-5 md:px-14 md:grid grid-cols-2 ">
          {/* <FAQ_card id="1"/>
          <FAQ_card id="2"/>
          <FAQ_card id="3"/>
          <FAQ_card id="4"/> */}

          {AllQuestions.map(question => (
            <FAQ_card id={AllQuestions.indexOf(question)} quest={question.substring(0, question.indexOf('#'))} ans={question.substring(question.indexOf('#') + 1)} />
          ))}
        </div>

      </div>


      <div className="footer md:flex-row text-white w-full p-10 flex flex-col bg-[#0e0e0e] items-center md:items-start text-center md:text-left gap-10">

        <div className="flex items-center md:items-start flex-col gap-5 md:w-1/2
        ">
          <img src={logoWhite} className="w-[90px]" />
          <p className="text-sm max-w-[70%] ">The First Root Company Inc. P.B 2108 Lagos state, Nigeria. </p>
          <p className="text-xs opacity-40">Copyright &copy; 2020 Women Investors Network co. </p>
          <div className="flex gap-8 my-5">
            <a href="mailto">
              <img src={gmail} className="w-7 h-7" />
            </a>
            <a href="">
              <img src={whatsapp} className="w-7 h-7" />
              </a>
            <a href="">
              <img src={linkedIn} className="w-7 h-7" />
              </a>
          </div>

        </div>

        <div className="flex flex-col w-[25%] items-center md:items-start gap-5">
          <p className="font-bold">Company </p>
          <p onClick={() => { scrollTo('footer') }} className="text-xs text-thin text-[#ffffff50] hover:text-white duration-200 cursor-pointer">Contact Us</p>
          <p onClick={() => { scrollTo('about') }} className="text-xs text-thin text-[#ffffff50] hover:text-white duration-200 cursor-pointer">About Us</p>
          <p onClick={() => { scrollTo('FAQS') }} className="text-xs text-thin text-[#ffffff50] hover:text-white duration-200 cursor-pointer">FAQs</p>
          <p className="text-xs text-thin text-[#ffffff50] hover:text-white duration-200 cursor-pointer">Privacy Policy</p>
        </div>

        <div className="flex flex-col items-center md:items-start w-[25%] gap-5">
          <p className="font-bold">Quick Links </p>
          <p onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="text-xs text-thin text-[#ffffff50] hover:text-white duration-200 cursor-pointer">Back to Top</p>
          <a href='###' className="register whitespace-nowrap cursor-pointer font-semibold rounded-md text-white bg-[#2897ff] p-3 px-8 w-max text-sm hover:bg-white hover:text-black">Register Now</a>
        </div>
      </div>
    </>
  )
}

export default App
