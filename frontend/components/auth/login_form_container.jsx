import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, resetSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "Sign In",
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button
      className="modal-change-form"
      onClick={() => {
        dispatch(openModal("signup"))
        dispatch(resetSessionErrors());
    }}
    >
      Register
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(SessionForm);
