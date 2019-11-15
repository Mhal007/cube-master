import { Meteor } from 'meteor/meteor';

import { composer } from '../../lib/composer';
import RouterComponent from './router';

const compose = (props: any, onData: any): void => {
  onData(null, { userId: Meteor.userId() });
};

export default composer(compose)(RouterComponent);
