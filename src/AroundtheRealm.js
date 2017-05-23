import React, { Component } from 'react'
import IndyOrcs from './IndyOrcs'
import Mountain from './Mountain'
import MoreGold from './MoreGold'
import Hobbits99 from './Hobbits99'
import './AroundtheRealm.css'

class AroundtheRealm extends Component {
  render() {
    return (
      <div className="AroundtheRealm">
        <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
            <IndyOrcs />
            <Mountain />
            <MoreGold />
            <Hobbits99 />
        </div>
      </div>
    )
  }
}

export default AroundtheRealm