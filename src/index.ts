/*
 * @Author: fantiga
 * @Date: 2022-04-14 22:01:46
 * @LastEditTime: 2022-04-16 15:34:38
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/index.ts
 */

import Controller from './components/Controller'

import './scss/base.scss'
import './scss/snake.scss'

new Controller()

// // 调用展示-TODEL
// const scoreBoardObj = new ScoreBoard()
// setTimeout(() => {
//     scoreBoardObj.totalScore = 2

//     setTimeout(() => {
//         scoreBoardObj.rank = 10
//     }, 5000)
// }, 5000)

// // 测试，可删
// const food = new Food()
// console.log(food.X, food.Y)
// food.change()
// console.log(food.X, food.Y)
