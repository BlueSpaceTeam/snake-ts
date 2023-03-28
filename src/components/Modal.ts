/*
 * @Author: fantiga
 * @Date: 2022-04-28 00:05:51
 * @LastEditTime: 2023-03-28 21:58:44
 * @LastEditors: fantiga
 * @FilePath: /snake-ts/src/components/Modal.ts
 */
export default class Modal {
  private _show: boolean = false; // 控制弹窗是否展示
  successFn: Function = () => { }; // 展示弹窗成功后调用该函数

  elTitle: HTMLElement = document.getElementById('title')!; // Modal的标题Dom对象
  elContent: HTMLElement = document.getElementById('content')!;// Modal的内容Dom对象
  elSubContent: HTMLElement = document.getElementById('sub-content')!;// Modal的次内容Dom对象
  elCancelBtn: HTMLElement = document.getElementById('btn-cancel')!;// Modal的取消按钮Dom对象
  elReplayBtn: HTMLElement = document.getElementById('btn-replay')!;// Modal的重做按钮Dom对象

  elModal: HTMLElement = document.getElementById('modal')!;// Modal的次内容Dom对象
  elMask: HTMLElement = document.getElementById('mask')!;// Modal的取消按钮Dom对象
  elMain: HTMLElement = document.getElementById('main')!;// Modal的重做按钮Dom对象

  get show() {
    return this._show;
  }

  set show(newVal) {
    this._show = newVal;
    // 控制弹窗样式及动画 ↓
    this.elModal.classList[newVal ? 'add' : 'remove']('show');
    this.elMask.classList[newVal ? 'add' : 'remove']('trans-show');
    this.elMain.classList[newVal ? 'add' : 'remove']('trans-show');
  }

  /**
   * 打开弹窗
   * @param obj 传入对象，包含属性：
   * title: 弹窗标题
   * content: 主内容
   * subContent: 次内容
   * success: 打开弹窗成功后回调函数。默认点击任一按钮都会自动关闭当前弹窗。
   * fail: 打开弹窗失败后回调函数 
  */
  showModal({ title = '', content = '', subContent = '', success = (e: any) => { }, fail = (e: any) => { } } = {}): void {
    try {
      this.elTitle.innerText = title;
      this.elContent.innerText = content;
      this.elSubContent.innerText = subContent;
      this.successFn = (actionType: string) => {
        this.hideModal();
        success.call(this, actionType);
      };

      this.elCancelBtn.onclick = this.successFn.bind(this, 'cancel');
      this.elReplayBtn.onclick = this.successFn.bind(this, 'replay');
      this.show = true;
    } catch (error) {
      fail(error);
    }
  }

  hideModal(): void { // 关闭弹窗
    this.show = false;
  }
}