import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { useTranslate } from 'src/i18n/useTranslate';

export const SecondScreen: FC = () => {
  const { t } = useTranslate();
  return (
    <View>
      <Text>{t('second_title')}</Text>
    </View>
  );
};
