import React, { Component } from 'react'
import IndyOrcs from './IndyOrcs'
import Mountain from './Mountain'
import MoreGold from './MoreGold'
import Hobbits99 from './Hobbits99'
import './AroundtheRealm.css'

class AroundtheRealm extends Component {
  constructor() {
    super()
    this.state = {
      articles: [
        {
          name: IndyOrcs
        },

        {
          name: Mountain
        },

        {
          name: MoreGold
        },

        {
          name: Hobbits99
        },
      ],
    }
  }

  renderArticle(article) {
    return(
      <article.name />
    );
  }

  render() {
    return (
      <div className="AroundtheRealm">
        <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
            {this.state.articles.map(this.renderArticle)}
        </div>
      </div>
    )
  }
}

export default AroundtheRealm