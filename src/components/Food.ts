/*
 * @Author: fantiga
 * @Date: 2022-04-16 12:09:52
 * @LastEditTime: 2022-04-16 12:20:24
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/components/Food.ts
 */

export class Food {
    // 定义食物元素的属性
    el: HTMLElement

    constructor() {
        // 获取页面中的food元素
        this.el = document.getElementById('food')!  // food的节点不可能不存在，末尾加!表示值不会为空
    }

    // 获取食物的x坐标
    get X() {
        return this.el.offsetLeft
    }

    // 获取食物的y坐标
    get Y() {
        return this.el.offsetTop
    }
}