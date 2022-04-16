/**
 * 等级规则：
 * 0-10，11-30,31-60，61-100，101-150,151-210
 * 最后一个数为：10,30,60,100,150,210,....n*(n+1)*5
 * 对应序列：	  1，2，3，4，5，6,....n
 * 对应字母：	  A，B，C，D，E，F,...Z(最大)-26
 * 对应ASCII码： 65，66，...........132
 * 综上，最大等级对应数 87780，大于这个数都计为Z+
 * */
function getCurrentMaxRangeNum (idx: number = 0): number {
	return (idx + 1)*(idx + 2)*5
}

const maxRangeNums = Array(26).fill(0).map((n, idx) => getCurrentMaxRangeNum(idx))

export class ScoreBoard {
	private _socre: number = 0 // 分数
	private _rank: string = 'A' // 等级

	// get score () {
	// 	return this._socre
	// }
	// set score (newVal: number) {
	// 	this._socre = newVal;

	// 	// 副作用
	// 	(document.getElementById('score') as HTMLSpanElement).innerText = newVal + ''

	// 	this.handleRankMap()
	// }

	get rank () {
		// 副作用
		(document.getElementById('rank') as HTMLSpanElement).innerText = this._rank
		return this._rank
	}

	handleRankMap (): void { // 处理等级规则
		let res: string = 'A'

		const { _socre } = this

		for (let i: number = 0; i < maxRangeNums.length; i++) {
			if (_socre <= maxRangeNums[i]) { // 在当前范围内，映射成字符
				this._rank = String.fromCharCode(i + 65)
				break
			} else if (i + 1 === maxRangeNums.length) {
				this._rank = 'Z+'
				break
			}
		}
	}

	addScore (score: number = 0): void {
		this._socre += score;
		// 副作用
		(document.getElementById('score') as HTMLSpanElement).innerText = this._socre + ''

		this.handleRankMap()
	}
}