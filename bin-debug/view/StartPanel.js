var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StartPanel = (function (_super) {
    __extends(StartPanel, _super);
    function StartPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = 'startView';
        _this.init();
        return _this;
    }
    StartPanel.prototype.init = function () {
        if (!GlobalData.bgSounds) {
            // 播放游戏音乐
            GlobalData.bgSounds = Sounds.gameBgAudio.play();
            GlobalData.bgSounds.volume = 0.3;
        }
        this.MainPlayBtn_png.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchMainPlayBtn, this);
        this.MainRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchMainRight, this);
        this.MainLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchMainLeft, this);
        this.MainCurriculumschedule.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchMainCurriculumschedule, this);
        this.MainDanciKaBen.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchMainDanciKaBen, this);
        this.MainGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchMainGameBtn, this);
        this.ListEning.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchListEning, this);
        this.MainTest.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchMainTest, this);
    };
    // 主按钮点击触发
    StartPanel.prototype.onTouchMainPlayBtn = function () {
        publicClass.BtnTween(this, this.MainPlayBtn_png, this.onDisPMainPlayBtn);
    };
    // 动画完成后触发
    StartPanel.prototype.onDisPMainPlayBtn = function () {
        Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    // 主右边按钮
    StartPanel.prototype.onTouchMainRight = function () {
        publicClass.BtnTween(this, this.MainRight, this.onDisPMainRight);
    };
    // 右边按钮动画完成后触发
    StartPanel.prototype.onDisPMainRight = function () {
        // Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
    };
    // 主左边按钮点击触发
    StartPanel.prototype.onTouchMainLeft = function () {
        publicClass.BtnTween(this, this.MainLeft, this.onDisPMainLeft);
    };
    // 左边按钮动画完成后触发
    StartPanel.prototype.onDisPMainLeft = function () {
        // Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
    };
    // 主课程表按钮点击触发
    StartPanel.prototype.onTouchMainCurriculumschedule = function () {
        publicClass.BtnTween(this, this.MainCurriculumschedule, this.onDisPMainCurriculumschedule);
    };
    // 课程表动画完成后触发
    StartPanel.prototype.onDisPMainCurriculumschedule = function () {
        Global.dispatchEvent(MainNotify.openCurriculumScheduleNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    // 主单词卡按钮点击触发
    StartPanel.prototype.onTouchMainDanciKaBen = function () {
        publicClass.BtnTween(this, this.MainDanciKaBen, this.onDisPMainDanciKaBen);
    };
    // 单词卡动画完成后触发
    StartPanel.prototype.onDisPMainDanciKaBen = function () {
        Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    // 主游戏按钮按钮点击触发
    StartPanel.prototype.onTouchMainGameBtn = function () {
        publicClass.BtnTween(this, this.MainGameBtn, this.onDisPMainGameBtn);
    };
    // 游戏按钮动画完成后触发(zyh)
    // private onDisPMainGameBtn(){
    //     Global.dispatchEvent(MainNotify.openGamePanelNotify, null, false);
    //     Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    // }
    StartPanel.prototype.onDisPMainGameBtn = function () {
        Global.dispatchEvent(MainNotify.openGameCutNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    // 主音乐按钮点击触发
    StartPanel.prototype.onTouchListEning = function () {
        publicClass.BtnTween(this, this.ListEning, this.onDisPListEning);
    };
    // 动画完成后触发
    StartPanel.prototype.onDisPListEning = function () {
        // Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
    };
    // 主测试按钮点击触发
    StartPanel.prototype.onTouchMainTest = function () {
        publicClass.BtnTween(this, this.MainTest, this.onDisPMainTest);
    };
    // 测试按钮动画完成后触发
    StartPanel.prototype.onDisPMainTest = function () {
        Global.dispatchEvent(MainNotify.openTestInterfaceNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    // 获取面板宽度
    StartPanel.prototype.getWidth = function () {
        return this.width;
    };
    // 获取面板高度
    StartPanel.prototype.getHeight = function () {
        return this.height;
    };
    return StartPanel;
}(eui.Component));
__reflect(StartPanel.prototype, "StartPanel");
//# sourceMappingURL=StartPanel.js.map