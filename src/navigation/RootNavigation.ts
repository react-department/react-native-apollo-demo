import { createNavigationContainerRef } from '@react-navigation/native';

import type { TRootStackParamList } from './types/TRootStackParamList';

const navigationRef = createNavigationContainerRef<TRootStackParamList>();

export default navigationRef;
