import React from 'react';
import { View, SafeAreaView, Dimensions, Text, Image, ScrollView, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const Movie = ({movie}) => {
    const image = {
        'Irada': require('../src/poster/irada.png'),
        'Venom': require('../src/poster/venom.png'),
        'Don': require('../src/poster/don.png'),
        'Mujib': require('../src/poster/mujib.png'),
        'Bhagavanth Kesari': require('../src/poster/Kesari.png'),
        'Chandra Mukhi': require('../src/poster/chandramukhi.png'),
        'Hi Nanna': require('../src/poster/nanna.png'),
        'Captain': require('../src/poster/captain.png'),
        'Tadap': require('../src/poster/Tadap.png')
      };
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={style.layout}>
                <View style={style.movieposter}>
                    <Image source={image[movie.title]} resizeMode='contain' style={{ width: '100%', height: '100%',borderRadius:10}} />
                </View>
                <View style={style.details}>
                    <View style={{
                        height:deviceWidth*0.030*3.1,
                    }}>
                        <View style={style.date}>
                            <Text style={style.datefont}>{movie.releaseDate}</Text>
                        </View>
                    </View>
                    <View style={{
                        height:deviceWidth*0.04*2.9
                    }}>
                        <Text style={style.title}>{movie.title}</Text>
                        <ScrollView 
                            horizontal showsHorizontalScrollIndicator={false}  >
                        <Text style={style.genres} numberOfLines={1} >{movie.genres.join(', ')} | {movie.languages.join(', ')}</Text>
                        </ScrollView>
                    </View>
                    <View style={style.button}>
                        <Image
                            source={require('../src/play.png')}
                            style={{ width: deviceWidth*0.012*2.9, height: deviceWidth*0.012*2.9, resizeMode: 'contain' }}
                        />
                        <Text style={{
                            fontSize: deviceWidth * 0.012*2.9,
                            marginLeft: 5,
                            color: 'white'
                        }}>Trailer</Text>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};




const style= StyleSheet.create({
    layout:{
        width: deviceWidth * 0.154*2.9,
        height: deviceWidth *0.346*2.9,
    },
    movieposter:{
        width: '100%',
        height: deviceWidth *0.224*2.9,
        marginBottom: deviceWidth *0.007*3.1,
        overflow: 'hidden',
        paddingTop:12
    },
    details:{
        height: deviceWidth * 0.122*3.1,
        width: '100%',
    },
    date:{
        width: deviceWidth*0.097*2.9,
        backgroundColor: '#1D1D1D',
        height: deviceWidth * 0.026*2.9,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    datefont:{ fontSize: deviceWidth*0.012*2.9, fontWeight: '400', color: '#FCA311',fontFamily:'Helvetica',textAlign:'center',},
    title:{ fontSize: deviceWidth*0.016*2.9, color: '#ffffff', textAlign: 'left',height:deviceWidth*0.02*2.9 },
    genres:{fontSize:deviceWidth*0.012*2.9,color:'#FFFFFF50',height:deviceWidth*0.03*2.9},
    button:{
        width: '100%',
        height: deviceWidth * 0.028*2.9,
        backgroundColor: '#1D1D1D',
        borderRadius: deviceWidth*0.004*2.9,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin:'auto',
        bottom:0
    }


});

export default Movie;
