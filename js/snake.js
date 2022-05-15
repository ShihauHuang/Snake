var gameInterval;
const BLOCK_SIZE = 25; // 每一格的大小
const BLOCK_Width_COUNT = 25; 
const BLOCK_Height_COUNT = 20; 
var snack; 
var apple;
var score;
var running = false;
var start_flag = false;
var now_sound_effect = true;
var apple_img = new Image();
apple_img.src = "icon/apple.png"

const head_right = [
    {start_x: 0, start_y: 30, cp1x: 0, cp1y: 30, end_x: 10, end_y: 30},
    {start_x: 10, start_y: 30, cp1x: 24, cp1y: 30, end_x: 28, end_y: 25},
    {start_x: 28, start_y: 25, cp1x: 74, cp1y: 5, end_x: 100, end_y: 50},
    {start_x: 100, start_y: 50, cp1x: 74, cp1y: 95, end_x: 28, end_y: 75},
    {start_x: 28, start_y: 75, cp1x: 24, cp1y: 70, end_x: 10, end_y: 70},
    {start_x: 10, start_y: 70, cp1x: 0, cp1y: 70, end_x: 0, end_y: 70},
]

const head_left = [
    {start_x: 100, start_y: 30, cp1x: 100, cp1y: 30, end_x: 90, end_y: 30},
    {start_x: 90, start_y: 30, cp1x: 76, cp1y: 30, end_x: 72, end_y: 25},
    {start_x: 72, start_y: 25, cp1x: 26, cp1y: 5, end_x: 0, end_y: 50},
    {start_x: 0, start_y: 50, cp1x: 26, cp1y: 95, end_x: 72, end_y: 75},
    {start_x: 72, start_y: 75, cp1x: 76, cp1y: 70, end_x: 90, end_y: 70},
    {start_x: 90, start_y: 70, cp1x: 100, cp1y: 70, end_x: 100, end_y: 70},
]

const head_down = [
    {start_x: 30, start_y: 0, cp1x: 30, cp1y: 0, end_x: 30, end_y: 10},
    {start_x: 30, start_y: 10, cp1x: 30, cp1y: 24, end_x: 25, end_y: 28},
    {start_x: 25, start_y: 28, cp1x: 5, cp1y: 74, end_x: 50, end_y: 100},
    {start_x: 50, start_y: 100, cp1x: 95, cp1y: 74, end_x: 75, end_y: 28},
    {start_x: 75, start_y: 28, cp1x: 70, cp1y: 24, end_x: 70, end_y: 10},
    {start_x: 70, start_y: 10, cp1x: 70, cp1y: 0, end_x: 70, end_y: 0},
]

const head_up = [
    {start_x: 30, start_y: 100, cp1x: 30, cp1y: 100, end_x: 30, end_y: 90},
    {start_x: 30, start_y: 90, cp1x: 30, cp1y: 76, end_x: 25, end_y: 72},
    {start_x: 25, start_y: 72, cp1x: 5, cp1y: 26, end_x: 50, end_y: 0},
    {start_x: 50, start_y: 0, cp1x: 95, cp1y: 26, end_x: 75, end_y: 72},
    {start_x: 75, start_y: 72, cp1x: 70, cp1y: 76, end_x: 70, end_y: 90},
    {start_x: 70, start_y: 90, cp1x: 70, cp1y: 90, end_x: 70, end_y: 100},
]

const body_horizen =[
    {start_x: 0, start_y: 30, cp1x: 50, cp1y: 30, end_x: 100, end_y: 30},
    {start_x: 100, start_y: 30, cp1x: 100, cp1y: 50, end_x: 100, end_y: 70},
    {start_x: 100, start_y: 70, cp1x: 50, cp1y: 70, end_x: 0, end_y: 70},
]

const body_vertical = [
    {start_x: 30, start_y: 0, cp1x: 30, cp1y: 50, end_x: 30, end_y: 100},
    {start_x: 30, start_y: 100, cp1x: 50, cp1y: 100, end_x: 70, end_y: 100},
    {start_x: 70, start_y: 100, cp1x: 70, cp1y: 50, end_x: 70, end_y: 0},
]

const body_up_right = [
    {start_x: 30, start_y: 0, cp1x: 30, cp1y: 70, end_x: 100, end_y: 70},
    {start_x: 100, start_y: 70, cp1x: 100, cp1y: 50, end_x: 100, end_y: 30},
    {start_x: 100, start_y: 30, cp1x: 70, cp1y: 30, end_x: 70, end_y: 0},
]

const body_up_left = [
    {start_x: 30, start_y: 0, cp1x: 30, cp1y: 30, end_x: 0, end_y: 30},
    {start_x: 0, start_y: 30, cp1x: 0, cp1y: 50, end_x: 0, end_y: 70},
    {start_x: 0, start_y: 70, cp1x: 70, cp1y: 70, end_x: 70, end_y: 0},
]

const body_down_right = [
    {start_x: 30, start_y: 100, cp1x: 30, cp1y: 30, end_x: 100, end_y: 30},
    {start_x: 100, start_y: 30, cp1x: 100, cp1y: 50, end_x: 100, end_y: 70},
    {start_x: 100, start_y: 70, cp1x: 70, cp1y: 70, end_x: 70, end_y: 100},
]

const body_down_left= [
    {start_x: 30, start_y: 100, cp1x: 30, cp1y: 70, end_x: 0, end_y: 70},
    {start_x: 0, start_y: 70, cp1x: 0, cp1y: 50, end_x: 0, end_y: 30},
    {start_x: 0, start_y: 30, cp1x: 70, cp1y: 30, end_x: 70, end_y: 100},
]

const tail_up = [
    {start_x: 30, start_y: 0, cp1x: 40, cp1y: 120, end_x: 50, end_y: 95},
    {start_x: 50, start_y: 95, cp1x: 60, cp1y: 120, end_x: 70, end_y: 0},
]

const tail_down = [
    {start_x: 30, start_y: 100, cp1x: 40, cp1y: -20, end_x: 50, end_y: 5},
    {start_x: 70, start_y: 5, cp1x: 60, cp1y: -20, end_x: 70, end_y: 100},
]

const tail_left = [
    {start_x: 0, start_y: 30, cp1x: 120, cp1y: 40, end_x: 95, end_y: 50},
    {start_x: 95, start_y: 50, cp1x: 120, cp1y: 60, end_x: 0, end_y: 70},
]

const tail_right = [
    {start_x: 100, start_y: 30, cp1x: -20, cp1y: 40, end_x: 5, end_y: 50},
    {start_x: 5, start_y: 50, cp1x: -20, cp1y: 60, end_x: 100, end_y: 70},
]

window.onload = OnPageLoaded

function OnPageLoaded() {
    document.addEventListener('keydown' , handleKeyDown) // 如果系統發出 keydown 事件, 執行 handleKeyDown function
   
    var canvas = document.getElementById('canvas_id');

    document.getElementById('canvas_id').style.height = parseInt(window.innerHeight) + 'px' ;
    document.getElementById('leaderboard__profiles').style.height = parseInt(window.innerHeight)  + 'px' ;

    canvas.width = BLOCK_SIZE * BLOCK_Width_COUNT
    canvas.height = BLOCK_SIZE * BLOCK_Height_COUNT
    initailCanvas()

}

window.addEventListener('resize' , e => {
    document.getElementById('canvas_id').style.height = parseInt(window.innerHeight) + 'px' ;
    document.getElementById('leaderboard__profiles').style.height = parseInt(window.innerHeight)  + 'px' ;
})


function handleKeyDown(event) {
    
    // 暫停, 繼續遊戲 by 空白鍵
    if (event.keyCode === 32 && document.getElementById('msg_box').getAttribute('show') === 'false') { // space , 抓不到 display 屬性先用其他方式替代
        if (running === true) {
            running = false
            clearInterval(gameInterval) ;
        } else {
            if (start_flag === false) { // 剛開始的情況
                gameStart()
                start_flag = true
            } else {
                running = true
                gameInterval = setInterval(gameRoutine , 100);
            }  
        }
    }

    var originX = snack.direction.x
    var originY = snack.direction.y
    
    if (event.keyCode === 37) { // left down
        snack.direction.x = originY
        snack.direction.y = -originX
    } else if (event.keyCode === 39) { // right down
        snack.direction.x = -originY
        snack.direction.y = originX
    }

}

function gameStart() {
    snack = {
        body: [
            { x: BLOCK_Width_COUNT / 5, y: BLOCK_Height_COUNT / 5  } // 起始座標
        ], 
        size: 3, // 起始大小
        direction: { x: 1, y: 0 } //起始方向（往右）
    }
    running = true;
    putApple(); // 放置蘋果
    updateScore(0); // 重新設定分數為 0
    $('div h2:nth-child(2)').attr('level' , 0); //設置難易度為 0
    gameInterval = setInterval(gameRoutine , 100);
}

function updateScore(newScore) {
    score = newScore
    $('div h2:first-child').attr('score' , score)
    //document.getElementById('score_id').innerHTML = score
}

function updateLevel() {

    clearInterval(gameInterval)
    interval_level = 5 //每五分快 5 毫秒
    const now_level = parseInt(score / interval_level) //取整數
    $('div h2:nth-child(2)').attr('level' , now_level)
    //document.getElementById('level_id').innerHTML = now_level
    if (now_level >= 15) {
        gameInterval = setInterval(gameRoutine , 30);
    }
    else {
        gameInterval = setInterval(gameRoutine , 100 - interval_level*now_level );
    }
            
}

function putApple() {
    apple = {
        x: Math.floor(Math.random() * BLOCK_Width_COUNT),   // floor 為取整數, 取 0 ~ BLOCK_Width_COUNT (但不包含 BLOCK_Width_COUNT)
        y: Math.floor(Math.random() * BLOCK_Height_COUNT)
    }

    for (var i=0; i<snack.body.length; i++) {
        if (snack.body[i].x === apple.x && snack.body[i].y === apple.y){
            putApple()
            break
        }
    }
}

function gameRoutine() {
    moveSnack ();

    if (snackIsDead()) { //移動完後檢查位置
        GameOver();
        return
    }

    if (snack.body[0].x === apple.x && snack.body[0].y === apple.y){
        eatApple();
    }

    updateCanvas();
}

function moveSnack() {
    var newBlock = {
        x: snack.body[0].x + snack.direction.x ,
        y: snack.body[0].y + snack.direction.y
    }

    snack.body.unshift (newBlock) // 將此筆加入到 body[0] 的位置, (push 類似 python append, unshift 類似 python appendleft)

    while (snack.body.length > snack.size) {
        snack.body.pop(); // 與 python 一樣用法, pop 移除 list 最後一筆
    }

}

function snackIsDead() {
    //hit walls
    if ( snack.body[0].x < 0 || 
        snack.body[0].x >= BLOCK_Width_COUNT || 
        snack.body[0].y < 0 || 
        snack.body[0].y >= BLOCK_Height_COUNT ) {
        return true
    }

    //hit body
    for (var i=1; i < snack.body.length; i++) {
        if (snack.body[0].x === snack.body[i].x && snack.body[0].y === snack.body[i].y ){
            return true
        }
    }

    return false
}

function GameOver() {
    
    if (now_sound_effect) { new Audio('sound effect/fail.wav').play() }
    running = false
    start_flag = false
    clearInterval(gameInterval)
    document.getElementById('msg_box').style.display = 'inline-block'
    document.getElementById('msg_box').setAttribute('show' , 'true')
    document.getElementById('gamer_name').focus()
}

function eatApple() {
    if (now_sound_effect) { new Audio('sound effect/eat.wav').play() }
    snack.size += 1;
    putApple()
    updateScore (score + 1)
    updateLevel ()
}

function updateCanvas() {
    //https://blog.csdn.net/sunxiaoju/article/details/49943045 Canvas 用法
    var canvas = document.getElementById('canvas_id');
    var context = canvas.getContext('2d'); // 固定用法

    context.fillStyle = 'rgb(250,250,250)'; //實心淺白色
    context.fillRect( 0, 0 , canvas.width , canvas.height); //畫上去底層 （ｘ, y ,width , height）

    context.strokeStyle = 'grey';
    context.lineWidth   = 0.1;
    for (var i=0; i<BLOCK_Width_COUNT; i++){
        for (var j=0; j<BLOCK_Width_COUNT; j++){
            context.strokeRect(i * BLOCK_SIZE , j * BLOCK_SIZE , BLOCK_SIZE , BLOCK_SIZE)
        }
    }
    

    // 繪製蛇頭
    let now_head_direction = head_direction()
    context.beginPath()
    context.moveTo( 
        snack.body[0].x * BLOCK_SIZE + now_head_direction[0]['start_x'] * BLOCK_SIZE / 100 , //因蛇頭設計使用 100*100 比例設定，故得出此運算方式
        snack.body[0].y * BLOCK_SIZE + now_head_direction[0]['start_y'] * BLOCK_SIZE / 100 
    )
    for (let i=0; i<now_head_direction.length; i++) {
        context.quadraticCurveTo( 
            snack.body[0].x * BLOCK_SIZE + now_head_direction[i]['cp1x'] * BLOCK_SIZE / 100 ,
            snack.body[0].y * BLOCK_SIZE + now_head_direction[i]['cp1y'] * BLOCK_SIZE / 100 ,
            snack.body[0].x * BLOCK_SIZE + now_head_direction[i]['end_x'] * BLOCK_SIZE / 100 ,
            snack.body[0].y * BLOCK_SIZE + now_head_direction[i]['end_y'] * BLOCK_SIZE / 100 , 
        )
    }
    context.fillStyle = '#1c4e28';
    context.fill();

    // 繪製蛇身 & 蛇尾
    for (let i=1; i<snack.body.length; i++) {

        
        let now_body_shape = body_direction(i)
        context.beginPath()
        context.moveTo( 
            snack.body[i].x * BLOCK_SIZE + now_body_shape[0]['start_x'] * BLOCK_SIZE / 100 , //因蛇身設計使用 100*100 比例設定，故得出此運算方式
            snack.body[i].y * BLOCK_SIZE + now_body_shape[0]['start_y'] * BLOCK_SIZE / 100 
        )
        for (let j=0; j<now_body_shape.length; j++) {
            context.quadraticCurveTo( 
                snack.body[i].x * BLOCK_SIZE + now_body_shape[j]['cp1x'] * BLOCK_SIZE / 100 ,
                snack.body[i].y * BLOCK_SIZE + now_body_shape[j]['cp1y'] * BLOCK_SIZE / 100 ,
                snack.body[i].x * BLOCK_SIZE + now_body_shape[j]['end_x'] * BLOCK_SIZE / 100 ,
                snack.body[i].y * BLOCK_SIZE + now_body_shape[j]['end_y'] * BLOCK_SIZE / 100 , 
            )
        }

        context.fillStyle = '#1c4e28';
        context.fill();

    }

    // 放蘋果
    context.drawImage(apple_img, apple.x * BLOCK_SIZE + 1, apple.y * BLOCK_SIZE + 1, BLOCK_SIZE, BLOCK_SIZE);

}

function head_direction() {
    if ( snack.direction.x == '1' && snack.direction.y == '0' ){ // 往右
        return head_right
    }
    else if ( snack.direction.x == '-1' && snack.direction.y == '0' ){ // 往左
        return head_left
    }
    else if ( snack.direction.x == '0' && snack.direction.y == '1' ){ // 往上
        return head_down
    }
    else if ( snack.direction.x == '0' && snack.direction.y == '-1' ){ // 往下
        return head_up
    }
}

function body_direction(_i) {

    const fore_body = snack.body[_i - 1]
    const now_body = snack.body[_i]

    if (_i != snack.body.length - 1) { // 蛇身
        const back_body = snack.body[_i + 1]

        if ( fore_body.y == now_body.y ){ // 如果現在跟前面在同一水平
            if (now_body.y == back_body.y) { // 如果現在跟後面同一水平
                console.log('平行')
                return body_horizen
            } 
            else { // 如果現在跟後面不同水平
                if (fore_body.x > now_body.x) { //如果前面 x 大於 現在 x
                    if (now_body.y > back_body.y) { //如果現在 y 大於 後面 y
                        console.log('右上')
                        return body_up_right
                    }
                    else { //如果現在 y 小於 後面 y
                        console.log('右下')
                        return body_down_right
                    }
                } else { //如果前面 x 小於 現在 x
                    if (now_body.y > back_body.y) { //如果現在 y 大於 後面 y
                        console.log('左上')
                        return body_up_left
                    }
                    else { //如果現在 y 小於 後面 y
                        console.log('左下')
                        return body_down_left
                    }
                }

            }
        } else { // 如果現在跟前面在同一垂直
            if (now_body.x == back_body.x) { // 如果現在跟後面同一垂直
                console.log('垂直')
                return body_vertical
            } 
            else { // 如果現在跟後面不同垂直
                if (fore_body.y > now_body.y) { //如果前面 y 大於 現在 y
                    if (now_body.x > back_body.x) { //如果現在 x 大於 後面 x
                        console.log('左下')
                        return body_down_left
                    }
                    else { //如果現在 x 小於 後面 x
                        console.log('右下')
                        return body_down_right
                    }
                } else { //如果前面 y 小於 現在 y
                    if (now_body.x > back_body.x) { //如果現在 x 大於 後面 x
                        console.log('左上')
                        return body_up_left
                    }
                    else { //如果現在 x 小於 後面 x
                        console.log('右上')
                        return body_up_right
                    }
                }
            }
        }
    } else { // 蛇尾
        if ( fore_body.y == now_body.y ){ // 如果現在跟前面在同一水平
            if (fore_body.x > now_body.x) { //如果前面 x 大於 現在 x
                return tail_right
            } else {  //如果前面 x 小於 現在 x
                return tail_left
            }
        } else { // 如果現在跟前面在同一垂直
            if (fore_body.y > now_body.y) { //如果前面 y 大於 現在 y
                return tail_down
            } else {  //如果前面 y 小於 現在 y
                return tail_up
            }
        }
    }
    
}

function initailCanvas() {
    var canvas = document.getElementById('canvas_id');
    var context = canvas.getContext('2d'); // 固定用法

    context.fillStyle = 'gray'; //實心淺白色
    context.fillRect( 0, 0 , canvas.width , canvas.height); //畫上去底層 （ｘ, y ,width , height）

    context.font="600 30px Georgia";
    context.fillStyle = "black";
    var textString = '按下 空白鍵 開始/暫停遊戲';
    textWidth = context.measureText(textString ).width; // 取得文字寬度
    context.fillText(textString , (canvas.width/2) - (textWidth/2) , canvas.height/2.5 ); 
    var textString = '使用鍵盤 ⬅️ ➡️ 對蛇頭進行控制';
    textWidth = context.measureText(textString ).width; // 取得文字寬度
    context.fillText(textString , (canvas.width/2) - (textWidth/2) , canvas.height/2 ); 

}

function Submit() {

    const name = $('#gamer_name').val() != "" ? $('#gamer_name').val() : 'Anonymous'
    const score = $('div h2:first-child').attr('score')
    const _now_time = new Date();
    const yy = _now_time.getFullYear();
    const mm = _now_time.getMonth() + 1; //start from 0 to 11
    const dd = _now_time.getDate();
    const hour = _now_time.getHours()
    const miniute = _now_time.getMinutes()
    const second = _now_time.getSeconds()
    const now_time = yy + "/" + mm + "/" + dd + ' ' + hour + ':' + miniute + ':' + second

    $.ajax({ // 送出
        async: false, //此為等待結束 api 後才繼續往後面走
        type: "post", 
        url : "https://script.google.com/macros/s/AKfycbxL6jnN14Ma8rhovM8_P4_s2UkkgC1NlBdPkR0XWCKuvTWqkiIc68WBlGMPXT--staT/exec",
        data: {
            "method" : "write",
            "now_time" : now_time,	
            "name" : name,
            "score" : score
        },
        success : function(data , textStatus) {
            console.log('Post: ' + textStatus)
            console.log('Data: ' + data)
        } , 
        error: function( XMLHttpRequest , textStatus ) {
            console.log('Post: ' + textStatus)
        }
    })

    document.getElementById('msg_box').style.display = 'none'
    document.getElementById('msg_box').setAttribute('show' , 'false')
    initailCanvas()
    Get_Rank()

    //window.location.reload() // 重新來過，執行速度上有時會有問題，先使用其他方式替代 (可使用 async 替代)

}

function sound_effect_btn (){

    const sound_effect_icon = document.getElementById('sound_effect')

    if (now_sound_effect) {
        sound_effect_icon.setAttribute('src' , 'icon/sound_effect_mute.png')
        sound_effect_icon.style.padding = "5px"
    } else {
        sound_effect_icon.setAttribute('src' , 'icon/sound_effect.png')
        sound_effect_icon.style.padding = "5px 0px 5px 10px"
    }

    now_sound_effect = !now_sound_effect

    
}

function Get_Rank () {
    $.ajax({ 
        type: "get", 
        url : "https://script.google.com/macros/s/AKfycbwqtx1QcL2sfUsFQmntKt_gipdjIpZSF704Q2NujGFXgMmTHUrz5zY5I-Me4RfKrLQ1/exec",
        success : function(data) {
            data.sort( (a , b) => {
                return b['分數'] - a['分數'] // 降冪排列, sort 專用寫法判斷相減是否為正負數，由此判斷大小
            })
                
            const leaderboard = $('article[class="leaderboard__profile"]')

            for (i=0 ; i < data.length ; i++) { 
                $(leaderboard[i]).children("span.leaderboard__name").text( data[i]['名稱'] ) 
                $(leaderboard[i]).children("span.leaderboard__score").text( data[i]['分數'] ) 
            }
        }
    })
}

$(document).ready(function (){
    Get_Rank()
})