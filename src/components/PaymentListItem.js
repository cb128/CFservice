import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon, Divider} from 'react-native-elements';

export default class PaymentListItem extends React.Component {
  onClickItem = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    let iconName = this.props.openSubView === false ? 'plus' : 'minus';
    if (this.props.openSubView) {
      return (
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.headerTitle}>FUBONLIFE</Text>
            <Text style={styles.headerSubTitle}>SỐ HỢP ĐỒNG: 123456</Text>
            <Icon
              name={iconName}
              type="antdesign"
              underlayColor="#e6e8ee"
              containerStyle={styles.toggleIcon}
              onPress={this.onClickItem}
            />
            <Divider />
          </View>

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
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.headerTitle}>FUBONLIFE</Text>
            <Text style={styles.headerSubTitle}>SỐ HỢP ĐỒNG: 123456</Text>
            <Icon
              name={iconName}
              type="antdesign"
              underlayColor="#e6e8ee"
              containerStyle={styles.toggleIcon}
              onPress={this.onClickItem}
            />
            <Divider />
          </View>
        </View>
      );
    }
  }
}

PaymentListItem.propTypes = {
  project: PropTypes.object.isRequired,
  openSubView: PropTypes.object.isRequired,
  index: PropTypes.object.isRequired,
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
  headerView: {},
  toggleIcon: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: Dimensions.get('window').width - 50,
    width: 20,
    height: 20,
  },
});
