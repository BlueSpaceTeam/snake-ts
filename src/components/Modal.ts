export default class Modal {
    private _show: boolean = false
    successFn: Function = () => {}

    elTitle: HTMLElement = document.getElementById('title')! // Modal的标题Dom对象
	elContent: HTMLElement = document.getElementById('content')!// Modal的内容Dom对象
	elSubContent: HTMLElement = document.getElementById('sub-content')!// Modal的次内容Dom对象
	elCancelBtn: HTMLElement = document.getElementById('btn-cancel')!// Modal的取消按钮Dom对象
	elReplayBtn: HTMLElement = document.getElementById('btn-replay')!// Modal的重做按钮Dom对象

    elModal: HTMLElement = document.getElementById('modal')!// Modal的次内容Dom对象
	elMask: HTMLElement = document.getElementById('mask')!// Modal的取消按钮Dom对象
	elMain: HTMLElement = document.getElementById('main')!// Modal的重做按钮Dom对象

    get show () {
        return this._show
    }

    set show (newVal) {
        this._show = newVal
        this.elModal.classList[newVal ? 'add' : 'remove']('show')
        this.elMask.classList[newVal ? 'add' : 'remove']('trans-show')
        this.elMain.classList[newVal ? 'add' : 'remove']('trans-show')
    }

    showModal ({ title = '', content = '', subContent = '', success = (e: any) => {}, fail = (e: any) => {}} = {}): void {
        try {
            this.elTitle.innerText = title
            this.elContent.innerText = content
            this.elSubContent.innerText = subContent
            this.successFn = (actionType: string) => {
                this.hideModal()
                success.call(this, actionType)
            }

            this.elCancelBtn.addEventListener('click', this.successFn.bind(this, 'cancel'))
            this.elReplayBtn.addEventListener('click', this.successFn.bind(this, 'replay'))
            this.show = true
        } catch (error) {
            fail(error)
        }
    }

    hideModal () : void {
        this.show = false
        this.elCancelBtn.removeEventListener('click', this.successFn.bind(this, 'cancel'))
        this.elReplayBtn.removeEventListener('click', this.successFn.bind(this, 'replay'))
    }
}