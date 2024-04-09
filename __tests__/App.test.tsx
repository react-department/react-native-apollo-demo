/**
 * @format
 */

import 'react-native';

import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// eslint-disable-next-line import/extensions
import App from '../src/App';

it('renders correctly', () => {
  renderer.create(<App />);
});
