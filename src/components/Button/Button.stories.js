import React from 'react';

import { Button } from '../..';



export default {
  title: 'Components/Button',
  component: Button,
};

export const defaultButton = () => (
  <>
    <Button>
      Call to action
    </Button>
  </>
);

export const onClick = () => (
  <>
    <Button onClick={function(){alert("You clicked!")}}>
      Click me! I dare you.
    </Button>
  </>
);
