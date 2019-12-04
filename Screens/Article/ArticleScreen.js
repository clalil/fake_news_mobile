import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native'

export default class ArticleScreen extends Component {

  renderSelectedArticles = ({ item }) => {
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
        <FlatList
          data={chosenArticle}
          renderItem={this.renderSelectedArticles}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
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
    textAlign: 'center',
  }
});