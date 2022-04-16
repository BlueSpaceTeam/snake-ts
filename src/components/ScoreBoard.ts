/**
 * 等级规则：
 * 等级从最小到最大分别为：A，B，C，D，E，F,...Z, Z+
 * 每 2分 升一个等级，(对应属性deltaScore)
 * */

/**
 * 计分板
 * @param speed：速度，默认每2分一个等级
 * @param maxLevel：最大等级，默认是100
 * 
 * 对象属性（可赋值及取值）：
 * totalScore: 当前总分
 * level: 当前等级
 * 
 **/ 
export default class ScoreBoard {
	private _totalScore: number = 0 // 总分
	private _level: number = 0 // 等级
	private _speed: number // 速度。等级level = 函数f(分数score, 速度speed)
	private _maxLevel: number // 最大等级

	elScore: HTMLElement = document.getElementById('score')! // 总分元素Dom对象
	elLevel: HTMLElement = document.getElementById('level')!// 等级元素Dom对象


	constructor (speed: number = 2, maxLevel: number = 100 ) {
		this._maxLevel = maxLevel 
		this._speed = speed
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
		const { _speed, _maxLevel } = this

		for (let i: number = 1; i <= _maxLevel; i++) {
			if (totalScore <= i * _speed) { // 在当前范围内，映射成字符
				this.level = i
				break
			}
		}
	}
}