import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch'
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 22,
    paddingVertical: 10
  },
  footerBody: {
    flex: 1,
  },
  pricelabel: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  quantitySelector: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quantitySelector_value: {
    fontSize: 15,
    alignSelf: 'center',
  },
  metatable: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 2,
    marginBottom: 20,
  },
  metatableElement: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  metatableElementLabel: {
    color: '#333333',
    marginBottom: 3,
  },
  metatableElementValue: {
    color: '#4D4D4D',
  },
});
