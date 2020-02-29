import React, { FC } from 'react';
import { Dimmer, Loader as LoaderSemantic } from 'semantic-ui-react';

const Loader: FC = () => (
  <Dimmer active page style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}>
    <LoaderSemantic size="large">Loading</LoaderSemantic>
  </Dimmer>
);

export default Loader;
