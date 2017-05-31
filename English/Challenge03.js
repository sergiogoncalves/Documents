
challenge3();


function readFile() {
    var fs = require('fs');

    try {
        var data = fs.readFileSync('form.txt', 'utf8');
        if(data.indexOf("\r\n") != -1)
            return new Set(data.split("\r\n"));
        else
            return new Set(data.split("\n"));
    } catch (e) {
        console.log('Error:', e.stack);
    }
}

function classify(polygons) {
    var triangles = new Set();
    var rectangles = new Set();
    var squares = new Set();
    var everythingElse = new Set();

    var lengths;
    for (var item of polygons.values()) {
        lengths = item.split(",");
        switch (lengths.length) {
            case 3:
                triangles.add(item);
                break;
            case 4:
                if ((lengths[0] == lengths[1]) && (lengths[1] == lengths[2]) && (lengths[2] == lengths[3])) {
                    squares.add(item);
                } else if ((lengths[0] == lengths[2]) && (lengths[1] == lengths[3])) {
                    rectangles.add(item);
                } else {
                    everythingElse.add(item);
                }
                break;
            default:
                everythingElse.add(item);
        }
    }
    return new Set([triangles, rectangles, squares, everythingElse]);
}

function union(setA, setB) {
    var union = new Set(setA);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

function challenge3() {
    var polygons = readFile();
    var subsets = classify(polygons);
    var testSet = new Set();
    for (var subset of subsets) {
        console.log(subset);
        testSet = union(testSet, subset);
    }
    console.log(polygons);
    console.log(testSet);
}

