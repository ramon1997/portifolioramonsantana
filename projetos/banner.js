function slide1() {
    document.getElementById('id').src="imagens/som.png";
    setTimeout("slide2()", 4000)
    }

function slide2() {
    document.getElementById('id').src="imagens/camera.png";
    setTimeout("slide3()", 4000)
    }

function slide3() {
    document.getElementById('id').src="imagens/oculos.jpg";
    setTimeout("slide1()", 4000)
    }