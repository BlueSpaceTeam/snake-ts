/**
 * 等级规则：
 * 等级从最小到最大分别为：A，B，C，D，E，F,...Z, Z+
 * 每 2分 升一个等级，(对应属性deltaScore)
 * */

export default class ScoreBoard {
	private _totalScore: number = 0 // 总分
	private _level: number = 0 // 等级

	elScore: HTMLElement = document.getElementById('score')! // 总分元素Dom对象
	elLevel: HTMLElement = document.getElementById('level')!// 等级元素Dom对象

	speed: number // 速度。等级level = 函数f(分数score, 速度speed)
	maxLevel: number // 最大等级

	constructor (speed: number = 2, maxLevel: number = 100 ) {
		this.maxLevel = maxLevel 
		this.speed = speed
	}

	get totalScore(): number { // 获取总分
		return this._totalScore
	}
	set totalScore(newVal: number) { // 设置总分
		this._totalScore = newVal
		this.elScore.innerText = newVal + ''
		this.handleLevelMap(newVal)
	}

	get level(): number { // 获取等级
		return this._level
	}

	set level(newVal) { // 设置等级
		this.elLevel.innerText = newVal + ''
		this._level = newVal
	}

	private handleLevelMap(totalScore: number = 0): void { // 处理等级规则
		const { speed, maxLevel } = this

		for (let i: number = 1; i <= maxLevel; i++) {
			if (totalScore <= i * speed) { // 在当前范围内，映射成字符
				this.level = i
				break
			}
		}
	}
}