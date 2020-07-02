var game  = document.getElementById('game');
var p1=document.querySelector('.player1');
var p2=document.querySelector('.player2');
// var btnPlayAgain=document.querySelector('#pbtn');
// var playDiv=document.querySelector('.playAgain');
//playDiv.style='display:none'
for(let i = 0; i<9; i++){
    var btn = document.createElement('button');
    btn.setAttribute('class','el');
    game.appendChild(btn);
}

var x = 'X';
var o = 'O';
var k = 0;
var element = document.querySelectorAll('.el');
for(let j = 0; j<element.length; j++ ){
    element[j].addEventListener('click', step);
}
function step(){
    if(this.innerHTML!=''){
        return this.innerHTML;
    }
    if(k%2==0){
        this.innerHTML = x;
    }else{
        this.innerHTML = o;
    }
    k++;
    winner(); 
}
var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var player1;
var player2;

 // btnPlayAgain.addEventListener('click',playAgain);
 // function playAgain(){

 // }
if( !localStorage.getItem('name1') && !localStorage.getItem('name2')){
    
        player1=prompt("Please enter thi Player 1's name!");
        player2=prompt("Please enter thi Player 2's name!");
        localStorage.setItem('name2',player2);
        localStorage.setItem('name1',player1);
        localStorage.setItem('player1',0);
        localStorage.setItem('player2',0);
   }
        p1.innerHTML+=' ' + localStorage.getItem('name1')+ ' ---> ' +localStorage.getItem('player1');
        p2.innerHTML+=' ' + localStorage.getItem('name2')+ ' ---> ' +localStorage.getItem('player2');
function winner(){
    
    for(let a = 0; a<win.length; a++){
        if(element[win[a][0]].innerHTML==x && element[win[a][1]].innerHTML==x && element[win[a][2]].innerHTML==x){
            element[win[a][0]].style.background='red';
            element[win[a][1]].style.background='red';
            element[win[a][2]].style.background='red';
            k = 0;
            setTimeout(function(){
                alert('win x');
                location.reload();
               
            },200);
            var t= Number(localStorage.getItem('player1'));
                  t++;

            localStorage.setItem('player1',t);
             if(t >3 ){
               window.localStorage.clear();
               // game.style='display:none';
               // playDiv.style='display:block';

            }
            
        }else if(element[win[a][0]].innerHTML==o && element[win[a][1]].innerHTML==o && element[win[a][2]].innerHTML==o){
            element[win[a][0]].style.background='green';
            element[win[a][1]].style.background='green';
            element[win[a][2]].style.background='green';

            k = 0;
            setTimeout(function(){
    
                alert('win 0');
                location.reload();
               
            },200);
            var t1= Number(localStorage.getItem('player2'));
            t1++;
            localStorage.setItem('player2',t1);

                if(t1 >3){
                     window.localStorage.clear();
                     //  game.style='display:none';
                     // playDiv.style='display:block';

                }

        }else{
            setTimeout(function(){
                if(k==9){
                k = 0;
                alert('draw')
                location.reload();
            }
            },300)
            
        }
    }
}



