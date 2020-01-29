import React, { Component } from 'react'
import axios from 'axios'
import paths from '../utils/paths'

class Article extends Component {
  constructor (props) {
    super(props)
    this.id = this.props.match.params.id
    this.state = {
      id: this.id,
      article: null
    }
  }

  getArticle = async () => {
    const res = await axios.get(`${paths.URLBLOCKS}/${this.state.id}`)
    this.setState({
      article: res.data
    })
  }

  componentDidMount () {
    this.getArticle()
  }

  render () {
    return (
      <>
        <div className='container article_post'>
          {this.state.article &&
            <div className='top'>
              <div className='block_image' style={{ background: `url(/images/blocks/${this.state.article.image}) no-repeat` }} />
              <h1>{this.state.article.title}</h1>
              <span />
              <div
                className='article_content' dangerouslySetInnerHTML={{
                  __html: this.state.article.content
                }}
              />
            </div>}
        </div>
      </>
    )
  }
}

export default Article
