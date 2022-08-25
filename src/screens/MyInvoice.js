import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const MyInvoice = () => {
    const navigation=useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 10,

          }}>
          <Text style={{color: '#c79248', fontSize: 20}}>
            Exclusive Gold Ring
          </Text>
        </View>

        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <View style={{backgroundColor: 'white'}}>
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                TEXT INVOICE
              </Text>
            </View>

            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: 'darkgrey',
              }}></View>

            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>Raging Gold</Text>
              <View style={{width: '90%', alignItems: 'center'}}>
                <Text style={{}}>
                  A-11 sradar mall, near narnarayan park nava naroda{' '}
                </Text>
                <Text style={{}}> road Ahmedabad 382350 </Text>
              </View>
            </View>

            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: 'darkgrey',
                marginVertical: 10,
              }}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <View style={{alignItems: 'flex-start'}}>
                <Text style={{fontSize: 17, color: 'black'}}>Incoice No.</Text>
                <Text style={{fontSize: 17, color: 'black'}}>
                  Payment Methord
                </Text>
                <Text style={{fontSize: 17, color: 'black'}}>Order Date</Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 17, color: 'black'}}>VP - 1256</Text>

                <Text style={{fontSize: 17, color: 'black'}}>Paytm</Text>
                <Text style={{fontSize: 17, color: 'black'}}>25 may 2020</Text>
              </View>
            </View>

            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: 'darkgrey',
                marginVertical: 10,
              }}></View>

            <View style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 20, color: 'black'}}>
                Billing Address
              </Text>
              <Text>
                A-11 sradar mall, near narnarayan park nava naroda road
                Ahmedabad 382350
              </Text>
            </View>

            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: 'darkgrey',
                marginVertical: 10,
              }}></View>

            <View style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 20, color: 'black'}}>
                Shipping Address
              </Text>
              <Text>
                A-11 sradar mall, near narnarayan park nava naroda road
                Ahmedabad 382350
              </Text>
            </View>

            <View
              style={{
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: 'darkgrey',
                marginVertical: 10,
              }}></View>

            <View style={{marginHorizontal: 10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 17, color: 'black'}}>Item Detail</Text>
                <Text style={{fontSize: 17, color: 'black'}}>Qty</Text>
                <Text style={{fontSize: 17, color: 'black'}}>Item Detail</Text>
              </View>
              <View
                style={{
                  borderStyle: 'solid',
                  borderWidth: 0.5,
                  borderColor: 'darkgrey',
                  marginVertical: 5,
                }}></View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, color: 'grey'}}>Gold Ring</Text>
                <Text style={{fontSize: 15, color: 'grey'}}>1</Text>
                <Text style={{fontSize: 15, color: 'grey'}}>14000.00</Text>
              </View>
              <View
                style={{
                  borderStyle: 'solid',
                  borderWidth: 0.5,
                  borderColor: 'darkgrey',
                  marginVertical: 5,
                }}></View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 15, color: 'grey'}}>Gold Ring</Text>
                <Text style={{fontSize: 15, color: 'grey'}}>1</Text>
                <Text style={{fontSize: 15, color: 'grey'}}>14000.00</Text>
              </View>
              <View
                style={{
                  borderStyle: 'solid',
                  borderWidth: 0.5,
                  borderColor: 'darkgrey',
                  marginVertical: 5,
                }}></View>

              <View
                style={{
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginHorizontal: 10,
                }}>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 17, color: 'black'}}>Item Total</Text>
                  <Text style={{fontSize: 17, color: 'black'}}>CGST(1.5%)</Text>
                  <Text style={{fontSize: 17, color: 'black'}}>SGST(1.5%)</Text>
                  <Text style={{fontSize: 17, color: 'black'}}>Total</Text>
                  <Text style={{fontSize: 17, color: 'black'}}>Discount</Text>

                  <Text
                    style={{
                      fontSize: 17,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    Grand Total
                  </Text>
                </View>

                <View style={{alignItems: 'flex-end', marginLeft: 30}}>
                  <Text style={{fontSize: 17, color: 'black'}}>29000.00</Text>
                  <Text style={{fontSize: 17, color: 'black'}}>435.00</Text>
                  <Text style={{fontSize: 17, color: 'black'}}>435.00</Text>
                  <Text style={{fontSize: 17, color: 'black'}}>29870.00</Text>
                  <Text style={{fontSize: 17, color: 'black'}}>1000.00</Text>
                  <Text
                    style={{
                      fontSize: 17,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    28870.00
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  borderColor: 'darkgrey',
                  marginVertical: 5,
                }}></View>

                <View style={{justifyContent:"space-between",flexDirection:"row",marginBottom:10}}>
                    <Text style={{fontSize:13,color:"black"}}>Company GST :ADFWEFEEEF</Text>
                    <Text style={{fontSize:13,color:"black"}}>*Trems & Condition Apply</Text>
                </View>
            </View>
          </View>
        </View>
        <Button
              onPress={() => {
                
              }}
              contentStyle={{height: 50}}
              labelStyle={{fontSize: 15}}
              style={{
                borderRadius: 50,
                marginLeft: 'auto',
                width: '48%',
                justifyContent: 'center',
                margin:3,
                marginRight:"auto",
                marginLeft:'auto'
              }}
              buttonColor="#c79248"
              textColor="white">
              SHARE INVOICE
            </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyInvoice;
