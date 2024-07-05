import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import Movie from "./Movie";

const deviceWidth = Dimensions.get("window").width;

const sample=[
    {
      "name": "January",
      "movies": [
        {
          "title": "Bhagavanth Kesari",
          "releaseDate": "25 Jan 2024",
          "posterUrl": 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaWQvwZmfILlEj5_8zP8yHykrOxymgICTrjX4VrL-f3yuSEFz8MsgwYc5zojltwC-DRmK5MKEiN1LdhHsMwKhxYordYWBAiyOA=w1920-h971-rw-v1',
          "genres": ["Action", "Comedy", "Drama"],
          "languages": ["Telugu", "Hindi", "English"]
        },
        {
            "title": "Chandra Mukhi",
            "releaseDate": "30 Jan 2024",
            "posterUrl": "https://lh3.googleusercontent.com/u/0/d/1t_Wi2d2rGnTe1ek0yyeZ9fGGBTaVPuy5=w250-h238-p-k-rw-v1-nu-iv1",
            "genres": ["Action", "Comedy", "Drama"],
            "languages": ["Telugu", "Hindi", "English"]
          },
          {
            "title": "Hi Nanna",
            "releaseDate": "30 Jan 2024",
            "posterUrl": "https://lh3.googleusercontent.com/u/0/d/1QbDjmxt1TaDmUOADWDfKKBSDEqY11rbc=w250-h238-p-k-rw-v1-nu-iv1",
            "genres": ["Action", "Comedy", "Drama"],
            "languages": ["Telugu", "Hindi", "English"]
          },
          {
            "title": "Captain",
            "releaseDate": "30 Jan 2024",
            "posterUrl": "https://lh3.googleusercontent.com/u/0/d/1tg5ThrzAHKftZObDqy0BKWOkLlU32P5t=w250-h238-p-k-rw-v1-nu-iv1",
            "genres": ["Action", "Comedy", "Drama"],
            "languages": ["Telugu", "Hindi", "English"]
          },
      ]
    },
    {
      "name": "February",
      "movies": [
        {
          "title": "Irada",
          "releaseDate": "02 Feb 2024",
          "posterUrl": "https://lh3.googleusercontent.com/u/0/d/1qOY8g55AYViETfS3a16aJH037-38jERS=w250-h238-p-k-rw-v1-nu-iv1",
          "genres": ["Romance", "Drama"],
          "languages": ["French", "English"]
        },
        {
            "title": "Venom",
            "releaseDate": "03 Feb 2024",
            "posterUrl": "https://lh3.googleusercontent.com/u/0/d/1j9pCebcL8z-1a8thLep90zD95JUFTfO3=w250-h238-p-k-rw-v1-nu-iv1",
            "genres": ["Romance", "Drama"],
            "languages": ["French", "English"]
          },
          {
            "title": "Don",
            "releaseDate": "04 Feb 2024",
            "posterUrl": "https://lh3.googleusercontent.com/u/0/d/1yGtUX4rC1df3EAiZDTQX71cXFDdlrEvK=w250-h238-p-k-rw-v1-nu-iv1",
            "genres": ["Romance", "Drama"],
            "languages": ["French", "English"]
          },
          {
            "title": "Mujib",
            "releaseDate": "05 Feb 2024",
            "posterUrl": "https://lh3.googleusercontent.com/u/0/d/1RTXlKZH0vhCHLtSxf-5JBC-vve8BEHTj=w250-h238-p-k-rw-v1-nu-iv1",
            "genres": ["Romance", "Drama"],
            "languages": ["French", "English"]
          },
          {
            "title": "Tadap",
            "releaseDate": "06 Feb 2024",
            "posterUrl": "https://lh3.googleusercontent.com/u/0/d/14AGo5EkGkMZDZKvYP76bM-JbF_EXQGp7=w250-h238-p-k-rw-v1-nu-iv1",
            "genres": ["Romance", "Drama"],
            "languages": ["French", "English"]
          },
        
      ]
    }
  ];  

const Upcoming = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://cinemaapi/upcoming', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };
        setMovies(sample);
        // fetchData();
    }, []);

    return (
        <ScrollView>
            <View style={{ width: deviceWidth * 0.95, margin: 'auto' }}>
                <Text style={{ fontSize: deviceWidth * 0.018 * 3.1, fontFamily: 'Helvetica', color: '#ffffff', textAlign: 'left', marginTop: 5 }}>
                    Upcoming Movies
                </Text>
                {movies.map((month, index) => (
                    <View key={index}>
                        <View style={{
                            width: deviceWidth * 0.95,
                            flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 'auto',
                            paddingTop: 11
                        }}>
                            <Text style={{ fontSize: deviceWidth * 0.016 * 3.1, fontFamily: 'Helvetica', marginRight: 5, color: '#FFFFFF50' }}>
                                {month.name}
                            </Text>
                            <View style={{
                                width: '74%',
                                height: 1.5,
                                marginTop: 1.8,
                                backgroundColor: '#4f4f4f',
                                borderRadius: 5
                            }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                            {month.movies.map((movie, idx) => (
                                <View key={idx} style={{ width: '45%', margin: 5 }}>
                                    <Movie movie={movie} />
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Upcoming;
