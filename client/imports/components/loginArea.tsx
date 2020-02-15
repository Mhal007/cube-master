// @ts-ignore
import Blaze from 'meteor/gadicc:blaze-react-component';
import './loginButtons.html';
import React, { FunctionComponent } from 'react';

type Props = {};

const LoginArea: FunctionComponent<Props> = () => {
  return (
    <div className="login-area">
      <Blaze template="Accounts" />
    </div>
  );
};

export default LoginArea;
