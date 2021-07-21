import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../auth/login_form_container";
import SignupFormContainer from "../auth/signup_form_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "requireLogin":
      component = <div> Please login to continue! </div>;
      break;
    case "checkout":
      component = (
        <div className="checkout-modal">
          Thanks for <i>checking out</i> my work! 
					<br />
					<br />
					All these items can be found
          on <a href="https://thingiverse.com">thingiverse!</a>
        </div>
      );
			break;

    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
