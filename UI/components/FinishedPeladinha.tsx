import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface CustomPeladinha {
  onPress: () => void;
  title:string;
  textStyles?: string;
  containerStyles?: string;
}


const FinishedPeladinha = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://path-to-your-stadium-image.jpg' }}
          style={styles.stadiumImage}
        />
      </View>
      <Text style={styles.title}>Pelada dos gorilas</Text>
      <Text style={styles.subtitle}>Ipsum Lorem</Text>
      <Text style={styles.date}>Sábado, 24 de Agosto às 10:30</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Result: 10 x 9</Text>
      </TouchableOpacity>
      <View style={styles.teamsContainer}>
        <View style={styles.team}>
          <Text style={styles.teamName}>NomeEquipa1</Text>
          <Image source={{ uri: 'https://path-to-image1.jpg' }} style={styles.playerImage} />
          <Text style={styles.subtitle}>Eduardo: 3 goals</Text>
          <Image source={{ uri: 'https://path-to-image2.jpg' }} style={styles.playerImage} />
          <Text style={styles.subtitle}>Tiago: 7 goals</Text>
          <Image source={{ uri: 'https://path-to-image3.jpg' }} style={styles.playerImage} />
          <Text style={styles.subtitle}>Francis: 0 goals</Text>

        </View>
        <Text style={styles.vs}>X</Text>
        <View style={styles.team}>
          <Text style={styles.teamName}>NomeEquipa2</Text>
          <Image source={{ uri: 'https://path-to-image4.jpg' }} style={styles.playerImage} />
          <Text style={styles.subtitle}>Vieira: 0 goals</Text>

          <Image source={{ uri: 'https://path-to-image5.jpg' }} style={styles.playerImage} />
          <Text style={styles.subtitle}>Maia: 5 goals</Text>

          <Image source={{ uri: 'https://path-to-image6.jpg' }} style={styles.playerImage} />
          <Text style={styles.subtitle}>Nigger: 4 goals</Text>

        </View>
      </View>
      <Text style={styles.mapTitle}>Where was it?</Text>
      <Image
        source={{ uri: 'https://path-to-map-image.jpg' }}
        style={styles.mapImage}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  stadiumImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
  },
  date: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  team: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  playerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 5,
  },
  vs: {
    fontSize: 24,
    color: '#fff',
    marginHorizontal: 20,
  },
  mapTitle: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  goButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  goButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FinishedPeladinha;
