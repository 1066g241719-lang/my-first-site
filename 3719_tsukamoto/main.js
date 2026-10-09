window.onload = function(){

let lower = document.getElementById("lower");
let higher = document.getElementById("higher");
let score = document.getElementById("score");
let num = document.getElementById("num");
let end = document.getElementById("end");
let gameover = false;

function start( choice ){
  if( gameover === false ){
    if( check( choice ) === true ){
      score.innerHTML = parseInt( score.innerHTML ) + 1;
    } else {
      end.innerHTML = "GAME OVER";
      gameover = true;
    }
  }
}

function check( choice ){
  let current_value = parseInt( num.innerHTML );
  num.innerHTML = get_random_values();
  let next_value = parseInt( num.innerHTML );

  if( choice === "lower" ){
    // lower を選択した場合
    return ( next_value < current_value ) ? true : false;
  } else {
    // higher を選択した場合
    return ( current_value < next_value ) ? true : false;
  }

}

function get_random_values(){
  let current_value = parseInt( num.innerHTML );
  let next_value = Math.floor( Math.random() * 100 );  
  return ( current_value === next_value ) ? get_random_values() : next_value;
}

lower.onclick = function(){
  start("lower");
};

higher.onclick = function(){
  start("higher");
}

}
