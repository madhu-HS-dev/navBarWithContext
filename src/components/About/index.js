// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="dark-about-container">
              <Navbar />
              <div className="about-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="about-image"
                />
                <h1 className="dark-about-heading">About</h1>
              </div>
            </div>
          ) : (
            <div className="light-about-container">
              <Navbar />
              <div className="about-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="about-image"
                />
                <h1 className="light-about-heading">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
