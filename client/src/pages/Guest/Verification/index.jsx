import React from "react";
import { FormPage } from "pages/Guest/styles";
import { VerificationTitleContainer, VerificationTitle } from "./styles";

// Components
import { Timer, Form } from "shared/components";

// Static
import { verificationForm } from "static/forms";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "store/actions/userActions";

const index = ({ user, register }) => {
  const onSubmit = (data) => {
    register({
      credentials: user.pocket.credentials,
      email_verification: {
        ...data,
        secret_code_token: user.pocket.secret_code_token,
      },
    });
  };

  return (
    <FormPage>
      <VerificationTitleContainer>
        <VerificationTitle>Secret code expires after: </VerificationTitle>
        <Timer seconds={120} />
      </VerificationTitleContainer>
      <Form onSubmit={onSubmit} button="Verify">
        {verificationForm}
      </Form>
    </FormPage>
  );
};

index.propTypes = {
  // States
  user: PropTypes.object.isRequired,

  // Actions
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  register: (credentials) => dispatch(register(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
