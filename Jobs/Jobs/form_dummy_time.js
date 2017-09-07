var w = 800;
var h = 400;

var margin = {
    top : 20,
    right : 40,
    bottom : 20,
    left : 150
};

var svg = d3.selectAll(".svg")
//.selectAll("svg")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "svg");

console.log("in js file");



var taskArray=[
    {
        job_name: "conceptualize",
        parent_job_names: "development",
        expected_start_PST: "00:00",
        expected_end_PST: "00:15"

    },

    {
        job_name: "sketch",
        parent_job_names: "development",
        expected_start_PST: "03:00",
        expected_end_PST: "03:15"

    },

    {
        job_name: "color profiles",
        parent_job_names: "development",
        expected_start_PST: "06:00 ",
        expected_end_PST: "06:15"
    },

    {
        job_name: "HTML",
        parent_job_names: "coding",
        expected_start_PST: "01:00",
        expected_end_PST: "01:15"

    },

    {
        job_name: "write the JS",
        parent_job_names: "coding",
        expected_start_PST: "07:00",
        expected_end_PST: "07:15"
    },

    {
        job_name: "advertise",
        parent_job_names: "promotion",
        expected_start_PST: "10:00",
        expected_end_PST: "10:15"

    },

    {
        job_name: "spam links",
        parent_job_names: "promotion",
        expected_start_PST: "11:00",
        expected_end_PST: "11:15"
    },

    {
        job_name: "eat",
        parent_job_names: "celebration,promotion",
        expected_start_PST: "02:00",
        expected_end_PST: "02:15"

    },
    {
        job_name: "advertise",
        parent_job_names: "promotion,celebration",
        expected_start_PST: "09:15",
        expected_end_PST: "09:30"

    },
    {
        job_name: "crying",
        parent_job_names: "celebration",
        expected_start_PST: "04:00",
        expected_end_PST: "04:15"
    },
    {
        job_name: "development",
        parent_job_names: "development",
        expected_start_PST: "02:15",
        expected_end_PST: "02:30"
    },
    {
        job_name: "coding",
        parent_job_names: "coding",
        expected_start_PST: "03:45",
        expected_end_PST: "04:00"
    },
    {

        job_name: "promotion",
        parent_job_names: "promotion",
        expected_start_PST: "05:00",
        expected_end_PST: "05:15"
    },
    {

        job_name: "celebration",
        parent_job_names: "celebration",
        expected_start_PST: "08:15",
        expected_end_PST: "08:30"
    }

]





// d3.json("flare.json", function(json) {
//     console.log("json :" + json.text);
// taskArray=json;
// });
console.log(taskArray);
var dateFormat= d3.time.format("%H:%M");
//for(var i=0;i<taskArray.length;i++){
var i=0;
while(taskArray[i]!=undefined){
    if(taskArray[i].parent_job_names==""){
        taskArray[i].parent_job_names=taskArray[i].job_name;
    }else{
        // console.log("length :" + taskArray.length);
        // console.log("parent  of " + i + " : "+taskArray[i].job_name +taskArray[i].parent_job_names);
        var tasktypes1 = taskArray[i].parent_job_names.split(",");
        //console.log(" array of types " +tasktypes1);
        taskArray[i].parent_job_names=tasktypes1[0];
        for(var j=1;j<tasktypes1.length;j++){
            var t={job_name:taskArray[i].job_name,parent_job_names:tasktypes1[j],expected_start_PST:taskArray[i].expected_start_PST,expected_end_PST:taskArray[i].expected_end_PST};
            taskArray.push(t);
        }}
    i++;
}
var timeScale =
    d3.time.scale()
        .domain([d3.min(taskArray, function(d) {return dateFormat.parse(d.expected_start_PST);}),
            d3.max(taskArray, function(d) {return dateFormat.parse(d.expected_end_PST);})])
        .range([0,w-150]);

var categories = new Array();
console.log(taskArray);
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
for (var i = 0; i < taskArray.length; i++){
    if(taskArray[i].parent_job_names!=taskArray[i].job_name){
        categories.push(findroot(taskArray[i].parent_job_names));
    }else{
        categories.push(findroot(taskArray[i].job_name));

    }
}function compare(a,b) {
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


console.log(taskArray);
taskArray.sort(compare);



console.log(taskArray);
var catsUnfiltered = categories; //for vert labels

categories = checkUnique(categories);
catsUnfiltered.sort(compareS);
categories.sort(compareS);
console.log("categories: " + categories + "\n catsUnfiltered : "+catsUnfiltered);
makeGant(taskArray, w, h);

var title = svg.append("text")
    .text("Gantt Chart Process")
    .attr("x", w/2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .attr("font-size", 18)
    .attr("fill", "#009FFC");



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
        .ticks(d3.time.second, 1)
        .tickSize(8)
        .tickFormat(d3.time.format('%h %m'));

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
        .attr("x", 10)
        .attr("y", function(d, i){
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