import React from 'react';
import {Box} from '../theme';

type PointerComponentProps = {
  backgroundColor: string;
};

export const PointerComponent: React.FC<PointerComponentProps> = props => {
  const {backgroundColor} = props;
  return (
    <Box
      borderWidth={2}
      borderColor="white"
      borderRadius={6}
      height={12}
      width={12}>
      <Box flex={1} style={{backgroundColor}} borderRadius={6} />
    </Box>
  );
};
