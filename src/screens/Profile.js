import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  FlatList,
  Linking,
  StyleSheet,
} from 'react-native';
import {Icon, Divider} from 'react-native-elements';
import placeHolderImage from '../assets/images/img_placeholder_user.png';
import AsyncStorage from '@react-native-community/async-storage';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    const {navigation} = this.props;
    this.state = {
      arrUserData: [],
    };
  }

  componentDidMount() {
    // Add action to header button.
    this.props.navigation.setParams({handleLogout: () => this.showAlert()});
    // Get local database
    let localData = this.getUserData();
    if (localData) {
      localData.then(data => {
        this.setState({
          arrUserData: [
            {name: data.hoTen, image: data.hinh, phone: '0351234567'},
            {title: 'Số CMND/CCCD:', value: '1720179808'},
            {title: 'Số điện thoại:', value: '097xxxx199'},
            {title: 'Giới tính:', value: 'Nữ'},
            {title: 'Ngày sinh:', value: '16/10/1985'},
            {title: 'Tỉnh:', value: 'Thanh Hoá'},
          ],
        });
      });
    }
  }

  // Navigation bar
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            name="logout"
            type="material-community"
            color="black"
            underlayColor="#ffb900"
            iconStyle={styles.logoutButton}
            onPress={() => navigation.state.params.handleLogout()}
          />
        </TouchableOpacity>
      ),
    };
  };

  // Private method
  showAlert = () => {
    Alert.alert(
      'Bạn có muốn thoát ứng dụng không?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            this.removeUserData();
            this.props.navigation.navigate('Auth');
          },
        },
      ],
      {cancelable: false},
    );
  };

  getUserData = async () => {
    let userData;
    try {
      const retrievedItem = await AsyncStorage.getItem('loginDetails');
      userData = JSON.parse(retrievedItem);
    } catch (exception) {
      console.log('Error');
    }

    return userData;
  };

  removeUserData = () => {
    try {
      AsyncStorage.removeItem('loginDetails');
    } catch (exception) {}
  };

  // Render method

  keyExtractor = (item, index) => index.toString();

  renderCamera = ({item}) => {
    if (this.state.isCustomerProfile) {
      return (
        <TouchableOpacity
          style={styles.cameraView}
          onPress={() => {
            Linking.openURL(`tel:${item.phone}`);
          }}>
          <Icon name="phone" type="entypo" size={20} />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  renderItem = ({item, index}) => {
    let tmpLayout;
    if (index === 0) {
      // Header layout
      tmpLayout = (
        <View style={styles.headerView}>
          <Image
            source={
              item.image && item.image.includes('http')
                ? {uri: item.image}
                : placeHolderImage
            }
            style={styles.imageView}
          />
          {this.renderCamera({item})}
          <Text style={styles.username}>{item.name}</Text>
        </View>
      );
    } else {
      // Information layout
      tmpLayout = (
        <View>
          <Text style={styles.headerLabel}>{item.title}</Text>
          <Text style={styles.subLabel}>{item.value}</Text>
          <Divider style={styles.separator} />
        </View>
      );
    }

    return <View>{tmpLayout}</View>;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.arrUserData}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    alignItems: 'center',
    backgroundColor: '#ffb900',
  },
  username: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageView: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  footerContainer: {
    padding: 20,
    height: 50,
    backgroundColor: '#ffb900',
    justifyContent: 'center',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerLabel: {
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subLabel: {
    marginLeft: 20,
    marginVertical: 5,
    color: 'gray',
  },
  separator: {
    marginLeft: 20,
  },
  cameraView: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 55,
    right: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
  },
  logoutButton: {marginRight: 15},
});

export default Profile;
