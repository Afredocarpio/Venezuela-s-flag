const pantalla = document.querySelector('canvas');
const pincel = pantalla.getContext('2d');

//color del canvas
pincel.fillStyle = '#30BA8F';
// parametros x y y del canvas
pincel.fillRect(0, 0, 600, 500);


//bandera
pincel.fillStyle = '#FDFC74';
pincel.fillRect(0, 0, 600, 150);

pincel.fillStyle = '#1F75FE';
pincel.fillRect(0, 150, 600, 170);

pincel.fillStyle = '#EE204D';
pincel.fillRect(0,320, 600, 200);


/* pincel.fillStyle = '#EDEDED';
pincel.beginPath();//funcion para iniciar el movimento
pincel.moveTo(300, 200);//cordenada del movimento

pincel.lineTo(50, 50);
pincel.lineTo(100, 60);
pincel.lineTo(60, 80);
pincel.lineTo(10, 100);

pincel.fill();

*/

function strokeStar(x, y, r, n, inset) {
    pincel.save();
    pincel.beginPath();
    pincel.translate(x, y);
    pincel.moveTo(0,0-r);
    for (var i = 0; i < n; i++) {
        pincel.rotate(Math.PI / n);
        pincel.lineTo(0, 0 - (r*inset));
        pincel.rotate(Math.PI / n);
        pincel.rotate(Math.PI / n);
        pincel.rotate(Math.PI / n);
        pincel.lineTo(0, 0 - r);
    }
    pincel.closePath();
    pincel.fill();
    pincel.restore();
}

strokeStar(160, 270, 15, 5, pincel.fillStyle = '#EDEDED' );
strokeStar(190, 235, 15, 5, pincel.fillStyle = '#EDEDED' );
strokeStar(230, 210, 15, 5, pincel.fillStyle = '#EDEDED' );
strokeStar(276, 200, 15, 5, pincel.fillStyle = '#EDEDED' );
strokeStar(322, 200, 15, 5, pincel.fillStyle = '#EDEDED' );
strokeStar(370, 210, 15, 5, pincel.fillStyle = '#EDEDED' );
strokeStar(410, 235, 15, 5, pincel.fillStyle = '#EDEDED' );
strokeStar(440, 270, 15, 5, pincel.fillStyle = '#EDEDED' );