import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from "react-native"
import { GetArticles } from '../../Services/ArticlesApiService'
import { Dimensions } from "react-native"
import { Image } from "react-native-elements"

const HomeScreen = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    let articles = GetArticles()
    UpdateArticlesStateHandler(articles)
  })

  const UpdateArticlesStateHandler = articles => {
    setArticles(articles)
  }

  const DisplayArticles = ({ article }) => {
    return (
      <View key={article.id} style={styles.oneArticleContainer}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10, overflow: 'hidden' }}
          source={{ uri: article.image }}
        />
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content}>{article.content}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.heroHeader}>Fake News</Text>
        <Text style={styles.miniHeader}>The Fake News Media is working hard</Text>
        <View style={styles.articleContainer}>
          <Text style={styles.articleHeader}>Available Articles</Text>
          {/* <View>{articles ? displayArticles : "Loading"}</View> */}
          <FlatList
            data={articles}
            renderItem={({ item }) => <DisplayArticles article={item.article} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

var width = Dimensions.get('window').width

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
  articleContainer: {
    width: width,
  },
  oneArticleContainer: {
    borderBottomColor: '#f2f0ee',
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 5,
  },
  image: {
    marginTop: 10
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Palatino-Bold',
    marginTop: 5,
    padding: 5,
  },
  content: {
    textAlign: 'left',
    margin: 1,
    padding: 7,
    fontSize: 15,
    fontFamily: 'Palatino',
  }
})