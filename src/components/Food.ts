/*
 * @Author: fantiga
 * @Date: 2022-04-16 12:09:52
 * @LastEditTime: 2023-03-28 21:58:23
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/components/Food.ts
 */

import { GAME_WIDTH, GAME_HEIGHT } from '../constant';

export default class Food {
  // 定义食物元素的属性
  el: HTMLElement;

  constructor() {
    // 获取页面中的food元素
    this.el = document.getElementById('food')!;  // food的节点不可能不存在，末尾加!表示值不会为空
  }

  // 获取食物的x坐标
  get X(): number {
    return this.el.offsetLeft;
  }

  // 获取食物的y坐标
  get Y(): number {
    return this.el.offsetTop;
  }

  /**
   * 随机修改食物位置
   * @param bodies 把蛇所有身体传入遍历，为了判断是否和食物新坐标重叠
   */
  change = (bodies: HTMLCollection): void => {
    // 生成坐标随机数，必须是0、10或10的倍数。
    // x的值最小 0，最大 GAME_WIDTH - 10
    let left: number = Math.floor(Math.random() * GAME_WIDTH / 10) * 10;
    // y的值最小 0，最大 GAME_HEIGHT - 10
    let top: number = Math.floor(Math.random() * GAME_HEIGHT / 10) * 10;

    // 遍历所有身体
    for (let i = 0; i < bodies.length; i++) {
      let body = bodies[i] as HTMLElement;
      // 检查身体坐标是否和食物重叠
      if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
        left = Math.floor(Math.random() * GAME_WIDTH / 10) * 10;
        top = Math.floor(Math.random() * GAME_HEIGHT / 10) * 10;
      }
    }

    this.el.style.left = left + 'px';
    this.el.style.top = top + 'px';
  };
}