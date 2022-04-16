/*
 * @Author: fantiga
 * @Date: 2022-04-14 22:01:46
 * @LastEditTime: 2022-04-16 11:35:01
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/index.ts
 */

import './scss/base.scss'
import './scss/snake.scss'


import { ScoreBoard } from './components/ScoreBoard'

const scoreBoardObj = new ScoreBoard()

// 调用
setTimeout(() => {
    scoreBoardObj.addScore(100)

    console.log(scoreBoardObj.rank)
}, 5000)