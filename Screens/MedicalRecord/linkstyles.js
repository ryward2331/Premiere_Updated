import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      width: 100 + '%',
      backgroundColor:"white",
      height: 10 + '%',
    },
    ImageContainer: {
      width: 100 + '%',
      height: 30 + '%',
    },
    TextContainer: {
      flex: 1,
      width: 100 + '%',
      height: 20 + '%',
    },
    ButtonContainer: {
      flex: 1,
      width: 80 + '%',
      height: 1 + '%',
      alignSelf: 'center',
      padding: 20,
    },
    InputContainer: {
      width: 80 + '%',
      height: 20 + '%',
      alignSelf: 'center',
      padding: 20,
    },
    Title: {
      textAlign: 'center',
      fontFamily: 'SFUIDisplay-Medium',
      fontSize: 18,
      width: 100 + '%',
      fontWeight: 'bold',
      padding:10,
    },
    Subtitle: {
      textAlign: 'left',
      fontFamily: 'SFUIDisplay-Light',
      fontSize: 18,
      width: 100 + '%',
    },
    ImageSize: {
      width: 30 + '%',
      height: 10 + '%',
      alignSelf: 'center',
      flex: 1,
    },
  });

  export default styles