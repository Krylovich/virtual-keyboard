let div = document.createElement('div');

div.innerHTML =`<h1>Клавиатура в альфа версии. Пока ничего не работает(</h1><textarea></textarea><ul><li class="symbol"><span class="off">\`</span><span class="on">~</span></li>
<li class="symbol"><span class="off">1</span><span class="on">!</span></li>
<li class="symbol"><span class="off">2</span><span class="on">@</span></li>
<li class="symbol"><span class="off">3</span><span class="on">#</span></li>
<li class="symbol"><span class="off">4</span><span class="on">$</span></li>
<li class="symbol"><span class="off">5</span><span class="on">%</span></li>
<li class="symbol"><span class="off">6</span><span class="on">^</span></li>
<li class="symbol"><span class="off">7</span><span class="on">&amp;</span></li>
<li class="symbol"><span class="off">8</span><span class="on">*</span></li>
<li class="symbol"><span class="off">9</span><span class="on">(</span></li>
<li class="symbol"><span class="off">0</span><span class="on">)</span></li>
<li class="symbol"><span class="off">-</span><span class="on">_</span></li>
<li class="symbol"><span class="off">=</span><span class="on">+</span></li>
<li class="backspace lastitem">Backspace</li>
<li class="tab">Tab</li>
<li class="letter"><span class="off">q</span><span class="on">й</span></li>
<li class="letter"><span class="off">w</span><span class="on">ц</span></li>
<li class="letter"><span class="off">e</span><span class="on">у</span></li>
<li class="letter"><span class="off">r</span><span class="on">к</span></li>
<li class="letter"><span class="off">t</span><span class="on">е</span></li>
<li class="letter"><span class="off">y</span><span class="on">н</span></li>
<li class="letter"><span class="off">u</span><span class="on">г</span></li>
<li class="letter"><span class="off">i</span><span class="on">ш</span></li>
<li class="letter"><span class="off">o</span><span class="on">щ</span></li>
<li class="letter"><span class="off">p</span><span class="on">з</span></li>
<li class="symbol"><span class="off">[</span><span class="on">х</span></li>
<li class="symbol"><span class="off">]</span><span class="on">ъ</span></li>
<li class="symbol"><span class="off">/</span><span class="on">|</span></li>
<li class="delete lastitem" id="del">DEL</li>
<li class="capslock" id="caps">Caps Lock</li>
<li class="letter"><span class="off">a</span><span class="on">ф</span></li>
<li class="letter"><span class="off">s</span><span class="on">ы</span></li>
<li class="letter"><span class="off">d</span><span class="on">в</span></li>
<li class="letter"><span class="off">f</span><span class="on">а</span></li>
<li class="letter"><span class="off">g</span><span class="on">п</span></li>
<li class="letter"><span class="off">h</span><span class="on">р</span></li>
<li class="letter"><span class="off">j</span><span class="on">о</span></li>
<li class="letter"><span class="off">k</span><span class="on">л</span></li>
<li class="letter"><span class="off">l</span><span class="on">д</span></li>
<li class="symbol"><span class="off">;</span><span class="on">ж</span></li>
<li class="symbol"><span class="off">'</span><span class="on">э</span></li>
<li class="enter lastitem">ENTER</li>
<li class="left-shift">Shift</li>
<li class="letter"><span class="off">z</span><span class="on">я</span></li>
<li class="letter"><span class="off">x</span><span class="on">ч</span></li>
<li class="letter"><span class="off">c</span><span class="on">с</span></li>
<li class="letter"><span class="off">v</span><span class="on">м</span></li>
<li class="letter"><span class="off">b</span><span class="on">и</span></li>
<li class="letter"><span class="off">n</span><span class="on">т</span></li>
<li class="letter"><span class="off">m</span><span class="on">ь</span></li>
<li class="symbol"><span class="off">,</span><span class="on">б</span></li>
<li class="symbol"><span class="off">.</span><span class="on">ю</span></li>
<li class="symbol"><span class="off">/</span><span class="on">?</span></li>
<li class="right-shift">Shift</li>
<li class="symbol">&#8593;</li>
<li class="ctrl">Ctrl</li>
<li class="win">Win</li>
<li class="alt">Alt</li>
<li class="space">&nbsp;</li>
<li class="alt">Alt</li>
<li class="ctrl-right">Ctrl</li>
<li class="symbol">&#8592;</li>
<li class="symbol">	&#8595;</li>
<li class="symbol lastitem">&#8594;</li></ul>`

document.body.prepend(div);

let caps = document.getElementById('#caps');
let letters = document.querySelectorAll('letter');

caps.addEventListener('click', uppercase); 

const uppercase = () => {
    letters.classList.toggle('uppercase');
}