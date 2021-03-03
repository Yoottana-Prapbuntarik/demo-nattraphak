import React, { Component } from "react";
import SocialLogin from "react-social-login";

class SocialButton extends Component {
  render() {
    let { children, triggerLogin, className } = this.props;
    
    return (
      <button onClick={triggerLogin} className={className}>
        {children}
      </button>
    );
  }
}

export default SocialLogin(SocialButton);