import React, { Component } from 'react'
import { Image } from 'react-native-elements'
import { Dimensions } from "react-native"
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native'

export default class ArticleScreen extends Component {

  renderSelectedArticle = ({ item }) => {
    let article = item
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: article.image }} />
        <Text style={styles.category}>{article.category.name}</Text>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content}>{article.content}</Text>
      </View>
    )
  }

  render() {

    const { navigation } = this.props
    const chosenArticle = navigation.getParam('selectedArticle', 'No article was found')

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Fake News</Text>
        </View>
        <Text style={styles.miniHeader}>The Fake News Media is working hard</Text>
        <FlatList
          data={chosenArticle}
          renderItem={this.renderSelectedArticle}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}

let width = Dimensions.get('window').width

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
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
    marginTop: 5,
    fontSize: 40,
    fontFamily: 'Palatino',
    fontWeight: 'bold'
  },
  miniHeader: {
    fontFamily: 'Palatino-Italic',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  image:{
    alignSelf: 'center',
    width: 350,
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
    fontSize: 20,
    fontFamily: 'Palatino-Bold',
    backgroundColor: '#faf6f2',
    overflow: 'hidden',
    padding: 5,
    textAlign: 'center',
    width: width,
    marginTop: 10,
  }
});