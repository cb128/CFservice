import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';

export default class PaymentListItem extends React.Component {
  onClickItem = () => {
    this.props.onClick(this.props.project);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>FUBONLIFE</Text>
        <Text style={styles.headerSubTitle}>SỐ HỢP ĐỒNG: 123456</Text>
        <Divider />
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Gói bảo hiểm</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Sản phẩm bảo hiểm</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Giá trị</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Ngày bán</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Ngày hiệu lực</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text tyle={styles.item}>Tổng số tiền thanh toán</Text>
          <Text style={styles.item}>...</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Số tiền thanh toán</Text>
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
          <Text style={styles.item}>Số kỳ còn lại của hợp đồng</Text>
          <Text style={styles.item}>...</Text>
        </View>
      </View>
    );
  }
}

PaymentListItem.propTypes = {
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
