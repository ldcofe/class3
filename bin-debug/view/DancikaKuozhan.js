var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DancikaKuozhan = (function (_super) {
    __extends(DancikaKuozhan, _super);
    function DancikaKuozhan() {
        var _this = _super.call(this) || this;
        _this.skinName = 'dancikaKuozhan';
        _this.init();
        return _this;
    }
    DancikaKuozhan.prototype.init = function () {
        // 添加动画
        var _MovieXingPng = RES.getRes('zhuaxing_png');
        var _MovieXingData = RES.getRes('zhuaxing_json');
        var mcDataFactory = new egret.MovieClipDataFactory(_MovieXingData, _MovieXingPng);
        this.specialEffects = new egret.MovieClip(mcDataFactory.generateMovieClipData("xing"));
        this.addChild(this.specialEffects);
        // 初始化数（主要进行三个盘子读完之后进行下一关）
        this.checkpointNum = 0;
        // 初始化截取整个数组中那两个
        this.numArr = 0;
        this.numberTwo = 0;
        // 初始化开关(添加容器的)
        this.addGroupOnOff = false;
        // 开关判断显示哪种容器
        this.visibleOnOff = true;
        // 调用初始化函数
        this.configInitFun();
        // 场景递推函数
        this.recursiveGameFun();
        // 点击函数
        this.onClickFun();
    };
    // 点击函数
    DancikaKuozhan.prototype.onClickFun = function () {
        for (var i = 0; i < this.mainGroup.$children.length; i++) {
            var Item = this.mainGroup.$children[i];
            Item.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        }
    };
    DancikaKuozhan.prototype.onTouch = function (e) {
        if (this.onOffOnClick && e.target.$children[0].visible == true) {
            if (e.target.name === this.subjectItem.name) {
                // 特效的位置
                this.specialEffects.x = e.target.x + 50;
                this.specialEffects.y = e.target.y;
                this.specialEffects.gotoAndPlay(0, 1);
                this.textGroup.visible = true;
                this.textLable.text = this.subjectItem.name;
                this.textGroup.x = e.target.x + 20;
                this.textGroup.y = e.target.y + e.target.height;
                Sounds[this.subjectItem.audio].play(0, 1);
                // 再来一遍，重置
                this.aginPlay();
            }
            else {
                // 错误音
                Sounds.errorAudio.play(0, 1);
                // 删除物品容器里面的物品
                e.target.$children[2].removeChildren();
                this.createBitmapByName(this.randomTwoArray[0].Image);
                switch (e.target.name) {
                    case "apple":
                        var ItemOwn = this.createBitmapByName("applehui_png");
                        ItemOwn.width = 350;
                        ItemOwn.height = 350;
                        e.target.$children[2].addChild(ItemOwn);
                        break;
                    case "banana":
                        var ItemTwo = this.createBitmapByName("bananahui_png");
                        ItemTwo.width = 350;
                        ItemTwo.height = 350;
                        e.target.$children[2].addChild(ItemTwo);
                        break;
                    case "grape":
                        var ItemThree = this.createBitmapByName("grapehui_png");
                        ItemThree.width = 350;
                        ItemThree.height = 350;
                        e.target.$children[2].addChild(ItemThree);
                        break;
                    case "red":
                        var ItemFour = this.createBitmapByName("redhui_png");
                        ItemFour.width = 350;
                        ItemFour.height = 350;
                        e.target.$children[2].addChild(ItemFour);
                        break;
                    case "yellow":
                        var ItemFive = this.createBitmapByName("redhui_png");
                        ItemFive.width = 350;
                        ItemFive.height = 350;
                        e.target.$children[2].addChild(ItemFive);
                        break;
                    case "purple":
                        var ItemSix = this.createBitmapByName("redhui_png");
                        ItemSix.width = 350;
                        ItemSix.height = 350;
                        e.target.$children[2].addChild(ItemSix);
                    default:
                        console.log('没找到');
                }
            }
            this.switchSkinFun(e.target, false);
        }
    };
    // 根据参数指向，切换皮肤状态
    DancikaKuozhan.prototype.switchSkinFun = function (item, onOff) {
        if (onOff) {
            item.$children[0].visible = true;
            item.$children[1].visible = false;
            item.$children[2].visible = false;
        }
        else {
            item.$children[0].visible = false;
            item.$children[1].visible = true;
            item.$children[2].visible = true;
        }
    };
    // 一次完成，重复
    DancikaKuozhan.prototype.aginPlay = function () {
        var timerOwn = egret.setTimeout(function () {
            if (!this.addGroupOnOff) {
                this.numberTwo += 2;
            }
            else {
                this.numberTwo += 3;
            }
            if (this.numberTwo >= 6) {
                this.checkpointNum++;
                if (this.checkpointNum > 1) {
                    var timerOwn_1 = egret.setTimeout(function () {
                        // this.removeChildren();
                        timerOwn_1 = null;
                        Global.dispatchEvent(MainNotify.openBonusInterfaceNotify, { scope: 'onGamePanel' }, false);
                    }, this, 1000);
                    return;
                }
                this.numberTwo = 0;
                this.addGroupOnOff = true;
            }
            this.groupOwn.visible = true;
            this.groupTwo.visible = true;
            this.groupThree.visible = true;
            timerOwn = null;
            this.visibleOnOff = true;
            // 清空容器
            this.clearWuPinGroup();
            this.configInitFun();
            this.recursiveGameFun();
        }, this, 1000);
    };
    // 初始化函数
    DancikaKuozhan.prototype.configInitFun = function () {
        // 初始化点击开关
        this.onOffOnClick = false;
        // 题目显示模块隐藏( 初始化 )
        this.Spirit.visible = false;
        // 初始化配置信息
        this.configure = GlobalData.config_json.danciKaKuoZhan;
        // 初始化存储两个信息的数组
        this.randomTwoArray = [];
        // 执行初始化两个数组的函数
        this.arrItemTwoFun(this.numberTwo);
        // 初始化容器显示
        this.configGroupInit(this.addGroupOnOff, this.visibleOnOff);
        // 初始化物品
        this.addWuPinFun();
        // 题目初始化调用
        this.extractTopics();
        // 文本隐藏
        this.textGroup.visible = false;
        // 题目对话框隐藏
        this.duihuakuang.visible = false;
    };
    // 场景逻辑
    DancikaKuozhan.prototype.recursiveGameFun = function () {
        this.numArr = 0;
        //	this.addGroupOnOff 为false的时候，显示两个
        if (!this.addGroupOnOff) {
            var n_1 = 0;
            // 定时器时间
            var timerNum_1 = 2000;
            var timerInterVal_1 = egret.setInterval(function () {
                if (n_1 != 1) {
                    // 记录物品所在位置
                    var disx = this.mainGroup.$children[n_1].x + 20;
                    var disy = this.mainGroup.$children[n_1].y + this.mainGroup.$children[n_1].height;
                    // 对话框显示在对应位置
                    this.textGroupFun(disx, disy);
                    // 播放对应音频,显示对应文字
                    this.playDuiYingAudio(this.numArr);
                    this.numArr++;
                }
                else {
                    timerNum_1 = 0;
                }
                n_1++;
                if (n_1 > 2) {
                    // 换盘子
                    this.qiehuanZhuangtai();
                    egret.clearInterval(timerInterVal_1);
                }
            }, this, timerNum_1);
        }
        else {
            var n_2 = 0;
            var timerInterVal_2 = egret.setInterval(function () {
                // 记录物品所在位置
                var disx = this.mainGroup.$children[n_2].x + 20;
                var disy = this.mainGroup.$children[n_2].y + this.mainGroup.$children[n_2].height;
                // 对话框显示在对应位置
                this.textGroupFun(disx, disy);
                // 播放对应音频,显示对应文字
                this.playDuiYingAudio(this.numArr);
                this.numArr++;
                n_2++;
                if (n_2 > 2) {
                    // 换盘子
                    this.qiehuanZhuangtai();
                    egret.clearInterval(timerInterVal_2);
                }
            }, this, 3000);
        }
    };
    // 添加两个进数组
    DancikaKuozhan.prototype.arrItemTwoFun = function (n) {
        if (!this.addGroupOnOff) {
            for (var i = 0; i < 2; i++) {
                this.randomTwoArray.push(this.configure[n]);
                n++;
                if (n > this.configure.length) {
                    n = 0;
                }
            }
        }
        else {
            for (var i = 0; i < 3; i++) {
                this.randomTwoArray.push(this.configure[n]);
                n++;
                if (n > this.configure.length) {
                    n = 0;
                }
            }
        }
    };
    // 播放对应音频函数,对应文本显示
    DancikaKuozhan.prototype.playDuiYingAudio = function (num) {
        Sounds[this.randomTwoArray[num].audio].play(0, 1);
        this.textLable.text = this.randomTwoArray[num].text;
    };
    // 隐藏容器里面的第一个图片,显示第二个,根据参数来显示两个或者三个。true时显示三个
    // 第一个参数是显示两个或者三个，第二个参数是显示那种状态
    DancikaKuozhan.prototype.configGroupInit = function (visibleOnOff, toogleVisible) {
        for (var i = 0; i < this.mainGroup.$children.length; i++) {
            this.mainGroup.$children[i].$children[0].visible = false;
            this.mainGroup.$children[i].$children[1].visible = false;
            if (toogleVisible) {
                if (visibleOnOff) {
                    this.mainGroup.$children[i].$children[0].visible = false;
                    this.mainGroup.$children[i].$children[1].visible = true;
                }
                else {
                    if (i != 1) {
                        this.mainGroup.$children[i].$children[0].visible = false;
                        this.mainGroup.$children[i].$children[1].visible = true;
                    }
                }
            }
            else {
                if (visibleOnOff) {
                    this.mainGroup.$children[i].$children[1].visible = false;
                    this.mainGroup.$children[i].$children[0].visible = true;
                }
                else {
                    if (i != 1) {
                        this.mainGroup.$children[i].$children[1].visible = false;
                        this.mainGroup.$children[i].$children[0].visible = true;
                    }
                }
            }
        }
    };
    // 初始化添加物品函数
    DancikaKuozhan.prototype.addWuPinFun = function () {
        if (this.addGroupOnOff === false) {
            var imageOwn = this.createBitmapByName(this.randomTwoArray[0].Image);
            var imageTwo = this.createBitmapByName(this.randomTwoArray[1].Image);
            imageOwn.width = 350;
            imageOwn.height = 350;
            imageTwo.width = 350;
            imageTwo.height = 350;
            this.groupOwn.addChild(imageOwn);
            this.groupThree.addChild(imageTwo);
            this.groupOwn.parent.name = this.randomTwoArray[0].name;
            this.groupThree.parent.name = this.randomTwoArray[1].name;
        }
        else {
            var imageOwn = this.createBitmapByName(this.randomTwoArray[0].Image);
            var imageTwo = this.createBitmapByName(this.randomTwoArray[1].Image);
            var imageThree = this.createBitmapByName(this.randomTwoArray[2].Image);
            imageOwn.width = 350;
            imageOwn.height = 350;
            imageTwo.width = 350;
            imageTwo.height = 350;
            imageThree.width = 350;
            imageThree.height = 350;
            this.groupOwn.addChild(imageOwn);
            this.groupTwo.addChild(imageTwo);
            this.groupThree.addChild(imageThree);
            this.groupOwn.parent.name = this.randomTwoArray[0].name;
            this.groupTwo.parent.name = this.randomTwoArray[1].name;
            this.groupThree.parent.name = this.randomTwoArray[2].name;
        }
    };
    // 随机一个数
    DancikaKuozhan.prototype.randomNumFun = function () {
        return Math.floor(Math.random() * 2);
    };
    // 清空容器
    DancikaKuozhan.prototype.clearWuPinGroup = function () {
        this.groupOwn.removeChildren();
        this.groupTwo.removeChildren();
        this.groupThree.removeChildren();
        this.SpiritChildrenGroup.removeChildren();
    };
    // 文本显示再隐藏（设置文本框位置）
    DancikaKuozhan.prototype.textGroupFun = function (disx, disy) {
        this.textGroup.visible = true;
        this.textGroup.x = disx;
        this.textGroup.y = disy;
        var timerOut = egret.setTimeout(function () {
            timerOut = null;
            this.textGroup.visible = false;
        }, this, 2500);
    };
    // 食物隐藏，盘子显示
    DancikaKuozhan.prototype.qiehuanZhuangtai = function () {
        var setTimer = egret.setTimeout(function () {
            // 开关判断显示哪种容器
            this.visibleOnOff = false;
            this.configGroupInit(this.addGroupOnOff, this.visibleOnOff);
            this.groupOwn.visible = false;
            this.groupTwo.visible = false;
            this.groupThree.visible = false;
            // 题目显示模块显示( 初始化 )
            // this.Spirit.visible = true;
            this.timuVisibleTimer();
            // 找到题目，生成图片
            var timuImage = this.createBitmapByName(this.subjectItem.Image);
            timuImage.width = 364;
            timuImage.height = 228;
            var timerOwn = egret.setTimeout(function () {
                this.onOffOnClick = true;
                // 将图片添加进题目中
                this.SpiritChildrenGroup.addChild(timuImage);
                // 题目对话框显示
                // this.duihuakuang.visible = true;
                // 对话框显示对应文字
                this.timutextLabel.text = this.subjectItem.text;
                Sounds[this.subjectItem.audio].play(0, 1);
            }, this, 1000);
        }, this, 2500);
    };
    // 抽取题目函数
    DancikaKuozhan.prototype.extractTopics = function () {
        // 题目初始化
        this.subjectItem = this.randomTwoArray[this.randomNumFun()];
    };
    // 题目显示一段时间后隐藏
    DancikaKuozhan.prototype.timuVisibleTimer = function () {
        this.Spirit.visible = true;
        var timerOut = egret.setTimeout(function () {
            // this.Spirit.visible = false;
            this.duihuakuang.visible = false;
        }, this, 2000);
    };
    // 获取面板宽度
    DancikaKuozhan.prototype.getWidth = function () {
        return this.width;
    };
    // 获取面板高度
    DancikaKuozhan.prototype.getHeight = function () {
        return this.height;
    };
    // 创建位图函数
    DancikaKuozhan.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return DancikaKuozhan;
}(eui.Component));
__reflect(DancikaKuozhan.prototype, "DancikaKuozhan");
//# sourceMappingURL=DancikaKuozhan.js.map