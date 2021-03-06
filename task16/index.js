/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var city_input=document.getElementById('aqi-city-input');
var value_input=document.getElementById('aqi-value-input');

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */


function addAqiData() {
    var city=city_input.value.trim();
    var num=value_input.value.trim();
    if(!city.match(/^[A-z\u4e00-\u9fa5]+$/)){
        alert('Please input Chinese or English');
        return false;
    }
    if(!num.match(/\d/)){
        alert('Please input number');
        return  false;
    }
    aqiData[city]=num;
}

/**
 * 渲染aqi-table表格
 */


function renderAqiList() {
    var table="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var x in aqiData){
        table+="<tr> <td>"+x+"</td><td>"+aqiData[x]+"</td><td><button onclick='delBtnHandle(event)'>删除</button></td> </tr>";
    }
    document.getElementById("aqi-table").innerHTML=table;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
    // do sth.
    delete aqiData[event.target.parentNode.previousSibling.previousSibling.innerHTML];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById('add-btn').onclick=addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
/**
 * Created by quyuan on 16/4/15.
 */
