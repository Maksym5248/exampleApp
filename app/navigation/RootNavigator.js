import React, { useEffect, useState } from 'react';
import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font'; // eslint-disable-line import/no-extraneous-dependencies

import { NavigationService } from '@services';
import { Spinner } from '@components';

import fonts from '../../assets/fonts';

import AppNavigator from './AppNavigator';

const RootNavigator = createAppContainer(AppNavigator);

function RootNavigatorContainer() {
  const [isLoadFonts, setLoadFonts] = useState(false);

  async function loadFonts() {
    Font.loadAsync(fonts);
    setLoadFonts(true);
  }

  useEffect(() => {
    loadFonts();
  });

  return isLoadFonts ? (
    <RootNavigator ref={(ref) => NavigationService.init(ref)} />
  ) : (
    <Spinner size="large" />
  );
}

export default RootNavigatorContainer;
