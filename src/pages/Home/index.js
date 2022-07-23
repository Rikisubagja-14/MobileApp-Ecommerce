import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeProfile from '../../components/molecules/HomeProfile';
import TabHeader from '../../components/molecules/TabsHeader';
import {Button, PopularProduct} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {S1, S2} from '../../assets';
import {useState} from 'react';
import {useEffect} from 'react';

const Home = () => {
  const [datafack, setdatafac] = useState([]);
  const getData = () => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setdatafac(json.data.data);
      });
  };

  useEffect(() => {
    getData();
  });
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <HomeProfile />
        <Text style={styles.desc}>Shop with a wide selection of shoes</Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.tabsver}>
              <TabHeader title="All Shoes" />
              <TabHeader title="Running" />
              <TabHeader title="Training" />
              <TabHeader title="Basketball" />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.nameproduct}>Popular Products</Text>
        <View style={styles.containerprodact}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.product}>
              {/* <PopularProduct
                source={S1}
                title="Hiking"
                model="COURT VISION 2.0"
                price="$58,67"
              />
              <PopularProduct
                source={S2}
                title="Hiking"
                model="TERREX URBAN LOW"
                price="$143,98"
              /> */}
              <PopularProduct
                source={S1}
                title="Hiking"
                model="COURT VISION 2.0"
                price="$58,67"
              />
              <PopularProduct
                source={S1}
                title="Hiking"
                model="COURT VISION 2.0"
                price="$58,67"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flex: 1,
  },
  desc: {
    fontSize: 30,
    color: '#06283D',
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  nameproduct: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  tabsver: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    padding: 10,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginRight: 10,
    // padding: 10,
  },
  containerprodact: {},
});
