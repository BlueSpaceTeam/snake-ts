/*
 * @Author: fantiga
 * @Date: 2022-04-16 12:09:52
 * @LastEditTime: 2022-04-16 15:01:58
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/components/Food.ts
 */

class Food {
    // 定义食物元素的属性
    el: HTMLElement

    constructor() {
        // 获取页面中的food元素
        this.el = document.getElementById('food')!  // food的节点不可能不存在，末尾加!表示值不会为空
    }

    // 获取食物的x坐标
    get X(): number {
        return this.el.offsetLeft;
    }

    // 获取食物的y坐标
    get Y(): number {
        return this.el.offsetTop;
    }

    // 随机修改食物位置
    change() {
        // 生成坐标随机数，必须是0、10或10的倍数。
        // x的值最小0，最大(700 - 10) / 10=69
        const left: number = Math.round(Math.random() * 69) * 10
        // y的值最小0，最大(500 - 10) / 10=49
        const top: number = Math.round(Math.random() * 49) * 10

        this.el.style.left = left + 'px'
        this.el.style.top = top + 'px'
    }
}

export default Food