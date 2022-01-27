import {Dimensions, StyleSheet} from 'react-native';
const windowheight = Dimensions.get('window').height;
const screenheight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 50,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  card: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    width: '100%',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fafafaa0',
  },
  cardContainer: {
    width: '100%',
  },
  login: {
    marginTop: 10,
    paddingTop: 10,
    width: '50%',
    alignSelf: 'flex-end',
    paddingBottom: 10,
    height: 50,
    backgroundColor: '#0084FF',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#0084FF',
  },

  submitText: {
    color: 'white',
    textAlign: 'center',
  },
  avatar: {
    width: 180,
    height: 180,
    borderColor: 'white',
    alignSelf: 'center',
    resizeMode: 'cover',
    flex: 1,
  },
  PickerContainer: {
    color: 'black',
    padding: 10,
    width: '100%',
  },
  Inputcontainer: {
    flex: 1,
    padding: 20,
    marginBottom: 50,
  },
  MainContainer: {
    height: windowheight,
    width: '100%',
    padding: 20,
  },
  imagecontainer: {
    flex: 1,
    padding: 30,
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainimagecontainer: {
    padding: 10,
    marginBottom: 15,
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextHeader: {
    width: '100%',
    color: 'black',
    flexWrap: 'wrap',
    textAlign: 'center',
    padding: 10,
    fontSize: 24,
    marginBottom: 15,
    fontFamily: 'SFUIDisplay-Bold',
  },
  TextSubtitle: {
    width: '100%',
    color: 'black',
    textAlign: 'center',
    flexWrap: 'nowrap',
    padding: 10,
    fontSize: 16,
    marginBottom: 30,
    fontFamily: 'SFUIDisplay-Regular',
  },
  TextStatus: {
    width: '100%',
    color: 'red',
    textAlign: 'center',
    flexWrap: 'nowrap',
    padding: 10,
    fontSize: 16,
    marginBottom: 30,
    fontFamily: 'SFUIDisplay-Bold',
  },
  TextAddressSubtitle: {
    width: '100%',
    color: 'black',
    textAlign: 'center',
    flexWrap: 'nowrap',
    padding: 10,
    fontSize: 16,
    marginBottom: 30,
    fontFamily: 'SFUIDisplay-Bold',
  },
  TextImageSubtitle: {
    width: '100%',
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Bold',
  },
  updateButton: {
    fontFamily: 'SFUIDisplay-Regular',
    alignSelf: 'center',
    position: 'absolute',
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#0084FF',
    bottom: 200,
  },
  cancelButton: {
    fontFamily: 'SFUIDisplay-Regular',
    alignSelf: 'center',
    position: 'absolute',
    width: '70%',
    color: '#0084FF',
    borderRadius: 10,
    bottom: 130,
  },
});

export default styles;