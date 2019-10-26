import React, { memo } from 'react';
import { View } from 'react-native';
import T from 'prop-types';
// import R from 'ramda';

import styles, { colors } from '@styles';
import { Icon, Image, Text } from '@components';

import s, { AVATAR_SIZE } from './styles';

const icons = {
  dots: {
    type: 'Entypo',
    color: colors.inert,
    name: 'dots-three-horizontal',
    size: 25,
    style: styles.marginLeftM,
  },
  share: {
    type: 'Entypo',
    name: 'share',
    color: colors.inert,
    size: 23,
    style: styles.fillAll,
  },
  comment: {
    type: 'MaterialCommunityIcons',
    name: 'chat',
    color: colors.inert,
    size: 23,
    style: styles.marginRightL,
  },
  like: {
    type: 'Foundation',
    name: 'heart',
    size: 23,
  },
};

function Card({
  avatar,
  fullName,
  date,
  countComments,
  countLikes,
  // videoPreview,
  // images,
  // text,
  // hashtag,
}) {
  // const isImages = !R.isEmpty(images);

  return (
    <View style={[s.container, styles.shadowCard]}>
      <View style={s.headerContainer}>
        <Image
          containerStyle={s.image}
          placeholderSize={AVATAR_SIZE * 0.8}
          uri={avatar}
        />
        <View style={styles.fillAll}>
          <Text type="title" text={fullName} />
          <Text type="title" color={colors.inert} text={date} />
        </View>
        <Icon {...icons.dots} />
      </View>
      <View style={s.contentContainer}>
        <Text>{fullName}</Text>
      </View>
      <View style={s.footerContainer}>
        <Icon {...icons.share} />
        <Text
          color={colors.inert}
          style={styles.marginRightS}
          text={countComments}
        />
        <Icon {...icons.comment} />
        <Text
          color={colors.inert}
          style={styles.marginRightS}
          text={countLikes}
        />
        <Icon {...icons.like} />
      </View>
    </View>
  );
}

Card.propTypes = {
  avatar: T.string,
  fullName: T.string,
  date: T.string,
  countComments: T.string,
  countLikes: T.string,
  videoPreview: T.string,
  images: T.arrayOf(T.string),
  text: T.string,
  hashtag: T.string,
};

export default memo(Card);
