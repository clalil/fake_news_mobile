import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from "react-native"
import { GetArticles } from '../../Services/ArticlesApiService'
import { Dimensions } from "react-native";

const HomeScreen = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    let articles = GetArticles()
    updateArticlesStateHandler(articles)
  })

  const updateArticlesStateHandler = articles => {
    setArticles(articles)
  }

  const displayArticle = () => {
    articles.map((article) => {
      return <FlatList key={article.id}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: article.image }}
        />
        <Text>{article.title}</Text>
        <Text>{article.content}</Text>
      </FlatList>
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.heroHeader}>Fake News</Text>
        <Text style={styles.miniHeader}>The Fake News Media is working hard</Text>
        <View style={styles.articleContainer}>
          <Text style={styles.articleHeader}>Available Articles</Text>
          <Text>{articles ? displayArticle : "Loading"}</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heroContainer: {
    position: 'relative',
    top: 50,
    flex: 2,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  heroHeader: {
    fontSize: 30,
    fontFamily: 'Palatino',
    marginBottom: 5,
    textAlign: 'center',
  },
  miniHeader: {
    fontFamily: 'Palatino-Italic',
    textAlign: 'center',
    fontSize: 15,
  },
  articleContainer: {
    position: 'relative',
    flex: 3,
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  articleHeader: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Palatino-Bold',
    marginTop: 15,
    backgroundColor: '#fcf7f3',
    padding: 5,
    width: width,
  },
  image: {
    marginTop: 50
  },
})