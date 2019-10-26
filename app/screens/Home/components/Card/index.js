import React, { memo } from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import R from 'ramda';

import styles, { colors } from '@styles';
import { Icon, Image, Text, GradientLinear } from '@components';

import s, {
  AVATAR_SIZE,
  VIDEO_PLACEHOLDER_SIZE,
  VIDEO_GRADIENT_SIZE,
} from './styles';

const icons = {
  dots: {
    type: 'Entypo',
    color: colors.inert,
    name: 'dots-three-horizontal',
    size: 23,
    style: styles.marginLeftM,
  },
  share: {
    type: 'Entypo',
    name: 'share',
    color: colors.inert,
    size: 22,
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
  play: {
    type: 'FontAwesome5',
    name: 'play',
    color: colors.white,
    size: 15,
    style: s.play,
  },
};

function Card({
  avatar,
  fullName,
  date,
  countComments,
  countLikes,
  videoPreview,
  images,
  text,
  hashtag,
}) {
  const isImages = !R.isEmpty(images);
  const isVideo = !!videoPreview && !isImages;

  return (
    <View style={[s.container, styles.shadowCard]}>
      <View style={s.headerContainer}>
        <Image
          containerStyle={s.avatar}
          placeholderSize={AVATAR_SIZE * 0.8}
          uri={avatar}
        />
        <View style={styles.fillAll}>
          <Text type="title" text={fullName} />
          <Text type="subTitle" color={colors.inert} text={date} />
        </View>
        <Icon {...icons.dots} />
      </View>
      {(!!text || !!hashtag) && (
        <View style={s.textContainer}>
          {!!text && <Text text={text} style={styles.marginRightS} />}
          <Text color={colors.inertDark} text={hashtag} />
        </View>
      )}
      <View style={s.contentContainer}>
        {isVideo && (
          <View style={s.videoPreviewContainer}>
            <Image
              resizeMode="cover"
              containerStyle={s.videoPreview}
              placeholderSize={0}
              uri={videoPreview}
            />
            <View style={s.containerButtonGradient}>
              <View style={s.containerButtonGradientBackground} />
              <GradientLinear
                containerStyle={s.containerGradient}
                style={s.contentGradient}
                width={VIDEO_GRADIENT_SIZE}
                height={VIDEO_GRADIENT_SIZE}
                y1={0}
                y2={VIDEO_GRADIENT_SIZE}
                firstColor={colors.primaryGradientFirst}
                secondColor={colors.primaryGradientSecond}
              >
                <Icon {...icons.play} />
              </GradientLinear>
            </View>
          </View>
        )}
        {isImages &&
          images.map((item, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;

            return (
              <Image
                key={item}
                resizeMode="cover"
                containerStyle={[
                  s.imageContent,
                  isFirst && s.borderImageRight,
                  isSecond && s.borderImageLeft,
                ]}
                placeholderSize={VIDEO_PLACEHOLDER_SIZE}
                uri={item}
              />
            );
          })}
      </View>
      <View style={s.footerContainer}>
        <Icon {...icons.share} />
        <Text
          type="regularS"
          color={colors.inertDark}
          style={styles.marginRightS}
          text={countComments}
        />
        <Icon {...icons.comment} />
        <Text
          type="regularS"
          color={colors.inertDark}
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
