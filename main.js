//Lấy phần tử đầu tiên trùng khớp với một selector được truyền vào.
const $ = document.querySelector.bind(document);
// Lấy tất cả các phần tử trùng khớp với một selector được truyền vào.
const $$ = document.querySelectorAll.bind(document);
// Lấy tất cả các phần tử trùng khớp với selector ".tab-item" và gán vào biến tabs
const tabs = $$('.tab-item');
// Lấy tất cả các phần tử trùng khớp với selector ".tab-pane" và gán vào biến panes
const panes = $$('.tab-pane');
console.log(tabs,panes);
const tabActive = $('.tab-item.active');
const line = $('.tabs .line');
console.log(line);

line.style.left = tabActive.offsetLeft + 'px';
//Đặt vị trí của phần tử line dựa trên vị trí của phần tử tabActive
//Không có +'px' ở sau nó không chạy
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab,index) =>{
    const pane = panes[index];
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        line.style.left = this.offsetLeft + 'px';
        //this có nghĩa là tab
        line.style.width = this.offsetWidth + 'px';
        this.classList.add('active')
        pane.classList.add('active')
    }
})