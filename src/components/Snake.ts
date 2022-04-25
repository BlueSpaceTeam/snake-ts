/*
 * @Author: fantiga
 * @Date: 2022-04-16 13:34:29
 * @LastEditTime: 2022-04-25 21:28:20
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/components/Snake.ts
 */

import { GAME_WIDTH, GAME_HEIGHT } from '../constant'

export default class Snake {
    // 定义整条蛇元素的属性
    el: HTMLElement
    // 定义蛇头元素的属性
    head: HTMLElement
    // 定义蛇身元素的属性
    bodies: HTMLCollection

    constructor() {
        this.el = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div')!
        this.bodies = this.el.getElementsByClassName('section')
    }

    // 获取蛇头x坐标
    get X(): number {
        return this.head.offsetLeft
    }

    // 获取蛇头y坐标
    get Y(): number {
        return this.head.offsetTop
    }

    // 设置蛇头x坐标
    set X(value: number) {
        if (this.X === value) {
            return
        }

        /**
         * 判断撞墙
         * 值的范围要在 0 和 GAME_WIDTH 之间
         */
        if (value < 0 || value > GAME_WIDTH) {
            throw new Error('You bumped the wall!')
        }

        // 先移动身体
        this.moveBody()

        // 再移动头
        this.head.style.left = value + 'px'

        // 检查是否撞到自己
        this.checkCollide()
    }

    // 设置蛇头y坐标
    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        /**
         * 判断撞墙
         * 值的范围要在 0 和 GAME_HEIGHT 之间
         */
        if (value < 0 || value > GAME_HEIGHT) {
            throw new Error('You bumped the wall!')
        }

        // 先移动身体
        this.moveBody()

        // 再移动头
        this.head.style.top = value + 'px'

        // 检查是否撞到自己
        this.checkCollide()
    }

    // 给蛇增加身体的方法
    addBody = (): void => {
        // 往snake中加一个div
        this.el.insertAdjacentHTML('beforeend', '<div class="section"><div class="bone"></div></div>')
    }

    /**
     * 给蛇移动身体的方法
     * 将后面一节设置为前面一节的位置
     */
    moveBody = (): void => {
        // 遍历所有身体
        for (let i: number = this.bodies.length - 1; i > 0; i--) {
            // 获取前面身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 设置到新的位置
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 检查头身相撞
    checkCollide = (): void => {
        // 遍历所有身体
        for (let i = 1; i < this.bodies.length; i++) {
            let body = this.bodies[i] as HTMLElement
            // 检查头和身体坐标是否重叠
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                throw new Error('You bumped yourself!')
            }
        }
    }
}