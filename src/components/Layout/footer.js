import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://sSimplecodeimplecode.io" className="footer-text">
          © {new Date().getFullYear()}
          {` `} databae LLC. All rights reserved.
        </a>
      </footer>
    )
  }
}
export default Footer
