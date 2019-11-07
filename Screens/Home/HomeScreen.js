import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from "react-native"
import { GetArticles } from '../../Services/ArticlesApiService'

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
      return <FlatList key={article.id}><Text>{article.title}</Text><Text>{article.content}</Text></FlatList>
    })
  }

  return (
    <View style={styles.container}>
      <Text>Fake News</Text>
      <Text>{articles ? displayArticle : "Loading"}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})