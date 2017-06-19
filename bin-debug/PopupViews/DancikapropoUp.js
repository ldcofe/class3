var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DancikapropoUp = (function (_super) {
    __extends(DancikapropoUp, _super);
    function DancikapropoUp(e) {
        var _this = _super.call(this) || this;
        _this.skinName = 'dancikaPropup';
        _this.init(e);
        return _this;
    }
    DancikapropoUp.prototype.init = function (e) {
        // 获取两张不同的图片
        var tankuangImageOwn = e.param.tankuangImageOwn;
        var tankuangImageTwo = e.param.tankuangImageTwo;
        // 文字段落(区分音频和文字)
        var paragraph = e.param.paragraph;
        var appleKuai = e.param.appleKuai;
        var appleMan = e.param.appleMan;
        // 删除图片容器里面的图片
        this.danciKaImageGroup.removeChildren();
        // 删除文本里面的字
        this.dancikaTextLabel.text = '';
        // 添加图片(介绍图+介绍文字)
        var img = new egret.Bitmap();
        img.width = 543;
        img.height = 600;
        img.texture = RES.getRes(tankuangImageOwn);
        this.danciKaImageGroup.addChild(img);
        // 苹果
        if (paragraph == 'TheappleisredApple') {
            var TimerOwn_1 = egret.setTimeout(function () {
                TimerOwn_1 = null;
                // 播放对应音频(Theappleisred)
                var a = Sounds.theAppleIsRed_wav.play(0, 1);
                // 添加文字
                this.dancikaTextLabel.textFlow = [
                    { text: "The ", style: {} },
                    { text: "apple ", style: { "textColor": 0xff0000 } },
                    { text: "is red", style: {} }
                ];
                // 播放完毕之后删除图片和文字
                a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    a = null;
                    //定时器控制延迟
                    var TimerTwo = egret.setTimeout(function () {
                        // 删除图片和文字
                        this.danciKaImageGroup.removeChildren();
                        this.dancikaTextLabel.textFlow = '';
                        // 添加第二张图片
                        var img = new egret.Bitmap();
                        img.texture = RES.getRes(tankuangImageTwo);
                        img.width = 543;
                        img.height = 672;
                        this.danciKaImageGroup.addChild(img);
                        this.dancikaTextLabel.textFlow = [
                            { text: "apple ", style: { size: 150 } }
                        ];
                        // 清空延迟器
                        TimerTwo = null;
                        // 播放识物音频(快)
                        var a = appleKuai.play(0, 1);
                        // 播放完毕之后进行回掉
                        a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                            // 清空音频控制器
                            a = null;
                            //设置第二个音频延迟器
                            var bb = egret.setTimeout(function () {
                                // 播放识物音频(慢)
                                var b = appleKuai.play(0, 1);
                                // 设置文字
                                this.dancikaTextLabel.textFlow = [
                                    { text: "apple ", style: { size: 150 } }
                                ];
                                // 音频播放完毕之后执行的函数
                                b.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                                    // 清空音频控制器
                                    b = null;
                                    // 触发销毁弹框界面的触发
                                    Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
                                    this.qihuanChangeJudge();
                                }, this);
                            }, this, 1500);
                        }, this);
                    }, this, 1500);
                }, this);
            }, this, 1500);
        }
        else if (paragraph == 'ThegrapesarepurpleGrape') {
            // 葡萄
            var TimerOwn_2 = egret.setTimeout(function () {
                TimerOwn_2 = null;
                // 播放对应音频(Theappleisred)
                var a = Sounds.thegrapesarepurple_wav.play(0, 1);
                // 添加文字
                this.dancikaTextLabel.textFlow = [
                    { text: "The ", style: {} },
                    { text: "grapes ", style: { "textColor": 0xff0000 } },
                    { text: "are purple", style: {} }
                ];
                // 播放完毕之后删除图片和文字
                a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    a = null;
                    // 定时器控制延迟
                    var TimerTwo = egret.setTimeout(function () {
                        // 删除图片和文字
                        this.danciKaImageGroup.removeChildren();
                        this.dancikaTextLabel.textFlow = '';
                        // 添加第二张图片
                        var img = new egret.Bitmap();
                        img.texture = RES.getRes(tankuangImageTwo);
                        img.width = 543;
                        img.height = 672;
                        this.danciKaImageGroup.addChild(img);
                        this.dancikaTextLabel.textFlow = [
                            { text: "grape ", style: { size: 150 } }
                        ];
                        // 清空延迟器
                        TimerTwo = null;
                        // 播放识物音频(快)
                        var a = appleKuai.play(0, 1);
                        // 播放完毕之后进行回掉
                        a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                            // 清空音频控制器
                            a = null;
                            // 设置第二个音频延迟器
                            var bb = egret.setTimeout(function () {
                                // 播放识物音频(慢)
                                var b = appleKuai.play(0, 1);
                                // 设置文字
                                this.dancikaTextLabel.textFlow = [
                                    { text: "grape ", style: { size: 150 } }
                                ];
                                // 音频播放完毕之后执行的函数
                                b.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                                    // 清空音频控制器
                                    b = null;
                                    // 触发销毁弹框界面的触发
                                    Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
                                    this.qihuanChangeJudge();
                                }, this);
                            }, this, 1500);
                        }, this);
                    }, this, 1500);
                }, this);
            }, this, 1500);
        }
        else if (paragraph == 'TheBannerIsYellowBanana') {
            // 香蕉
            var TimerOwn_3 = egret.setTimeout(function () {
                TimerOwn_3 = null;
                // 播放对应音频(Theappleisred)
                var a = Sounds.theBannerIsYellow_wav.play(0, 1);
                // 添加文字
                this.dancikaTextLabel.textFlow = [
                    { text: "The ", style: {} },
                    { text: "bananas ", style: { "textColor": 0xff0000 } },
                    { text: "are yellow", style: {} }
                ];
                // 播放完毕之后删除图片和文字
                a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    a = null;
                    // 定时器控制延迟
                    var TimerTwo = egret.setTimeout(function () {
                        // 删除图片和文字
                        this.danciKaImageGroup.removeChildren();
                        this.dancikaTextLabel.textFlow = '';
                        // 添加第二张图片
                        var img = new egret.Bitmap();
                        img.texture = RES.getRes(tankuangImageTwo);
                        img.width = 543;
                        img.height = 672;
                        this.danciKaImageGroup.addChild(img);
                        this.dancikaTextLabel.textFlow = [
                            { text: "banana ", style: { size: 150 } }
                        ];
                        // 清空延迟器
                        TimerTwo = null;
                        // 播放识物音频(快)
                        var a = appleKuai.play(0, 1);
                        // 播放完毕之后进行回掉
                        a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                            // 清空音频控制器
                            a = null;
                            // 设置第二个音频延迟器
                            var bb = egret.setTimeout(function () {
                                // 播放识物音频(慢)
                                var b = appleKuai.play(0, 1);
                                // 设置文字
                                this.dancikaTextLabel.textFlow = [
                                    { text: "banana ", style: { size: 150 } }
                                ];
                                // 音频播放完毕之后执行的函数
                                b.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                                    // 清空音频控制器
                                    b = null;
                                    // 触发销毁弹框界面的触发
                                    Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
                                    this.qihuanChangeJudge();
                                }, this);
                            }, this, 1500);
                        }, this);
                    }, this, 1500);
                }, this);
            }, this, 1500);
        }
        else if (paragraph == 'TheappleisredRed') {
            // 红色
            var TimerOwn_4 = egret.setTimeout(function () {
                TimerOwn_4 = null;
                // 播放对应音频(Theappleisred)
                var a = Sounds.theAppleIsRed_wav.play(0, 1);
                // 添加文字
                this.dancikaTextLabel.textFlow = [
                    { text: "The ", style: {} },
                    { text: "apple is ", style: {} },
                    { text: "red", style: { "textColor": 0xff0000 } }
                ];
                // 播放完毕之后删除图片和文字
                a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    a = null;
                    // 定时器控制延迟
                    var TimerTwo = egret.setTimeout(function () {
                        // 删除图片和文字
                        this.danciKaImageGroup.removeChildren();
                        this.dancikaTextLabel.textFlow = '';
                        // 添加第二张图片
                        // var img:egret.Bitmap = new egret.Bitmap();
                        // img.texture = RES.getRes(tankuangImageTwo);
                        var shuaziAnimate = publicClass.MovieClip('redshuazi_json', 'redshuazi_png', 'redshuazi');
                        shuaziAnimate.x = -250;
                        shuaziAnimate.play(1);
                        this.danciKaImageGroup.addChild(shuaziAnimate);
                        shuaziAnimate.gotoAndPlay(0, 1);
                        this.dancikaTextLabel.textFlow = [
                            { text: "red ", style: { size: 150 } }
                        ];
                        // 清空延迟器
                        TimerTwo = null;
                        // 播放识物音频(快)
                        var a = appleKuai.play(0, 1);
                        // 播放完毕之后进行回掉
                        a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                            // 清空音频控制器
                            a = null;
                            // 设置第二个音频延迟器
                            var bb = egret.setTimeout(function () {
                                // 播放识物音频(慢)
                                var b = appleKuai.play(0, 1);
                                // 设置文字
                                this.dancikaTextLabel.textFlow = [
                                    { text: "red ", style: { size: 150 } }
                                ];
                                // 音频播放完毕之后执行的函数
                                b.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                                    // 清空音频控制器
                                    b = null;
                                    // 触发销毁弹框界面的触发
                                    Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
                                    this.qihuanChangeJudge();
                                }, this);
                            }, this, 1500);
                        }, this);
                    }, this, 1500);
                }, this);
            }, this, 1500);
        }
        else if (paragraph == 'ThegrapesarepurplePurple') {
            // 紫色
            var TimerOwn_5 = egret.setTimeout(function () {
                TimerOwn_5 = null;
                // 播放对应音频(Theappleisred)
                var a = Sounds.thegrapesarepurple_wav.play(0, 1);
                // 添加文字
                this.dancikaTextLabel.textFlow = [
                    { text: "The ", style: {} },
                    { text: "grapes are ", style: {} },
                    { text: "purple", style: { "textColor": 0xff0000 } }
                ];
                // 播放完毕之后删除图片和文字
                a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    a = null;
                    // 定时器控制延迟
                    var TimerTwo = egret.setTimeout(function () {
                        // 删除图片和文字
                        this.danciKaImageGroup.removeChildren();
                        this.dancikaTextLabel.textFlow = '';
                        // 添加第二张图片
                        // var img:egret.Bitmap = new egret.Bitmap();
                        // img.texture = RES.getRes(tankuangImageTwo);
                        var shuaziAnimate = publicClass.MovieClip('purpleshuazi_json', 'purpleshuazi_png', 'purpleshuazi');
                        shuaziAnimate.x = -300;
                        shuaziAnimate.play(1);
                        this.danciKaImageGroup.addChild(shuaziAnimate);
                        shuaziAnimate.gotoAndPlay(0, 1);
                        this.dancikaTextLabel.textFlow = [
                            { text: "purple ", style: { size: 150 } }
                        ];
                        // 清空延迟器
                        TimerTwo = null;
                        // 播放识物音频(快)
                        var a = appleKuai.play(0, 1);
                        // 播放完毕之后进行回掉
                        a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                            // 清空音频控制器
                            a = null;
                            // 设置第二个音频延迟器
                            var bb = egret.setTimeout(function () {
                                // 播放识物音频(慢)
                                var b = appleKuai.play(0, 1);
                                // 设置文字
                                this.dancikaTextLabel.textFlow = [
                                    { text: "purple ", style: { size: 150 } }
                                ];
                                // 音频播放完毕之后执行的函数
                                b.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                                    // 清空音频控制器
                                    b = null;
                                    // 触发销毁弹框界面的触发
                                    Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
                                    this.qihuanChangeJudge();
                                }, this);
                            }, this, 1500);
                        }, this);
                    }, this, 1500);
                }, this);
            }, this, 1500);
        }
        else if (paragraph = 'TheBannerIsYellowBananaYellow') {
            // 黄色
            var TimerOwn_6 = egret.setTimeout(function () {
                TimerOwn_6 = null;
                // 播放对应音频(Theappleisred)
                var a = Sounds.theBannerIsYellow_wav.play(0, 1);
                // 添加文字
                this.dancikaTextLabel.textFlow = [
                    { text: "The ", style: {} },
                    { text: "bananas are", style: {} },
                    { text: " yellow", style: { "textColor": 0xff0000 } }
                ];
                // 播放完毕之后删除图片和文字
                a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    a = null;
                    // 定时器控制延迟
                    var TimerTwo = egret.setTimeout(function () {
                        // 删除图片和文字
                        this.danciKaImageGroup.removeChildren();
                        this.dancikaTextLabel.textFlow = '';
                        // 添加第二张图片
                        // var img:egret.Bitmap = new egret.Bitmap();
                        // img.texture = RES.getRes(tankuangImageTwo);
                        var shuaziAnimate = publicClass.MovieClip('shuaziYellow_json', 'shuaziYellow_png', 'shuaziYellow');
                        shuaziAnimate.x = -300;
                        shuaziAnimate.play(1);
                        this.danciKaImageGroup.addChild(shuaziAnimate);
                        shuaziAnimate.gotoAndPlay(0, 1);
                        this.dancikaTextLabel.textFlow = [
                            { text: "yellow ", style: { size: 150 } }
                        ];
                        // 清空延迟器
                        TimerTwo = null;
                        // 播放识物音频(快)
                        var a = appleKuai.play(0, 1);
                        // 播放完毕之后进行回掉
                        a.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                            // 清空音频控制器
                            a = null;
                            // 设置第二个音频延迟器
                            var bb = egret.setTimeout(function () {
                                // 播放识物音频(慢)
                                var b = appleKuai.play(0, 1);
                                // 设置文字
                                this.dancikaTextLabel.textFlow = [
                                    { text: "yellow ", style: { size: 150 } }
                                ];
                                // 音频播放完毕之后执行的函数
                                b.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                                    // 清空音频控制器
                                    b = null;
                                    // 触发销毁弹框界面的触发
                                    Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
                                    this.qihuanChangeJudge();
                                }, this);
                            }, this, 1500);
                        }, this);
                    }, this, 1500);
                }, this);
            }, this, 1500);
        }
    };
    DancikapropoUp.prototype.qihuanChangeJudge = function () {
        //console.log(GlobalData.xuanXiangKaNum);
        if (GlobalData.xuanXiangKaNum >= 6) {
            egret.clearInterval(GlobalData.dancikaTimerClear);
            GlobalData.dancikaTimerClear = null;
            Global.dispatchEvent(MainNotify.closeXuanXiangKaNotify, null, false);
            Global.dispatchEvent(MainNotify.openDancikaKuozhanNotify, null, false);
        }
    };
    // 获取面板宽度
    DancikapropoUp.prototype.getWidth = function () {
        return this.width;
    };
    // 获取面板高度
    DancikapropoUp.prototype.getHeight = function () {
        return this.height;
    };
    return DancikapropoUp;
}(eui.Component));
__reflect(DancikapropoUp.prototype, "DancikapropoUp");
//# sourceMappingURL=DancikapropoUp.js.map