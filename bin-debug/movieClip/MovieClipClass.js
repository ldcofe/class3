var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MovieClipClass = (function (_super) {
    __extends(MovieClipClass, _super);
    function MovieClipClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // public constructor(data,img,_thisScope,dongAimation){
    // 	super();
    // 	// this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd=function(){
    // 	// 	this.add(data,img,_thisScope,dongAimation);
    // 	// },this);
    // 	// this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onRemove,this);
    // }
    MovieClipClass.onAdd = function (data, img, _thisScope, dongAimation) {
        var datas = RES.getRes(data);
        var imgs = RES.getRes(img);
        var mcFactory = new egret.MovieClipDataFactory(datas, imgs);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData(dongAimation));
        _thisScope.addChild(mc);
        return mc;
    };
    // private onRemove():void{
    // 	this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);
    // 	this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onRemove,this);
    // }
    MovieClipClass.playOnce = function (mc, dongzuo) {
        mc.gotoAndPlay(dongzuo, 1);
    };
    MovieClipClass.playLoop = function (mc, dongzuo) {
        mc.gotoAndPlay(dongzuo, -1);
    };
    MovieClipClass.playStop = function (mc, dongzuo) {
        mc.gotoAndStop(dongzuo);
    };
    MovieClipClass.specifiedFrame = function (mc, n) {
        mc.gotoAndPlay(n, 1);
    };
    return MovieClipClass;
}(egret.DisplayObjectContainer));
__reflect(MovieClipClass.prototype, "MovieClipClass");
//# sourceMappingURL=MovieClipClass.js.map