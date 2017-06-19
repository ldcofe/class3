var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Localstorage = (function () {
    function Localstorage() {
    }
    // 获取本地localStorage
    Localstorage.MilestoneGet = function () {
        var milestone = egret.localStorage.getItem("CYDTZ_Milestone");
        //如果没有数据，那么默认值就是第一关
        if (milestone == "" || milestone == null || milestone == '0') {
            milestone = "1";
        }
        return parseInt(milestone);
    };
    //设置当前的游戏最远进度(设置本地localStorage)
    Localstorage.MilestoneSet = function (value) {
        egret.localStorage.setItem("CYDTZ_Milestone", value.toString());
    };
    return Localstorage;
}());
__reflect(Localstorage.prototype, "Localstorage");
//# sourceMappingURL=Localstorage.js.map