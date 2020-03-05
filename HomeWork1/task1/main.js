const bgMainFirst = 'bgmain-first';
const bgMainSecond = 'bgmain-second';
const sylePageFirst = 'button-container-firststyle';
const stylePageSecond = 'button-container-secondstyle';
let flexBoxLayout = '<div class="fbcontainer"><header><p>Header</p></header><main><article><h1>Что такое Lorem Ipsum?</h1><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время</p></article><nav><p>Navigation</p></nav><aside><p>Sidebar</p></aside></main><footer><p>Footer</p></footer></div>';
                        

let bgMain = document.querySelector('.bgmain-first');
let stylePage = document.querySelector('.button-container-firststyle');

let button2 = document.getElementById('styleSwitch');
let button3 = document.getElementById('layoutSwitch');

button2.onclick = function(){
    if(bgMain.className == bgMainFirst && stylePage.className == sylePageFirst){
        bgMain.className = bgMainSecond;
        stylePage.className = stylePageSecond;
    }
    else{
        bgMain.className = bgMainFirst;
        stylePage.className = stylePageFirst;
    }
    return false;
}

button3.onclick = function(){
    document.body.innerHTML = flexBoxLayout;
    return false;
}