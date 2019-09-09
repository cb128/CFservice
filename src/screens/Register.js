import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Form from '../components/Form';

class Register extends React.Component {
  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signupView}>
          <Form type="Signup" />
        </View>

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Đã có tài khoản? </Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signupView: {
    marginTop: 50,
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    fontSize: 16,
  },
  signupButton: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Register;
