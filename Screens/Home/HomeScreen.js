import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native'
import { GetArticles } from '../../Services/ArticlesApiService'
import { Image } from 'react-native-elements'
import LoginForm from './LoginForm'

export default class HomeScreen extends Component {
  state = {
    articles: [],
    renderLoginForm: false,
    email: '',
    password: '',
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

  emailStateHandler = text => {
    this.setState({
      email: text
    })
  }
  passwordStateHandler = text => {
    this.setState({
      password: text
    })
  }

  renderLoginForm = () => {
    this.setState({
      renderLoginForm: true
    })
  }

  renderLogin = () => {
    if (this.state.renderLoginForm) {
      return (
        <View>
          <LoginForm
            onLogin={this.onLogin}
            handleLogin={this.handleLogin}
            handleEmail={this.emailStateHandler}
            handlePassword={this.passwordStateHandler}
          />
        </View>
      )
    } else {
      return (
        <>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            title='Login'
            onPress={this.renderLoginForm}
          >
            <Text style={styles.loginText}>
              Login
            </Text>
          </TouchableHighlight>
        </>
      )
    }
  }

  render() {
    let renderLoginForm = this.renderLogin()

    return (
      <>
        <View style={styles.container}>
        {renderLoginForm}
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
      </>
    )
  }
}

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
    marginTop: 5,
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
    textAlign: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    borderRadius: 30,
    marginTop: 60,
  },
  loginButton: {
    backgroundColor: "#1a222e",
  },
  loginText: {
    color: '#ffffff',
  }
});