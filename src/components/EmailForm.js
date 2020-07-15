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
      <form id="signup-form" name="how-to-say-name" data-netlify="true" onSubmit={this.onSubmit} method="post"  >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <button type="submit">Sign Up</button>
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
      </>
    );
  }
}

export default EmailForm;
