import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    backgroundColor: 'rgb(230,37,101)',
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#fff',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  bodyBody: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 22,
    paddingBottom: 22,
  },
  footerBody: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 5,
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
