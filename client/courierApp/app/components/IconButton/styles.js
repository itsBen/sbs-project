import { StyleSheet } from 'react-native';

const defaultStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(230,37,101)',
    borderWidth: 1,
    borderColor: 'rgb(230,37,101)',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  icon: {
    color: '#fff',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 13,
  },
};

export default {
  default: StyleSheet.create({ ...defaultStyles }),
  white: StyleSheet.create({
    container: {
      ...defaultStyles.container,
      backgroundColor: 'white',
      borderColor: '#808080',
    },
    icon: {
      ...defaultStyles.icon,
      color: '#808080',
    },
    label: {
      ...defaultStyles.label,
      color: '#808080',
    },
  }),
};
