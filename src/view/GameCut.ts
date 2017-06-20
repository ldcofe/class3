
class GameCut extends eui.Component{
    constructor(){
        super()
        this.skinName = 'gameCut'
        this.init();
    }

    /*变量定义 start*/

    // 公共文字
    private GlobalDataArr:any[];
    // 声音版块
    private GlobalDataArrWav:any[];

    //stageStatus : 1:初始化的场景
    //              2:打开冰箱门后的场景
    public stageStatus:number;
    // 个数计数
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
    //水果盘
    private dish2:eui.Image; 

    // 喇叭开关控制重复播放
    private labaOnOff:boolean;
    //记录文字
    private textJilu:any;
    // 记录移动的元素
    private _thisEle:any;
    // 鼠标点击时，鼠标全局坐标与当前的位置差
    private _distance:egret.Point = new egret.Point();
    // 鼠标点击时，原始点的信息
    private _origin:egret.Point = new egret.Point();     
    // 开关判断移动的时候
    private onMoveOnOff:boolean;           
    // 检测碰撞
    private duangOnOff:boolean; 


    /*变量定义 end*/
    
    //init函数
    private init():void{
        //初始化参数
        this.m = 0;

        //载入配置
        this.GlobalDataArr = GlobalData.config_json.gameCut;
        this.GlobalDataArrWav = GlobalData.config_json.gameWav;
        this.stageStatus = 0;

        // 场景递推函数
        this.playGameScence();

        // 拖动函数
        this.PlayGameDrag();        
    }

    // 游戏玩法函数
    private playGameScence(){
        // 播放开始场景音
        let SoundsTimerstart = Sounds.xiaopengyou.play(0,1)
        // 播放完后回调
        SoundsTimerstart.addEventListener(egret.Event.SOUND_COMPLETE,function(){
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
                this.gameCutTextBig.visible = true;
                this.gameCutTextBig.width = 350;
                this.gameCutLaba.visible = false;

                // 播放对应的音频
                console.log(';;;;;;'+indexObject.gameTip);
                let soundsTwo = Sounds[indexObject.gameTip].play(0,1);
                soundsTwo.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                    soundsTwo = null;
                    // 播放完毕后隐藏文字
                    this.gameCutTextBig.visible = false;
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
            this.btnFruit.$children[i].addEventListener(egret.TouchEvent.TOUCH_END,this.PlayGameFeedMouseUp,this);
        }
    }
    // 按下
    private PlayGameDragMouseDown(e,i){
             
        let danliContent:any = this.btnFruit.$children[i]; 
        this._thisEle = e.target;
        
        this._distance.x = e.stageX - this._thisEle.x;
        this._distance.y = e.stageY - this._thisEle.y;

        //记录原始的位置
        this._origin.x = this._thisEle.x;
        this._origin.y = this._thisEle.y;        

        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.PlayGameDragMouseMove,this);
      
    }

    // 碰撞检测函数
    private duangFun(ele){
        let flag = (this.m) % 2;
        let isTrue;
        if(!flag){
            isTrue = ele.hitTestPoint( 651, 1166 );
        }else{
            isTrue = ele.hitTestPoint( 1275, 1166 );
        }
        return isTrue;
    }

    // 移动
    private PlayGameDragMouseMove(e){
        this.btnFruit.setChildIndex( e.target, 999 );
        this.duangOnOff = this.duangFun(e.target)
        this.onMoveOnOff = false;
        this._thisEle.x = e.stageX - this._distance.x;
        this._thisEle.y = e.stageY - this._distance.y;
    }

    // 抬起
    private PlayGameFeedMouseUp(e){
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.PlayGameDragMouseMove, this);
        if(this.duangOnOff === true){
            console.log("放到盘子上了");
            // 把碰撞状态改为false
            this.duangOnOff = false;
            if(e.target.name == this.textJilu.text){
                //判断水果是否跟读音匹配(设置位置居中)
                let flag = (this.m) % 2;
                if(!flag){
                    e.target.x = 651 - (e.target.width / 2);
                    e.target.y = 1166 - e.target.height; 
                }else{
                    e.target.x = 1275 - (e.target.width / 2);
                    e.target.y = 1166 - e.target.height; 
                }                
  
                //显示第二个词语
                this.m = 1;
                this.dish2.visible = true;
                //提词器提示词语
                let timerOne = egret.setTimeout(function(){
                    timerOne = null;
                    // 对话框显示
                    this.gameCutTextGroup.visible = true;
                    this.gameCutLaba.visible = false;
                    // 播放提示
                    this.PlayDifferentAudio();

                },this,1000)
                
            }else{
                //进行复位操作
                this.recoveryPositionFun(e);
                egret.setTimeout(function(){
                    this.onMoveOnOff = true;
                },this,300);
            }

        }else{
            //进行复位操作
            this.recoveryPositionFun(e);
            egret.setTimeout(function(){
                this.onMoveOnOff = true;
            },this,300);

        } 
    }

    // 根据参数把对应的元素恢复原位
    private recoveryPositionFun(e){
        this.btnFruit.setChildIndex( e.target, 10);
        e.target.x = this._origin.x;
        e.target.y = this._origin.y;
    }


}