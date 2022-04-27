/*
 * @Author: fantiga
 * @Date: 2022-04-16 15:15:45
 * @LastEditTime: 2022-04-27 20:47:42
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/components/Controller.ts
 */

import Food from './Food'
import Snake from './Snake'
import ScoreBoard from './ScoreBoard'
import Modal from './Modal'

import { GAME_WIDTH, GAME_HEIGHT, DEFAULT_MAX_LEVEL } from '../constant'

export default class Controller {
    food: Food
    snake: Snake
    scoreBoard: ScoreBoard
    modal: Modal
    // 游戏定时调用ID
    start: number

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
        this.modal = new Modal()
        // 游戏定时调用ID
        this.start = 0

        // 调用初始化方法
        this.init()
    }

    // 游戏初始化方法，调用即开始游戏
    init = (): void => {
        // 重定义游戏舞台宽高
        const gameStage: HTMLElement = document.getElementById('stage')!
        gameStage.style.width = GAME_WIDTH + 'px'
        gameStage.style.height = GAME_HEIGHT + 'px'
        // 显示历史最高分
        this.scoreBoard.elBest.innerText = this.scoreBoard.best + ''
        // 改变食物位置
        this.food.change()

        /**
         * 绑定键盘按下事件
         * this.keyboardHandler中的this，是document对象
         * 如果需要给Controller本身绑定，则一定要加bind，bind实际上是创建了一个新的函数
         */
        document.addEventListener('keydown', this.keyboardHandler.bind(this))
        // 调用startGame，开始定时调用
        this.startGame()
        // 调用游戏计时器
        this.scoreBoard.timerStart()
    }

    // 键盘事件响应
    keyboardHandler = (event: KeyboardEvent): void => {
        // 屏蔽非法按键
        if (
            event.key !== 'ArrowUp' &&
            event.key !== 'ArrowDown' &&
            event.key !== 'ArrowLeft' &&
            event.key !== 'ArrowRight'
        ) return

        /**
         * 不允许调头的判断
         * 如果有蛇身，且第一节蛇身的位置和蛇头要移动的位置相等，则判定为调头动作
         */
        // 可以转向的开关
        let canChangeDirection: boolean = true
        // 如果有身体，则限制调头
        if (this.snake.bodies[1]) {
            switch (this.direction) {
                case 'ArrowUp':
                    // 如果前一个方向是向下，则不能向上
                    canChangeDirection = event.key === 'ArrowDown' ? false : true
                    break
                case 'ArrowDown':
                    // 如果前一个方向是向上，则不能向下
                    canChangeDirection = event.key === 'ArrowUp' ? false : true
                    break
                case 'ArrowLeft':
                    // 如果前一个方向是向右，则不能向左
                    canChangeDirection = event.key === 'ArrowRight' ? false : true
                    break
                case 'ArrowRight':
                    // 如果前一个方向是向左，则不能向右
                    canChangeDirection = event.key === 'ArrowLeft' ? false : true
                    break
            }
        }

        // 根据开关来修改方向
        if (!this.isGameOver && canChangeDirection) {
            this.direction = event.key
            this.move()
        }
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
            this.isGameOver = true
            this.scoreBoard.timerStop()

            this.modal.showModal({
                title: '[GAME OVER]',
                content: (error as Error).message,
                success: (b = '') => {
                    if (b === 'replay') {
                        this.replayHandler()
                    } else { }
                },
                fail: (err: any) => {
                    console.error(err)
                }
            })
        }
    }

    // 开启定时调用
    startGame = (): void => {
        // 调用蛇移动的方法
        this.move()
        // 判断如果isGameOver为false，则开启定时调用，否则清空定时调用
        if (!this.isGameOver) {
            this.start = window.setTimeout(this.startGame.bind(this), 500 - (this.scoreBoard.level - 1) * (500 / DEFAULT_MAX_LEVEL))
        } else {
            window.clearTimeout(this.start)
            this.start = 0
        }
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
            // 判断是否最高分
            if (this.scoreBoard.totalScore > this.scoreBoard.best) {
                this.scoreBoard.best = this.scoreBoard.totalScore
            }

        }
    }

    // 重新开始的方法
    replayHandler = (): void => {
        // 解绑按键监听事件
        document.removeEventListener('keydown', this.keyboardHandler.bind(this))
        // 清空定时调用
        window.clearTimeout(this.start)
        this.start = 0
        // 复位游戏计时器
        this.scoreBoard.timerReset()

        // 复位蛇身
        this.snake.el.innerHTML = '<div class="section"><div class="bone"></div></div>'
        // 复位蛇当前前进的方向
        this.direction = 'ArrowRight'
        // 复位蛇的坐标
        this.snake.X = 0
        this.snake.Y = 0
        // 复位蛇头转向的方向
        this.snake.head.style.transform = 'rotate(90deg)'
        // 复位游戏结束标记
        this.isGameOver = false
        // 重新初始化蛇和食物的实例对象
        this.food = new Food()
        this.snake = new Snake()

        // 复位总分
        this.scoreBoard.totalScore = 0
        // 复位等级
        this.scoreBoard.level = 1

        // 复位食物位置
        this.food.change()
        // 绑定按键监听事件
        document.addEventListener('keydown', this.keyboardHandler.bind(this))
        // 调用开始游戏的方法
        this.startGame()
        // 游戏计时器开始
        this.scoreBoard.timerStart()
    }
}