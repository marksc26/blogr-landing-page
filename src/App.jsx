import './App.css'
import Header from './layout/Header'
import phones from './assets/images/illustration-phones.svg'
import Footer from './layout/Footer'
import circles from './assets/images/bg-pattern-circles.svg'
import editorD from './assets/images/illustration-editor-desktop.svg'
import laptopD from './assets/images/illustration-laptop-desktop.svg'
import editorM from './assets/images/illustration-editor-mobile.svg'
import laptopM from './assets/images/illustration-laptop-mobile.svg'

function App() {


  return (
    <main>
      <Header />
      <section className='main'>
        <div className='main-container'>
          <h3>A modern publishing platform</h3>
          <p>Grow your audience and build your online brand</p>
          <div className='buttons'>
            <button className='button1'>Start for Free</button>
            <button className='button2'>Learn More</button>
          </div>
        </div>
      </section>

      <section className='section1'>
        <div className='title-container'>
          <h3 className='title1'>Designed for the future</h3>
        </div>
        <div className='img-section1'>
          <img src={editorD} alt="" />
        </div>
        <div className='img-section1M'>
          <img src={editorM} alt="" />
        </div>
        <div className='section-container'>
          <div className='data-container'>
            <h3 className='title2'>Introducing an extensible editor</h3>
            <p> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
              change the looks of a blog.</p>
          </div>
          <div className='data-container'>
            <h3 className='title2'>Robust content management</h3>
            <p>  Flexible content management enables users to easily move through posts. Increase the usability of your blog
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
          </div>
        </div>
      </section>

      <section className='main-section2'>
        <div className='phones'>
          <img src={phones} alt="" />
        </div>
        <section className='section2'>
          <div className='imgCircles'>
            <img src={circles} alt="" />
          </div>
          <div className='data2-container'>
            <h3>State of the Art Infrastructure</h3>
            <p> With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
          </div>
        </section>
      </section>


      <section className='section3'>
        <div className='img-section3'>
          <img src={laptopD} alt="" />
        </div>
        <div className='img-section3M'>
          <img src={laptopM} alt="" />
        </div>
        <div className='data3-container'>
          <div>
            <h3>Free, open, simple</h3>
            <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
          </div>
          <div>
            <h3>Powerful tooling</h3>
            <p>  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App
