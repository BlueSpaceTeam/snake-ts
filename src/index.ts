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


// 调用展示-TODEL
const scoreBoardObj = new ScoreBoard()
setTimeout(() => {
    scoreBoardObj.addScore(11)
    console.log(scoreBoardObj.rank)
}, 5000)