var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sounds = (function () {
    function Sounds() {
    }
    Sounds.init = function (str) {
        Sounds.gameBgAudio = RES.getRes(str.gameBgAudio); //游戏背景音乐
        Sounds.yiqixuexidanci_wav = RES.getRes(str.yiqixuexidanci_wav);
        Sounds.OnceAgain_wav = RES.getRes(str.OnceAgain_wav);
        Sounds.theAppleIsRed_wav = RES.getRes(str.theAppleIsRed_wav);
        Sounds.theBannerIsYellow_wav = RES.getRes(str.theBannerIsYellow_wav);
        Sounds.thegrapesarepurple_wav = RES.getRes(str.thegrapesarepurple_wav);
        Sounds.kuaiduGrape_wav = RES.getRes(str.kuaiduGrape_wav);
        Sounds.kuaiduBanner_wav = RES.getRes(str.kuaiduBanner_wav);
        Sounds.kuaiduApple_wav = RES.getRes(str.kuaiduApple_wav);
        Sounds.ImhungryYang = RES.getRes(str.ImhungryYang); //羊
        Sounds.ImhungryHouZi = RES.getRes(str.ImhungryHouZi); //猴子
        Sounds.ImhungryNiu = RES.getRes(str.ImhungryNiu); //牛
        Sounds.ImhungryZhu = RES.getRes(str.ImhungryZhu); //猪
        Sounds.ImhungryMao = RES.getRes(str.ImhungryMao); //猫
        Sounds.ImhungryGou = RES.getRes(str.ImhungryGou); //狗
        Sounds.IwantanAnApple = RES.getRes(str.IwantanAnApple); //我想要一个苹果
        Sounds.IwantBananas = RES.getRes(str.IwantBananas); //我想要香蕉
        Sounds.IwantGrapes = RES.getRes(str.IwantGrapes); //我想要葡萄
        Sounds.xiaopengyou = RES.getRes(str.xiaopengyou); //小朋友
        Sounds.noitisagrape = RES.getRes(str.noitisagrape); //这是葡萄
        Sounds.noitisanapple = RES.getRes(str.noitisanapple); //这是苹果
        Sounds.noitisabanana = RES.getRes(str.noitisabanana); //这是香蕉
        Sounds.noitisred = RES.getRes(str.noitisred); //这是香蕉
        Sounds.noitisyellow = RES.getRes(str.noitisyellow); //这是香蕉
        Sounds.noitispurple = RES.getRes(str.noitispurple); //这是香蕉
        Sounds.jiangli = RES.getRes(str.jiangli); //奖励音频
        Sounds.wordTestAudio = RES.getRes(str.wordTestAudio); //测试场景第一个音频
        Sounds.kuaiduRed_wav = RES.getRes(str.kuaiduRed_wav); //红色
        Sounds.kuaidupurple_wav = RES.getRes(str.kuaidupurple_wav); //紫色
        Sounds.KuaiduYellow_wav = RES.getRes(str.KuaiduYellow_wav); //黄色
        Sounds.theAppleisYummy = RES.getRes(str.theAppleisYummy); //这个苹果是好吃的
        Sounds.theBananaisYummy = RES.getRes(str.theBananaisYummy); //这个香蕉是好吃的
        Sounds.theGrapeisYummy = RES.getRes(str.theGrapeisYummy); //这个葡萄是好吃的
        Sounds.errorAudio = RES.getRes(str.errorAudio); //错误音效
        Sounds.konglongAudio_wav = RES.getRes(str.konglongAudio_wav); //恐龙声音
    };
    Sounds.textInit = function (text) {
        Sounds.gameText = text;
    };
    return Sounds;
}());
__reflect(Sounds.prototype, "Sounds");
//# sourceMappingURL=Sounds.js.map