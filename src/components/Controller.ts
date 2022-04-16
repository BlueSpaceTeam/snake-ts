/*
 * @Author: fantiga
 * @Date: 2022-04-16 15:15:45
 * @LastEditTime: 2022-04-16 16:58:44
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

    // 移动方向（keydown的值，默认一开始向右移动）
    direction: string = 'ArrowRight'

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

        // 调用move，开始移动
        this.move()
    }

    // 键盘事件响应
    keyboardHandler = (event: KeyboardEvent) => {
        // console.log(this.direction)
        // console.log(event.key)
        // 修改方向
        this.direction = event.key
    }

    // 控制蛇的移动
    move = () => {
        // 获取蛇头当前的坐标
        let X = this.snake.X
        let Y = this.snake.Y
        console.log('before', X, Y)

        /**
         * 根据this.direction来让蛇改变方向，每次值的变化为10
         * 方向 属性修改 增减     值
         * 向上 top     -       ArrowUp
         * 向下 top     +       ArrowDown
         * 向左 left    -       ArrowLeft
         * 向右 left    +       ArrowRight
         */
        // 计算新坐标
        switch (this.direction) {
            case 'ArrowUp':
                // 向上
                Y -= 10
                break;
            case 'ArrowDown':
                // 向下
                Y += 10
                break;
            case 'ArrowLeft':
                // 向左
                X -= 10
                break;
            case 'ArrowRight':
                // 向右
                X += 10
                break;
        }

        // 将新坐标赋值给蛇
        console.log('computed', X, Y)
        this.snake.X = X
        this.snake.Y = Y
        console.log('after', this.snake.X, this.snake.Y)

        // 开启定时调用
        // setTimeout(this.move.bind(this), 300);
    }
}

export default Controller