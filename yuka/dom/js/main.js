window.onload = function () {
    function render (data) {
        var div = document.createElement("div");
        div.innerHTML = data;
        return div;
    }

    var newArray = generateRandomArray(25);

    var section = document.getElementById("sortVisualization");

    var div = newArray.map(render).forEach(function(arrayData) {
        section.appendChild(arrayData);

    });

    var height = function (array) {

    }

    document.getElementById("startSorting").addEventListener("click", function () {
        sortInsertion(newArray);
        var anotherArray = newArray.map(render);

        section.innerHTML = "";

        anotherArray.forEach(function(node) {
            section.appendChild(node);
        })
    })
};

