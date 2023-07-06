import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {AiFillSkype} from 'react-icons/ai';
import {BsBehance} from 'react-icons/bs';
import {BsTelephoneFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai'
import logo from '../assets/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import block1 from '../assets/blocks-1.1fdf2da8.jpg'
import block2 from '../assets/blocks-2.78674c9e.jpg'
import block3 from '../assets/blocks-3.7bde8e5b.jpg'
import downlode from '../assets/download.png'
import {FaAngleRight} from 'react-icons/fa';
import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import project3 from '../assets/project-3.jpg'
import project4 from '../assets/project-4.jpg'
import project5 from '../assets/project-5.jpg'
import project6 from '../assets/project-6.jpg'
import project7 from '../assets/project-7.jpg'
import project8 from '../assets/project-8.jpg'
import about from '../assets/about-1.jpg'
import slider1 from '../assets/slider-1.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
import {FaThumbsUp} from 'react-icons/fa';
import {BiWorld} from 'react-icons/bi'; 
import {FaTrophy} from 'react-icons/fa';
import {AiFillHeart} from 'react-icons/ai';
import {FaBroadcastTower} from 'react-icons/fa';
import {AiOutlineGlobal} from 'react-icons/ai';
import {BiChip} from 'react-icons/bi';
import {BiAtom} from 'react-icons/bi';
import {FaMedal} from 'react-icons/fa';
import {GiDeathJuice} from 'react-icons/gi';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {BsPinterest} from 'react-icons/bs';
import team1 from '../assets/team-1.jpg'
import team2 from '../assets/team-2.jpg'
import team3 from '../assets/team-3.jpg'
import blog1 from '../assets/blog-1.jpg'
import blog2 from '../assets/blog-2.jpg'
import blog3 from '../assets/blog-3.jpg'
import blog4 from '../assets/blog-4.jpg'
import blog5 from '../assets/blog-5.jpg'
import blog6 from '../assets/blog-6.jpg'
import tab from '../assets/tab-img.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cta from '../assets/cta-bg.jpg'
import Worker from '../assets/test-thm.png'
import lg1 from '../assets/logo1.png'
import lg2 from '../assets/logo2.png'
import lg3 from '../assets/logo3.png'
import lg4 from '../assets/logo4.png'


const Home = () => {
  
    return (
        <>
    	    <div className='header'>
                <div className='header-top-area sec-p-30'>
                    <Container className='w-110'>
                        <div className='row'>
                        <div className='flex'>
                        <div className='col-md-12'>
                                <div className='tractor-lang float-left'>
                                    <select className='tractor-lang'>
                                        <option>English</option>
                                        <option>Bangla</option>
                                        <option>Spanish</option>
                                    </select>
                                </div>
                                <ul className='header-top-social'>
                                    <li><a className='text-white'><FaFacebookF/></a></li>
                                    <li><a className='text-white'><FaTwitter/></a></li>
                                    <li><a className='text-white'><FaLinkedinIn/></a></li>
                                    <li><a className='text-white'><FaInstagram/></a></li>
                                    <li><a className='text-white'><AiFillSkype/></a></li>
                                    <li><a className='text-white'><BsBehance/></a></li>
                                </ul>
                                <div className='quote-btn float-right '>
                                    <a className='btn btn-type-4'>get a quote</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Container>
                </div>
                <div className='header-middle-area sec-p-30'>
                    <Container className='w-1170'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <div className='header-middle-logo'>
                                    <img src={logo}/>
                                </div>
                            </div>
                            <div className='col-md-7'>

                                
                                <ul className='header-middle-short-info'>
                                    <div className='owl-carousel owl-carousel owl-theme float-right owl-loaded owl-drag'>
                                         <div className='owl-stage-outer'>
                                            <li><i><BsTelephoneFill/></i>
                                            <div className='short-info'>phone number:
                                            <h4>00-123-123-4567</h4>
                                            </div>
                                            </li>
                                            <li><i><BsTelephoneFill/></i>
                                            <div className='short-info'>phone number:
                                            <h4>00-123-123-4567</h4>
                                            </div>
                                            </li>
                                            <li><i><BsTelephoneFill/></i>
                                            <div className='short-info'>phone number:
                                            <h4>00-123-123-4567</h4>
                                            </div>
                                            </li>
                                         </div>       
                                    </div>
                                </ul>
                            </div>
                            <Navbar className='header1' expand="lg">
                                 <div className='w-1140'>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav p">
                                    <Nav className="ms-auto gap">
                                        <Nav.Link className='text' href="#link">Home</Nav.Link>
                                         <NavDropdown title="pages" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                                              <NavDropdown.Item href="#action/3.2"> 
                                                services
                                              </NavDropdown.Item>
                                              <NavDropdown.Item href="#action/3.3">block services</NavDropdown.Item>
                                              <NavDropdown.Divider />
                                              <NavDropdown.Item href="#action/3.4">
                                                contact
                                              </NavDropdown.Item>
                                            </NavDropdown>

                                            <NavDropdown title="project" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">project 1</NavDropdown.Item>
                                              <NavDropdown.Item href="#action/3.2">
                                                project 2
                                              </NavDropdown.Item>
                                              <NavDropdown.Item href="#action/3.3">project 3</NavDropdown.Item>
                                              <NavDropdown.Divider />
                                              <NavDropdown.Item href="#action/3.4">
                                                project 4
                                              </NavDropdown.Item>
                                            </NavDropdown>

                                            <NavDropdown title="blog" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">blog 2 column</NavDropdown.Item>
                                              <NavDropdown.Item href="#action/3.2">
                                                blog 3 column
                                              </NavDropdown.Item>
                                              <NavDropdown.Item href="#action/3.3">Masonry blog</NavDropdown.Item>
                                              <NavDropdown.Divider />
                                              <NavDropdown.Item href="#action/3.4">
                                                blogs Details
                                              </NavDropdown.Item>
                                            </NavDropdown>

                                            <NavDropdown title="shop" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">shop 2 column</NavDropdown.Item>
                                              <NavDropdown.Item href="#action/3.2">
                                                shop 3 column
                                              </NavDropdown.Item>
                                              <NavDropdown.Item href="#action/3.3">login</NavDropdown.Item>
                                              <NavDropdown.Divider />
                                              <NavDropdown.Item href="#action/3.4">
                                                shop 4 column
                                              </NavDropdown.Item>
                                            </NavDropdown>
                                    </Nav>
                                    {/* <AiOutlineSearch className='search'/> */}
                                </Navbar.Collapse>
                                </div>
                            </Navbar>
                        </div>
                    </Container>
                </div>
                <div className='slider-area'>
                  <div className='tractor-single-table'>
                    <div className='tractor-single-tablecell'>
                      <Container className='w-1170'>
                        <div className='row'>
                          <div className='col-md-12'>
                            <h1 className='pt-5 trc'>TRACTOUR
                              <br/>
                              choice for industry
                            </h1>
                            <p className='pt-3 dec'>lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod
                              <br/>
                              teporara incididunt ugt labore.
                            </p>
                            <div className='pb-5 pt-3'>
                            <a className='btn1 btn-type-1'>our services</a>
                            <a className='btn1 btn-type-2'>purchase now</a>
                            </div>
                          </div>
                        </div>
                      </Container>
                    </div>
                  </div>
                </div>
                <Container className='w-1140'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='single-blocks-services pt-5'>
                        <div className='single-blocks-img'>
                          <img src={block1} className='img-fluid'/>
                        </div>
                        <h3>
                          <a className='text-center text-black text-decoration-none'>welding machine using</a>
                          <p className='text-center'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demor</p>
                        <a className='btn'>
                          <i>
                            <FaAngleRight className='pb-2'/>
                          </i>
                        </a>
                        </h3>
                        
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='single-blocks-services pt-5'>
                        <div className='single-blocks-img'>
                          <img src={block2} className='img-fluid'/>
                        </div>
                        <h3>
                          <a className='text-center text-black text-decoration-none'>new compost technology</a>
                          <p className='text-center'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demor</p>
                        <a className='btn'>
                          <i>
                            <FaAngleRight className='pb-2'/>
                          </i>
                        </a>
                        </h3>

                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='single-blocks-services pt-5'>
                        <div className='single-blocks-img'>
                          <img src={block3} className='img-fluid'/>
                        </div>
                        <h3>
                          <a className='text-center text-black text-decoration-none'>new welding machine</a>
                          <p className='text-center'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demor</p>
                        <a className='btn'>
                          <i>
                            <FaAngleRight className='pb-2'/>
                          </i>
                        </a>
                        </h3>
                       
                      </div>
                    </div>
                  </div>
                </Container>
                <div className='project-area bg-color3 sec-p-100 text-center'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-6 mx-auto'>
                        <div className='section-title text-center mb-70'>
                          <h2>projects</h2>
                          <span>
                            <img src={downlode}/>
                          </span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ncc msm lal uFlaboreLorem ipsum dolor sit amet,</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='project-area bg-color3 text-center'>
                  <div className='project-wraper'>
                    <div className='container-fluid p-0'>
                      <div className='row'>
                        <div className='col-md-3 col-sm-6'>
                          <div className='sinlge-project'>
                            <img src={project1} className='img-fluid'/>
                            <div className='project-hvr'>
                              <h3>automated machine systems</h3>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                          <div className='sinlge-project'>
                            <img src={project2} className='img-fluid'/>
                          </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                          <div className='sinlge-project'>
                            <img src={project3} className='img-fluid'/>
                          </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                          <div className='sinlge-project'>
                            <img src={project4} className='img-fluid'/>
                          </div>
                        </div>
                      </div>
                      <div className='space-20'></div>
                      <div className='row'>
                        <div className='col-md-3 col-sm-6'>
                          <div className='sinlge-project'>
                            <img src={project5} className='img-fluid'/>
                          </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                          <div className='sinlge-project'>
                            <img src={project6} className='img-fluid'/>
                          </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                          <div className='sinlge-project'>
                            <img src={project7} className='img-fluid'/>
                          </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                          <div className='sinlge-project'>
                            <img src={project8} className='img-fluid'/>
                          </div>
                        </div>
                      </div>
                      <div className='more pt-2'>
                        <a className='btn2'>MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='about-area sec-p-100'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <h2>about our history</h2>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure praising pain was born and I will give you a complete account of the system, expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itselfBut I must explain to you how all this mistaken idea of denouncing i and pleasure and praising pain was born and I will give you a complete account of system, and expound the actual teachings of</p>
                        <button className='bt'><a className='btn2'>ABOUT MORE</a></button>
                      </div>
                      <div className='col-md-6'>
                        <img src={about}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='counter-area sec-p-100 counter-bg text-center'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-3 single'>
                        <div className='single-counter'>
                          <i><FaThumbsUp/></i>
                          <div className='counter'>
                            <span>270</span>
                          </div>
                          <div className='count-name'>project Done</div>
                        </div>
                      </div>
                      <div className='col-md-3 single'>
                        <div className='single-counter'>
                          <i><BiWorld/></i>
                          <div className='counter'>
                            <span>400</span>
                          </div>
                          <div className='count-name'>Across Worldwide</div>
                        </div>
                      </div>
                      <div className='col-md-3 single'>
                        <div className='single-counter'>
                          <i><FaTrophy/></i>
                          <div className='counter'>
                            <span>690</span>
                          </div>
                          <div className='count-name'>Awards Winning</div>
                        </div>
                      </div>
                      <div className='col-md-3 single'>
                        <div className='single-counter'>
                          <i><AiFillHeart/></i>
                          <div className='counter'>
                            <span>100</span>
                          </div>
                          <div className='count-name'>Satisfied Customers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='services-area sec-p-100 text-center'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='single-services-wraper border-bottom'>
                          <div className='services-icon'>
                            <i className='flaticon-oil'>
                              <FaBroadcastTower/>
                            </i>
                          </div>
                          <div className='services-content'>
                            <h4>energy & utilities</h4>
                            <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='single-services-wraper border-bottom'>
                          <div className='services-icon'>
                            <i className='flaticon-oil'>
                              <AiOutlineGlobal/>
                            </i>
                          </div>
                          <div className='services-content'>
                            <h4>Internet Of Things</h4>
                            <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='single-services-wraper border-bottom'>
                          <div className='services-icon'>
                            <i className='flaticon-oil'>
                              <BiChip/>
                            </i>
                          </div>
                          <div className='services-content'>
                            <h4>Artificial Intelligence</h4>
                            <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='single-services-wraper border-bottom'>
                          <div className='services-icon'>
                            <i className='flaticon-oil'>
                              <BiAtom/>
                            </i>
                          </div>
                          <div className='services-content'>
                            <h4>Worldwide Provider</h4>
                            <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='single-services-wraper border-bottom'>
                          <div className='services-icon'>
                            <i className='flaticon-oil'>
                              <FaMedal/>
                            </i>
                          </div>
                          <div className='services-content'>
                            <h4>25+ Best Company Awards</h4>
                            <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='single-services-wraper border-bottom'>
                          <div className='services-icon'>
                            <i className='flaticon-oil'>
                              <GiDeathJuice/>
                            </i>
                          </div>
                          <div className='services-content'>
                            <h4>Best Idea For Evar</h4>
                            <p>I must explain to you how all this idea of denouncing pleasure and praising</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='see pt-5'>
                      <button className='more1 text-white'>SEE MORE</button>
                  </div>
                </div>
                <div className='callto-action-area sec-p-100 cta-bg'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-12 single'>
                        <div className='callto-action-content float-left'>
                          <h3>Looking for a reliable & stable partner?</h3>
                          <p>contact us & learn more about us</p>
                        </div>
                        <a className='btn btn-type-4 float-right mt-3'>
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='project-area bg-color3 sec-p-100 text-center'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-6 mx-auto'>
                        <div className='section-title text-center mb-70'>
                          <h2>MEET OUR TEAM</h2>
                          <span>
                            <img src={downlode}/>
                          </span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ncc msm lal uFlaboreLorem ipsum dolor sit amet,</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-1140'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='single-team-wraper'>
                        <div className='team-img-wrape'>
                          <img src={team1} width="100%"/>
                          <div className='member-desig'>
                            <h4>FOUNDER</h4>
                          </div>
                        </div>
                        <div className='single-team-content'>
                          <div className='member-title text-center'>
                            <h3>
                              <a>michael robert</a>
                            </h3>
                            <a>info@rob.com</a>
                            <div className='team-social-text'>
                              <ul className='team-social'>
                                <li className='text-center'>
                                  <a>
                                    <i>
                                      <FaFacebookF/>
                                    </i>
                                  </a>
                                </li>
                                <li className='text-center'>
                                  <a>
                                    <i>
                                      <FaTwitter/>
                                    </i>
                                  </a>
                                </li>
                                <li className='text-center'>
                                  <a>
                                    <i>
                                      <FaLinkedinIn/>
                                    </i>
                                  </a>
                                </li>
                              </ul>
                              <p>On the other hand, we denounce with me a righteous indignation and dislike men who are so beguiled and demoralized by</p>
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='single-team-wraper'>
                        <div className='team-img-wrape'>
                          <img src={team2} width="100%"/>
                          <div className='member-desig'>
                            <h4>DEVELOPER</h4>
                          </div>
                        </div>
                        <div className='single-team-content'>
                          <div className='member-title text-center'>
                            <h3>
                              <a>David Shams Lr</a>
                            </h3>
                            <a>info@david.com</a>
                            <div className='team-social-text'>
                              <ul className='team-social'>
                                <li className='text-center'>
                                  <a>
                                    <i>
                                      <FaFacebookF/>
                                    </i>
                                  </a>
                                </li>
                                <li className='text-center'>
                                  <a>
                                    <i>
                                      <FaTwitter/>
                                    </i>
                                  </a>
                                </li>
                                <li className='text-center'>
                                  <a>
                                    <i>
                                      <FaLinkedinIn/>
                                    </i>
                                  </a>
                                </li>
                              </ul>
                              <p>On the other hand, we denounce with me a righteous indignation and dislike men who are so beguiled and demoralized by</p>
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='single-team-wraper'>
                        <div className='team-img-wrape'>
                          <img src={team3} width="100%"/>
                          <div className='member-desig'>
                            <h4>DESIGNER</h4>
                          </div>
                        </div>
                        <div className='single-team-content'>
                          <div className='member-title text-center'>
                            <h3>
                              <a>William Christopher</a>
                            </h3>
                            <a>info@willim.uk</a>
                            <div className='team-social-text'>
                              <ul className='team-social'>
                                <li className='text-center'>
                                  <a>
                                    <i>
                                      <FaFacebookF/>
                                    </i>
                                  </a>
                                </li>
                                <li className='text-center'>
                                  <a>
                                    <i>
                                      <FaTwitter/>
                                    </i>
                                  </a>
                                </li>
                                <li className='text-center'>
                                  <a>
                                    <i>
                                      <FaLinkedinIn/>
                                    </i>
                                  </a>
                                </li>
                              </ul>
                              <p>On the other hand, we denounce with me a righteous indignation and dislike men who are so beguiled and demoralized by</p>
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>
                    
            
                  </div>
                </div>
                <div className='quote-sologan-area sec-p-100 text-center bg-color3 mt-5'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <h2>delivering innovation sustainability goals.</h2>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                        <div className='see pt-5'>
                          <button className='more1 text-white'>GET A QUOTE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='progress-tab-area sec-p-100'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='progress-bar-wrape'>
                          <div className='progress-box'>
                            <h4>constraction skill</h4>
                            <div className='progress-bar'>
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                            </div>
                            <h4>oil engineering</h4>
                            <div className='progress-bar'>
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                            </div>
                            <h4>soil test skill</h4>
                            <div className='progress-bar'>
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                            </div>
                            <h4>gas engineering</h4>
                            <div className='progress-bar'>
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='tractor-tabs-wraper' id='tractorcontent'>
                        {/* <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">Active</Nav.Link>
                                <div className='tractor-tabs-img'>
                                  <img src={tab}/>
                                </div>
                                <div className='tractor-tabs-details'>
                                  <p>
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                  </p>
                                  <p>
                                  took a galley of type and scrambled it to make a type specimensimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                  </p>
                                </div>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                  Disabled
                                </Nav.Link>
                              </Nav.Item>
                        </Nav> */}
                          <Card>
                            <Card.Header>
                              <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                  <Nav.Link href="#first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link href="#disabled" disabled>
                                    Disabled
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Card.Header>
                            <Card.Body>
                            <div className='tractor-tabs-img'>
                                  <img src={tab}/>
                            </div> 
                              <Card.Text>
                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                                <p>took a galley of type and scrambled it to make a type specimensimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                          <div className='tab-content'>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='testimonoal-area sec-p-100 text-center testimonial-bg'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-12 single'>
                        <div className='all-testimonial-wraper'>
                          <div className='single-testimonial'>
                            <div className='client-message'>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod you a tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            </div>
                            <div className='client-img'>
                              <img src={Worker}/>
                            </div>
                            <div className='client-title'>
                              <h4>michael david</h4>
                              <h5>engineer</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='project-area bg-color3 sec-p-100 text-center'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-6 mx-auto'>
                        <div className='section-title text-center mb-70'>
                          <h2>BLOG AREA</h2>
                          <span>
                            <img src={downlode}/>
                          </span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ncc msm lal uFlaboreLorem ipsum dolor sit amet,</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-1140'>
                  <div className='row'>
                   <div className='col-md-4'>
                    <div className='single-blog'>
                      <div className='img-date-wrape'>
                        <img src={blog1}/>
                        <div className='blog-date'>januray 01, 2019</div>
                      </div>
                      <div className='blog-content'>
                        <h3>
                          <a>Industrial Revolution Factory</a>
                        </h3>
                        <span></span>
                        <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                      </div>
                    </div>
                   </div>
                   <div className='col-md-4'>
                    <div className='single-blog'>
                      <div className='img-date-wrape'>
                        <img src={blog2}/>
                        <div className='blog-date'>March 11, 2018</div>
                      </div>
                      <div className='blog-content'>
                        <h3>
                          <a>Industrial Revolution Factory</a>
                        </h3>
                        <span></span>
                        <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                      </div>
                    </div>
                   </div>
                   <div className='col-md-4'>
                    <div className='single-blog'>
                      <div className='img-date-wrape'>
                        <img src={blog3}/>
                        <div className='blog-date'>December 10, 2011</div>
                      </div>
                      <div className='blog-content'>
                        <h3>
                          <a>Industrial Revolution Factory</a>
                        </h3>
                        <span></span>
                        <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                      </div>
                    </div>
                   </div>
                  </div>
                  <div className='row'>
                   <div className='col-md-4'>
                    <div className='single-blog'>
                      <div className='img-date-wrape'>
                        <img src={blog4}/>
                        <div className='blog-date'>December 05, 2019</div>
                      </div>
                      <div className='blog-content'>
                        <h3>
                          <a>Industrial Revolution Factory</a>
                        </h3>
                        <span></span>
                        <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                      </div>
                    </div>
                   </div>
                   <div className='col-md-4'>
                    <div className='single-blog'>
                      <div className='img-date-wrape'>
                        <img src={blog5}/>
                        <div className='blog-date'>Septembor 14, 2020</div>
                      </div>
                      <div className='blog-content'>
                        <h3>
                          <a>Industrial Revolution Factory</a>
                        </h3>
                        <span></span>
                        <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                      </div>
                    </div>
                   </div>
                   <div className='col-md-4'>
                    <div className='single-blog'>
                      <div className='img-date-wrape'>
                        <img src={blog6}/>
                        <div className='blog-date'>January 17, 2019</div>
                      </div>
                      <div className='blog-content'>
                        <h3>
                          <a>Industrial Revolution Factory</a>
                        </h3>
                        <span></span>
                        <p>industry. Lorem Ipsum has been the ever a industry standard dummy text ever since is the 1500 an unknown printer took a text ever since is the 1500</p>
                      </div>
                    </div>
                   </div>
                  </div>
                </div>
                <div className='client-slider-area sec-p-100 bg-color3'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='all-client-slider'>
                          <img src={lg1}/>
                          <img src={lg2}/>
                          <img src={lg3}/>
                          <img src={lg4}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='footer-area black-bg sec-p-100'>
                  <div className='w-1140'>
                    <div className='row'>
                      <div className='col-md-3 col-sm-6'>
                        <div className='footer-widget widget-1'>
                          <div className='footer-logo'>
                            <a>
                              <img src={logo}/>
                            </a>
                          </div>
                          <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ands unknown printer took a galley of type and it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic pop</p>
                        </div>
                      </div>
                      <div className='col-md-3 col-sm-6'>
                        <div className='footer-widget widget-2'>
                          <h3>
                            popular link
                          </h3>
                          <ul className='footer-popu-link'>
                            <li>
                              <a>
                                laboratory
                              <i>
                                <BsFillArrowRightCircleFill/>
                              </i>
                              </a>
                            </li>
                            <li>
                              <a>
                                industry
                              <i>
                                <BsFillArrowRightCircleFill/>
                              </i>
                              </a>
                            </li>
                            <li>
                              <a>
                                Materials
                              <i>
                                <BsFillArrowRightCircleFill/>
                              </i>
                              </a>
                            </li><li>
                              <a>
                                Audio
                              <i>
                                <BsFillArrowRightCircleFill/>
                              </i>
                              </a>
                            </li>
                            <li>
                              <a>
                                metallurgy
                              <i>
                                <BsFillArrowRightCircleFill/>
                              </i>
                              </a>
                            </li>
                            <li>
                              <a>
                                video
                              <i>
                                <BsFillArrowRightCircleFill/>
                              </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-md-3 col-sm-6'>
                        <div className='footer-widget widget-3'>
                          <h3>tags widget</h3>
                          <ul className='list-inline tag-list'>
                            <li>
                              <a>awesome</a>
                            </li>
                            <li>
                              <a>beautiful</a>
                            </li>
                            <li>
                              <a>flat design</a>
                            </li>
                            <br/>
                            <li>
                              <a>ios</a>
                            </li>
                            <li>
                              <a>themforest</a>
                            </li>
                            <li>
                              <a>mass</a>
                            </li>
                            <br/>
                            <li>
                              <a>awesome</a>
                            </li>
                            <li>
                              <a>beautiful</a>
                            </li>
                            <li>
                              <a>flat design</a>
                            </li>
                            <br/>
                            <li>
                              <a>ios</a>
                            </li>
                            <li>
                              <a>themforest</a>
                            </li>
                            <li>
                              <a>mass</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-md-3 col-sm-6'>
                        <div className='footer-widget widget-3'>
                          <h3>contact info</h3>
                          <div className='office-address border-bottom mb-20 pb-20'>
                            <h4>
                              <a>office one</a>
                            </h4>
                            <p>123 jessore js, khulna kh, chowrasta, jessore</p>
                          </div>
                          <ul className='footer-social p-20'>
                            <li>
                              <a className='bg-color4'>
                                <i>
                                  <FaPinterestP/>
                                </i>
                              </a>
                            </li>
                            <li>
                              <a className='bg-color5'>
                                <i>
                                  <FaLinkedinIn/>
                                </i>
                              </a>
                            </li>
                            <li>
                              <a className='bg-color6'>
                                <i>
                                  <FaTwitter/>
                                </i>
                              </a>
                            </li>
                            <li>
                              <a className='bg-color7'>
                                <i>
                                  <FaFacebookF/>
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className='footer-area black-bg sec-p-100'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-3 col-sm-6'>
                                <div className='footer-widget widget-1'>
                                    <div className='footer-logo'>
                                        <a>
                                            <img src={logo}/>
                                        </a>
                                    </div>
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ands unknown printer took a galley of type and it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic pop</p>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='footer-widget widget-2'>
                                    <h3>popular link</h3>
                                    <ul className='footer-popu-link'>
                                        <li>
                                            <a>
                                            laboratory
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            Industry
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            Materials
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            Audio
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            Metallurgy
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            video
                                            <i>
                                                <BsFillArrowRightCircleFill/>
                                            </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='footer-widget widget-3'>
                                    <h3>tags widget</h3>
                                    <ul className='list-inline tag-list'>
                                        <li>
                                            <a>awesome</a>
                                        </li>
                                        <li>
                                            <a>beautiful</a>
                                        </li>
                                        <li>
                                            <a>flat design</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a>ios</a>
                                        </li>
                                        <li>
                                            <a>themforest</a>
                                        </li>
                                        <li>
                                            <a>mass</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a>awesome</a>
                                        </li>
                                        <li>
                                            <a>beautiful</a>
                                        </li>
                                        <li>
                                            <a>flat design</a>
                                        </li>
                                        <br/>
                                        <li>
                                            <a>ios</a>
                                        </li>
                                        <li>
                                            <a>themforest</a>
                                        </li>
                                        <li>
                                            <a>mass</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6'>
                                <div className='footer-widget widget-3'>
                                    <h3>contact info</h3>
                                    <div className='office-address border-bottom mb-20 pb-20'>
                                        <h4>
                                            <a>office one</a>
                                        </h4>
                                        <p>123 jessore js, khulna kh, chowrasta, jessore</p>
                                    </div>
                                    <ul className='footer-social p-30'>
                                        <li>
                                            <a className='bg-color4'>
                                                <i>
                                                    <BsPinterest/>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className='bg-color5'>
                                                <i>
                                                    <FaLinkedinIn/>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className='bg-color6'>
                                                <i>
                                                    <FaTwitter/>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className='bg-color7'>
                                                <i>
                                                    <FaFacebookF/>
                                                </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <div className='w-1140'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='copy-right text-center'>
                                copyright 
                                <a>
                                    tr
                                    <span>a</span>
                                    ct
                                    <span>o</span>
                                    ur
                                </a>
                                | all rights reserved | designed by theme_group
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )

}
export default Home;