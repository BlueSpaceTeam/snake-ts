/*
 * @Author: fantiga
 * @Date: 2022-04-14 22:01:46
 * @LastEditTime: 2022-04-17 11:54:09
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /snake-ts/src/index.ts
 */

import Controller from './components/Controller'
import Modal from './components/Modal'

import './scss/base.scss'
import './scss/snake.scss'
import './scss/modal.scss'

new Controller()


let modal = new Modal()

modal.showModal({
    title: '你好',
    content: 'hahah',
    success: (b = '') => {
        if (b === 'replay') {
            setTimeout(() => {
                modal.showModal({
                    title: '你好11111111',
                    content: 'hahah11111111111111111',
                    subContent: 'sssssssss',
                    success: (b = '') => {
                        if (b === 'replay') {
                            
                        } else {}
                    },
                    fail: (err: any) => {
                        console.error(err)
                    }
                })
            }, 5000)
        } else {}
    },
    fail: (err: any) => {
        console.error(err)
    }
})