import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import { login, resetSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { closeModal } from "../../actions/modal_actions";
import { fetchCart } from "../../actions/cart_action";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "Sign In",
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button
      className="modal-change-form"
      onClick={(e) => {
        e.preventDefault();
        dispatch(resetSessionErrors());
        dispatch(openModal("signup"));
      }}
    >
      Register
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  fetchCart: (userId) => dispatch(fetchCart(userId)),
});

export default withRouter(connect(mSTP, mDTP)(SessionForm));
