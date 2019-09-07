import React from 'react';
import {
  ActivityIndicator,
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import PaymentListItem from '../components/PaymentListItem';
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

class InsurancePayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: dataTemp,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      currentOpenedItem: 0,
    };
  }

  componentDidMount() {
    this.getInsuranceAgreements();
  }

  getInsuranceAgreements = () => {
    this.setState({loading: false});
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item, index}) => {
    let openSub = index === this.state.currentOpenedItem ? true : false;
    return (
      <PaymentListItem
        key={item.id}
        project={item}
        index={index}
        openSubView={openSub}
        onClick={this._toggleItem}
      />
    );
  };

  _toggleItem = index => {
    if (index === this.state.currentOpenedItem) {
      this.setState({
        currentOpenedItem: -1,
      });
    } else {
      this.setState({
        currentOpenedItem: index,
      });
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
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}> NHÀ CUNG CẤP </Text>
        </View>
        <FlatList
          keyExtractor={this.keyExtractor}
          extraData={this.state}
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

export default InsurancePayment;
