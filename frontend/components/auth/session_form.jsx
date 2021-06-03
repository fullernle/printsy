import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === "login") {
      this.state = {
        username: "",
        password: "",
      };
    } else {
      this.state = {
        username: "",
        password: "",
        email: "",
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
  }

  handleEnter(e) {
    if (e.key === "Enter") this.handleSubmit(e);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  
  demoUser() {
    let demoUser = {username: 'demo', password: '123123' }
    this.props.processForm(demoUser).then(() => this.props.closeModal());
  }

  render() {
    let email = "";
    if (this.props.formType === "Register") {
      email = (
        <>
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="signup-email"
            />
          </label>
          <br />
        </>
      );
    }


    // if (this.props.errors.length === 0 ) this.props.closeModal();
    return (
      <div className="login-form-container">
        <div onClick={this.props.closeModal} className="close-x">
          X
        </div>

        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType} {this.props.otherForm}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
              />
            </label>
            <br />
            {email}
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                onKeyPress={this.handleEnter}
              />
            </label>
            <br />

            <button className="session-submit">{this.props.formType}</button>
          </div>
        </form>
        <button onClick={this.demoUser}>Demo Login</button>
      </div>
    );
  }
}

export default SessionForm;
