
import React,{useState,useEffect} from 'react'
import Img from "../assets/Original.jpg";
import Typed from 'typed.js';


const IndexPage = () =>{
    const jsonData=[{keyItem:"1",dataItem:"HTML"},{keyItem:"2",dataItem:"CSS"},{keyItem:"3",dataItem:"React JS"},{keyItem:"4",dataItem:"Jquery"},{keyItem:"5",dataItem:"Bootstrap"},{keyItem:"6",dataItem:"JavaScript"},{keyItem:"7",dataItem:"JSON"},{keyItem:"8",dataItem:"Ajax"},{keyItem:"9",dataItem:"Node js"},{keyItem:"10",dataItem:"Mongodb"},{keyItem:"11",dataItem:"Git"},{keyItem:"12",dataItem:"REST API"},{keyItem:"13",dataItem:"Google Analytics"},{keyItem:"14",dataItem:"Chrome Dev tools"}];
    const el = React.useRef(null);
    const ell = React.useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<b>Souradip Sarkar</b>'],
            typeSpeed: 30,
            showCursor: false,
            // backSpeed: 70,
            // loop:true
        });
        const undertyped = new Typed(ell.current, {
            strings: ['<p>*Note: Please Visit My "linkedin profile=>Projects=>Resume website" for updated resume website.Thank you.</p>'],
            typeSpeed: 30,
            showCursor: false,
            // backSpeed: 30,
            // loop:true
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
        
    })
    const [socialMedia,setSocialMedia]=useState("");
    function redirection(){
        if(socialMedia==="linked_in"){
            window.open("https://www.linkedin.com/in/souradip-sarkar-ba3339156/");
        }else if(socialMedia==="git_hub"){
            window.open("https://github.com/soura76developer");
        }
        else if(socialMedia==="email"){
            window.open("https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMqgqqpXwfJmpHcmrnKSrCjFkbgrSZkldJvbVzWbVtQQdCqrcgtcTPxVzFsxVVJspWdKJsB");
        }
    }
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="header"></div>
                    <div className="col-sm-6 px-4 py-5 text-start ">
                        <img src={Img} alt="" className="img_style ms-4" />
                        <h2 className="Name mt-2"><span ref={el} /></h2>
                        
                    </div>
                    <div className="col-sm-6 px-2 py-1 text-end">
                        <div className="row px-2 gx-1 justify-content-end align-items-center" style={{columnGap:"5px"}}>
                            <div className="col-sm-auto py-1 px-2 text-center contact-information left">
                                <i className="fa-solid fa-envelope-circle-check fa-flip"></i>
                                <p>souradipsarkar76@gmail.com</p>
                            </div>
                            <div className="col-sm-auto py-1 px-2 text-center contact-information">
                                <i className="fa-solid fa-mobile-retro fa-flip"></i>
                                <p>8145822930</p>
                            </div>
                            <div className="col-sm-auto py-1 px-2 text-center contact-information right">
                                <i className="fa-solid fa-location-dot fa-flip"></i>
                                <p>Alipurduar,india</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 p-3 text-center" style={{minHeight:"130px"}}>
                        <p className="description">I have leadership qualities, so I want to utilize it, in the growth of the organization and myself. I like to make strategy, before act on any plan. I am a fast learner .I believe in Hard work in the right direction. Seeking for an interesting career ,where I will be able to use my skill set .I have knowledge of technical skills, software products, software development tools , operations, and sales .</p>
                        {/* <p className="description">I have <b>leadership qualities</b>, so I want to utilize it, in the growth of the organization and myself. I like to make <b>strategy</b>, before act on any plan. <b>I am a fast learner .I believe in Hard work in the right direction. Seeking for an interesting career ,where I will be able to use my skill set .I have knowledge of technical skills, software products, software development tools , operations, and sales.</b></p> */}
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6 text-center p-2 workexGlassMohrposys">
                        <p className="headings">Work Exprience</p>
                        <hr/>
                        <div className="row ">
                            <div className="col-md-2 text-end">
                          
                            <lord-icon
                                src="https://cdn.lordicon.com/pxecqsgb.json"
                                trigger="loop"
                                delay="1200"
                                colors="primary:#6ea5c4 ,secondary:#e87f5f"
                                style={{width:"30px",height:"30px"}}>
                            </lord-icon>
                       
                            </div>
                            <div className="col-md-10 text-start ">
                                <p className="workExStyle"><a className="hyperLinkStyle" href="https://edudigm.in/">Edudigm</a></p>
                                <p>FrontEnd Webapp Developer</p>
                              
                            </div>
                        </div>
                      
                        <div className="row ">
                            <div className="col-md-2 text-end">
                            <lord-icon
                                src="https://cdn.lordicon.com/pxecqsgb.json"
                                trigger="loop"
                                delay="1200"
                                colors="primary:#6ea5c4,secondary:#e87f5f"
                                style={{width:"30px",height:"30px"}}>
                            </lord-icon>
                            </div>
                            <div className="col-md-10 text-start">

                            <p className="workExStyle"><a className="hyperLinkStyle" href="https://www.wtwco.com/en-us">Willis Tower Watson</a></p>
                                <p>Claims Analyst</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-2 text-end">
                            <lord-icon
                                src="https://cdn.lordicon.com/pxecqsgb.json"
                                trigger="loop"
                                delay="1200"
                                colors="primary:#6ea5c4,secondary:#e87f5f"
                                style={{width:"30px",height:"30px"}}>
                            </lord-icon>
                            </div>
                            <div className="col-md-10 text-start">

                                <p className="workExStyle"><a className="hyperLinkStyle" href="https://www.extramarks.com/">Extramarks</a></p>
                                <p>Business Development Executive</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center p-2 workexGlassMohrposys">
                        <p className="headings">Skills</p>
                        <hr/>
                        <div className="row g-3 p-5" style={{columnGap:"40px"}}>
                            { 
                                jsonData.map((value) =>{
                                    return(
                                        <div className="col-sm-auto p-3 skillSetItemsContainer static" key={value.keyItem} >
                                            <p className="skillSetItems" >{value.dataItem}</p>
                                        </div>
                                    )
                                   
                                }) 
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center p-2 workexGlassMohrposys">
                        <p className="headings">Education</p>
                        <hr/>
                        <div className="row">
                            <div className="col-md-2 text-end">
                            <lord-icon
                                src="https://cdn.lordicon.com/dxoycpzg.json"
                                trigger="loop"
                                delay="1000"
                                colors="primary:#6ea5c4,secondary:#e87f5f,tertiary:#4bb3fd,quaternary:#ebe6ef,quinary:#f9c9c0"
                                style={{width:"30px",height:"30px"}}>
                            </lord-icon>
                            </div>
                            <div className="col-md-10 text-start">
                                <p className="workExStyle"><span><a className="hyperLinkStyle" href="https://www.sittechno.org/">Siliguri Institute Of Technology</a></span></p> 
                                <p><span>Electronics and Communication Engineering</span></p>
                                <p><span>05/2015 - 05/2019</span></p>
                            </div>
                           
                        </div>
                        <div className="row">
                            <div className="col-md-2 text-end">
                            <lord-icon
                                src="https://cdn.lordicon.com/dxoycpzg.json"
                                trigger="loop"
                                delay="1000"
                                colors="primary:#6ea5c4,secondary:#e87f5f,tertiary:#4bb3fd,quaternary:#ebe6ef,quinary:#f9c9c0"
                                style={{width:"30px",height:"30px"}}>
                            </lord-icon>
                            {/* <lord-icon
                                src="https://cdn.lordicon.com/ytgufzvb.json"
                                trigger="loop"
                                delay="1000"
                                colors="primary:#e87f5f,secondary:#e87f5f"
                                style={{width:"30px",height:"30px"}}>
                            </lord-icon> */}
                            </div>
                            <div className="col-md-10 text-start">
                                <p className="workExStyle"><span><a className="hyperLinkStyle" href="https://www.facebook.com/McWilliamSchool/">Mc William Hs School</a></span></p>
                                <p><span>Science(PCMB)</span></p>
                                <p><span>05/2013 - 05/2015</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center p-2 workexGlassMohrposys">
                        <p className="headings">Projects</p>
                        <hr/>
                        <div className="row p-2">
                            <div className="col-md-12 text-start px-5">
                                <p className="workExStyle"><span><a className="hyperLinkStyle" href="https://apexenial.com/">Apexenial</a></span></p> <span className="version">Version 1</span>
                                <p><span>Consultancy Webapp,where any Organization can recruite their employee </span></p>
                                <p><span>React Js,jquery,Bootstrap,Css,Json</span></p>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-md-12 text-start px-5">
                            <p className="workExStyle"><span><a className="hyperLinkStyle" href="#">Realisto</a></span><span className="ongoing">50% progress</span></p>
                                <p><span>A realestate buy,rent dumy platform.</span></p>
                                <p><span>React Js,Bootstrap,Css,Json,nodejs</span></p>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-md-12 text-start px-5">
                            <p className="workExStyle"><span><a className="hyperLinkStyle" href="#">React Blog App</a></span><span className="version">Version 1</span></p>
                                <p><span>Blog app</span></p>
                                <p><span>React Js,Bootstrap,css</span></p>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-md-12 text-start px-5">
                            <p className="workExStyle"><span><a className="hyperLinkStyle" href="#">BASIC HTML PAGE</a></span><span className="version">Complete</span></p>
                                <p><span>Basic html page</span></p>
                                <p><span>Html,Css</span></p>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-md-12 text-start px-5">

                                <p className="workExStyle"><span><a className="hyperLinkStyle" href="#">Digital clock</a></span><span className="version">Complete</span></p>
                                <p><span>It is a full working digital clock, Made with HTML tags, and various CSS properties and with functions required for DOM manipulation. Dynamic HTML page</span></p>
                                <p><span>Java Script,css,Html</span></p>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-md-12 text-start px-5">

                                <p className="workExStyle"><span><a className="hyperLinkStyle" href="#">TODO app UI Web</a></span><span className="version">Complete</span></p>
                                <p><span>Front-end Full responsive todo list</span></p>
                                <p><span>Html,css,jquery</span></p>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-md-12 text-start px-5">
                                <p className="workExStyle"><span><a className="hyperLinkStyle" href="#">Ecommerce app</a></span><span className="ongoing">35% progress</span></p>
                                <p><span>ecommerce app.</span></p>
                                <p><span>React Js,Bootstrap,css,node js,Rest Api</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center p-4 workexGlassMohrposys">
                        <p className="headings">Certification</p>
                        <hr/>
                        <ol>
                            <li style={{textAlign:"left"}}>Six month training on Full Stack Web APP Development course from PrepBytes .</li>
                            <li style={{textAlign:"left"}}>Swarm Robotics form IIT Guwahati</li>
                        </ol>
                    </div>
                    <div className="col-md-6 text-center p-4 workexGlassMohrposys">
                        <p className="headings">Achievements</p>
                        <hr/>
                        <p style={{textAlign:"justify"}}>Because of my leadership qualities, i was a representative from my institute for IIT Guwahati(Techniche 2018). I was a committee member for robotics event of my institute. I have completed 3 year of classical singing and 2 year of Rabindra sangeet with earn a good marks in examination.Worked in an organization where I have built software products(online Exam portal,payment-gateway integration).</p>
                    </div>
                </div>
                <div className="row workexGlassMohrposys">
                    <div className="col-md-6 text-center p-2">
                        <p className="headings">Languages</p>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <p><span>BENGALI</span></p>
                                <p><span>Full Professional Proficiency</span></p>
                            </div>
                            <div className="col-md-6">
                                <p><span>English</span></p>
                                <p><span>Full Professional Proficiency</span></p>
                            </div>
                            <div className="col-md-6">
                                <p><span>Hindi</span></p>
                                <p><span>Full Professional Proficiency</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center p-2">
                        <p className="headings">Interests</p>
                        <hr/>
                        <div className="row g-2 p-2" style={{columnGap:"40px"}}>
                            <div className="col-md-auto p-2 skillSetItemsContainer static" >
                                <p className="skillSetItems" >Singing</p>
                            </div>
                            <div className="col-md-auto p-2 skillSetItemsContainer static" >
                                <p className="skillSetItems" >Play Guitar</p>
                            </div>
                            <div className="col-md-auto p-2 skillSetItemsContainer static" >
                                <p className="skillSetItems" >Play Chess</p>
                            </div>
                            <div className="col-md-auto p-2 skillSetItemsContainer static" >
                                <p className="skillSetItems" >Youtube</p>
                            </div>
                            <div className="col-md-auto p-2 skillSetItemsContainer static" >
                                <p className="skillSetItems" >Productivity Book </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-2 p-2 mb-1 justify-content-center workexGlassMohrposys" style={{columnGap:"40px"}}>
                    {/* <p>Social Media handels</p> */}
                    <hr/>
                    <div className="col-md-3 p-2 text-center skillSetItemsContainer" onClick={()=>{redirection();setSocialMedia("linked_in")}} >
                        <p className="skillSetItems" ><i class="fa-brands fa-linkedin fa-bounce"></i> Linked In</p>
                    </div>
                    <div className="col-md-3 p-2 text-center skillSetItemsContainer"  onClick={()=>{redirection();setSocialMedia("git_hub")}}>
                        <p className="skillSetItems" ><i class="fa-brands fa-github fa-bounce"></i> Git Hub</p>
                    </div>
                    <div className="col-md-3 p-2 text-center skillSetItemsContainer"  onClick={()=>{redirection();setSocialMedia("email")}}>
                        <p className="skillSetItems" ><i class="fa-solid fa-envelope fa-bounce"></i> Email</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 p-2 mb-4 text-center">
                        <p className="mt-2" style={{color:"var(--col5)",fontWeight:"700"}}><span ref={ell} /></p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default IndexPage;
