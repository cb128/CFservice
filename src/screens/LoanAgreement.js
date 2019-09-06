import React from 'react';
import {
  ActivityIndicator,
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import LoanListItem from '../components/LoanListItem';
import {Divider} from 'react-native-elements';

const dataTemp = [
  {
    soHopDong: '123456',
    goiBaoHiem: '',
    sanPhamBaoHiem: '',
    giaTri: '',
    nhanVienKinhDoanh: '',
    ngayBan: '',
    ngayHieuLuc: '',
    ngayHetHan: '',
    thoiGianConLai: '',
  },
];

class LoanAgreement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: dataTemp,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.getInsuranceAgreements();
  }

  getInsuranceAgreements = () => {
    this.setState({loading: false});
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <LoanListItem key={item.id} project={item} onClick={this._goToDetail} />
  );

  _goToDetail = () => {};

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="black"
          animating={this.state.loading}
          style={styles.activityIndicator}
        />
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}> NHÀ CUNG CẤP </Text>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={dataTemp}
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
  activityIndicator: {
    position: 'absolute',
    marginLeft: Dimensions.get('window').width / 2 - 10,
    marginTop: Dimensions.get('window').height / 2 - 10,
  },
  headerView: {
    height: 30,
    color: 'grey',
    justifyContent: 'flex-end',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default LoanAgreement;
