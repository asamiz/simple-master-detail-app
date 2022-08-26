import Toast from 'react-native-toast-message';

type Arguments = {
  type: 'success' | 'error' | 'info';
  message: string;
  position?: 'bottom' | 'top';
};

export const showToast = ({
  type,
  message,
  position = 'bottom',
}: Arguments) => {
  Toast.show({
    position,
    text1: message,
    type: type,
    visibilityTime: 6000,
  });
};
