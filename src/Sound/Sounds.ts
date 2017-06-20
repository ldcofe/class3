class  Sounds{

    public static gameBgAudio:egret.Sound;          //游戏背景音乐
	public static yiqixuexidanci_wav:egret.Sound;	//一起学习单词
	public static manduApple_wav:egret.Sound;		//慢读apple
	public static OnceAgain_wav:egret.Sound;		//再来一次
	public static theAppleIsRed_wav:egret.Sound;	//这个苹果是红色
	public static kuaiduApple_wav:egret.Sound;		//快读apple
    public static theBannerIsYellow_wav:egret.Sound; //这个香蕉是黄色的
    public static thegrapesarepurple_wav:egret.Sound;//葡萄是紫色的
    public static kuaiduGrape_wav:egret.Sound;      //快读葡萄
    public static kuaiduBanner_wav:egret.Sound;     //快读香蕉

    public static ImhungryYang:egret.Sound;         //养
    public static ImhungryHouZi:egret.Sound;        //猴子
    public static ImhungryNiu:egret.Sound;          //牛
    public static ImhungryZhu:egret.Sound;          //猪
    public static ImhungryMao:egret.Sound;          //猫
    public static ImhungryGou:egret.Sound;          //狗

    public static kuaiduRed_wav:egret.Sound;        //红色
    
    public static IwantanAnApple:egret.Sound;         //我想要一个苹果
    public static IwantBananas:egret.Sound;          //我想要香蕉
    public static IwantGrapes:egret.Sound;          //我想要葡萄
    public static xiaopengyou:egret.Sound;          //小朋友

    public static noitisabanana:egret.Sound;        //这是香蕉
    public static noitisanapple:egret.Sound;        //这是苹果
    public static noitisagrape:egret.Sound;         //这是葡萄

    public static jiangli:egret.Sound;              //奖励音频

    public static wordTestAudio:egret.Sound;        //测试场景第一个音频

    public static kuaidupurple_wav:egret.Sound;
   
    public static KuaiduYellow_wav:egret.Sound;

    public static noitisred:egret.Sound;            //这是red
    public static noitisyellow:egret.Sound;         //这是yellow
    public static noitispurple:egret.Sound;         //这是purple

    public static theAppleisYummy:egret.Sound;      //这个苹果是好吃的
    public static theBananaisYummy:egret.Sound;     //这个香蕉是好吃的
    public static theGrapeisYummy:egret.Sound;      //这个葡萄是好吃的

    public static errorAudio:egret.Sound;           //错误声音

    public static konglongAudio_wav:egret.Sound;    //恐龙声音

    public static classStart:egret.Sound;       //clas3 Start 开场
    public static watermelonFast:egret.Sound;         //梨 快读
    public static watermelonSlow:egret.Sound;         //梨 慢读
    public static orangeFast:egret.Sound;         //梨 快读
    public static orangeSlow:egret.Sound;         //梨 慢读        
    public static pearFast:egret.Sound;         //梨 快读
    public static pearSlow:egret.Sound;         //梨 慢读
    public static cherryFast:egret.Sound;      //
    public static cherrySlow:egret.Sound;     //
    public static mangoFast:egret.Sound;      //
    public static mangoSlow:egret.Sound;           //
    public static strawberryFast:egret.Sound;      //
    public static strawberrySlow:egret.Sound;           //
    public static bigFast:egret.Sound;      //
    public static bigSlow:egret.Sound;           //
    public static smallFast:egret.Sound;      //
    public static smallSlow:egret.Sound;           //

    public static pearColor:egret.Sound;
    public static cherryColor:egret.Sound;
    public static mangoColor:egret.Sound;
    public static strawberryColor:egret.Sound;
    public static whichIsBig:egret.Sound;
    public static whichIsSmall:egret.Sound;    
    public static watermelonIsBig:egret.Sound;
    public static cherryIsSmall:egret.Sound;
    public static pearIsBig:egret.Sound;
    public static starwberryIsSmall:egret.Sound;
    public static mangoIsBig:egret.Sound;
    public static noMangoIsBig:egret.Sound; 
    public static orangeIsSmall:egret.Sound; 
    public static noorangeIsSmall:egret.Sound; 
    public static noorangeIsBig:egret.Sound; 
    public static nostarwberryIsSmall:egret.Sound; 
    public static nocherryIsSmall:egret.Sound; 
    public static nopearIsBig:egret.Sound; 
    public static nopearIsSmall:egret.Sound;      
    

    
    

  
    public static gameText:any;

    public static init(str):void{

        Sounds.gameBgAudio = RES.getRes(str.gameBgAudio);       //游戏背景音乐
        Sounds.yiqixuexidanci_wav = RES.getRes(str.yiqixuexidanci_wav);
		Sounds.OnceAgain_wav = RES.getRes(str.OnceAgain_wav);
		Sounds.theAppleIsRed_wav = RES.getRes(str.theAppleIsRed_wav);
		Sounds.theBannerIsYellow_wav = RES.getRes(str.theBannerIsYellow_wav);
        Sounds.thegrapesarepurple_wav = RES.getRes(str.thegrapesarepurple_wav);
        Sounds.kuaiduGrape_wav = RES.getRes(str.kuaiduGrape_wav);
        Sounds.kuaiduBanner_wav = RES.getRes(str.kuaiduBanner_wav);
        Sounds.kuaiduApple_wav = RES.getRes(str.kuaiduApple_wav);

        Sounds.ImhungryYang = RES.getRes(str.ImhungryYang);     //羊
        Sounds.ImhungryHouZi = RES.getRes(str.ImhungryHouZi);   //猴子
        Sounds.ImhungryNiu = RES.getRes(str.ImhungryNiu);       //牛
        Sounds.ImhungryZhu = RES.getRes(str.ImhungryZhu);       //猪
        Sounds.ImhungryMao = RES.getRes(str.ImhungryMao);       //猫
        Sounds.ImhungryGou = RES.getRes(str.ImhungryGou);       //狗

        Sounds.IwantanAnApple = RES.getRes(str.IwantanAnApple); //我想要一个苹果
        Sounds.IwantBananas = RES.getRes(str.IwantBananas);     //我想要香蕉
        Sounds.IwantGrapes = RES.getRes(str.IwantGrapes);       //我想要葡萄

        Sounds.xiaopengyou = RES.getRes(str.xiaopengyou);       //小朋友

        Sounds.noitisagrape = RES.getRes(str.noitisagrape);     //这是葡萄
        Sounds.noitisanapple = RES.getRes(str.noitisanapple);   //这是苹果
        Sounds.noitisabanana = RES.getRes(str.noitisabanana);   //这是香蕉
        Sounds.noitisred = RES.getRes(str.noitisred);   //这是香蕉
        Sounds.noitisyellow = RES.getRes(str.noitisyellow);   //这是香蕉
        Sounds.noitispurple = RES.getRes(str.noitispurple);   //这是香蕉

        Sounds.jiangli = RES.getRes(str.jiangli);               //奖励音频

        Sounds.wordTestAudio = RES.getRes(str.wordTestAudio);   //测试场景第一个音频

        Sounds.kuaiduRed_wav = RES.getRes(str.kuaiduRed_wav);   //红色
        Sounds.kuaidupurple_wav = RES.getRes(str.kuaidupurple_wav); //紫色
        Sounds.KuaiduYellow_wav = RES.getRes(str.KuaiduYellow_wav); //黄色

        Sounds.theAppleisYummy = RES.getRes(str.theAppleisYummy);   //这个苹果是好吃的
        Sounds.theBananaisYummy = RES.getRes(str.theBananaisYummy); //这个香蕉是好吃的
        Sounds.theGrapeisYummy = RES.getRes(str.theGrapeisYummy);   //这个葡萄是好吃的

        Sounds.errorAudio = RES.getRes(str.errorAudio);              //错误音效

        Sounds.konglongAudio_wav = RES.getRes(str.konglongAudio_wav);//恐龙声音

        
        Sounds.classStart = RES.getRes(str.classStart);       //clas3 Start 开场    
        Sounds.watermelonFast = RES.getRes(str.watermelonFast);         //梨 快读
        Sounds.watermelonSlow = RES.getRes(str.watermelonSlow);         //梨 慢读
        Sounds.orangeFast = RES.getRes(str.orangeFast);         //梨 快读
        Sounds.orangeSlow = RES.getRes(str.orangeSlow);         //梨 慢读        
        Sounds.pearFast = RES.getRes(str.pearFast);         //梨 快读
        Sounds.pearSlow = RES.getRes(str.pearSlow);         //梨 慢读
        Sounds.cherryFast = RES.getRes(str.cherryFast);      //
        Sounds.cherrySlow = RES.getRes(str.cherrySlow);     //
        Sounds.mangoFast = RES.getRes(str.mangoFast);      //
        Sounds.mangoSlow = RES.getRes(str.mangoFast);           //
        Sounds.strawberryFast = RES.getRes(str.strawberryFast);      //
        Sounds.strawberrySlow = RES.getRes(str.strawberrySlow);           //
        Sounds.bigFast = RES.getRes(str.bigFast);      //
        Sounds.bigSlow = RES.getRes(str.bigSlow);           //
        Sounds.smallFast = RES.getRes(str.smallFast);      //
        Sounds.smallSlow = RES.getRes(str.smallSlow);           //

        Sounds.pearColor = RES.getRes(str.pearColor);
        Sounds.cherryColor = RES.getRes(str.cherryColor);
        Sounds.mangoColor = RES.getRes(str.mangoColor);
        Sounds.strawberryColor = RES.getRes(str.strawberryColor);
        Sounds.whichIsBig = RES.getRes(str.whichIsBig);
        Sounds.whichIsSmall = RES.getRes(str.whichIsSmall);    
        Sounds.watermelonIsBig = RES.getRes(str.watermelonIsBig);
        Sounds.cherryIsSmall = RES.getRes(str.cherryIsSmall);
        Sounds.pearIsBig = RES.getRes(str.pearIsBig);
        Sounds.starwberryIsSmall = RES.getRes(str.starwberryIsSmall);
        Sounds.mangoIsBig = RES.getRes(str.mangoIsBig);
        Sounds.noMangoIsBig = RES.getRes(str.noMangoIsBig); 
        Sounds.orangeIsSmall = RES.getRes(str.orangeIsSmall); 
        Sounds.noorangeIsSmall = RES.getRes(str.noorangeIsSmall); 
        Sounds.noorangeIsBig = RES.getRes(str.noorangeIsBig); 
        Sounds.nostarwberryIsSmall = RES.getRes(str.nostarwberryIsSmall); 
        Sounds.nocherryIsSmall = RES.getRes(str.nocherryIsSmall); 
        Sounds.nopearIsBig = RES.getRes(str.nopearIsBig); 
        Sounds.nopearIsSmall = RES.getRes(str.nopearIsSmall);          




    }
    public static textInit(text):void{
        Sounds.gameText = text;
    }

    
}