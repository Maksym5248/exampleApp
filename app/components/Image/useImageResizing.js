import { useMemo } from 'react';
import { image } from '@utils/helpers';

const sizes = {
  small: {
    height: 10,
    width: 10,
  },
  medium: {
    height: 100,
    width: 100,
  },
  large: {
    height: 400,
    width: 400,
  },
};
  
const useImageResizing = ({
  uri, size, resize, isError,
}) => {
  const data = useMemo(() => image.parseS3Url(uri), [uri]);

  const minUri = useMemo(() => (
    data.isBucket
      ? image.fitIn({ ...data, ...sizes.small })
      : undefined),
  [data]);

  const maxUri = useMemo(() => (
    data.isBucket && size !== 'native'
      ? image.fitIn({
        ...data,
        height: sizes[size].height * resize[0],
        width: sizes[size].width * resize[1],
      })
      : uri
  ), [data, resize, size, uri]);

  return {
    maxUri: isError ? uri : maxUri,
    minUri,
  };
};

export default useImageResizing;
