import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import InputView from '../components/InputView';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    // other constructor related code
    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  }

  handleOldPassword = password => {
    if (password) {
      this.setState({
        oldPassword: password,
      });
    }
  };

  handlePassword = password => {
    if (password) {
      this.setState({
        newPassword: password,
      });
    }
  };

  handleConfirmPassword = password => {
    if (password) {
      this.setState({
        confirmPassword: password,
      });
    }
  };

  _goToResetPasswordScreen = () => {
    this.props.navigation.navigate({
      routeName: 'ResetPassword',
      key: 'ForgotPassword_Key',
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.notice}>
          Vui lòng nhập thông tin đăng nhập. Chúng tôi sẽ gửi một mã OTP cho bạn
        </Text>
        <InputView
          ref={passwordView => {
            this.passwordView = passwordView;
          }}
          callback={this.handleEmail}
          label={'Tên Đăng nhập'}
          isUserName={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this._goToResetPasswordScreen}>
          <Text style={styles.buttonText}>GỬI YÊU CẦU</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ffb900',
    width: Dimensions.get('window').width - 30,
    marginTop: 30,
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  notice: {
    textAlign: 'center',
    color: 'grey',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default ForgotPassword;
