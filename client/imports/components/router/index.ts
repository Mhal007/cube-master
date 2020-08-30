import { Meteor } from 'meteor/meteor';

import { composer } from '../../lib/composer';
import RouterComponent from './router';

type Props = {
  userId: string;
};

const compose = (props: Props, onData: Function) => {
  onData(null, { userId: Meteor.userId() });
};

export default composer(compose)(RouterComponent);
