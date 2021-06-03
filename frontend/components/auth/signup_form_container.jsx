import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions"

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "Register",
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal("login"))}>Login</button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(SessionForm);
