import React, { useEffect } from "react";
import { UserPage, PageAndSearch, Page } from "./styles";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

// Modules
import NavbarLeft from "./NavbarLeft";
import SearchModule from "./SearchModule";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCredentials } from "store/actions/userActions";

const index = ({ user, getCredentials }) => {
  useEffect(() => {
    getCredentials();
  }, []);

  return (
    <Router>
      <UserPage>
        <NavbarLeft loader={user.credentials} user={user} />
        <PageAndSearch>
          <Page>
            <Routes />
          </Page>
          <SearchModule />
        </PageAndSearch>
      </UserPage>
    </Router>
  );
};

index.propTypes = {
  // States
  user: PropTypes.object.isRequired,

  // Actions
  getCredentials: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCredentials: () => dispatch(getCredentials()),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
