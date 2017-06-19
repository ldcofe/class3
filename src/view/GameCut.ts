
class GameCut extends eui.Component{
    constructor(){
        super()
        this.skinName = 'gameCut'
        this.init();
    }

    /*变量定义 start*/

    // 公共文字
    private GlobalDataArr:any[];
    // 颜色板块
    private GlobalDataArrColor:any[];

    //stageStatus : 1:初始化的场景
    //              2:打开冰箱门后的场景
    public stageStatus:number;
    // 组数计数
    private m:number;

    //打开冰箱场景组
    private gamePaly:eui.Group;
    // 大对话跨框
    public gameCutTextBig:eui.Label;
    // 对话框容器
    public gameCutTextGroup:eui.Group;
    // 喇叭
    private gameCutLaba:eui.Group;
    //水果按钮组
    private btnFruit:eui.Group;    


    // 喇叭开关控制重复播放
    private labaOnOff:boolean;
    //记录文字
    private textJilu:any;



    /*变量定义 end*/
    
    //init函数
    private init():void{
        //初始化，第一组
        this.m = 0;

        //载入配置
        this.GlobalDataArr = GlobalData.config_json.gameCut;
        this.stageStatus = 0;

        // 场景递推函数
        this.playGameScence();

        // 拖动函数
        this.PlayGameDrag();        
    }

    // 游戏玩法函数
    private playGameScence(){
        // 播放开始场景音
        let SoundsTimerXiaopengyou = Sounds.xiaopengyou.play(0,1)
        // 播放完后回调
        SoundsTimerXiaopengyou.addEventListener(egret.Event.SOUND_COMPLETE,function(){
            this.stageStatus += 1;
            this.PlaceDifferentPictures();
        },this);
        
    }

    //场景推进
    private PlaceDifferentPictures(){
        // 判断是开冰箱门的时候
            if(this.stageStatus === 1){
                //调整水果顺序(TODO)
                //my code


                // 打开冰箱的场景显示
                this.gamePaly.visible = true;

                //提词器提示词语
                let timerOne = egret.setTimeout(function(){
                    timerOne = null;
                    // 对话框显示
                    this.gameCutTextGroup.visible = true;
                    this.gameCutLaba.visible = false;
                    // 播放提示
                    this.PlayDifferentAudio();

                },this,1000)

            }
    }

    // 根据配置参数播放不同的语音
    private PlayDifferentAudio(){
            
            let timerTwo = egret.setTimeout(function(){
                timerTwo = null;
                // 获取对应物品对象
                
                let indexObject = this.GlobalDataArr[this.m]
                //标记当前需要点击的物品
                this.textJilu = indexObject;

                // 根据对象改变文字
                this.gameCutTextBig.text = indexObject.text;
                
                // 改变对话框的宽度
                this.gameCutTextBig.width = 350;
                this.gameCutLaba.visible = false;

                // 播放对应的音频
                let soundsTwo = Sounds[indexObject.IwantshuiguoOwn].play(0,1);
                soundsTwo.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                    soundsTwo = null;
                    // 播放完毕后改变文字
                    this.gameCutTextBig.text = this.GlobalDataArr[this.m].Iwantan;
                    // 改变对话框宽度
                    this.gameCutTextBig.width = 350;
                    // 喇叭显示
                    this.gameCutLaba.visible = true;                    

                },this)
            },this,1000)
    }

    // 拖动函数
    private PlayGameDrag(){
        for(let i = 0; i<this.btnFruit.$children.length; i++){
            this.btnFruit.$children[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e){

                this.PlayGameDragMouseDown(e,i)
            },this);
            this.btnFruit.$children[i].addEventListener(egret.TouchEvent.TOUCH_END,this.PlayGameFeedMouseMove,this);
        }
    }
    // 按下
    private PlayGameDragMouseDown(e,i){
         let danliContent:any = this.btnFruit.$children[i];
        
        //if( danliContent.currentState == 'disabled' && e.target.$children[1].name === this.textJilu.text &&　this.moveOnOff){
            
            
            this._thisEle = e.target;
            
            this._distance.x = e.stageX - this._thisEle.x;
            this._distance.y = e.stageY - this._thisEle.y;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.PlayGameFeedMouseMove,this)
        //}      

    }

    // 移动
    private PlayGameFeedMouseMove(e){

    }

}