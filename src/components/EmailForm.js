import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      <>
      Get notified when we launch!

      <form data-netlify-honeypot="bot-field" data-netlify-recaptcha="true" name="how-to-say-name" data-netlify="true"  method="post"  >
        <input type="hidden" name="form-name" value="how-to-say-name" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input type="submit" value="Sign Up" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
      </>
    );
  }
}

export default EmailForm;
