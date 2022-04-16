/**
 * 等级规则：
 * 0-10，11-30,31-60，61-100，101-150,151-210
 * 最后一个数为：10,30,60,100,150,210,....n*(n+1)*5
 * 对应序列：	  1，2，3，4，5，6,....n
 * 对应字母：	  A，B，C，D，E，F,...Z(最大)-26
 * 对应ASCII码： 65，66，...........132
 * 综上，最大等级对应数 87780，大于这个数都计为Z+
 * */

const maxRangeNums = Array(26).fill(0).map((n, idx) => (idx + 1)*(idx + 2)*5)

export class ScoreBoard {
	isDeBug: boolean = false // 是否debug模式

	get score () { 
		return Number((document.getElementById('score') as HTMLSpanElement).innerText) || 0
	}
	set score (newVal: number) {
		(document.getElementById('score') as HTMLSpanElement).innerText = newVal + ''
		this.handleRankMap(newVal)
	}

	get rank () {
		return (document.getElementById('rank') as HTMLSpanElement).innerText
	}

	set rank (newVal) {
		(document.getElementById('rank') as HTMLSpanElement).innerText = newVal
	}

	handleRankMap (score: number = 0): void { // 处理等级规则
		this.isDeBug && console.log('map score = ', score)
		for (let i: number = 0; i < maxRangeNums.length; i++) {
			if (score <= maxRangeNums[i]) { // 在当前范围内，映射成字符
				this.rank = String.fromCharCode(i + 65)
				break
			} else if (i + 1 === maxRangeNums.length) {
				this.rank = 'Z+'
				break
			}
		}
	}

	addScore (score: number = 0): void {
		this.score += score;
	}
}