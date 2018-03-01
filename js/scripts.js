function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return 'Nieprawidłowe dane';
    }
    return a * h / 2;
}

function calculateTriangleArea() {
    var x = prompt('Podaj długość podstawy trójkąta');
    var y = prompt('Podaj wysokość trójkąta');
    var result = getTriangleArea(x, y);
    var msg = 'Wynik obliczeń: ' + result;

    console.log(msg); 
    alert(msg);
}

calculateTriangleArea();
calculateTriangleArea();
calculateTriangleArea();