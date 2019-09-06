import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';

export default class RepaymentListItem extends React.Component {
  onClickItem = () => {
    this.props.onClick(this.props.project);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>VIETCREDIT</Text>
        <Text style={styles.headerSubTitle}>APPID:APPL00158388</Text>
        <Divider />
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Sản phẩm vay:</Text>
          <Text style={styles.item}>Vay khách hàng có hưởng lương</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Ngày trả nợ hàng tháng:</Text>
          <Text style={styles.item}>Ngày 05 mỗi tháng</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Ngày trả nợ thực tế:</Text>
          <Text style={styles.item}>Ngày 07 mỗi tháng</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Khoản vay:</Text>
          <Text style={styles.item}>70.000.000vnđ</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Lãi suất:</Text>
          <Text style={styles.item}>40%</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Tiền lãi:</Text>
          <Text style={styles.item}>40%</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Tiền gốc:</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text tyle={styles.item}>Tổng số tiền thanh toán:</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Số tiền thanh toán:</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>- Thanh toán kỳ 9</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}> Tình trạng</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>- Thanh toán kỳ 8</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}> Tình trạng</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Số tiền còn lại:</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Số tiền còn lại:</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Số tiền thanh toán còn lại:</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Cảnh báo(tình trạng nợ):</Text>
          <Text style={styles.item}>...</Text>
        </View>
      </View>
    );
  }
}

RepaymentListItem.propTypes = {
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
