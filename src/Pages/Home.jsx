import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Home.scss'
import pic from '../Images/pic.png'
import rsit from '../Images/rsit.png'
import contact from '../Images/contact.jpg'
import { LuLinkedin, LuInstagram, LuFacebook } from 'react-icons/lu'
import { TypeAnimation } from 'react-type-animation';
import { Button } from 'react-bootstrap'
import { SkillsIcons } from '../Mock-data/SkillsIcons'
import { ServicesData } from '../Mock-data/ServicesData'
import Slider from "react-slick";
import { MdArrowForwardIos } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
const Home = () => {

  var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Header />
      {/* --------------------------Home-------------------------------------- */}
      <section>
        <div id='home' className="home-banner mb-5">
          <div className="container">
            <div className="inner ">
              <div className="row align-items-center">
                <div className="content col-12 col-md-8">
                  <h1 className='title'>Hi, I'm <span>Jyoti Rani Gautam</span></h1>
                  <h2>
                    <TypeAnimation
                      className='subtitle'
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'a Frontend Developer.',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'a Web Designer.',
                        1000,
                        'a Digital Marketer.',
                        1000
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '40px', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </h2>
                  <div className='description'>I design and code beautifully simple things, and I love what I do. I use animation as a third dimension by which Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                  <div className="social">
                    <span>FIND WITH ME</span>
                    <ul className="find-me my-2 d-flex ">
                      <li className="facebook"><a href="#"><LuFacebook className='icon' /></a>
                      </li>
                      <li className="instagram"><a href="#"><LuInstagram className='icon' /></a>
                      </li>
                      <li className="linkedin"><a href="#"><LuLinkedin className='icon' /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="photo col-12 col-md-4 text-center">
                  <img className='pic' src={pic} alt="pic" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      {/* --------------------------About------------------------------------ */}
      <hr className='container' />
      <section>
        <div id='about' className="about ">
          <div className="container">
            <div className="row align-items-center">
              <div className="photo col-12 col-md-5 text-center">
                <img className='pic' src={pic} alt="pic" />
              </div>
              <div className="about-me col-12 col-md-7">
                <h2 className='my-3'>About Me</h2>
                <div className='description my-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit veritatis vero tempore sequi at sed facere dolore. Quae obcaecati eius quasi doloribus illum minus fugit. <br />

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit,
                </div>
                <div className='my-4'>
                  <Button className="button">VIEW MY CV</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------Skills----------------------------------- */}
      <hr className='container' />
      <section>
        <div id='skills' className="skills mb-5">
          <div className="container">
            <h2>Skills</h2>
            <ul className='list'>
              {
                SkillsIcons.map((item, index) => (
                  <div key={index}>
                    <li className='mx-2 my-3'><img src={item.uri} alt="skills" /></li>
                  </div>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
      {/* --------------------------Services----------------------------------- */}
      <hr className='container' />
      <section>
        <div id='services' className="services">
          <div className="container">
            <h2>What I Do</h2>
            <div className="row mb-5">
              {
                ServicesData.map((item, index) => (
                  <div className="rn-service mx-3 col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12  aos-init aos-animate" key={index}>
                    <div className="inner">
                      <div className="icon">
                        <img src={item.iconUri} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">{item.title}</h4>
                        <p className="description">{item.description}</p>
                        <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                      </div>
                    </div>
                    <a className="over-link" href="#"></a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------My work----------------------------------- */}
      <hr className='container' />
      <section>
        <div id='portfolio' className="my-work">

          <h2>My Recent Projects</h2>
          <div className="container px-3">
            <Slider className='slider' {...sliderSettings}>
              <div className='carousel'>
                <div className="inner row">
                  <div className="col-lg-5 col-xl-5">
                    <div className="title my-4">
                      <h3>IT Company Portfolio</h3>
                    </div>
                    <div className="description my-4">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quidem dignissimos.</p>
                      <p>Perspiciatis fuga soluta officiis eligendi labore, omnis ut velit vitae suscipit  alias cumque temporibus.</p>
                    </div>
                    <div className="points my-4">
                      <ul>
                        <li>Responsive design</li>
                        <li>Animated designs</li>
                        <li>Certification</li>
                      </ul>
                    </div>
                    <div className="links d-flex">
                      <div className='my-5 mr-5'>
                        <Button className="button">VIEW PROJECT <MdArrowForwardIos /> </Button>
                      </div>
                      <div className='my-5 '>
                        <Button className="button">VIEW ALL PROJECTS <MdArrowForwardIos /> </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-xl-7">
                    <div className="thumbnail">
                      <img src={rsit} alt='portfolio' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel'>
                <div className="inner row">
                  <div className="col-lg-5 col-xl-5">
                    <div className="title my-4">
                      <h3>IT Company Portfolio</h3>
                    </div>
                    <div className="description my-4">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quidem dignissimos.</p>
                      <p>Perspiciatis fuga soluta officiis eligendi labore, omnis ut velit vitae suscipit  alias cumque temporibus.</p>
                    </div>
                    <div className="points my-4">
                      <ul>
                        <li>Responsive design</li>
                        <li>Animated designs</li>
                        <li>Certification</li>
                      </ul>
                    </div>
                    <div className="links d-flex">
                      <div className='my-5 mr-5'>
                        <Button className="button">VIEW PROJECT <MdArrowForwardIos /> </Button>
                      </div>
                      <div className='my-5 '>
                        <Button className="button">VIEW ALL PROJECTS <MdArrowForwardIos /> </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-xl-7">
                    <div className="thumbnail">
                      <img src={rsit} alt='portfolio' />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* --------------------------contact----------------------------------- */}
      <hr className='container' />
      <section>
        <div id='contact' className="contact-me">
          <div className="container">
            <h2>Contact With Me</h2>
            <div className="contact-section ">
              <div className="row">
                <div className="col-lg-5 contact-details ">
                  <div className="img">
                    <img src={contact} alt="contact" />
                  </div>
                  <div className="description-details my-4">
                    <h3>Jyoti Rani Gautam</h3>
                    <div className="description">
                      <p>Software Developer</p>
                      <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                      <p><FaWhatsapp className='icon mx-2' />  +91 76969-20269</p>
                      <p><HiOutlineMail className='icon mx-2' /> jyotiranigautam03@gmail.com</p>
                    </div>
                    <div className="social">
                      <span>FIND WITH ME</span>
                      <ul className="find-me my-2 d-flex ">
                        <li className="facebook"><a href="#"><LuFacebook className='icon' /></a>
                        </li>
                        <li className="instagram"><a href="#"><LuInstagram className='icon' /></a>
                        </li>
                        <li className="linkedin"><a href="#"><LuLinkedin className='icon' /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 contact-form py-5 ">
                  <form>
                    <div className="mb-5 row ">
                      <div className="col-lg-6">
                        <label for="name" className="form-label">YOUR NAME</label>
                        <input type="name" className="form-control" id="name" />
                      </div>
                      <div className="col-lg-6">
                        <label for="phone" className="form-label">PHONE NUMBER</label>
                        <input type="phone" className="form-control" id="phone" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label for="exampleInputEmail1" className="form-label">EMAIL </label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-5">
                      <label for="subject" className="form-label">SUBJECT</label>
                      <input type="text" className="form-control" id="subject" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-5">
                      <label for="message" className="form-label">YOUR MESSAGE</label>
                      <textarea className="form-control" id="message" rows="7"></textarea>
                    </div>
                    <div className="mb-5">
                      <Button className="button">SEND MESSAGE <MdArrowForwardIos /> </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home