import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from "react-native"
import { GetArticles } from '../../Services/ArticlesApiService'
import { Dimensions } from "react-native"
import { Image } from "react-native-elements"

const HomeScreen = () => {

  // const [articles, setArticles] = useState([])

  // useEffect(() => {
  //   let articles = GetArticles()
  //   UpdateArticlesStateHandler(articles)
  // })

  // const UpdateArticlesStateHandler = articles => {
  //   setArticles(articles)
  // }

  const articles = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://facebook.github.io/react-native/img/tiny_logo.png',
      category: 'Politics'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      content: 'Hello2',
      image: 'https://facebook.github.io/react-native/img/tiny_logo.png',
      category: 'Leisure'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      content: 'Hello3',
      image: 'https://facebook.github.io/react-native/img/tiny_logo.png',
      category: 'Tech'
    },
  ]

  const DisplayArticles = ({ title, image, content, category }) => {
    return (
      <View style={styles.oneArticleContainer}>
        <View>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10, overflow: 'hidden' }}
          source={{ uri: image }}
        />
        </View>
        <View style={{ paddingLeft: 5 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.category}>Category: {category}</Text>
        </View>
      </View>
    )
  }

  const flatList = (
    <FlatList
      data={articles}
      renderItem={({ item }) =>
        <DisplayArticles
          image={item.image}
          title={item.title}
          content={item.content}
          category={item.category}
        />}
      keyExtractor={item => item.id}
    />
  )

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.heroHeader}>Fake News</Text>
        <Text style={styles.miniHeader}>The Fake News Media is working hard</Text>
        <View style={styles.articleContainer}>
          <Text style={styles.articleHeader}>Available Articles</Text>
          <View>{(1 + 1 == 2) ? flatList : <Text style={styles.loading}>There are no articles here</Text>}</View>
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
    color: '#42382f',
    textAlign: 'center',
    fontFamily: 'Palatino-Bold',
    marginTop: 15,
    backgroundColor: '#f0e9e3',
    padding: 5,
    width: width,
    shadowColor: '#fff7f0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  articleContainer: {
    width: width,
  },
  oneArticleContainer: {
    borderBottomColor: '#f2f0ee',
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 5,
    flexDirection: 'row',
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
    maxWidth: 290,
  },
  category: {
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'Palatino-Bold',
    backgroundColor: '#faf6f2',
    overflow: 'hidden',
    borderRadius: 5,
    padding: 5,
    width: 140,
  },
  loading: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Palatino-Italic',
    marginTop: 10,
    padding: 5,
  }
})