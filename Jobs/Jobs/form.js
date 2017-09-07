// d3.json("flare.json", function(json) {
//     console.log("json :" + json.text);
// taskArray=json;
// });

var w = 800;
var h = 500;

var svg = d3.selectAll(".svg")
//.selectAll("svg")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "svg");

var taskArray = subArray;

var dateFormat= d3.time.format("%H:%M");


var timeScale =
    d3.time.scale()
        .domain([d3.min(taskArray, function(d) {return dateFormat.parse(d.expected_start_PST);}),
            d3.max(taskArray, function(d) {return dateFormat.parse(d.expected_end_PST);})])
        .range([0,w-150]);

var categories = [];

function linearDuplication(){
    var i=0;
    while(taskArray[i]!=undefined){
        if(taskArray[i].parent_job_names == ""){
            taskArray[i].parent_job_names = taskArray[i].job_name;
        }else{
            // console.log("length :" + taskArray.length);
            // console.log("parent  of " + i + " : "+taskArray[i].job_name +taskArray[i].parent_job_names);
            var tasktypes1 = taskArray[i].parent_job_names.split(",");
            //console.log(" array of types " +tasktypes1);
            taskArray[i].parent_job_names=tasktypes1[0];
            for(var j=1;j<tasktypes1.length;j++){
                var t = {
                    "job_name":taskArray[i].job_name,
                    "parent_job_names":tasktypes1[j],
                    "expected_start_PST":taskArray[i].expected_start_PST,
                    "expected_end_PST":taskArray[i].expected_end_PST};
                taskArray.push(t);
            }
        }
        i++;
    }
}
linearDuplication();

function findroot(task) {
    for (var i = 0; i < taskArray.length; i++) {
        if (taskArray[i].job_name == task) {
            console.log("task : " + task +"\n Task type : "+taskArray[i].parent_job_names );
            if (taskArray[i].parent_job_names != taskArray[i].job_name) {
                findroot(taskArray[i].parent_job_names);
            }
            else {
                return taskArray[i].job_name;
            }
        }
    }
}

function assignCategory() {
    for (var i = 0; i < taskArray.length; i++){
        if(taskArray[i].parent_job_names != taskArray[i].job_name){
            categories.push(findroot(taskArray[i].parent_job_names));
        }else {
            categories.push(findroot(taskArray[i].job_name));
        }
    }
}

assignCategory();

function compare(a,b) {
    if (a.parent_job_names < b.parent_job_names)
        return -1;
    if (a.parent_job_names > b.parent_job_names)
        return 1;
    return 0;
}

function compareS(a,b) {
    if (a< b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}

taskArray.sort(compare);

var catsUnfiltered = categories; //for vert labels

categories = checkUnique(categories);
catsUnfiltered.sort(compareS);
categories.sort(compareS);

makeGant(taskArray, w, h);

var title = svg.append("text")
    .text("Gantt Chart Process")
    .attr("x", w/2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-size", 18)
    .attr("fill", "#009FFC");


 // function belows are used to create Gantt Chart

function makeGant(tasks, pageWidth, pageHeight){
console.log("make gantt");
    var barHeight = 20;
    var gap = barHeight + 4;
    var topPadding = 75;
    var sidePadding = 75;

    var colorScale = d3.scale.linear()
        .domain([0, categories.length])
        .range(["#00B9FA", "#F95002"])
        .interpolate(d3.interpolateHcl);

    makeGrid(sidePadding, topPadding, pageWidth, pageHeight);
    drawRects(tasks, gap, topPadding, sidePadding, barHeight, colorScale, pageWidth, pageHeight);

    vertLabels(gap, topPadding, sidePadding, barHeight, colorScale);

}


function drawRects(theArray, theGap, theTopPad, theSidePad, theBarHeight, theColorScale, w, h){
console.log(" drawRe");
    var bigRects = svg.append("g")
        .selectAll("rect")
        .data(theArray)
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", function(d, i){
            return i*theGap + theTopPad - 2;
        })
        .attr("width", function(d){
            return w-theSidePad/2;
        })
        .attr("height", theGap)
        .attr("stroke", "none")
        .attr("fill", function(d){
            for (var i = 0; i < categories.length; i++){
                if (d.parent_job_names == categories[i]){
                    return d3.rgb(theColorScale(i));
                }
            }
        })
        .attr("opacity", 0.2);


    var rectangles = svg.append('g')
        .selectAll("rect")
        .data(theArray)
        .enter();


    var innerRects = rectangles.append("rect")
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("x", function(d){
            return timeScale(dateFormat.parse(d.expected_start_PST)) + theSidePad;
        })
        .attr("y", function(d, i){
            return i*theGap + theTopPad;
        })
        .attr("width", function(d){
            return (timeScale(dateFormat.parse(d.expected_end_PST))-timeScale(dateFormat.parse(d.expected_start_PST)));
        })
        .attr("height", theBarHeight)
        .attr("stroke", "none")
        .attr("fill", function(d){
            for (var i = 0; i < categories.length; i++){
                if (d.parent_job_names == categories[i]){
                    return d3.rgb(theColorScale(i));
                }
            }
        })


    // var rectText = rectangles.append("text")
    //     .text(function(d){
    //         return d.job_name;
    //     })
    //     .attr("x", function(d){
    //         return (timeScale(dateFormat.parse(d.expected_end_PST))-timeScale(dateFormat.parse(d.expected_start_PST)))/2 + timeScale(dateFormat.parse(d.expected_start_PST)) + theSidePad;
    //     })
    //     .attr("y", function(d, i){
    //         return i*theGap + 14+ theTopPad;
    //     })
    //     .attr("font-size", 11)
    //     .attr("text-anchor", "middle")
    //     .attr("text-height", theBarHeight)
    //     .attr("fill", "#fff");


    innerRects.on('mouseover', function(e) {
        // console.log(this.x.animVal.getItem(this));
        var tag = "";

        if (d3.select(this).data()[0].details != undefined){
            tag = "Task: " + d3.select(this).data()[0].job_name + "<br/>" +
                "Type: " + d3.select(this).data()[0].parent_job_names + "<br/>" +
                "Starts: " + d3.select(this).data()[0].expected_start_PST + "<br/>" +
                "Ends: " + d3.select(this).data()[0].expected_end_PST + "<br/>" +
                "Details: " + d3.select(this).data()[0].details;
        } else {
            tag = "Task: " + d3.select(this).data()[0].job_name + "<br/>" +
                "Type: " + d3.select(this).data()[0].parent_job_names + "<br/>" +
                "Starts: " + d3.select(this).data()[0].expected_start_PST + "<br/>" +
                "Ends: " + d3.select(this).data()[0].expected_end_PST;
        }
        var output = document.getElementById("tag");

        var x = this.x.animVal.getItem(this) + "px";
        var y = this.y.animVal.getItem(this) + 25 + "px";

        output.innerHTML = tag;
        output.style.top = y;
        output.style.left = x;
        output.style.display = "block";
    }).on('mouseout', function() {
        var output = document.getElementById("tag");
        output.style.display = "none";
    });


    innerRects.on('mouseover', function(e) {
        //console.log(this);
        var tag = "";

        if (d3.select(this).data()[0].details != undefined){
            tag = "Task: " + d3.select(this).data()[0].job_name + "<br/>" +
                "Type: " + d3.select(this).data()[0].parent_job_names + "<br/>" +
                "Starts: " + d3.select(this).data()[0].expected_start_PST + "<br/>" +
                "Ends: " + d3.select(this).data()[0].expected_end_PST + "<br/>" +
                "Details: " + d3.select(this).data()[0].details;
        } else {
            tag = "Task: " + d3.select(this).data()[0].job_name + "<br/>" +
                "Type: " + d3.select(this).data()[0].parent_job_names + "<br/>" +
                "Starts: " + d3.select(this).data()[0].expected_start_PST + "<br/>" +
                "Ends: " + d3.select(this).data()[0].expected_end_PST;
        }
        var output = document.getElementById("tag");

        var x = (this.x.animVal.value + this.width.animVal.value/2) + "px";
        var y = this.y.animVal.value + 25 + "px";

        output.innerHTML = tag;
        output.style.top = y;
        output.style.left = x;
        output.style.display = "block";
    }).on('mouseout', function() {
        var output = document.getElementById("tag");
        output.style.display = "none";

    });



}


function makeGrid(theSidePad, theTopPad, w, h){

    var xAxis = d3.svg.axis()
        .scale(timeScale)
        .orient('bottom')
        .ticks(d3.time.hours, 1)
        .tickSize(-h+theTopPad+20, 0, 0)
        .tickFormat(d3.time.format('%H:%M'));

    var grid = svg.append('g')
        .attr('class', 'grid')
        .attr('transform', 'translate(' +theSidePad + ', ' + (h - 50) + ')')
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("fill", "#000")
        .attr("stroke", "none")
        .attr("font-size", 10)
        .attr("dy", "1em");
}

function vertLabels(theGap, theTopPad, theSidePad, theBarHeight, theColorScale){
    var numOccurances = new Array();
    var prevGap = 0;

    for (var i = 0; i < categories.length; i++){
        numOccurances[i] = [categories[i], getCount(categories[i], catsUnfiltered)];
    }

    var axisText = svg.append("g") //without doing this, impossible to put grid lines behind text
        .selectAll("text")
        .data(numOccurances)
        .enter()
        .append("text")
        .text(function(d){
            return d[0];
        })
        .attr("x", -100) // padding of the text from left and right the frame
        .attr("y", function(d, i){ // paddinf from top and bottom
            if (i > 0){
                for (var j = 0; j < i; j++){
                    prevGap += numOccurances[i-1][1];
                    // console.log(prevGap);
                    return d[1]*theGap/2 + prevGap*theGap + theTopPad;
                }
            } else{
                return d[1]*theGap/2 + theTopPad;
            }
        })
        .attr("font-size", 11)
        .attr("text-anchor", "start")
        .attr("text-height", 14)
        .attr("fill", function(d){
            for (var i = 0; i < categories.length; i++){
                if (d[0] == categories[i]){
                    //  console.log("true!");
                    return d3.rgb(theColorScale(i)).darker();
                }
            }
        });

}

//from this stackexchange question: http://stackoverflow.com/questions/1890203/unique-for-arrays-in-javascript
function checkUnique(arr) {
    console.log("in checkUnique");
    var hash = {}, result = [];
    for ( var i = 0, l = arr.length; i < l; ++i ) {
        if ( !hash.hasOwnProperty(arr[i]) ) { //it works with objects! in FF, at least
            hash[ arr[i] ] = true;
            result.push(arr[i]);
        }
    }
    return result;
}

//from this stackexchange question: http://stackoverflow.com/questions/14227981/count-how-many-strings-in-an-array-have-duplicates-in-the-same-array
function getCounts(arr) {
    console.log("getcounts");
    var i = arr.length, // var to loop over
        obj = {}; // obj to store results
    while (i) obj[arr[--i]] = (obj[arr[i]] || 0) + 1; // count occurrences
    return obj;
}

// get specific from everything
function getCount(word, arr) {
    console.log("getcount");
    return getCounts(arr)[word] || 0;
}


