var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var publicClass = (function () {
    function publicClass() {
    }
    publicClass.BtnTween = function (context, __this, callBack) {
        egret.Tween.get(__this).to({ scaleX: 0.8, scaleY: 0.8 }, 150).to({ scaleX: 1, scaleY: 1 }, 150).call(function () {
            callBack();
        }, this);
    };
    publicClass.MovieClip = function (data, image, run) {
        var datas = RES.getRes(data);
        var images = RES.getRes(image);
        var mcFactory = new egret.MovieClipDataFactory(datas, images);
        var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData(run));
        return mc1;
    };
    return publicClass;
}());
__reflect(publicClass.prototype, "publicClass");
//# sourceMappingURL=publicClass.js.map