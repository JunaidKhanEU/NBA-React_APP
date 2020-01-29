import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import paths from '../utils/paths'

const Articles = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(`${paths.URLBLOCKS}?_limit=10&_sort=id&_order=asc`)
      setArticles(res.data)
    }
    fetchArticles()
  }, [])

  const showArticlesBlocks = () => {
    const rowObjSize = 3
    const rows = [...Array(Math.ceil(articles.length / rowObjSize))]
    const articleRows = rows.map((row, i) => {
      return articles.slice(i * 3, i * 3 + 3) // 0 *3 , 0 +3 so slice(0, 3), slice(1*3,6)
    })
    const renderedArticles = articleRows.map((row, i) => (
      <div className='row' key={i}>
        {
          row.map(article => (
            <div key={article.id} className='four columns block_item'>
              <Link to={`/article/${article.id}`}>
                <div className='top'>
                  <div className='veil' />
                  <div className='block_image' style={{ background: `url(/images/blocks/${article.image}) no-repeat` }} />
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    ))

    return renderedArticles
  }
  return (
    <div>
      {
        showArticlesBlocks()
      }
    </div>
  )
}

export default Articles
