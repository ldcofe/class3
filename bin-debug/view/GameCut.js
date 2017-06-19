var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameCut = (function (_super) {
    __extends(GameCut, _super);
    function GameCut() {
        var _this = _super.call(this) || this;
        _this.skinName = 'gameCut';
        _this.init();
        return _this;
    }
    /*变量定义 end*/
    //init函数
    GameCut.prototype.init = function () {
        //初始化，第一组
        this.m = 0;
        //载入配置
        this.GlobalDataArr = GlobalData.config_json.gameCut;
        this.stageStatus = 0;
        // 场景递推函数
        this.playGameScence();
        // 拖动函数
        this.PlayGameDrag();
    };
    // 游戏玩法函数
    GameCut.prototype.playGameScence = function () {
        // 播放开始场景音
        var SoundsTimerXiaopengyou = Sounds.xiaopengyou.play(0, 1);
        // 播放完后回调
        SoundsTimerXiaopengyou.addEventListener(egret.Event.SOUND_COMPLETE, function () {
            this.stageStatus += 1;
            this.PlaceDifferentPictures();
        }, this);
    };
    //场景推进
    GameCut.prototype.PlaceDifferentPictures = function () {
        // 判断是开冰箱门的时候
        if (this.stageStatus === 1) {
            //调整水果顺序(TODO)
            //my code
            // 打开冰箱的场景显示
            this.gamePaly.visible = true;
            //提词器提示词语
            var timerOne_1 = egret.setTimeout(function () {
                timerOne_1 = null;
                // 对话框显示
                this.gameCutTextGroup.visible = true;
                this.gameCutLaba.visible = false;
                // 播放提示
                this.PlayDifferentAudio();
            }, this, 1000);
        }
    };
    // 根据配置参数播放不同的语音
    GameCut.prototype.PlayDifferentAudio = function () {
        var timerTwo = egret.setTimeout(function () {
            timerTwo = null;
            // 获取对应物品对象
            var indexObject = this.GlobalDataArr[this.m];
            //标记当前需要点击的物品
            this.textJilu = indexObject;
            // 根据对象改变文字
            this.gameCutTextBig.text = indexObject.text;
            // 改变对话框的宽度
            this.gameCutTextBig.width = 350;
            this.gameCutLaba.visible = false;
            // 播放对应的音频
            var soundsTwo = Sounds[indexObject.IwantshuiguoOwn].play(0, 1);
            soundsTwo.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                soundsTwo = null;
                // 播放完毕后改变文字
                this.gameCutTextBig.text = this.GlobalDataArr[this.m].Iwantan;
                // 改变对话框宽度
                this.gameCutTextBig.width = 350;
                // 喇叭显示
                this.gameCutLaba.visible = true;
            }, this);
        }, this, 1000);
    };
    // 拖动函数
    GameCut.prototype.PlayGameDrag = function () {
        var _loop_1 = function (i) {
            this_1.btnFruit.$children[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                this.PlayGameDragMouseDown(e, i);
            }, this_1);
            this_1.btnFruit.$children[i].addEventListener(egret.TouchEvent.TOUCH_END, this_1.PlayGameDragMouseUp, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.btnFruit.$children.length; i++) {
            _loop_1(i);
        }
    };
    // 按下
    GameCut.prototype.PlayGameDragMouseDown = function (e, i) {
    };
    // 移动
    GameCut.prototype.PlayGameFeedMouseMove = function (e) {
    };
    return GameCut;
}(eui.Component));
__reflect(GameCut.prototype, "GameCut");
//# sourceMappingURL=GameCut.js.map