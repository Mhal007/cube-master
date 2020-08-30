// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LoginBox } from 'meteor/mhal007:universe-accounts-ui';
import React from 'react';

const LoginArea = (): JSX.Element => {
  const renderUserInfo = () => {
    const user = Meteor.user();
    return user ? <div className="user-info">{user?.profile?.name}</div> : null;
  };

  return (
    <div className="login-area">
      {renderUserInfo()}
      <div className="accounts-box">
        <LoginBox className="login-box" />
      </div>
    </div>
  );
};

export default LoginArea;
