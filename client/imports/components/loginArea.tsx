import React, { FC } from 'react';
// @ts-ignore
import { LoginBox } from 'meteor/universe:accounts-ui';

type Props = {};

const LoginArea: FC<Readonly<Props>> = () => {
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
