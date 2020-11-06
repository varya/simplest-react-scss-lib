import React from 'react';

import { Button } from '../..';
import buttonGroupHelperStyles from '../../utils/ZeroHeightWrapper/ButtonGroup.scss';
import markdown from './Button.md';

import IconArrowLeftRegular from '../Icon/lib/IconArrowLeftRegular';
import IconArrowRightRegular from '../Icon/lib/IconArrowRightRegular';

export default {
  title: 'Components/Button',
  component: Button,

  parameters: {
    notes: { markdown },
  },
};

export const defaultButton = () => (
  <>
    <Button>
      Call to action
    </Button>
  </>
);

export const differentTypes = () => (
  <>
    <p>Primary</p>
    <Button color="primary">
      Primary
    </Button>

    <p>Linkblue</p>
    <Button color="linkblue">
      Linkblue
    </Button>

    <p>Light</p>
    <Button color="light">
      Light
    </Button>

    <p>Link</p>
    <Button color="link">
      Link
    </Button>
  </>
);

export const lightInverse = () => (
  <div style={{backgroundColor: '#404041', color: '#ffffff', padding: '10px'}}>
    <Button color="light-inverse">
      Light inverse
    </Button>
  </div>
);

export const specialButtons = () => (
  <>
    <p>Success</p>
    <Button color="success">
      Success
    </Button>
    
    <p>Warning</p>
    <Button color="warning">
      Warning
    </Button>
    
    <p>Danger</p>
    <Button color="danger">
      Danger
    </Button>
  </>
);

export const differentSizes = () => (
  <>
    <p>Small</p>
    <Button size="s">
      Small
    </Button>

    <p>Medium</p>
    <Button size="m">
      Medium
    </Button>

    <p>Large</p>
    <Button size="l">
      Large
    </Button>

    <p>Small block</p>
    <Button size="s" block={true}>
      Small block
    </Button>

    <p>Medium block</p>
    <Button size="m" block={true}>
      Medium block
    </Button>

    <p>Large block</p>
    <Button size="l" block={true}>
      Large block
    </Button>
  </>
);

export const disabledButtons = () => (
  <>
    <p>Primary</p>
    <Button color="primary" disabled>
      Primary
    </Button>

    <p>Linkblue</p>
    <Button color="linkblue" disabled>
      Linkblue
    </Button>

    <p>Light</p>
    <Button color="light" disabled>
      Light
    </Button>

    <p>Link</p>
    <Button color="link" disabled>
      Link
    </Button>

    <p>Loading button</p>
    <Button loading={true} disabled>
      Loading button
    </Button>
  </>
);

export const loadingButtons = () => (
  <>
    <p>Primary</p>
    <Button color="primary" loading={true}>
      Primary
    </Button>

    <p>Linkblue</p>
    <Button color="linkblue" loading={true}>
      Linkblue
    </Button>

    <p>Light</p>
    <Button color="light" loading={true}>
      Light
    </Button>

    <p>Link</p>
    <Button color="link" loading={true}>
      Link
    </Button>
  </>
);

export const withIcon = () => (
  <>
    <p>Small</p>
    <Button size="s">
      <IconArrowLeftRegular/> Small
    </Button>
    <Button size="s">
      Small <IconArrowRightRegular/>
    </Button>

    <p>Medium</p>
    <Button size="m">
      <IconArrowLeftRegular/> Medium
    </Button>
    <Button size="m">
      Medium <IconArrowRightRegular/>
    </Button>

    <p>Large</p>
    <Button size="l">
      <IconArrowLeftRegular/> Large
    </Button>
    <Button size="l">
      Large <IconArrowRightRegular/>
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
