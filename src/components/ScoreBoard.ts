/**
 * 等级规则：
 * 等级从最小到最大分别为：A，B，C，D，E，F,...Z, Z+
 * 每 2分 升一个等级，(对应属性deltaScore)
 * */

export default class ScoreBoard {
	private _totalScore: number = 0 // 总分
	private _rank: string = 'A' // 等级

	elScore: HTMLElement = document.getElementById('score') as HTMLElement // 总分元素Dom对象
	elRank: HTMLElement = document.getElementById('rank') as HTMLElement// 等级元素Dom对象

	deltaScore: number = 2 // 等差数列中的公差

	get totalScore (): number { // 获取总分
		return this._totalScore
	}
	set totalScore (newVal: number) { // 设置总分
		this._totalScore = newVal
		this.elScore.innerText = newVal + ''
		this.handleRankMap(newVal)
	}

	get rank (): string { // 获取等级
		// return this.elRank.innerText
		return this._rank
	}

	set rank (newVal) { // 设置等级
		this.elRank.innerText = newVal
		this._rank = newVal
	}

	private handleRankMap (totalScore: number = 0): void { // 处理等级规则
		const { deltaScore } = this
		for (let i: number = 0; i <= 26; i++) {
			if (totalScore <= (i + 1) * deltaScore) { // 在当前范围内，映射成字符
				this.rank = String.fromCharCode(i + 65)
				break
			} else if (i + 1 === 26) {
				this.rank = 'Z+'
			}
		}
	}
}