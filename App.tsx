import React from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import Upcoming from './components/Upcomming';


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView >
      <View style={{
          width: deviceWidth,
          height: deviceWidth * (450 / 360),
          margin: 'auto',
          marginTop: 10,
          flex: 1,
          justifyContent: 'center',  // Center vertically
          alignItems: 'center',      // Center horizontally
        }}>
          <Image 
            source={require('./src/poster/hanuman.png')} 
            resizeMode='cover' 
            style={{ width:'100%',height:'100%'}}  
          />
        </View>
        <View style={{
          width:deviceWidth*0.949,
          height:deviceWidth*(68/360),
          position:'absolute',
          top:deviceWidth*(327/360),
          left:deviceWidth*(10/360),
          alignContent:'center',
          alignItems:'center'
          
        }}>
          <Text
          style={{
            fontSize: deviceWidth * (38/360),
            fontFamily: 'Helvetica',
            fontWeight: '700',
            top:-10, 
            color: '#000000'
          }}
          >HANUMAN</Text>
          <Text
          style={{
            fontSize: deviceWidth * (14/360),
            lineHeight: deviceWidth * 0.0493,
            fontFamily: 'Helvetica',
            fontWeight: '400', // You might need a custom font for ultralight
            color: '#FFFFFF50',
            top:-10,
            
          }}
          >
             23 Aug 2024 · 02h 03m · 2D, IMAX · U/A  
          </Text>
        </View>
        <View style={{
          width:deviceWidth*0.95,
          height:deviceWidth*(62/360),
          position:'absolute',
          top:deviceWidth*(415/360),
          left:deviceWidth*(10/360),
          flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',gap:15
          
        }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',alignContent:'center',
              width:deviceWidth*(256/360),
              height:deviceWidth*(62/360),
              borderRadius:deviceWidth*(10/360),
              backgroundColor:'#B7B7B7',
           }}>
            <View style={{
              width: 'auto',
              height: deviceWidth * 0.028*2.9,
              borderRadius: deviceWidth*0.004*2.9,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              margin:'auto',
              bottom:0
          }}>
            <Image
              source={require('./src/play.png')}
              style={{ width: deviceWidth * (18/360), height: deviceWidth *(18/360), resizeMode: 'contain' }}
            />
            <Text style={{
              fontSize: deviceWidth * (18/360),
              marginLeft: 5,
              color: '#0000000'
            }}>Trailer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',alignContent:'center',
              width:deviceWidth*(62/360),
              height:deviceWidth*(62/360),
              borderRadius:deviceWidth*(10/360),
              backgroundColor:'#1D1D1D',
              justifyContent: 'center',
              }}>
                <Image
              source={require('./src/plus.png')}
              style={{ width: deviceWidth * (25/360), height: deviceWidth *(25/360), resizeMode: 'contain' }}
            />
          </TouchableOpacity>
        </View>
        <View>
        <ScrollView horizontal style={{width:deviceWidth,height:deviceHeight*(18/360),backgroundColor:'#1b00',marginTop:deviceWidth*(35/360)}}>
                        <Text style={{fontSize:deviceWidth*0.016*2.9,color:'#FFFFFF50',height:deviceWidth*0.03*2.9}} numberOfLines={1} >Drama, Thriller, Action, Comedy |Telugu, English, Hindi, Kannada</Text>
                        </ScrollView>
        </View>
        <View style={{
          width: deviceWidth * 0.95,
          height: deviceWidth * 0.232,
          margin: 'auto'
        }}>
          <Text style={{
            fontSize: deviceWidth * 0.0406,
            lineHeight: deviceWidth * 0.0493,
            fontFamily: 'Helvetica',
            fontWeight: '300', // You might need a custom font for ultralight
            color: '#7D7D7D'
          }}>
            Game Changer is an upcoming Indian Telugu-language political action thriller film directed by S. Shankar in his Telugu directorial debut and written by Karthik Subbaraj. <Text style={{ color: '#0074C9' }}>Read More</Text>
          </Text>
        </View>
        <Upcoming />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  poster: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: deviceHeight * 0.8, // Set the height of the poster view to 80% of the screen height
    marginTop:-80
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    width:deviceHeight,
  },
  text1: {
    fontSize:50,
    fontWeight: 'bold',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
});

export default App;
