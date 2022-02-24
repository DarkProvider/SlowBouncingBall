let ball = document.getElementById('float-circle');


function handler(){

    document.addEventListener('keydown', down, false);
    document.addEventListener('keyup', up, false);

}


function up() {
    ball.style.bottom = '50px';
};


function down() {
    ball.style.bottom = '250px';

};


handler();