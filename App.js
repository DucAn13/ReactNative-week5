import { Text, View, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import * as React from 'react';

function Screen01({route,navigation}){
  let [currentPhone,changeCurrentPhone]=useState({
      name:'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
      color:'xanh dương',
      price:'1.790.000 đ',
      image:require('./assets/vs_blue.png')
    })
  React.useEffect(() => {
    if (route.params?.selectPhone) {
      changeCurrentPhone(route.params.selectPhone)
    }
  }, [route.params?.selectPhone]);

  return(
    <View 
      style={{
        width:360,
        height:640,
        alignItems:'center',
        borderWidth:1,
        padding:10
      }}
    >
      <Image 
        source={currentPhone.image}
        style={{
          width:301,
          height:361,
        }}
      />
      <Text
        style={{
          fontSize:15,
          fontWeight:400,
          lineHeight:17.58,
          marginTop:10
        }}
      >
        {currentPhone.name}
      </Text>
      <View
        style={{
          flexDirection:'row',
          justifyContent:'start',
          alignItems:'center',
          width:301
        }}
      >
        <View
          style={{
            flexDirection:'row',
            marginTop:10
          }}
        >
          <EvilIcons name="star" size={24} color="black" />
          <EvilIcons name="star" size={24} color="black" />
          <EvilIcons name="star" size={24} color="black" />
          <EvilIcons name="star" size={24} color="black" />
          <EvilIcons name="star" size={24} color="black" />
        </View>
        <Text
          style={{
            fontSize:15,
            fontWeight:400,
            lineHeight:17.58,
            marginStart:25
        }}
        >
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View
        style={{
          flexDirection:'row',
          justifyContent:'start',
          alignItems:'center',
          width:301,
          marginTop:10
        }}
      >
        <Text
          style={{
            fontSize:18,
            fontWeight:700,
            lineHeight:21.9
        }}
        >
          {currentPhone.price}
        </Text>
        <View
          style={{
            position:'relative',
            justifyContent:'center',
            alignItems:'center',
            marginStart:50
          }}
        >
          <Text
            style={{
              fontSize:15,
              fontWeight:700,
              lineHeight:17.58,
              color:'gray'
          }}
          >
            {currentPhone.price}
          </Text>
          <View style={{borderWidth:1,height:1,width:90,position:'absolute',borderColor:'gray'}}/>
        </View>
      </View>
      <View
        style={{
          marginTop:10,
          width:301,
          flexDirection:'row',
          alignItems:'center'
        }}
      >
        <Text
          style={{
            fontSize:12,
            lineHeight:14.6,
            fontWeight:700,
            color:'red'
          }}
        >
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <AntDesign name="questioncircleo" size={20} color="black" style={{marginStart:10}}/>
      </View>
      <Pressable
        style={{
          width:332,
          height:34,
          borderRadius:10,
          borderWidth:1,
          justifyContent:'center',
          alignItems:'center',
          position:'relative',
           marginTop:15
        }}
        onPress={()=>{
          navigation.navigate('ChooseColor');
        }}
      >
        <Text
          style={{
            fontSize:15,
            lineHeight:17.58,
            fontWeight:400
          }}
        >
          4 MÀU-CHỌN MÀU
        </Text>
        <Text
          style={{
            position:'absolute',
            right:15,
            fontSize:20
          }}
        >
          >
        </Text>
      </Pressable>
      <Pressable
        style={{
          width:326,
          height:44,
          backgroundColor:'red',
          borderRadius:10,
          justifyContent:'center',
          alignItems:'center',
          marginTop:35
        }}
      >
        <Text
          style={{
            color:'white',
            fontSize:25,
            fontWeight:700
          }}
        >
          CHỌN MUA
        </Text>
      </Pressable>
    </View>
  )
}

function Screen02({route,navigation}){
  let [phone,ChangePhone]=useState({
      name:'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
      color:'xanh dương',
      price:'1.790.000 đ',
      image:require('./assets/vs_blue.png')
    })

  return(
    <View
      style={{
        height:640,
        width:360,
        alignItems:'start',
        backgroundColor:'#C4C4C4'
      }}
    >
      <View
        style={{
          backgroundColor:'white',
          width:360,
          padding:10,
          flexDirection:'row'
        }}
      >
        <Image
          source={phone.image}
          style={{
            height:140,
            width:112
          }}
        />
        <View
          style={{
            marginStart:10
          }}
        >
          <Text
            style={{
              fontSize:15,
              lineHeight:17.58,
              fontWeight:400,
              width:200
            }}
          >
            {phone.name}
          </Text>
          <Text
            style={{
              fontSize:15,
              lineHeight:17.58,
              fontWeight:400,
              width:200,
              marginTop:10
            }}
          >
            Màu: <span style={{fontWeight:700}}>{phone.color}</span>
          </Text>
          <Text
            style={{
              fontSize:15,
              lineHeight:17.58,
              fontWeight:400,
              width:200,
              marginTop:10
            }}
          >
            Cung cấp bởi: <span style={{fontWeight:700}}>Tiki Trading</span>
          </Text>
          <Text
            style={{
              fontSize:18,
              lineHeight:21.09,
              fontWeight:700,
              marginTop:10
            }}
          >
            {phone.price}
          </Text>
        </View>
      </View>
      <View
        style={{
          padding:10,
          flex:1,
          width:360,
          alignItems:'center'
        }}
      >
        <Text
          style={{
            fontSize:18,
            lineHeight:21.09,
            width:340,
            textAlign:'start'
          }}
        >
          Chọn một màu bên dưới:
        </Text>
        <View
          style={{
            alignItems:'center',
            paddingTop:20
          }}
        >
          <Pressable 
            onPress={()=>{
              ChangePhone({
                name:'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
                color:'bạc',
                price:'1.790.000 đ',
                image:require('./assets/vs_silver.png')
              })
            }}
            style={{   
              width:85,
              height:80,
              backgroundColor:'#C5F1FB',
              marginTop:10
            }}
          >
          </Pressable>
          <Pressable 
            onPress={()=>{
              ChangePhone({
                name:'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
                color:'đỏ',
                price:'1.790.000 đ',
                image:require('./assets/vs_red.png')
              })
            }}
            style={{   
              width:85,
              height:80,
              backgroundColor:'red',
              marginTop:10
            }}
          >
          </Pressable>
          <Pressable 
            onPress={()=>{
              ChangePhone({
                name:'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
                color:'đen',
                price:'1.790.000 đ',
                image:require('./assets/vs_black.png')
              })
            }}
            style={{   
              width:85,
              height:80,
              backgroundColor:'black',
              marginTop:10
            }}
          >
          </Pressable>
          <Pressable 
            onPress={()=>{
              ChangePhone({
                name:'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
                color:'xanh dương',
                price:'1.790.000 đ',
                image:require('./assets/vs_blue.png')
              })
            }}
            style={{   
              width:85,
              height:80,
              backgroundColor:'blue',
              marginTop:10
            }}
          >
          </Pressable>
        </View>
        <Pressable
          onPress={()=>{
            navigation.navigate({
              name:'Home',
              params: {selectPhone: phone},
              merge: true,
            })
          }}
          style={{
            marginTop:20,
            width:326,
            height:44,
            borderRadius:10,
            borderColor:'#CA1536',
            borderWidth:1,
            backgroundColor:'blue',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <Text
            style={{
              color:'white',
              fontSize:20,
              fontWeight:500,
            }}
          >
            XONG
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen01} />
        <Stack.Screen name="ChooseColor" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

