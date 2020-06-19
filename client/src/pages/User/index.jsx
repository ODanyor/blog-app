import React, { useEffect } from "react";
import { UserPage, SwitchAndSearch } from "./styles";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

// Components
import NavbarLeft from "./NavbarLeft";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCredentials } from "store/actions/userActions";

const index = ({ getCredentials }) => {
  useEffect(() => {
    getCredentials();
  }, []);

  return (
    <Router>
      <UserPage>
        <NavbarLeft />
        <SwitchAndSearch>
          <Routes />
        </SwitchAndSearch>
      </UserPage>
    </Router>
  );
};

index.propTypes = {
  getCredentials: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getCredentials: () => dispatch(getCredentials()),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
