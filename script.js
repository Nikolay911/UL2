function square_equation() {
    var a = document.square.square_a.value;
    var b = document.square.square_b.value;
    var c = document.square.square_c.value;
    var sol = document.getElementById("square_sol");

    if (((a > 0 || a < 0) && (b > 0 || b < 0) && (c > 0 || c < 0)) && (isFinite(a) && isFinite(b) && isFinite(c))) {
        var d = b * b - 4 * a * c;
        if (d < 0) {
            p1 = -b / (2 * a);
            p2 = Math.sqrt(Math.abs(d) / (2 * a));
            l1 = String(Number(p1.toFixed(3))) + "+ (" + String(Number(p2.toFixed(3))) + "i)";
            string1 = l1;


            l2 = String(Number(p1.toFixed(3))) + "+ (" + String(Number(-p2.toFixed(3))) + "i)";
            string2 = l2;

        } else {
            if (d == 0) {
                string1 = (-b / (2 * a)).toFixed(3);
                string2 = (-b / (2 * a)).toFixed(3);
            } else {
                string1 = (-b / (2 * a) - Math.sqrt(d) / (2 * a)).toFixed(3);

                string2 = (-b / (2 * a) + Math.sqrt(d) / (2 * a)).toFixed(3);

            }
        }
        if (p.innerHTML == 1) {
            sol.innerHTML = "<table class= table_col ></colgroup>" +
                "<tr>" +
                "<th>" + "a" + "</th>" +
                "<th>" + "b" + "</th>" +
                "<th>" + "c" + "</th>" +
                "<th>" + "x1" + "</th>" +
                "<th>" + "x2" + "</th>" +
                "</tr>" +
                "<table class='created-table table_col1'></colgroup>" +
                "<tr>" +
                "<td >" + a + "</td>" +
                "<td >" + b + "</td>" +
                "<td >" + c + "</td>" +
                "<td>" + String(string1) + "</td>" +
                "<td >" + String(string2) + "</td>" +
                "</tr>" +
                "</table>";
        } else {
            if (p.innerHTML % 2 == 1) {
                sol.innerHTML += "<table class='created-table table_col1'>" +
                    "<tr>" +
                    "<td>" + a + "</td>" +
                    "<td>" + b + "</td>" +
                    "<td>" + c + "</td>" +
                    "<td>" + string1 + "</td>" +
                    "<td>" + string2 + "</td>" +
                    "</tr>" +
                    "</table>";
            } else {
                sol.innerHTML += "<table class='created-table table_col' >" +
                    "<tr>" +
                    "<td>" + a + "</td>" +
                    "<td>" + b + "</td>" +
                    "<td>" + c + "</td>" +
                    "<td>" + string1 + "</td>" +
                    "<td>" + string2 + "</td>" +
                    "</tr>" +
                    "</table>";
            }

        }




    } else if (a == 0 && b == 0 && c == 0) {
        prompt("Нет решений!");
        p.innerHTML = p.innerHTML - 1;
    } else if (a == 0 && b == 0 && c != 0) {
        prompt("Нет решений!");
        p.innerHTML = p.innerHTML - 1;
    } else if ((a == 0 && b != 0) || b == 0 && a != 0) {
        if (a == 0 && b != 0) {
            string1 = -(c / b).toFixed(3);
            string2 = -(c / b).toFixed(3);
        } else if ((c <= 0 && a > 0) || (c > 0 && a < 0)) {
            string1 = Math.sqrt((-c / a)).toFixed(3);
            string2 = -Math.sqrt((-c / a)).toFixed(3);
        } else if ((c <= 0 && a < 0) || (c > 0 && a > 0)) {
            string1 = Math.sqrt(c / a).toFixed(3) + "i";
            string2 = -Math.sqrt(c / a).toFixed(3) + "i";
        }

        if (p.innerHTML == 1) {
            sol.innerHTML = "<table class= table_col ></colgroup>" +
            "<tr>" +
            "<th>" + "a" + "</th>" +
            "<th>" + "b" + "</th>" +
            "<th>" + "c" + "</th>" +
            "<th>" + "x1" + "</th>" +
            "<th>" + "x2" + "</th>" +
            "</tr>" +
            "<table class='created-table table_col1'></colgroup>" +
            "<tr>" +
            "<td>" + a + "</td>" +
            "<td>" + b + "</td>" +
            "<td>" + c + "</td>" +
            "<td>" + string1 + "</td>" +
            "<td>" + string2 + "</td>" +
            "</tr>" +
            "</table>";
        } else {
            if (p.innerHTML % 2 == 1) {
                sol.innerHTML += "<table class='created-table table_col1'>" +
                    "<tr>" +
                    "<td>" + a + "</td>" +
                    "<td>" + b + "</td>" +
                    "<td>" + c + "</td>" +
                    "<td>" + string1 + "</td>" +
                    "<td>" + string2 + "</td>" +
                    "</tr>" +
                    "</table>";
            } else {
                sol.innerHTML += "<table class='created-table table_col' >" +
                    "<tr>" +
                    "<td>" + a + "</td>" +
                    "<td>" + b + "</td>" +
                    "<td>" + c + "</td>" +
                    "<td>" + string1 + "</td>" +
                    "<td>" + string2 + "</td>" +
                    "</tr>" +
                    "</table>";
            }

         }
        } else {
        prompt("введите число!");
        p.innerHTML = p.innerHTML - 1;
    }


    let trElem = document.getElementsByClassName('created-table');
if((p.innerHTML%2!=0 && trElem.length%2==0) || (p.innerHTML%2!=1 && trElem.length%2==1)){
    for (var i = 0; i < trElem.length; i++) {
        trElem[i].addEventListener('click', function () {
            if (this.classList.contains('created-table')) {
                this.remove();
            }

            for (var j = 0; j < trElem.length; j++) {
                trElem[j].classList.remove('table_col1');
                trElem[j].classList.remove('table_col');
            };

            for (var k = 0; k < trElem.length; k++) {
                if (k % 2 != 0) {
                    trElem[k].classList.add('table_col1');
                } else {
                    trElem[k].classList.add('table_col');
                }
            }
        })
    };
}
else{
    for (var i = 0; i < trElem.length; i++) {
        trElem[i].addEventListener('click', function () {
            if (this.classList.contains('created-table')) {
                this.remove();
            }

            for (var j = 0; j < trElem.length; j++) {
                trElem[j].classList.remove('table_col1');
                trElem[j].classList.remove('table_col');
            };

            for (var k = 0; k < trElem.length; k++) {
                if (k % 2 != 0) {
                    trElem[k].classList.add('table_col');
                } else {
                    trElem[k].classList.add('table_col1');
                }
            }
        })
    };
}
    
}




function iteration() {
    p = document.getElementById('iteration');
    p.innerHTML = String(Number(p.innerHTML) + Number(1));
}