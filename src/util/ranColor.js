var color = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];

// 输入最大最小值，返回区间内随机整数
export let getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
/***
 * 返回颜色
 * */
export default function () {
    return color[getRandom(0, color.length)];
}




