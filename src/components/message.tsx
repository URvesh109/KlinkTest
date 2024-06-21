import * as React from 'react';
import {ViewStyle} from 'react-native';
import {Text, Box, palette} from '../theme';
import {useRecoilState} from 'recoil';
import {messageState} from '../atoms';

const messageViewStyle: ViewStyle = {
  position: 'absolute',
  width: '100%',
  height: '110%',
  zIndex: 100,
};

const messageBar: ViewStyle = {
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
};

const messageView: ViewStyle = {
  flexShrink: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  backgroundColor: palette.lightBlack,
  padding: 20,
  borderRadius: 10,
};

export const Message = ({children}: {children: any}) => {
  const [message, setMessage] = useRecoilState(messageState);
  const {visible, type, info} = message;

  const hideMessage = () => {
    setMessage({...message, visible: false});
  };

  return (
    <>
      {visible && (
        <Box style={[messageViewStyle]} backgroundColor="loaderIndicatorColor">
          <Box flex={1} justifyContent="center" alignItems="center">
            <Box style={messageBar}>
              <Box backgroundColor="lightGrey" style={[messageView]}>
                <Text color="lightWhite" variant="coinTitle">
                  {type === 'success' ? 'Success' : 'Error'}
                </Text>
                <Text
                  textAlign="center"
                  variant="body"
                  paddingTop="m"
                  color="lightWhite">
                  {info}
                </Text>
                <Text
                  color="lightWhite"
                  paddingTop="l"
                  textDecorationLine="underline"
                  onPress={hideMessage}>
                  Close
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {children}
    </>
  );
};
