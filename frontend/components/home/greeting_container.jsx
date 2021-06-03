import { connect } from "react-redux";

import Greeting from "./greeting";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

export default connect(mapStateToProps, null)(Greeting);
