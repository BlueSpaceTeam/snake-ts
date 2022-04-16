/*
 * @Author: fantiga
 * @Date: 2022-04-14 22:01:46
 * @LastEditTime: 2022-04-16 13:07:56
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/index.ts
 */

import './scss/base.scss'
import './scss/snake.scss'

import ScoreBoard from './components/ScoreBoard'
import Food from './components/Food'


// 调用展示-TODEL
const scoreBoardObj = new ScoreBoard()
setTimeout(() => {
    scoreBoardObj.totalScore = 21
}, 5000)


// 测试，可删
const food = new Food()
console.log(food.X, food.Y)
food.change()
console.log(food.X, food.Y)
