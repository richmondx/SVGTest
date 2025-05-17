/// <reference path="@types/jquery/index.d.ts" />
/// <reference path="@types/underscore/index.d.ts" />
/// <reference path="@types/svg.js.d.ts" />

let canvasInfo={
    width:480,
    height:640
};
let rootSVg=$("#组_1")[0];
let circleStyle=" fill: none;stroke-width: 2px;stroke: lime;";
let group=SVG("#组_1").group();
let circle=group.circle(canvasInfo.width*0.5).center(canvasInfo.width*0.5,canvasInfo.height*0.5);
circle.attr("style",circleStyle);
console.log(circle);
