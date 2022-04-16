/*
 * @Author: fantiga
 * @Date: 2022-04-16 15:15:45
 * @LastEditTime: 2022-04-16 16:05:32
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

    // 移动方向（keydown的值）
    direction: string = ''

    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scoreBoard = new ScoreBoard()

        // 调用初始化方法
        this.init()
    }

    // 游戏初始化方法，调用即开始游戏
    init() {
        /**
         * 绑定键盘按下事件
         * this.keyboardHandler中的this，是document对象
         * 如果需要给Controller本身绑定，则一定要加bind，bind实际上是创建了一个新的函数
         */
        document.addEventListener('keydown', this.keyboardHandler.bind(this))
    }

    // 键盘事件响应
    keyboardHandler = (event: KeyboardEvent) => {
        console.log(this)
        // 修改方向
        this.direction = event.key
    }
}

export default Controller