var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        var _this = _super.call(this) || this;
        // 鼠标点击时，鼠标全局坐标与当前的位置差
        _this._distance = new egret.Point();
        _this.gameplayPoint = new egret.Point();
        // 第一个按钮坐标
        _this.gamePlayApplePoint = new egret.Point();
        // 第二个按钮坐标
        _this.gamePlayBananaPoint = new egret.Point();
        // 第三个按钮坐标
        _this.gamePlayGrapePoint = new egret.Point();
        _this.skinName = 'gameView';
        _this.init();
        return _this;
    }
    GamePanel.prototype.init = function () {
        this.n = 0;
        this.m = 0;
        this.GlobalDataArr = GlobalData.config_json.gamePlaying;
        this.GlobalDataArrColor = GlobalData.config_json.gamePlayingTwo;
        this.onTouchOnoff = true;
        this.onMoveOnOff = true;
        // 记录按钮坐标
        this.gamePlayApplePoint.x = this.gamePlayApple.x;
        this.gamePlayApplePoint.y = this.gamePlayApple.y;
        this.gamePlayBananaPoint.x = this.gamePlayBanana.x;
        this.gamePlayBananaPoint.y = this.gamePlayBanana.y;
        this.gamePlayGrapePoint.x = this.gamePlayGrape.x;
        this.gamePlayGrapePoint.y = this.gamePlayGrape.y;
        this.colorOnOff = true;
        this.moveOnOff = true;
        // 喇叭点击函数
        this.gamePlayLaba.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickPlaySoundsFun, this);
        // 出事化喇叭开关
        this.labaOnOff = true;
        // 按钮初始化
        this.btnContentGroupTwo.visible = false;
        this.btnContentGroup.visible = false;
        // 实现单选功能
        this.contentButton();
        // 场景递推函数
        this.playGameScence();
        // 拖动函数
        this.PlayGameFeed();
    };
    // 按钮单选功能实现
    GamePanel.prototype.contentButton = function () {
        var _loop_1 = function (i) {
            // 每个按钮点击的时候
            this_1.btnContentGroup.$children[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                if (!this.onTouchOnoff || !this.onMoveOnOff) {
                    return;
                }
                // this.moveOnOff = false;
                this.onTouchOnoff = false;
                if (this.colorOnOff) {
                    this.moveOnOff = true;
                    // 判断解决多次点击，和是否处于移动状态
                    // 判断当前点击的图片的name 与 记录的name一样时
                    var checkedName = this.btnContentGroup.$children[i].$children[1].name;
                    if (checkedName == this.textJilu.text) {
                        // 清空所有按钮的样式,
                        this.emptyAllStyles();
                        // 改变当前的样式
                        var _thisGroupButton = this.btnContentGroupTwo.$children[i];
                        _thisGroupButton.currentState = "disabled";
                        this.OwnImage.visible = false;
                        this.TwoImage.visible = true;
                        // 播放对应物品音频
                        // let wupinSounds = Sounds[this.textJilu.IwantshuiguoTwo].play(0,1);
                        // 对话框中的内容变成相应的内容
                        this.gamePlayWuPinText.text = this.textJilu.text;
                        // 改变对话框的宽度,喇叭隐藏
                        this.gamePlaytextBig.width = 640;
                        this.gamePlayLaba.visible = false;
                        // 再次改变文字
                        this.gamePlaytextBig.text = this.GlobalDataArr[this.m].IwantanApple;
                        // 再次播放“我想要”音频
                        // wupinSounds.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                        // },this)
                        // 第二个对话框显示
                        // this.gamePlayWuPinGroup.visible = true;
                        this.gamePlayWuPinGroupsetTimeVisibleFalse();
                        // 对话框的位置根据点击的位置进行变化
                        this.gamePlayWuPinGroup.x = this.btnContentGroup.$children[i].x;
                        this.gamePlayWuPinGroup.y = this.btnContentGroup.$children[i].y - this.gamePlayWuPinGroup.height;
                    }
                    else {
                        // 错误音
                        Sounds.errorAudio.play(0, 1);
                        // 播放完毕后改变文字
                        this.gamePlaytextBig.text = this.GlobalDataArr[this.m].Iwantan;
                        // 改变对话框宽度
                        this.gamePlaytextBig.width = 520;
                        // 喇叭显示
                        this.gamePlayLaba.visible = true;
                        // 清空所有按钮的样式,
                        this.emptyAllStyles();
                        // 改变当前的样式
                        var _thisGroupButton = this.btnContentGroupTwo.$children[i];
                        _thisGroupButton.currentState = "down";
                        this.OwnImage.visible = true;
                        this.TwoImage.visible = false;
                        // 否则变为错误提示内容
                        Sounds[this.GlobalDataArr[i].noSounds].play(0, 1);
                    }
                }
                else {
                    this.moveOnOff = false;
                    if (e.target.$children[1].name === this.textJilu.text) {
                        // 清空所有按钮的样式,
                        this.emptyAllStyles();
                        // 改变当前的样式
                        var _thisGroupButton = this.btnContentGroupTwo.$children[i];
                        _thisGroupButton.currentState = "disabled";
                        this.m++;
                        // 播放对应物品音频
                        var wupinSounds = Sounds[this.textJilu.audio].play(0, 1);
                        wupinSounds.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                            var soundsKongzhiqi = Sounds[this.textJilu.IwantshuiguoTwo].play(0, 1);
                            // 容器不显示
                            this.btnContentGroup.visible = false;
                            this.btnContentGroupTwo.visible = false;
                            // 喇叭消失
                            this.gamePlayLaba.visible = false;
                            // 大对话框文本
                            this.gamePlaytextBig.width = 622;
                            this.gamePlaytextBig.text = this.textJilu.theTextWenBen;
                            // 音乐播放完毕后执行一个函数
                            soundsKongzhiqi.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                                this.OwnImage.visible = false;
                                this.TwoImage.visible = false;
                                this.ThreeImage.visible = false;
                                if (this.m === 1) {
                                    this.OwnImage = this.zhuOwn;
                                    this.TwoImage = this.zhuTwo;
                                    this.ThreeImage = this.zhuThree;
                                    this.OwnImage.visible = true;
                                }
                                else if (this.m === 2) {
                                    this.OwnImage = this.niuOwn;
                                    this.TwoImage = this.niuTwo;
                                    this.ThreeImage = this.niuThree;
                                    this.niuOwn.visible = true;
                                }
                                else {
                                    this.OwnImage.visible = true;
                                    // 延迟一段然后进行，下一关
                                    var gamePlayTimer = egret.setTimeout(function () {
                                        this.gamePlayTextGroup.visible = false;
                                        Global.dispatchEvent(MainNotify.openBonusInterfaceNotify, { scope: 'onGamePlay' }, false);
                                    }, this, 1000);
                                    return;
                                }
                                this.PlayDifferentAudio();
                                // 改变图片
                                this.OwnImage.visible = true;
                                this.TwoImage.visible = false;
                                // 清空样式
                                this.emptyAllStyles();
                                this.groupRemoveChild();
                                egret.setTimeout(function () {
                                    // this.moveOnOff = true;
                                    this.onMoveOnOff = true;
                                    this.colorOnOff = true;
                                }, this, 100);
                            }, this);
                        }, this);
                        // 对话框中的内容变成相应的内容
                        this.gamePlayWuPinText.text = this.textJilu.text;
                    }
                    else {
                        // 错误音
                        Sounds.errorAudio.play(0, 1);
                        // 清空所有按钮的样式,
                        this.emptyAllStyles();
                        // 改变当前的样式
                        var _thisGroupButton = this.btnContentGroupTwo.$children[i];
                        _thisGroupButton.currentState = "down";
                        // 否则变为错误提示内容
                        var colorTextPeizhi = this.ergodicSearch(e.target.$children[1].name);
                        Sounds[colorTextPeizhi.noSounds].play(0, 1);
                        this.gamePlayWuPinText.text = colorTextPeizhi.noText;
                    }
                }
                //  设定定时器，解决多次点击
                var onTouchOnOffTimer = egret.setTimeout(function () {
                    this.onTouchOnoff = true;
                }, this, 2000);
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.btnContentGroup.$children.length; i++) {
            _loop_1(i);
        }
    };
    // 根据配置参数播放不同的语音
    GamePanel.prototype.PlayDifferentAudio = function () {
        var timerTwo = egret.setTimeout(function () {
            timerTwo = null;
            // 获取对应物品对象
            var indexObject = this.GlobalDataArr[this.m];
            //标记当前需要点击的物品
            this.textJilu = indexObject;
            // 根据对象改变文字
            this.gamePlaytextBig.text = indexObject.IwantanApple;
            // 改变对话框的宽度
            this.gamePlaytextBig.width = 640;
            this.gamePlayLaba.visible = false;
            // 播放对应的音频
            var soundsTwo = Sounds[indexObject.IwantshuiguoOwn].play(0, 1);
            soundsTwo.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                soundsTwo = null;
                // 播放完毕后改变文字
                this.gamePlaytextBig.text = this.GlobalDataArr[this.m].Iwantan;
                // 改变对话框宽度
                this.gamePlaytextBig.width = 520;
                // 喇叭显示
                this.gamePlayLaba.visible = true;
                // 按钮容器显示
                this.btnContentGroup.visible = true;
                this.btnContentGroupTwo.visible = true;
                this.InitializePicture(this.GlobalDataArr);
            }, this);
        }, this, 1000);
    };
    // 游戏玩法函数
    GamePanel.prototype.playGameScence = function () {
        // 播放开始场景音
        var SoundsTimerXiaopengyou = Sounds.xiaopengyou.play(0, 1);
        // 播放完后回掉
        SoundsTimerXiaopengyou.addEventListener(egret.Event.SOUND_COMPLETE, function () {
            this.PlaceDifferentPictures();
        }, this);
    };
    GamePanel.prototype.PlaceDifferentPictures = function () {
        // 判断是鸭子的时候
        if (this.n === 0) {
            // 鸭子显示
            this.OwnImage = this.yaziOwn;
            this.TwoImage = this.yaziTwo;
            this.ThreeImage = this.yaziThree;
            this.OwnImage.visible = true;
            var timerOwn_1 = egret.setTimeout(function () {
                timerOwn_1 = null;
                // 对话框显示
                this.gamePlayTextGroup.visible = true;
                // 对话框显示我饿了
                this.gamePlaytextBig.text = this.GlobalDataArr[0].Imhungry;
                // 播放音频
                var soundsOwn = Sounds.ImhungryHouZi.play(0, 1);
                // 播放完毕后回掉
                soundsOwn.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    soundsOwn = null;
                    // 执行函数
                    this.PlayDifferentAudio();
                }, this);
            }, this, 1000);
        }
        else if (this.n === 1) {
            // 容器不显示
            this.btnContentGroup.visible = false;
            this.btnContentGroupTwo.visible = false;
            this.OwnImage.visible = false;
            this.TwoImage.visible = false;
            this.OwnImage = this.zhuOwn;
            this.TwoImage = this.zhuTwo;
            this.OwnImage.visible = true;
            var timerOwn_2 = egret.setTimeout(function () {
                timerOwn_2 = null;
                // 对话框显示
                this.gamePlayTextGroup.visible = true;
                // 对话框显示我饿了
                this.gamePlaytextBig.text = this.GlobalDataArr[0].Imhungry;
                // 播放音频
                var soundsOwn = Sounds.ImhungryZhu.play(0, 1);
                // 播放完毕后回掉
                soundsOwn.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    soundsOwn = null;
                    // 执行函数
                    this.PlayDifferentAudio();
                }, this);
            }, this, 1000);
        }
        else {
            Global.dispatchEvent(MainNotify.openBonusInterfaceNotify, { scope: 'onGamePlay' }, false);
        }
        if (this.n > 1) {
            this.n = 0;
        }
    };
    // 小对话框 出现后 一段时间隐藏
    GamePanel.prototype.gamePlayWuPinGroupsetTimeVisibleFalse = function () {
        var timergamePlayWuPinGroup = egret.setTimeout(function () {
            this.gamePlayWuPinGroup.visible = false;
        }, this, 2000);
    };
    // 拖动函数
    GamePanel.prototype.PlayGameFeed = function () {
        var _loop_2 = function (i) {
            this_2.btnContentGroup.$children[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                this.PlayGameFeedMouseDown(e, i);
            }, this_2);
            this_2.btnContentGroup.$children[i].addEventListener(egret.TouchEvent.TOUCH_END, this_2.PlayGameFeedMouseUp, this_2);
        };
        var this_2 = this;
        for (var i = 0; i < this.btnContentGroup.$children.length; i++) {
            _loop_2(i);
        }
    };
    // 按下
    GamePanel.prototype.PlayGameFeedMouseDown = function (e, i) {
        var danliContent = this.btnContentGroupTwo.$children[i];
        if (danliContent.currentState == 'disabled' && e.target.$children[1].name === this.textJilu.text && this.moveOnOff) {
            this._thisEle = e.target;
            this._distance.x = e.stageX - this._thisEle.x;
            this._distance.y = e.stageY - this._thisEle.y;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.PlayGameFeedMouseMove, this);
        }
    };
    // 移动
    GamePanel.prototype.PlayGameFeedMouseMove = function (e) {
        this.btnContentGroup.setChildIndex(e.target, 999);
        this.duangOnOff = this.duangFun(e.target);
        this.onMoveOnOff = false;
        this._thisEle.x = e.stageX - this._distance.x;
        this._thisEle.y = e.stageY - this._distance.y;
    };
    // 抬起
    GamePanel.prototype.PlayGameFeedMouseUp = function (e) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.PlayGameFeedMouseMove, this);
        if (this.duangOnOff === true) {
            console.log("碰撞了");
            this.OwnImage.visible = false;
            this.TwoImage.visible = false;
            this.ThreeImage.visible = true;
            // 把碰撞状态改为false
            this.duangOnOff = false;
            // 碰撞上了容器不显示
            this.btnContentGroup.visible = false;
            this.btnContentGroupTwo.visible = false;
            this.gamePlayTextGroup.visible = false;
            var SoundsTimer = Sounds[this.textJilu.theisYummy].play(0, 1);
            SoundsTimer.volume = 1;
            var a_1 = egret.setTimeout(function () {
                a_1 = null;
                this.recognizeColors();
            }, this, 3000);
            this.recoveryPositionFun(e);
            this.colorOnOff = false;
        }
        else {
            console.log("没有碰撞上");
            this.recoveryPositionFun(e);
            egret.setTimeout(function () {
                this.onMoveOnOff = true;
            }, this, 300);
        }
    };
    // 碰撞检测函数
    GamePanel.prototype.duangFun = function (ele) {
        var isTrue = ele.hitTestPoint(970, 730);
        return isTrue;
    };
    // 根据参数把对应的元素恢复原位
    GamePanel.prototype.recoveryPositionFun = function (e) {
        this.btnContentGroup.setChildIndex(e.target, -1);
        if (e.target.$children[1].name == 'apple' || e.target.$children[1].name == 'red') {
            this.btnContentGroup.setChildIndex(e.target, 0);
            e.target.x = this.gamePlayApplePoint.x;
            e.target.y = this.gamePlayApplePoint.y;
        }
        else if (e.target.$children[1].name == 'banana' || e.target.$children[1].name == 'yellow') {
            this.btnContentGroup.setChildIndex(e.target, 1);
            e.target.x = this.gamePlayBananaPoint.x;
            e.target.y = this.gamePlayBananaPoint.y;
        }
        else if (e.target.$children[1].name == 'grape' || e.target.$children[1].name == 'purple') {
            this.btnContentGroup.setChildIndex(e.target, 2);
            e.target.x = this.gamePlayGrapePoint.x;
            e.target.y = this.gamePlayGrapePoint.y;
        }
    };
    GamePanel.prototype.emptyAllStyles = function () {
        for (var j = 0; j < this.btnContentGroupTwo.$children.length; j++) {
            var item = this.btnContentGroupTwo.$children[j];
            item.currentState = 'up';
        }
    };
    // 初始化，配置图片，音频之类的
    GamePanel.prototype.InitializePicture = function (arr) {
        for (var i = 0; i < this.btnContentGroup.$children.length; i++) {
            var img = new egret.Bitmap();
            img.texture = RES.getRes(arr[i].Image);
            img.width = 220;
            img.height = 185;
            img.x = 171;
            img.y = 66;
            img.name = arr[i].name;
            this.groupImage = this.btnContentGroup.$children[i];
            this.groupImage.addChild(img);
        }
    };
    // 删除格子容器里面的图片进行重新添加
    GamePanel.prototype.groupRemoveChild = function () {
        this.gamePlayApple.removeChildAt(1);
        this.gamePlayBanana.removeChildAt(1);
        this.gamePlayGrape.removeChildAt(1);
    };
    // 认识完物品后，认识颜色
    GamePanel.prototype.recognizeColors = function () {
        this.ThreeImage.visible = false;
        this.OwnImage.visible = true;
        // 删除图片
        this.groupRemoveChild();
        // 容器显示
        this.btnContentGroup.visible = true;
        this.btnContentGroupTwo.visible = true;
        // 对话框显示
        this.gamePlayTextGroup.visible = true;
        // 加入图片
        this.InitializePicture(this.GlobalDataArrColor);
        // 改变文字
        this.objectRecognition(this.textJilu.text);
        // 清空样式
        this.emptyAllStyles();
        egret.setTimeout(function () {
            this.onMoveOnOff = true;
        }, this, 100);
    };
    // 根据物品播放对应音频
    GamePanel.prototype.objectRecognition = function (text) {
        var _loop_3 = function (i) {
            if (text == this_3.GlobalDataArrColor[i].guanlian) {
                var soundsPlayOwn_1 = Sounds[this_3.GlobalDataArrColor[i].IwantshuiguoTwo].play(0, 1);
                soundsPlayOwn_1.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    soundsPlayOwn_1 = null;
                    // 播放完毕后改变文字
                    this.gamePlaytextBig.text = this.GlobalDataArrColor[this.m].Iwantan;
                    // 改变对话框宽度
                    this.gamePlaytextBig.width = 480;
                    // 喇叭显示
                    this.gamePlayLaba.visible = true;
                }, this_3);
                this_3.gamePlaytextBig.text = this_3.GlobalDataArrColor[i].theTextWenBen;
                this_3.textJilu = this_3.GlobalDataArrColor[i];
            }
        };
        var this_3 = this;
        for (var i = 0; i < this.GlobalDataArrColor.length; i++) {
            _loop_3(i);
        }
    };
    // 遍历配置信息，找出对应配置文件
    GamePanel.prototype.ergodicSearch = function (name) {
        for (var i = 0; i < this.GlobalDataArrColor.length; i++) {
            if (name === this.GlobalDataArrColor[i].name) {
                return this.GlobalDataArrColor[i];
            }
        }
    };
    // 点击喇叭重复音频函数
    GamePanel.prototype.onClickPlaySoundsFun = function () {
        if (!this.labaOnOff) {
            return;
        }
        this.labaOnOff = false;
        var a = Sounds[this.textJilu.audio].play(0, 1);
        a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
            a = null;
            this.labaOnOff = true;
        }, this);
    };
    // 获取面板宽度
    GamePanel.prototype.getWidth = function () {
        return this.width;
    };
    // 获取面板高度
    GamePanel.prototype.getHeight = function () {
        return this.height;
    };
    return GamePanel;
}(eui.Component));
__reflect(GamePanel.prototype, "GamePanel");
//# sourceMappingURL=GamePanel.js.map