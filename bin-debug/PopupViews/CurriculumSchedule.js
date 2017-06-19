var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CurriculumSchedule = (function (_super) {
    __extends(CurriculumSchedule, _super);
    function CurriculumSchedule() {
        var _this = _super.call(this) || this;
        _this.skinName = 'CurricuPropup';
        _this.init();
        return _this;
    }
    CurriculumSchedule.prototype.init = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
    };
    CurriculumSchedule.prototype.onTouch = function () {
        Global.dispatchEvent(MainNotify.closeCurriculumScheduleNotify, null, false);
    };
    // 获取面板宽度
    CurriculumSchedule.prototype.getWidth = function () {
        return this.width;
    };
    // 获取面板高度
    CurriculumSchedule.prototype.getHeight = function () {
        return this.height;
    };
    return CurriculumSchedule;
}(eui.Component));
__reflect(CurriculumSchedule.prototype, "CurriculumSchedule");
//# sourceMappingURL=CurriculumSchedule.js.map