/*
 * @Author: fantiga
 * @Date: 2022-04-14 22:01:46
 * @LastEditTime: 2022-04-15 11:19:46
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/index.ts
 */

import './scss/base.scss'
import './scss/wrap.scss'
import './index.less'

import { ScoreBoard } from './components/ScoreBoard'

const scoreBoardObj = new ScoreBoard()

// 调用
setTimeout(() => {
    scoreBoardObj.addScore(100)

    console.log(scoreBoardObj.rank)
}, 5000)