/*
 * @Author: fantiga
 * @Date: 2022-04-16 15:15:45
 * @LastEditTime: 2022-04-16 15:30:43
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/components/Controller.ts
 */

import Food from './Food'
import Snake from './Snake'
import ScoreBoard from './ScoreBoard'

class Controller {
    food: Food
    snake: Snake
    scoreBoard: ScoreBoard

    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scoreBoard = new ScoreBoard()

        // 调用初始化方法
        this.init()
    }

    // 游戏初始化方法，调用即开始游戏
    init() {
        // 绑定键盘按下事件
        document.addEventListener('keydown', this.keyboardHandler)
    }

    // 键盘事件响应
    keyboardHandler = (event: KeyboardEvent) => {
        console.log(event.key)
    }
}

export default Controller