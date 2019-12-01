import axios from "axios"

const url = `https://fake-news-api.herokuapp.com/`

const GetArticles = async () => {
  try {
    let response = await axios.get(url + "v1/articles")
    const articles = response.data
    return articles
  } catch (error) {
    console.error(error)
  }
}

export { GetArticles }