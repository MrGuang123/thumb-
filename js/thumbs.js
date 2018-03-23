import PraiseButton from './praiseButton.js'
import $ from '../node_modules/jquery/dist/jquery.js'
let num = 0

class Thumbs extends PraiseButton {
    constructor(id) {
        super()
        this.id = id
        this.dom = null
        this.init()
    }
    init() {
        const _this = this
        this.dom = document.querySelector('#' + _this.id)
        var content = `
            <div class="hand-wrap">
                <div class="finger finger1"></div>
                <div class="finger finger2"></div>
                <div class="finger finger3"></div>
                <div class="finger finger4"></div>
                <div class="finger5"></div>
                <div class="hand"></div>
                <div class="finesse"></div>
                <label class="add-animate">+1</label>
            </div>` +
            '<p id="thumbNums">点赞数：<span>' + num + '</span></p>'

        this.dom.innerHTML = content
        this.dom.addEventListener('click', _this.add)
    }
    add() {
        num = super.addThumbs(num)
        const number = document.querySelector('#thumbNums span')
        number.innerHTML = num
        var smalLabel = document.querySelector('.add-animate')
        smalLabel.className = 'add-animate'
        setTimeout(function() {
            smalLabel.className = 'add-animate active'
        }, 0)
    }
}

const thumbs = (id) => (new Thumbs(id))
$.thumbs = $.fn.thumbs = thumbs
window.addthumbs = thumbs.add
export default thumbs