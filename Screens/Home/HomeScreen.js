import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { GetArticles } from "../../Services/ArticlesApiService"

class HomeScreen extends Component {
    state = {
      articles: []
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Fake News</Text>
      </View>
    );
  }
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