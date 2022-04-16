/*
 * @Author: fantiga
 * @Date: 2022-04-14 22:01:46
 * @LastEditTime: 2022-04-16 12:31:38
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/index.ts
 */

import './scss/base.scss'
import './scss/snake.scss'

import { ScoreBoard } from './components/ScoreBoard'
import { Food } from './components/Food'


// 调用展示-TODEL
const scoreBoardObj = new ScoreBoard()
setTimeout(() => {
    scoreBoardObj.addScore(11)
    console.log(scoreBoardObj.rank)
}, 5000)


// 测试，可删
const food = new Food()
console.log(food.X, food.Y)