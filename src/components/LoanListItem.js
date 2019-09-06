import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';

export default class LoanListItem extends React.Component {
  onClickItem = () => {
    this.props.onClick(this.props.project);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>VIETCREDIT</Text>
        <Text style={styles.headerSubTitle}>APPID: APPL00158388</Text>
        <Divider />
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Sản phẩm vay:</Text>
          <Text style={styles.item}>Vay khách hàng có hưởng lương</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Thời hạn:</Text>
          <Text style={styles.item}>15/07/2020</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Lãi suất:</Text>
          <Text style={styles.item}>40%</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Số tiền đề nghị:</Text>
          <Text style={styles.item}>100.000.000vnđ</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Số tiền được duyệt:</Text>
          <Text style={styles.item}>70.000.000vnđ</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Số tiền thanh toán hàng tháng:</Text>
          <Text style={styles.item}>5.600.000vnđ</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text tyle={styles.item}>Ngày lên hồ sơ:</Text>
          <Text style={styles.item}>01/07/2019</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Trạng thái hồ sơ:</Text>
          <Text style={styles.item}>Đã được duyệt</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Trạng thái hồ sơ con:</Text>
          <Text style={styles.item}>Đã được duyệt</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Nhân viên kinh doanh:</Text>
          <Text style={styles.item}>Đỗ Văn Tuyên</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Ngày cập nhật:</Text>
          <Text style={styles.item}>27/07/2019</Text>
        </View>
      </View>
    );
  }
}

LoanListItem.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e8ee',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 3,
  },
  headerTitle: {
    marginLeft: 10,
    marginVertical: 10,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'red',
  },
  headerSubTitle: {
    marginLeft: 10,
    marginVertical: 10,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  itemContainer: {
    marginLeft: 10,
    marginVertical: 5,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
  },
});
