import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === "login") {
      this.state = {
        email: "",
        password: "",
      };
    } else {
      this.state = {
        email: "",
        password: "",
        username: "",
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
    let demoUser = {email: 'demo@demo.com', password: '123123' }
    this.props.processForm(demoUser).then(() => this.props.closeModal());
  }

  render() {
    let email = "";
    if (this.props.formType === "Register") {
      email = (
        <>
          <label>
            <span className="modal-input-title">Name:</span>
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="login-input"
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
          ✕
        </div>

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <header className="modal-header">
            <span className="modal-title">{this.props.formType}</span>
            <span>{this.props.otherForm}</span>
          </header>
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              <span className="modal-input-title">Email:</span>
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <br />
            {email}
            <label className="modal-input-title">
              <span className="modal-input-title">Password:</span>
              <br />
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
        <button className="demo-button" onClick={this.demoUser}>
          Demo Login
        </button>
      </div>
    );
  }
}

export default SessionForm;
