const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol {
    constructor(x, y, fontSize, canvasHeight){
        this.characters = 'ﾊ ﾐ ﾋ ｰ ｳ ｼ ﾅ ﾓ ﾆ ｻ ﾜ ﾂ ｵ ﾘ ｱ ﾎ ﾃ ﾏ ｹ ﾒ ｴ ｶ ｷ ﾑ ﾕ ﾗ ｾ ﾈ ｽ ﾀ ﾇ ﾍ 0123456789QWERTYUOPALKSJDHGFZMXNCBV';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
    }
    draw(context){
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length))
        context.fillStyle = '#0aff0a'
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight){
            this.y = 0;
        }else {
            this.y += 1;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight){
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.fontSize = 25;
        this.colums = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();
        console.log(this.symbols);

    }
    #initialize(){
        for (let i = 0; i < this.colums; i++) {
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }
}

const effect = new Effect(canvas.width, canvas.height);

function animate() {
    ctx.font = effect.fontSize + 'px monospace';
    effect.symbols.forEach(symbol => symbol.draw(ctx));
    requestAnimationFrame(animate);
}

animate();