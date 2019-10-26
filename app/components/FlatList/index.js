import React from 'react';
import { FlatList as FlatListRN } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import T from 'prop-types';

import styles from '@styles';

import Text from '../Text';
import Spinner from '../Spinner';
import s from './styles';

const defKeyExtractor = ({ id }) => id;

function FlatList({
  isLoading,
  data,
  keyExtractor = defKeyExtractor,
  onRefresh,
  isLoadingRefresh,
  listEmptyText = 'No data',
  ...props
}) {
  return (
    <FlatListRN
      data={data}
      keyExtractor={keyExtractor}
      refreshing={isLoading}
      ListFooterComponent={isLoading && <Spinner style={s.spinner} />}
      ListEmptyComponent={
        !isLoadingRefresh && !isLoading ? (
          <Text text={listEmptyText} />
        ) : null
      }
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      onEndReachedThreshold={0.3}
      initialNumToRender={4}
      maxToRenderPerBatch={6}
      style={styles.fillAll}
      refreshControl={
        /* eslint-disable react/jsx-wrap-multilines */
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={isLoadingRefresh}
        />
        /* eslint-enable react/jsx-wrap-multilines */
      }
      {...props}
    />
  );
}

FlatList.propTypes = {
  isLoading: T.bool,
  data: T.array,
  keyExtractor: T.func,
  onRefresh: T.func,
  isLoadingRefresh: T.bool,
  listEmptyText: T.string,
};

export default React.memo(FlatList);
