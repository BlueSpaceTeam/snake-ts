/*
 * @Author: fantiga
 * @Date: 2022-04-16 15:15:45
 * @LastEditTime: 2022-04-17 18:18:41
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/components/Controller.ts
 */

import Food from './Food'
import Snake from './Snake'
import ScoreBoard from './ScoreBoard'

import { GAME_WIDTH, GAME_HEIGHT } from '../constant'

export default class Controller {
    food: Food
    snake: Snake
    scoreBoard: ScoreBoard

    /**
     * 移动方向，keydown的值。
     * 值为''则游戏开始后不动，按方向键才动。
     */
    direction: string = 'ArrowRight'

    // 游戏是否结束
    isGameOver: boolean = false

    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scoreBoard = new ScoreBoard()

        // 调用初始化方法
        this.init()
    }

    // 游戏初始化方法，调用即开始游戏
    init = (): void => {
        // 重定义游戏舞台宽高
        const gameStage: HTMLElement = document.getElementById('stage')!
        gameStage.style.width = GAME_WIDTH + 'px'
        gameStage.style.height = GAME_HEIGHT + 'px'

        // // 调用展示-TODEL
        // const scoreBoardObj = new ScoreBoard()
        // setTimeout(() => {
        //     scoreBoardObj.totalScore = 2
        //     setTimeout(() => {
        //         scoreBoardObj.rank = 10
        //     }, 5000)
        // }, 5000)

        // 测试，可删
        // console.log(this.food.X, this.food.Y)
        this.food.change()
        // console.log(this.food.X, this.food.Y)

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
    keyboardHandler = (event: KeyboardEvent): void => {
        // 修改方向
        this.direction = event.key
    }

    // 控制蛇的移动
    move = (): void => {
        // 获取蛇头当前的坐标
        let X = this.snake.X
        let Y = this.snake.Y

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
                this.snake.head.style.transform = 'rotate(0deg)'
                break
            case 'ArrowDown':
                // 向下
                Y += 10
                this.snake.head.style.transform = 'rotate(180deg)'
                break
            case 'ArrowLeft':
                // 向左
                X -= 10
                this.snake.head.style.transform = 'rotate(-90deg)'
                break
            case 'ArrowRight':
                // 向右
                X += 10
                this.snake.head.style.transform = 'rotate(90deg)'
                break
        }

        // 检查是否吃到食物
        this.checkEat(X, Y)

        try {
            // 将新坐标赋值给蛇
            this.snake.X = X
            this.snake.Y = Y
        } catch (error) {
            // 出现异常，游戏结束
            alert('[GAME OVER] ' + (error as Error).message)
            this.isGameOver = true
        }

        // 开启定时调用
        !this.isGameOver && setTimeout(this.move.bind(this), 600 - (this.scoreBoard.level - 1) * 6)
    }

    // 检查是否吃到食物的方法
    checkEat = (X: number, Y: number): void => {
        if (X === this.food.X && Y === this.food.Y) {
            // 重置食物的位置
            this.food.change()
            // 增加分数
            this.scoreBoard.totalScore++
            // 增加身体
            this.snake.addBody()
        }
    }
}