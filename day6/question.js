is_array("W3 resource");
is_array([1, 2, 4, 0]);

array_Clone([1, 2, 4, 0]);
array_Clone([1, 2, [4, 0]]);

first([7, 9, 0, -2]);
first([], 3);
first([7, 9, 0, -2], 3);
first([7, 9, 0, -2], 6);
first([7, 9, 0, -2], -3);

//question-1

function is_array(n) {
    document.write(Array.isArray(n) + "<br>");
    console.log(Array.isArray(n));
}



//question-2 (can also be done using slice(0))


function array_Clone(m) {
    document.write([...m] + "<br>");
    console.log([...m]);
}


//question-3


function first(s, p) {
    if (p == null) {
        document.write(s[0] + "<br>");
        console.log(s[0]);
    }

    else if (p < 0) {
        // document.write(s.slice(0,0));
        document.write("[]" + "<br>");
        console.log(s.slice(0, 0));
    }

    else {

        if (s == null) {
            document.write("[]" + "<br>");
        }

        else {
            document.write(s.slice(0, p) + "<br>");
        }

        console.log(s.slice(0, p));
    }


};



//question-4


var mycolor = ["Red", "Green", "White", "Black"];

document.write(mycolor.toString() + "<br>");
console.log(mycolor.toString());

document.write(mycolor.join() + "<br>");
console.log(mycolor.join(","));

document.write(mycolor.join("+") + "<br>");
console.log(mycolor.join("+"));




//question-5

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

arr1.sort();
var max = 1;
var ans = arr1[0], i;
var count = 1;

for (i = 1; i < arr1.length; i++) {
    if (arr1[i] == arr1[i - 1])
        count++;
    else {
        if (count > max) {
            max = count;
            ans = arr1[i - 1];
        }
        count = 1;
    }
}


if (count > max) {
    max = count;
    ans = arr1[arr1.length - 1];
}

document.write(ans + " " + "( " + (count) + " times" + ") ");
console.log(ans + " " + "( " + (count) + " times" + ") ");

