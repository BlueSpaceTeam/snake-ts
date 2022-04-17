/*
 * @Author: fantiga
 * @Date: 2022-04-16 13:34:29
 * @LastEditTime: 2022-04-17 13:40:09
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
        this.bodies = this.el.getElementsByTagName('div')
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
            throw new Error('You hit the wall!')
        }

        this.head.style.left = value + 'px'
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
            throw new Error('You hit the wall!')
        }

        this.head.style.top = value + 'px'
    }

    // 给蛇增加身体的方法
    addBody(): void {
        // 往snake中加一个div
        this.el.insertAdjacentHTML('beforeend', '<div></div>')
    }
}