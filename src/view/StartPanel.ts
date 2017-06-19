class StartPanel extends eui.Component{
    constructor(){
        super()
        this.skinName = 'startView'
        this.init();
    }
    

    // 主按钮
    private MainPlayBtn_png:eui.Button;
    // 右边的按钮
    private MainRight:eui.Button;
    // 左边的按钮
    private MainLeft:eui.Button;
    // 课程表
    private MainCurriculumschedule:eui.Button;
    // 课程表
    private MainDanciKaBen:eui.Button;
    // 游戏按钮 
    private MainGameBtn:eui.Button;
    // 音乐按钮
    private ListEning:eui.Button;
    // 测试按钮
    private MainTest:eui.Button;
    // 课程天数
    private MainDay:eui.Button;


    private init(){
        if(!GlobalData.bgSounds){
            // 播放游戏音乐
            GlobalData.bgSounds = Sounds.gameBgAudio.play();
            GlobalData.bgSounds.volume = 0.3;
        }
        
        this.MainPlayBtn_png.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchMainPlayBtn,this)
        this.MainRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchMainRight,this)
        this.MainLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchMainLeft,this)
        this.MainCurriculumschedule.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchMainCurriculumschedule,this)
        this.MainDanciKaBen.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchMainDanciKaBen,this)
        this.MainGameBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchMainGameBtn,this)
        this.ListEning.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchListEning,this)
        this.MainTest.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchMainTest,this)
        
    }
    // 主按钮点击触发
    private onTouchMainPlayBtn():void{
        publicClass.BtnTween(this,this.MainPlayBtn_png,this.onDisPMainPlayBtn);
        
    }
    // 动画完成后触发
    private onDisPMainPlayBtn(){
        Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    }   

    // 主右边按钮
    private onTouchMainRight():void{
        publicClass.BtnTween(this,this.MainRight,this.onDisPMainRight);
        
    }
    // 右边按钮动画完成后触发
    private onDisPMainRight(){
        // Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
    }
    // 主左边按钮点击触发
    private onTouchMainLeft():void{
        publicClass.BtnTween(this,this.MainLeft,this.onDisPMainLeft);
        
    }
    // 左边按钮动画完成后触发
    private onDisPMainLeft(){
        // Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
    }
    // 主课程表按钮点击触发
    private onTouchMainCurriculumschedule():void{
        publicClass.BtnTween(this,this.MainCurriculumschedule,this.onDisPMainCurriculumschedule);
        
    }
    // 课程表动画完成后触发
    private onDisPMainCurriculumschedule(){
        Global.dispatchEvent(MainNotify.openCurriculumScheduleNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
        
    }
    // 主单词卡按钮点击触发
    private onTouchMainDanciKaBen():void{
        publicClass.BtnTween(this,this.MainDanciKaBen,this.onDisPMainDanciKaBen);
        
    }
    // 单词卡动画完成后触发
    private onDisPMainDanciKaBen(){
        Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    }
    // 主游戏按钮按钮点击触发
    private onTouchMainGameBtn():void{
        publicClass.BtnTween(this,this.MainGameBtn,this.onDisPMainGameBtn);
        
    }
    // 游戏按钮动画完成后触发(zyh)
    // private onDisPMainGameBtn(){
    //     Global.dispatchEvent(MainNotify.openGamePanelNotify, null, false);
    //     Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    // }

    private onDisPMainGameBtn(){
        Global.dispatchEvent(MainNotify.openGameCutNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    }

    // 主音乐按钮点击触发
    private onTouchListEning():void{
        publicClass.BtnTween(this,this.ListEning,this.onDisPListEning);
        
    }
    // 动画完成后触发
    private onDisPListEning(){
        // Global.dispatchEvent(MainNotify.openXuanXiangKaNotify, null, false);
    }
    // 主测试按钮点击触发
    private onTouchMainTest():void{
        publicClass.BtnTween(this,this.MainTest,this.onDisPMainTest);
        
    }
    // 测试按钮动画完成后触发
    private onDisPMainTest(){
        Global.dispatchEvent(MainNotify.openTestInterfaceNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    }






    // 获取面板宽度
    public getWidth():number{
        return this.width;
    }    

    // 获取面板高度
    public getHeight():number{
        return this.height;
    }

    
}