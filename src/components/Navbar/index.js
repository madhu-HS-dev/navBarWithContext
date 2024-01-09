// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeLogo = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <nav className="nav-dark-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="nav-items-list">
                <Link to="/" className="nav-link">
                  <li className="dark-nav-item nav-item">Home</li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className="dark-nav-item">About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="theme-button"
                onClick={onClickThemeLogo}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-logo"
                />
              </button>
            </nav>
          ) : (
            <nav className="nav-light-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="nav-items-list">
                <Link to="/" className="nav-link">
                  <li className="light-nav-item">Home</li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className="light-nav-item">About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="theme-button"
                onClick={onClickThemeLogo}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-logo"
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
