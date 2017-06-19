var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 游戏结束画面
var GameOverPropUpLei = (function (_super) {
    __extends(GameOverPropUpLei, _super);
    function GameOverPropUpLei(e) {
        var _this = _super.call(this) || this;
        // this.xingxingOwn.scaleX = 0.1;
        // this.xingxingOwn.scaleX = 0.1;
        _this.skinName = 'gameOver';
        // 添加进列表时的监听器
        // this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);
        _this.onAdd(e);
        // 从列表删除时的监听器
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
        return _this;
    }
    // 添加进列表执行的函数
    GameOverPropUpLei.prototype.onAdd = function (e) {
        this.ScopeObj = e.param.scope;
        var n = 0;
        Sounds.jiangli.play(0, 1);
        egret.setInterval(function () {
            n++;
            this.defenbanBg.rotation = n;
        }, this, 100);
        this.xingxingOwnMoviep = MovieClipClass.onAdd("xingxingBgMoviep_json", "xingxingBgMoviep_png", this.xingxingOwnGroup, 'jieshuxingxing');
        MovieClipClass.playOnce(this.xingxingOwnMoviep, "xingxingMoviep");
        this.xingxingOwnMoviep.addEventListener(egret.Event.COMPLETE, function () {
            this.xingxingTwoMoviep = MovieClipClass.onAdd("xingxingBgMoviep_json", "xingxingBgMoviep_png", this.xingxingTwoGroup, 'jieshuxingxing');
            MovieClipClass.playOnce(this.xingxingTwoMoviep, "xingxingMoviep");
            this.xingxingTwoMoviep.addEventListener(egret.Event.COMPLETE, function () {
                this.xingxingThreeMoviep = MovieClipClass.onAdd("xingxingBgMoviep_json", "xingxingBgMoviep_png", this.xingxingThreeGroup, 'jieshuxingxing');
                MovieClipClass.playOnce(this.xingxingThreeMoviep, "xingxingMoviep");
            }, this);
        }, this);
        this.xingxingOwn.scaleX = 0;
        this.xingxingOwn.scaleY = 0;
        this.xingxingtwo.scaleX = 0;
        this.xingxingtwo.scaleY = 0;
        this.xingxingthree.scaleX = 0;
        this.xingxingthree.scaleY = 0;
        // // this.xingxingOwn
        this.replaying.addEventListener(egret.TouchEvent.TOUCH_TAP, this[this.ScopeObj], this);
        // this.return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGammStart,this);
        egret.Tween.get(this.xingxingOwn).to({ scaleX: 1, scaleY: 1 }, 300).call(function () {
            egret.Tween.get(this.xingxingtwo).to({ scaleX: 1, scaleY: 1 }, 300).call(function () {
                egret.Tween.get(this.xingxingthree).to({ scaleX: 1, scaleY: 1 }, 300).call(function () {
                }, this);
            }, this);
        }, this);
    };
    // 从列表删除执行的函数
    GameOverPropUpLei.prototype.onRemove = function () {
        // 从列表移除时注销监听器
        // this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);
        // this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    };
    GameOverPropUpLei.prototype.onGamePlay = function () {
        Global.dispatchEvent(MainNotify.openTestInterfaceNotify, null, false);
        Global.dispatchEvent(MainNotify.closeGameCutNotify, null, false);
        Global.dispatchEvent(MainNotify.closeGamePanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeBonusInterfaceNotify, null, false);
    };
    GameOverPropUpLei.prototype.onStartGame = function () {
        Global.dispatchEvent(MainNotify.openStartPanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeGameCutNotify, null, false);
        Global.dispatchEvent(MainNotify.closeTestInterfaceNotify, null, false);
        Global.dispatchEvent(MainNotify.closeBonusInterfaceNotify, null, false);
    };
    GameOverPropUpLei.prototype.onGamePanel = function () {
        Global.dispatchEvent(MainNotify.openGamePanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeGameCutNotify, null, false);
        Global.dispatchEvent(MainNotify.closeDancikaKuozhanNotify, null, false);
        Global.dispatchEvent(MainNotify.closeBonusInterfaceNotify, null, false);
    };
    GameOverPropUpLei.prototype.onGameCut = function () {
        Global.dispatchEvent(MainNotify.openGameCutNotify, null, false);
        Global.dispatchEvent(MainNotify.closeGamePanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeDancikaKuozhanNotify, null, false);
        Global.dispatchEvent(MainNotify.closeBonusInterfaceNotify, null, false);
    };
    // private onGammStart():void{
    // 	commonState.GameOverCheckpointsOnOff = false
    // 	this.dispatchEventWith(EventTypes.GAMESTART);
    // }
    // 获取面板宽度
    GameOverPropUpLei.prototype.getWidth = function () {
        return this.width;
    };
    // 获取面板高度
    GameOverPropUpLei.prototype.getHeight = function () {
        return this.height;
    };
    return GameOverPropUpLei;
}(eui.Component));
__reflect(GameOverPropUpLei.prototype, "GameOverPropUpLei");
//# sourceMappingURL=GameOverPropUpLei.js.map