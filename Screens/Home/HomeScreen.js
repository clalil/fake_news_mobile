import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GetArticles } from '../../Services/ArticlesApiService';
import { Image } from 'react-native-elements'
import { Dimensions } from "react-native"

export default class HomeScreen extends Component {
  state = {
    articles: []
  }

  async componentDidMount() {
    let response = await GetArticles()
    this.setState({
      articles: response
    })
  }

  renderArticles = ({ item }) => {
    const article = item
    let trim_ingress = article.content.substr(0, 75)
    let ingress = trim_ingress.substr(0, Math.min(trim_ingress.length, trim_ingress.lastIndexOf(" "))) + ' ...'
    return (
      <View style={styles.articles}>
        <Image
          style={styles.image}
          source={{ uri: article.image }}
        />
        <Text style={styles.category}>
          {article.category.name}
        </Text>
        <Text style={styles.title}>
          {article.title}
        </Text>
        <Text style={styles.content}>
          {ingress}
        </Text>
      </View>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Fake News</Text>
        </View>
        <Text style={styles.miniHeader}>The Fake News Media is working hard</Text>
        <FlatList
          data={this.state.articles}
          renderItem={this.renderArticles}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}

var width = Dimensions.get('window').width

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginTop: 30,
    fontSize: 40,
    fontFamily: 'Palatino',
    fontWeight: 'bold'
  },
  miniHeader: {
    fontFamily: 'Palatino-Italic',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  articles: {
    margin: 25,
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: '#505050'
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    height: 200,
    marginLeft: 20
  },
  title: {
    padding: 10,
    fontSize: 25,
    fontFamily: 'Palatino-Bold',
    fontWeight: 'bold'
  },
  content: {
    margin: 1,
    padding: 10,
    fontSize: 20,
    fontFamily: 'Palatino',
    color: '#363737'
  },
  category: {
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'Palatino-Bold',
    backgroundColor: '#faf6f2',
    overflow: 'hidden',
    padding: 5,
    width: 100,
    textAlign: 'center',
  },
});