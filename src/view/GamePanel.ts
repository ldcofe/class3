
class GamePanel extends eui.Component{
    constructor(){
        super()
        this.skinName = 'gameView'
        this.init();
    }

    // 切换动物计数
    private n:number;
    // 动物说的次数
    private m:number;
    // 动物图片
    private yaziOwn:eui.Image;
    private yaziTwo:eui.Image;
    private yaziThree:eui.Image;
    private zhuOwn:eui.Image;
    private zhuTwo:eui.Image;
    private zhuThree:eui.Image;
    private niuOwn:eui.Image;
    private niuTwo:eui.Image;
    private niuThree:eui.Image;
    
    // 大对话跨框
    public gamePlaytextBig:eui.Label;
    // 对话框容器
    public gamePlayTextGroup:eui.Group;
   
    // 喇叭
    private gamePlayLaba:eui.Group;
    // 喇叭开关控制重复播放
    private labaOnOff:boolean;

    // 按钮总容器
    private btnContentGroup:eui.Group;

    private btnContentGroupTwo:eui.Group;
    

    // 小的对话框容器
    private gamePlayWuPinGroup:eui.Group;
    // 小对话框文本
    private gamePlayWuPinText:eui.Label;
   
    // 点击按钮开关控制多次点击
    private onTouchOnoff:boolean;
    // 开关判断移动的时候
    private onMoveOnOff:boolean;
    // 检测碰撞
    private duangOnOff:boolean; 

    // 公共文字
    private GlobalDataArr:any[];
    // 颜色板块
    private GlobalDataArrColor:any[];

    //记录文字
    private textJilu:any;
    // 鼠标点击时，鼠标全局坐标与当前的位置差
    private _distance:egret.Point = new egret.Point();


    // 第一个按钮
    public gamePlayApple:eui.Group;
    // 第二个按钮
    public gamePlayBanana:eui.Group;
    // 第三个按钮
    public gamePlayGrape:eui.Group;

    private gameplayPoint:egret.Point = new egret.Point();


    // 第一个按钮坐标
    private gamePlayApplePoint:egret.Point = new egret.Point();
    // 第二个按钮坐标
    private gamePlayBananaPoint:egret.Point = new egret.Point();
    // 第三个按钮坐标
    private gamePlayGrapePoint:egret.Point = new egret.Point();

    // 第一张图
    private OwnImage:eui.Image;
    // 第二张图
    private TwoImage:eui.Image;
    // 第三张图
    private ThreeImage:eui.Image;


    // 记录移动的元素
    private _thisEle:any;

    // 图片借用容器
    private groupImage:any;

    private colorOnOff:boolean;

    // 移动开关，主要用于颜色点击的时候不让移动
    private moveOnOff:boolean;

    private init():void{
        this.n = 0;
        this.m = 0;
        this.GlobalDataArr = GlobalData.config_json.gamePlaying;
        this.GlobalDataArrColor = GlobalData.config_json.gamePlayingTwo;

        this.onTouchOnoff = true;
        this.onMoveOnOff = true;

        // 记录按钮坐标
        this.gamePlayApplePoint.x = this.gamePlayApple.x;
        this.gamePlayApplePoint.y = this.gamePlayApple.y;

        this.gamePlayBananaPoint.x = this.gamePlayBanana.x;
        this.gamePlayBananaPoint.y = this.gamePlayBanana.y;

        this.gamePlayGrapePoint.x = this.gamePlayGrape.x;
        this.gamePlayGrapePoint.y = this.gamePlayGrape.y;

        this.colorOnOff = true;
        this.moveOnOff = true;

        // 喇叭点击函数
        this.gamePlayLaba.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickPlaySoundsFun,this)

        // 出事化喇叭开关
        this.labaOnOff = true;

        // 按钮初始化
        this.btnContentGroupTwo.visible = false;
        this.btnContentGroup.visible = false;


        

        
        // 实现单选功能
        this.contentButton();
        // 场景递推函数
        this.playGameScence();
        // 拖动函数
        this.PlayGameFeed();
    }
    

    // 按钮单选功能实现
    private contentButton(){
        for(let i = 0; i<this.btnContentGroup.$children.length; i++){
            
            // 每个按钮点击的时候
            this.btnContentGroup.$children[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e){
                
                
               
                if(!this.onTouchOnoff || !this.onMoveOnOff){
                    return;
                }
                // this.moveOnOff = false;

                
                this.onTouchOnoff = false;
               
                


                if(this.colorOnOff){

                    this.moveOnOff = true;
                    // 判断解决多次点击，和是否处于移动状态
                    

                    // 判断当前点击的图片的name 与 记录的name一样时
                    let checkedName = this.btnContentGroup.$children[i].$children[1].name;
                    if(checkedName == this.textJilu.text){
                        

                        // 清空所有按钮的样式,
                        this.emptyAllStyles();
                        // 改变当前的样式
                        let _thisGroupButton:any = this.btnContentGroupTwo.$children[i];
                        _thisGroupButton.currentState = "disabled";

                        this.OwnImage.visible = false;
                                
                        this.TwoImage.visible = true;
                        // 播放对应物品音频
                        // let wupinSounds = Sounds[this.textJilu.IwantshuiguoTwo].play(0,1);
                        
                        // 对话框中的内容变成相应的内容
                        this.gamePlayWuPinText.text = this.textJilu.text;

                        // 改变对话框的宽度,喇叭隐藏
                        this.gamePlaytextBig.width = 640;
                        this.gamePlayLaba.visible = false;

                        // 再次改变文字
                        this.gamePlaytextBig.text = this.GlobalDataArr[this.m].IwantanApple;
                        // 再次播放“我想要”音频
                        // wupinSounds.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                           
                            
                        // },this)

                        // 第二个对话框显示
                        // this.gamePlayWuPinGroup.visible = true;
                        this.gamePlayWuPinGroupsetTimeVisibleFalse();

                        // 对话框的位置根据点击的位置进行变化
                        this.gamePlayWuPinGroup.x = this.btnContentGroup.$children[i].x;
                        this.gamePlayWuPinGroup.y = this.btnContentGroup.$children[i].y-this.gamePlayWuPinGroup.height;
                        
                    
                        

                        //this.aa();
                    }else{

                        // 错误音
				        Sounds.errorAudio.play(0,1)

                        
                        // 播放完毕后改变文字
                        this.gamePlaytextBig.text = this.GlobalDataArr[this.m].Iwantan;
                        // 改变对话框宽度
                        this.gamePlaytextBig.width = 520;
                        // 喇叭显示
                        this.gamePlayLaba.visible = true;

                        // 清空所有按钮的样式,
                        this.emptyAllStyles();
                        // 改变当前的样式
                        let _thisGroupButton:any = this.btnContentGroupTwo.$children[i];
                        _thisGroupButton.currentState = "down";
                        

                        this.OwnImage.visible = true;
                                
                        this.TwoImage.visible = false;
                        // 否则变为错误提示内容
                        Sounds[this.GlobalDataArr[i].noSounds].play(0,1);
                        
                        
                    }
                    

                    


                }else{


                    this.moveOnOff = false;
                    
                    
                    
                    if(e.target.$children[1].name === this.textJilu.text){


                        // 清空所有按钮的样式,
                        this.emptyAllStyles();
                        // 改变当前的样式
                        let _thisGroupButton:any = this.btnContentGroupTwo.$children[i];
                        _thisGroupButton.currentState = "disabled";

                        this.m++;
                        

                        // 播放对应物品音频
                        let wupinSounds = Sounds[this.textJilu.audio].play(0,1);
                        wupinSounds.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                            let soundsKongzhiqi = Sounds[this.textJilu.IwantshuiguoTwo].play(0,1);
                            // 容器不显示
                            this.btnContentGroup.visible = false;
                            this.btnContentGroupTwo.visible = false;
                            // 喇叭消失
                            this.gamePlayLaba.visible = false;
                            // 大对话框文本
                            this.gamePlaytextBig.width = 622;
                            this.gamePlaytextBig.text = this.textJilu.theTextWenBen;

                            // 音乐播放完毕后执行一个函数
                            soundsKongzhiqi.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                                    this.OwnImage.visible = false;
                                    this.TwoImage.visible = false;
                                    this.ThreeImage.visible = false;
                                    if(this.m === 1){
                                        
                                        this.OwnImage = this.zhuOwn;
                                        this.TwoImage = this.zhuTwo;
                                        this.ThreeImage = this.zhuThree;
                                        this.OwnImage.visible = true;
                                    }else if(this.m === 2){
                                        
                                        this.OwnImage = this.niuOwn;
                                        this.TwoImage = this.niuTwo;
                                        this.ThreeImage = this.niuThree;
                                        this.niuOwn.visible = true;
                                    }else{
                                        this.OwnImage.visible = true;

                                        // 延迟一段然后进行，下一关
                                        let gamePlayTimer = egret.setTimeout(function(){
                                            this.gamePlayTextGroup.visible = false;
                                            Global.dispatchEvent(MainNotify.openBonusInterfaceNotify,{scope:'onGamePlay'},false)
                                        },this,1000)
                                        
                                        return;
                                    }
                                

                                   
                                    this.PlayDifferentAudio();
                                    // 改变图片
                                    this.OwnImage.visible = true;
                                    this.TwoImage.visible = false;
                                    
                                    
                                    // 清空样式
                                    this.emptyAllStyles();
                                    this.groupRemoveChild();
                                    egret.setTimeout(function(){

                                        
                                        // this.moveOnOff = true;

                                        this.onMoveOnOff = true;
                                        this.colorOnOff = true;
                                        
                                    },this,100)
                                

                            },this)
                            
                            


                        },this)
                        // 对话框中的内容变成相应的内容
                        this.gamePlayWuPinText.text = this.textJilu.text;


                    }else{
                        // 错误音
				        Sounds.errorAudio.play(0,1)

                        // 清空所有按钮的样式,
                        this.emptyAllStyles();
                        // 改变当前的样式
                        let _thisGroupButton:any = this.btnContentGroupTwo.$children[i];
                        _thisGroupButton.currentState = "down";

                        // 否则变为错误提示内容
                        
                        let colorTextPeizhi = this.ergodicSearch(e.target.$children[1].name);
                        Sounds[colorTextPeizhi.noSounds].play(0,1);
                        this.gamePlayWuPinText.text = colorTextPeizhi.noText;
                    }

                }
                

                
                //  设定定时器，解决多次点击
                let onTouchOnOffTimer = egret.setTimeout(function(){
                    this.onTouchOnoff = true;
                },this,2000)



            },this)
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
                this.gamePlaytextBig.text = indexObject.IwantanApple;
                
                // 改变对话框的宽度
                this.gamePlaytextBig.width = 640;
                this.gamePlayLaba.visible = false;
                // 播放对应的音频
                let soundsTwo = Sounds[indexObject.IwantshuiguoOwn].play(0,1);
                soundsTwo.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                    soundsTwo = null;
                    // 播放完毕后改变文字
                    this.gamePlaytextBig.text = this.GlobalDataArr[this.m].Iwantan;
                    // 改变对话框宽度
                    this.gamePlaytextBig.width = 520;
                    // 喇叭显示
                    this.gamePlayLaba.visible = true;

                    // 按钮容器显示
                    this.btnContentGroup.visible = true;
                    this.btnContentGroupTwo.visible = true;
                    this.InitializePicture(this.GlobalDataArr);
                    

                },this)
            },this,1000)
    }

    // 游戏玩法函数
    private playGameScence(){
        // 播放开始场景音
        let SoundsTimerXiaopengyou = Sounds.xiaopengyou.play(0,1)
        // 播放完后回掉
        SoundsTimerXiaopengyou.addEventListener(egret.Event.SOUND_COMPLETE,function(){
            this.PlaceDifferentPictures();
        },this);
        
    }

    private PlaceDifferentPictures(){
        // 判断是鸭子的时候
            if(this.n === 0){
                // 鸭子显示
                

                this.OwnImage = this.yaziOwn;
                this.TwoImage = this.yaziTwo;
                this.ThreeImage = this.yaziThree;
                this.OwnImage.visible = true;

                let timerOwn = egret.setTimeout(function(){
                    timerOwn = null;
                    // 对话框显示
                    this.gamePlayTextGroup.visible = true;
                   
                    // 对话框显示我饿了
                    this.gamePlaytextBig.text = this.GlobalDataArr[0].Imhungry;
                    // 播放音频
                    let soundsOwn =  Sounds.ImhungryHouZi.play(0,1);
                    // 播放完毕后回掉
                    soundsOwn.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                        soundsOwn = null;
                        // 执行函数
                        this.PlayDifferentAudio();

                    },this)
                },this,1000)
            }
            else if(this.n === 1){
                // 容器不显示
                this.btnContentGroup.visible = false;
                this.btnContentGroupTwo.visible = false;

                this.OwnImage.visible = false;
                this.TwoImage.visible = false;
                this.OwnImage = this.zhuOwn;
                this.TwoImage = this.zhuTwo;
                this.OwnImage.visible = true;

                let timerOwn = egret.setTimeout(function(){
                    timerOwn = null;
                    // 对话框显示
                    this.gamePlayTextGroup.visible = true;
                    // 对话框显示我饿了
                    this.gamePlaytextBig.text = this.GlobalDataArr[0].Imhungry;
                    // 播放音频
                    let soundsOwn =  Sounds.ImhungryZhu.play(0,1);
                    // 播放完毕后回掉
                    soundsOwn.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                        soundsOwn = null;
                        // 执行函数
                        this.PlayDifferentAudio();

                    },this)
                },this,1000)
            }
            else{
                Global.dispatchEvent(MainNotify.openBonusInterfaceNotify,{scope:'onGamePlay'},false)
            }
            if(this.n > 1){
                this.n = 0;
            }
    }

    // 小对话框 出现后 一段时间隐藏
    private gamePlayWuPinGroupsetTimeVisibleFalse(){
        let timergamePlayWuPinGroup = egret.setTimeout(function(){
            this.gamePlayWuPinGroup.visible = false;
        },this,2000)
    }

    
    // 拖动函数
    private PlayGameFeed(){
        for(let i = 0; i<this.btnContentGroup.$children.length; i++){
            this.btnContentGroup.$children[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e){

                this.PlayGameFeedMouseDown(e,i)
            },this);
            this.btnContentGroup.$children[i].addEventListener(egret.TouchEvent.TOUCH_END,this.PlayGameFeedMouseUp,this);
        }
    }
    // 按下
    private PlayGameFeedMouseDown(e,i){
       
        let danliContent:any = this.btnContentGroupTwo.$children[i];
        
        if( danliContent.currentState == 'disabled' && e.target.$children[1].name === this.textJilu.text &&　this.moveOnOff){
            
            
            this._thisEle = e.target;
            
            this._distance.x = e.stageX - this._thisEle.x;
            this._distance.y = e.stageY - this._thisEle.y;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.PlayGameFeedMouseMove,this)
        }
    }

    // 移动
    private PlayGameFeedMouseMove(e){

        this.btnContentGroup.setChildIndex( e.target, 999 );
        this.duangOnOff = this.duangFun(e.target)
        this.onMoveOnOff = false;
        this._thisEle.x = e.stageX - this._distance.x;
        this._thisEle.y = e.stageY - this._distance.y;
    }
    // 抬起
    private PlayGameFeedMouseUp(e){
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.PlayGameFeedMouseMove, this);
        if(this.duangOnOff === true){
            console.log("碰撞了");

            this.OwnImage.visible = false;
            this.TwoImage.visible = false;
            this.ThreeImage.visible = true;
            // 把碰撞状态改为false
            this.duangOnOff = false;
            // 碰撞上了容器不显示
            this.btnContentGroup.visible = false;
            this.btnContentGroupTwo.visible = false;

            this.gamePlayTextGroup.visible = false;
        

            let SoundsTimer = Sounds[this.textJilu.theisYummy].play(0,1);
            SoundsTimer.volume = 1;

            let a = egret.setTimeout(function(){
                a = null;
                this.recognizeColors();
            },this,3000)
            this.recoveryPositionFun(e);
            this.colorOnOff = false;
            
            // 播放
            // this.PlayDifferentAudio();
            
               
            
         
        }else{
            console.log("没有碰撞上")
           
            this.recoveryPositionFun(e);
            egret.setTimeout(function(){
                this.onMoveOnOff = true;
            },this,300)
            
           

        }
    }


    // 碰撞检测函数
    private duangFun(ele){
        let isTrue = ele.hitTestPoint( 970, 730 );
        return isTrue;
    }

    // 根据参数把对应的元素恢复原位
    private recoveryPositionFun(e){

       
        this.btnContentGroup.setChildIndex( e.target, -1 );
    
        if(e.target.$children[1].name == 'apple' || e.target.$children[1].name == 'red'){
            this.btnContentGroup.setChildIndex( e.target, 0 );
            e.target.x = this.gamePlayApplePoint.x;
            e.target.y = this.gamePlayApplePoint.y;
        }else if(e.target.$children[1].name == 'banana' || e.target.$children[1].name == 'yellow'){
            this.btnContentGroup.setChildIndex( e.target, 1 );
            e.target.x = this.gamePlayBananaPoint.x;
            e.target.y = this.gamePlayBananaPoint.y;
        }else if(e.target.$children[1].name == 'grape' || e.target.$children[1].name == 'purple'){
            this.btnContentGroup.setChildIndex( e.target, 2 );
            e.target.x = this.gamePlayGrapePoint.x;
            e.target.y = this.gamePlayGrapePoint.y;
        }
    }

    private emptyAllStyles(){
        for(let j = 0; j<this.btnContentGroupTwo.$children.length; j++){
            let item:any = this.btnContentGroupTwo.$children[j];
            item.currentState = 'up';
        }
    }


    // 初始化，配置图片，音频之类的
	private InitializePicture(arr){
		for(let i = 0; i<this.btnContentGroup.$children.length; i++){
			let img:egret.Bitmap = new egret.Bitmap();
			img.texture = RES.getRes(arr[i].Image);
			img.width = 220;
			img.height = 185;
			img.x = 171;
			img.y = 66;
			img.name = arr[i].name;
			
			this.groupImage = this.btnContentGroup.$children[i];
			this.groupImage.addChild(img);
		}
	}	

    // 删除格子容器里面的图片进行重新添加
    private groupRemoveChild(){
		this.gamePlayApple.removeChildAt(1)
		this.gamePlayBanana.removeChildAt(1)
		this.gamePlayGrape.removeChildAt(1)
	}

    // 认识完物品后，认识颜色
    private recognizeColors(){
        this.ThreeImage.visible = false;
        this.OwnImage.visible = true;

        // 删除图片
        this.groupRemoveChild();
        // 容器显示
        this.btnContentGroup.visible = true;
        this.btnContentGroupTwo.visible = true;
        // 对话框显示
        this.gamePlayTextGroup.visible = true;
        // 加入图片
        this.InitializePicture(this.GlobalDataArrColor);
        // 改变文字
        this.objectRecognition(this.textJilu.text);
        // 清空样式
        this.emptyAllStyles();

        egret.setTimeout(function(){
            this.onMoveOnOff = true;
        },this,100)

    }

    // 根据物品播放对应音频
    private objectRecognition(text){
        for(let i = 0; i<this.GlobalDataArrColor.length; i++){
            if(text == this.GlobalDataArrColor[i].guanlian){
                let soundsPlayOwn = Sounds[this.GlobalDataArrColor[i].IwantshuiguoTwo].play(0,1);
                soundsPlayOwn.addEventListener(egret.Event.SOUND_COMPLETE,function(){
                    soundsPlayOwn = null;

                    
                    // 播放完毕后改变文字
                    this.gamePlaytextBig.text = this.GlobalDataArrColor[this.m].Iwantan;
                    // 改变对话框宽度
                    this.gamePlaytextBig.width = 480;
                    
                    // 喇叭显示
                    this.gamePlayLaba.visible = true;
                },this)
                this.gamePlaytextBig.text = this.GlobalDataArrColor[i].theTextWenBen;
                
                this.textJilu = this.GlobalDataArrColor[i];
            }
        }
    }


    

    // 遍历配置信息，找出对应配置文件
    private ergodicSearch(name){
        for(let i = 0; i<this.GlobalDataArrColor.length; i++){
            if(name === this.GlobalDataArrColor[i].name){
                return this.GlobalDataArrColor[i];
            }
        }
    }

    // 点击喇叭重复音频函数
    private onClickPlaySoundsFun(){
        if(!this.labaOnOff){
            return
        }   
        this.labaOnOff = false;

        let a = Sounds[this.textJilu.audio].play(0,1);
        a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
            a = null;
            this.labaOnOff = true;
        },this)
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