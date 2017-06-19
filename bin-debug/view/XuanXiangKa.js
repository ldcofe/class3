var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XuanXiangKa = (function (_super) {
    __extends(XuanXiangKa, _super);
    function XuanXiangKa() {
        var _this = _super.call(this) || this;
        _this.skinName = 'XuangXiangKa';
        _this.init();
        return _this;
    }
    // 初始化
    XuanXiangKa.prototype.init = function () {
        this.textGroup.visible = false;
        // 一起学习单词音频播放控制器
        this.yiqixuexidanci_wav = Sounds.yiqixuexidanci_wav.play(0, 1);
        // 播放完毕后值值执行函数
        this.yiqixuexidanci_wav.addEventListener(egret.Event.SOUND_COMPLETE, this.yiqixuexidanciOver, this);
    };
    // 音频播放完毕值执行的函数
    XuanXiangKa.prototype.yiqixuexidanciOver = function () {
        egret.setTimeout(function () {
            // 单词框隐藏
            this.textGroup.visible = true;
            var color = 0xf7ff1c; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 0.8; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 80; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 80; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 3; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
            var inner = false; /// 指定发光是否为内侧发光，暂未实现
            var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
            this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
            this.onClickOnOff = false;
            this.initEffect();
            this.audioPublicPlay();
            // 初始化下标
            var n = 0;
            GlobalData.dancikaTimerClear = egret.setInterval(function () {
                this.setInteronOff = true;
                var a = 0;
                for (var i = 0; i < this.scrollGroup.$children.length; i++) {
                    a = i - 1;
                    if (a < 0) {
                        a = this.scrollGroup.$children.length - 1;
                        if (n > this.scrollGroup.$children.length - 1) {
                            n = 0;
                        }
                        this.scrollGroup.$children[n].visible = false;
                    }
                    egret.Tween.get(this.scrollGroup.$children[i]).to({
                        x: this.scrollGroup.$children[a].x,
                        y: this.scrollGroup.$children[a].y,
                        scaleX: this.scrollGroup.$children[a].scaleX,
                        scaleY: this.scrollGroup.$children[a].scaleY
                    }, 200).call(function () {
                        if (this.setInteronOff) {
                            this.scrollGroup.$children[n].visible = true;
                            // 点击后字体变化
                            this.typerTF.setText("");
                            EffectUtils.typerEffect(this.typerTF, this.onchangeText(), 0);
                            // 点击后音频变化
                            this.audioPublicPlay();
                            // 控制重复回掉节省性能
                            this.setInteronOff = false;
                        }
                    }, this);
                }
                egret.setTimeout(function () {
                    n++;
                }, this, 220);
            }, this, 16000);
            // 左边按钮点击
            // this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
            // 	if(this.onClickOnOff == false){
            // 		return;
            // 	}
            // 	this.onClickOnOff = false;
            // 	this.setInteronOff = true;
            // 	let a = 0;
            // 	for(let i = 0;i< this.scrollGroup.$children.length; i++){
            // 		a = i-1;
            // 		if(a<0){
            // 			a = this.scrollGroup.$children.length-1;
            // 			if(n>this.scrollGroup.$children.length-1){
            // 				n = 0;
            // 			}
            // 			this.scrollGroup.$children[n].visible = false;
            // 		}
            // 		egret.Tween.get(this.scrollGroup.$children[i]).to({
            // 			x:this.scrollGroup.$children[a].x,
            // 			y:this.scrollGroup.$children[a].y,
            // 			scaleX:this.scrollGroup.$children[a].scaleX,
            // 			scaleY:this.scrollGroup.$children[a].scaleY
            // 		},200).call(function(){
            // 			if(this.setInteronOff){
            // 				this.scrollGroup.$children[n].visible = true;
            // 				// 点击后字体变化
            // 				this.typerTF.setText("");
            // 				EffectUtils.typerEffect(this.typerTF,this.onchangeText(),0);
            // 				// 点击后音频变化
            // 				this.audioPublicPlay();
            // 				// 控制重复回掉节省性能
            // 				this.setInteronOff = false;
            // 			}
            // 		},this)
            // 	}
            // 	egret.setTimeout(function(){
            // 		n++;
            // 	},this,220)
            // },this)
            // // 右边按钮点击
            // this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
            // 		if(this.onClickOnOff === false){
            // 			return;
            // 		}
            // 		this.onClickOnOff = false;
            // 		this.setInteronOff = true;
            // 		let a = 0;
            // 		n--;
            // 		for(let i = 0;i< this.scrollGroup.$children.length; i++){
            // 			a = i+1;
            // 			if(a>this.scrollGroup.$children.length-1){
            // 				a = 0;
            // 				if(n<0){
            // 					n = this.scrollGroup.$children.length-1;
            // 				}
            // 				this.scrollGroup.$children[n].visible = false;
            // 			}
            // 			egret.Tween.get(this.scrollGroup.$children[i]).to({
            // 				x:this.scrollGroup.$children[a].x,
            // 				y:this.scrollGroup.$children[a].y,
            // 				scaleX:this.scrollGroup.$children[a].scaleX,
            // 				scaleY:this.scrollGroup.$children[a].scaleY
            // 			},200).call(function(){
            // 				if(this.setInteronOff){
            // 					this.scrollGroup.$children[n].visible = true;
            // 					// 点击后字体变化
            // 					this.typerTF.setText("");
            // 					EffectUtils.typerEffect(this.typerTF,this.onchangeText(),0);
            // 					// 点击后音频变化
            // 					this.audioPublicPlay();
            // 					this.setInteronOff = false;
            // 				}
            // 			},this)
            // 		}
            // },this)
        }, this, 500);
    };
    // 效果第一次执行
    XuanXiangKa.prototype.initEffect = function () {
        // 打印机效果第一次执行
        this.dayinji();
        // 初始化第3个位图发光
        this.scrollGroup.$children[3].filters = [this.glowFilter];
    };
    // 清理其他的颜色阴影
    XuanXiangKa.prototype.colorClear = function () {
        for (var i = 0; i < this.scrollGroup.$children.length; i++) {
            this.scrollGroup.$children[i].filters = null;
        }
    };
    // 打印机
    XuanXiangKa.prototype.dayinji = function () {
        this.typerTF = new ETextField();
        this.typerTF.bold = true;
        this.typerTF.textColor = 0x00000;
        this.typerTF.stroke = 1;
        this.typerTF.width = 520;
        this.typerTF.height = 148;
        this.typerTF.textAlign = 'center';
        this.typerTF.verticalAlign = 'middle';
        this.typerTF.size = 100;
        this.typerTF.x = 728;
        this.typerTF.y = 1000;
        this.addChild(this.typerTF);
        this.typerTF.setText("");
        EffectUtils.typerEffect(this.typerTF, this.onchangeText(), 0);
    };
    // 根据name找到图片相对应文字,加载相应音频
    XuanXiangKa.prototype.onchangeText = function () {
        var index = this.fillBig();
        for (var i in GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage) {
            if (i === this.scrollGroup.$children[index].name) {
                this.colorClear();
                this.scrollGroup.$children[index].filters = [this.glowFilter];
                return GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].text;
            }
        }
    };
    // 遍历找到最大的图片
    XuanXiangKa.prototype.fillBig = function () {
        var a = 0;
        var arr = [];
        var newArr = [];
        for (var i = 0; i < this.scrollGroup.$children.length; i++) {
            newArr.push([this.scrollGroup.$children[i].scaleX, i]);
            arr.push(this.scrollGroup.$children[i].scaleX);
        }
        var maxNum = Math.max.apply(Math, arr);
        newArr.filter(function (item, index) {
            if (maxNum == item[0]) {
                a = index;
            }
        });
        return a;
    };
    // 根据实物点击播放不同音频
    XuanXiangKa.prototype.audioPublicPlay = function () {
        var index = this.fillBig();
        for (var i in GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage) {
            if (i === this.scrollGroup.$children[index].name) {
                this.audioKuai = RES.getRes(GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].kuaiAudio);
                this.audioMan = RES.getRes(GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].manduAudio);
                this.tankuangImageOwn = GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].tankuangImageOwn;
                this.tankuangImageTwo = GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].tankuangImageTwo;
                this.tankuangText = GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].tankuangText;
                this.paragraph = GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].paragraph;
                // 根据配置文件设置音频，图片，文字信息函数
                this.audioPublicPlaying();
            }
        }
    };
    // 获取面板宽度
    XuanXiangKa.prototype.getWidth = function () {
        return this.width;
    };
    // 获取面板高度
    XuanXiangKa.prototype.getHeight = function () {
        return this.height;
    };
    // 根据配置文件给单词卡弹框设置图片和文字，音频
    XuanXiangKa.prototype.audioPublicPlaying = function () {
        // 播放识物音频(快)
        var SoundsKuai = this.audioKuai.play(0, 1);
        // 播放完执行函数
        SoundsKuai.addEventListener(egret.Event.SOUND_COMPLETE, function () {
            // 清空控制器
            SoundsKuai = null;
            // 定时器延迟一下
            var hemaManTimer = egret.setTimeout(function () {
                // 清空延迟器
                hemaManTimer = null;
                // 播放识物音频(慢)
                var SoundsMan = this.audioMan.play(0, 1);
                // 清空字然后再打印字
                this.typerTF.setText("");
                EffectUtils.typerEffect(this.typerTF, this.onchangeText(), 200);
                // 音频播放(慢)执行完后值执行函数
                SoundsMan.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                    // 清空音频
                    SoundsMan = null;
                    var timerTwo = egret.setTimeout(function () {
                        timerTwo = null;
                        // 发送执行完毕相应(触发弹框) 传递参数
                        Global.dispatchEvent(MainNotify.openXuanXiangMessageNotify, {
                            'tankuangImageOwn': this.tankuangImageOwn,
                            'tankuangText': this.tankuangText,
                            'paragraph': this.paragraph,
                            "tankuangImageTwo": this.tankuangImageTwo,
                            "appleKuai": this.audioKuai,
                            "appleMan": this.audioMan
                        }, false);
                        // 控制多次点击
                    }, this, 1000);
                    this.onClickOnOff = true;
                }, this);
            }, this, 1500);
        }, this);
    };
    return XuanXiangKa;
}(eui.Component));
__reflect(XuanXiangKa.prototype, "XuanXiangKa");
//# sourceMappingURL=XuanXiangKa.js.map