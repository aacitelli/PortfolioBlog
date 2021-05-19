import Layout from '@components/Layout'
import PostList from '@components/PostList'
import Head from 'next/head'

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />

          <title>Anden Acitelli - Software Engineer & Web Developer</title>
          <meta content="Hey! I'm a Computer Science major at Ohio State graduating Fall 2021. I primarily do software development, robotics, and web development." name="description" />
          <meta content="anden, acitelli, software engineer, software developer, web developer, ohio state, the ohio state university, computer science" name="keywords" />
          <link href="../assets/img/favicon.png" rel="icon" />
          <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Y70JBTCJ1"></script>
      </Head>
      <Layout pageTitle={title} description={description}>
      <button type="button" className="mobile-nav-toggle d-xl-none" aria-label="Dropdown Menu"><i className="icofont-navigation-menu"></i></button>

      <header id="header">
        <div className="d-flex flex-column">

          <div className="profile">
            <img src="assets/img/Small_Headshot.webp" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Anden Acitelli</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://linkedin.com/in/anden-acitelli" className="linkedin" aria-label="Visit My LinkedIn Profile"><i className="bx bxl-linkedin"></i></a>
              <a href="https://github.com/aacitelli" className="github" aria-label="Visit My GitHub Profile"><i className="bx bxl-github"></i></a>
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#contact"><i className="bx bx-phone-call"></i> <span>Contact</span></a></li>
              

            </ul>
          </nav>
          <button type="button" className="mobile-nav-toggle d-xl-none" aria-label="Dropdown Menu"><i className="icofont-navigation-menu"></i></button>

        </div>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Anden Acitelli</h1>
          <p>I'm a <span className="typed" data-typed-items="Software Engineer, Web Developer"></span></p>
        </div>
      </section>

      <main id="main">

        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>About</h2>
              
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src="assets/img/Full_Headshot.webp" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Software Engineer &amp; Full-Stack Web Developer.</h3>
                <p>
                  Hey! I'm a third-year Computer Science and Engineering major at Ohio State. I'll be interning with JPMorgan Chase & Co. this summer, but am open to full time opportunities after I graduate (as early as Fall 2021). 
                </p>
                <p>I've worked with all sorts of things, but have focused mainly on Python and Web Development. I am comfortable with the following technologies:</p>
                <ul>
                    <li style={{paddingBottom: 0}}><b>Languages: </b>Python, JavaScript, C/C++, Java, HTML/CSS</li>
                    <li style={{paddingBottom: 0}}><b>Frameworks & Libraries: </b>NumPy, React, Electron, Robot Operating System (ROS)</li>
                    <li style={{paddingBottom: 0}}><b>Developer Tools: </b>Git, GitHub, VS Code</li>
                    <li style={{paddingBottom: 0}}><b>Management: </b>Trello, Agile (Scrum)</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section id="resume" className="resume section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Resume</h2>
              <p><a style={{color: "#0645AD", textDecoration: "underline"}} href="https://drive.google.com/file/d/1nlJzHsSkNTlFM0Xu_uAItzb8M-6_duzt/view?usp=sharing">PDF</a>, if you prefer.</p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Anden Acitelli </h4>
                  <p><em>Aspiring Software Engineer and Full-Stack Web Developer looking for full-time jobs after I graduate as early as Fall 2021.</em></p>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item" style={{paddingBottom: 0}}>
                  <h4>The Ohio State University</h4>
                  <h5>B.S in Computer Science and Engineering</h5>
                  <h5 className="date">Autumn 2018 - Fall 2021</h5>
                  <p>Honors Engineering Program; Dean's List Fall 2019, Spring 2020, Fall 2020.</p>
                </div>

                <h3 className="resume-title">Extracurriculars</h3>
                <div className="resume-item">
                    <h4>The Ohio State University Underwater Robotics Team</h4>
                    <h5>Software Team Lead</h5>
                    <h5 className="date">Jun 2020 - Present</h5>
                    <ul>
                        <li>Leading 20 Software Team members for the 2020-2021 year, deciding project direction, delegating projects, and leading scrum meetings.</li>
                        <li>Designing software architecture and writing code for controls, vision, state estimation, simulation, and more on a ROS/C++/Python stack.</li>
                        <li>Led a team implementing a Python-based mapping system that tracks and stores object positions.</li>
                        <li>Presented on Robot Operating System (ROS) to a group of high school FIRST Robotics Students.</li>
                    </ul>
                </div>
                <div className="resume-item">
                    <h5>Software Team Member</h5>
                    <h5 className="date">Aug 2018 - May 2020</h5>
                    <ul>
                        <li>Led a team that implemented an Electron-based, cloud-integrated image labeling application.</li>
                        <li> Wrote a Python-based driver to convert data from an ultrasonic sensor into a usable data stream.</li>
                    </ul>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Experience</h3>
                <div className="resume-item">
                  <h4>The Ohio State Center for Design & Manufacturing Excellence</h4>
                  <h5>Software Engineer Intern</h5>
                  <h5 className="date">Sep 2020 - Present</h5>
                  <ul>
                    <li>Developing and programming innovative scan path algorithms in order to improve 3D printing quality.</li>
                    <li>Wrote C++ implementations of three scan path algorithms submitted in an industry-wide challenge.</li>
                    <li>Communicated progress to a non-technical supervisor using detailed documents and visualizations.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>The Ohio State University</h4>
                  <h5>Teaching Assistant</h5>
                  <h5 className="date">Aug 2019 - Nov 2020</h5>
                  <ul>
                    <li>Taught MATLAB to first year engineering students, simplifying lessons on baseline engineering
                        principles, complex programming concepts, and concise technical writing.</li>
                    <li>Troubleshooted technical issues, swiftly diagnosing problems and teaching students.</li>
                  </ul>
                </div>
                <div className="resume-item">
                    <h4>Pennsylvania Department of Transportation</h4>
                    <h5>Engineering, Scientific, and Technical Intern</h5>
                    <h5 className="date">May 2019 - Aug 2019</h5>
                    <ul>
                      <li>Worked with Microsoft Excel to organize data, utilizing extensive conditional formatting, intelligent formulas, and complex boolean logic to do in-depth cost analysis, optimize a filing system, and speed up data lookup on frequently used sheets.</li>
                      <li>Used AutoHotkey and JavaScript to automate a highly repetitive, frequently done task, cutting completion time by a measured 75%.</li>
                      <li>Completed office tasks efficiently, streamlining rote processes and eliminating redundant work.</li>
                    </ul>
                  </div>
              </div>
            </div>

          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">
              <h2>Contact</h2>
              <p>Get in touch with me through any of the below means! I'll get back to you as soon as possible.</p>
            </div>

            <div className="row" data-aos="fade-in">

              <div className="col-lg-12 d-flex align-items-stretch">
                <div className="info">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="email">
                            <i className="icofont-envelope"></i>
                            <p style={{fontSize: 22 + 'px'}}>Email:</p>
                            <p>andenacitelli@gmail.com</p>
                          </div>
                      </div>
        
                      <div className="col-lg-6">
                        <div className="phone">
                            <i className="icofont-phone"></i>
                            <p style={{fontSize: 22 + 'px'}}>Call:</p>
                            <p>(724) 810-1773</p>
                          </div>
                      </div>
                </div>
              </div>


            </div>

          </div>
          </div>
        </section>

      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>iPortfolio</span></strong>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
    </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
