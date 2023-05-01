
import './App.css';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <section>
        <div className='container'>
          <Fade bottom>
          <h2 className='main-title'>reveal elements on scroll</h2>

          
          
          <div className='content'>
            <div className='image'>
              <img src='img1.jpg' alt=''/>

            </div>
            <div className='text-box'>
              <h3>Lorem ipsum </h3>
              <p>Lorem ipsum sdsd  dsd sadasd   sfsdfsd f sdfsfsdfs f sdd</p>

            </div>
          </div>
          <div className='media-icons'>
            <a href='#' className='icon'><i className='fab fa-facebook'></i></a>
            <a href='#' className='icon'><i className='fab fa-instagram'></i></a>
            <a href='#' className='icon'><i className='fab fa-twitter'></i></a>
            <a href='#' className='icon'><i className='fab fa-youtube'></i></a>

          </div>

          </Fade>
          
        </div>
      </section>
      <section className='sec-02'>
        <div className='container'>
          <Fade left>
          <h3 className='section-title'>Lorem Ipsum</h3>
          <div className='content'>
            <div className='image'>
              <img src='img2.jpg' alt=''/>
            </div>
            <div className='info'>
              <h4 className='info-title'>Description</h4>
              <p>Lorem ipsum asda asdasd sdasd asd asda d a sdadaa</p>

            </div>
          </div>

          </Fade>
          
        </div>

      </section>
      <section className='sec-03'>
        <div className='container'>
          <Fade right>
          <h3 className='section-title'>Lorem Ipsum</h3>
          <div className='content'>
            <div className='media-info'>
              <li><a href='#'><i className='fab fa-facebook'></i>Facebook</a></li>
              <li><a href='#'><i className='fab fa-instagram'></i>Instagram</a></li>
              <li><a href='#'><i className='fab fa-twitter'></i>Twitter</a></li>
              <li><a href='#'><i className='fab fa-youtube'></i>YouTube</a></li>
              <li><a href='#'><i className='fab fa-linkedin'></i>LinkedIn</a></li>
            </div>
            <div className='image'>
              <img src='img3.jpg' alt=''/>
            </div>
          </div>

          </Fade>
          
        </div>
      </section>
    </div>
  );
}

export default App;
