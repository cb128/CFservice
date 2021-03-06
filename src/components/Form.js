import React from 'react';
import {withNavigation} from 'react-navigation';
import {loginApp} from '../api/ApiHelpers';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import InputView from '../components/InputView';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  handleLogin = async () => {
    this.setState({loading: true});
    const {email, password} = this.state;
    let emailParam = email.toLowerCase().trim();
    let passwordParam = password.toLowerCase().trim();

    if (emailParam === '' && password === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else if (this.props.type !== 'Login') {
      // Case register
    } else {
      // Case login
      try {
        let response = await loginApp(emailParam, passwordParam);
        let responseData = await response.json();
        if (responseData) {
          let {PhongBan, ChucVu, DonVi} = responseData;

          let loginDetails = {
            email: email,
            password: password,
            nguoiDungID: responseData.NguoiDungID,
            maNguoiDung: responseData.MaNguoiDung,
            hoTen: responseData.HoTen,
            hinh: responseData.Hinh,
            tenPhongBan: PhongBan.TenPhongBan,
            tenChucVu: ChucVu.TenChucVu,
            line: responseData.Line,
            tenDonVi: DonVi.TenDonVi,
            ngayVaoLam: responseData.NgayVaoLam,
          };
          await AsyncStorage.setItem(
            'loginDetails',
            JSON.stringify(loginDetails),
          );
          // Navigate App stack
          this.setState({loading: false});
          this.props.navigation.navigate('App');
        } else {
          this.setState({loading: false});
          // eslint-disable-next-line no-alert
          alert('Tài khoản không hợp lệ!');
        }
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error);
        this.setState({loading: false});
      }
    }
  };

  handleEmail = email => {
    if (email) {
      this.setState({
        email: email,
      });
    }
  };

  handlePassword = password => {
    if (password) {
      this.setState({
        password: password,
      });
    }
  };

  _goToForgotPasswordScreen = () => {
    this.props.navigation.navigate({
      routeName: 'ForgotPassword',
      key: 'Login_Key',
    });
  };

  renderForgotPassword = () => {
    if (this.props.type === 'Login') {
      return (
        <TouchableOpacity
          style={styles.forgotPass}
          onPress={this._goToForgotPasswordScreen}>
          <Text>Quên mật khẩu?</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="black"
          animating={this.state.loading}
          style={styles.activityIndicator}
        />
        <InputView
          ref={passwordView => {
            this.passwordView = passwordView;
          }}
          callback={this.handleEmail}
          label={'Tên Đăng nhập'}
          isUserName={true}
        />

        <InputView
          ref={passwordView => {
            this.passwordView = passwordView;
          }}
          callback={this.handlePassword}
          label={'Mật khẩu'}
          isUserName={false}
        />

        {this.renderForgotPassword()}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this.handleLogin}>
            {this.props.type === 'Login' ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ffb900',
    width: Dimensions.get('window').width - 60,
    marginTop: 20,
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    marginLeft: Dimensions.get('window').width / 2 - 10,
    marginTop: Dimensions.get('window').height / 2 - 10,
  },
  forgotPass: {
    marginTop: 10,
    marginRight: 30,
    alignSelf: 'flex-end',
  },
});

export default withNavigation(Form);
