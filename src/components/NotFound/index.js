// Write your code here
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Navbar />
    <div className="not-found-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-description">
        We cannot seem to find the page you are looking for.
      </p>
    </div>
  </div>
)

export default NotFound
