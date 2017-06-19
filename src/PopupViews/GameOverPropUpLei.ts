
// 游戏结束画面
class GameOverPropUpLei extends eui.Component{
	public replaying:eui.Image;
	public return:eui.Image;
	public xingxingOwn:eui.Image;
	public xingxingtwo:eui.Image;
	public xingxingthree:eui.Image;
	public defenbanBg:eui.Image;
	public xingxingOwnGroup:eui.Group;
	public xingxingTwoGroup:eui.Group;
	public xingxingThreeGroup:eui.Group;
	private xingxingOwnMoviep:egret.MovieClip;
	private xingxingTwoMoviep:egret.MovieClip;
	private xingxingThreeMoviep:egret.MovieClip;
	public constructor(e) {
		super();
		// this.xingxingOwn.scaleX = 0.1;
		// this.xingxingOwn.scaleX = 0.1;
		this.skinName = 'gameOver';
		// 添加进列表时的监听器
		// this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);
		this.onAdd(e);
		// 从列表删除时的监听器
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
	}

	private ScopeObj:any;

	// 添加进列表执行的函数
	private onAdd(e):void{
		
		this.ScopeObj = e.param.scope;
		
		let n = 0;
		Sounds.jiangli.play(0,1);
		egret.setInterval(function(){
			n++;
			this.defenbanBg.rotation = n;
		},this,100);
		this.xingxingOwnMoviep = MovieClipClass.onAdd("xingxingBgMoviep_json","xingxingBgMoviep_png",this.xingxingOwnGroup,'jieshuxingxing');

		MovieClipClass.playOnce(this.xingxingOwnMoviep,"xingxingMoviep");

		this.xingxingOwnMoviep.addEventListener(egret.Event.COMPLETE,function(){
			this.xingxingTwoMoviep = MovieClipClass.onAdd("xingxingBgMoviep_json","xingxingBgMoviep_png",this.xingxingTwoGroup,'jieshuxingxing');
			MovieClipClass.playOnce(this.xingxingTwoMoviep,"xingxingMoviep");

			this.xingxingTwoMoviep.addEventListener(egret.Event.COMPLETE,function(){
				this.xingxingThreeMoviep = MovieClipClass.onAdd("xingxingBgMoviep_json","xingxingBgMoviep_png",this.xingxingThreeGroup,'jieshuxingxing');
				MovieClipClass.playOnce(this.xingxingThreeMoviep,"xingxingMoviep");
			},this);
			
		},this)

		

		
		
		this.xingxingOwn.scaleX = 0;
		this.xingxingOwn.scaleY = 0;
		this.xingxingtwo.scaleX = 0;
		this.xingxingtwo.scaleY = 0;
		this.xingxingthree.scaleX = 0;
		this.xingxingthree.scaleY = 0;
		// // this.xingxingOwn
		this.replaying.addEventListener(egret.TouchEvent.TOUCH_TAP,this[this.ScopeObj],this);
		// this.return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGammStart,this);
		egret.Tween.get(this.xingxingOwn).to({scaleX:1,scaleY:1},300).call(function(){
			egret.Tween.get(this.xingxingtwo).to({scaleX:1,scaleY:1},300).call(function(){
				egret.Tween.get(this.xingxingthree).to({scaleX:1,scaleY:1},300).call(function(){
					
				},this)
			},this)
		},this)
	}
	// 从列表删除执行的函数
	private onRemove():void{
		// 从列表移除时注销监听器
		// this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);
		// this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
	}

	private onGamePlay():void{
		Global.dispatchEvent(MainNotify.openTestInterfaceNotify,null,false);
		Global.dispatchEvent(MainNotify.closeGameCutNotify,null,false);
		Global.dispatchEvent(MainNotify.closeGamePanelNotify,null,false);
		Global.dispatchEvent(MainNotify.closeBonusInterfaceNotify,null,false);
	}
	private onStartGame():void{
		Global.dispatchEvent(MainNotify.openStartPanelNotify,null,false);
		Global.dispatchEvent(MainNotify.closeGameCutNotify,null,false);
		Global.dispatchEvent(MainNotify.closeTestInterfaceNotify,null,false);
		Global.dispatchEvent(MainNotify.closeBonusInterfaceNotify,null,false);
	}

	private onGamePanel():void{
		Global.dispatchEvent(MainNotify.openGamePanelNotify,null, false);
		Global.dispatchEvent(MainNotify.closeGameCutNotify,null,false);
		Global.dispatchEvent(MainNotify.closeDancikaKuozhanNotify,null,false);
		Global.dispatchEvent(MainNotify.closeBonusInterfaceNotify,null,false);
	}

	private onGameCut():void{
		Global.dispatchEvent(MainNotify.openGameCutNotify,null, false);
		Global.dispatchEvent(MainNotify.closeGamePanelNotify,null,false);
		Global.dispatchEvent(MainNotify.closeDancikaKuozhanNotify,null,false);
		Global.dispatchEvent(MainNotify.closeBonusInterfaceNotify,null,false);
	}

	// private onGammStart():void{
	// 	commonState.GameOverCheckpointsOnOff = false
	// 	this.dispatchEventWith(EventTypes.GAMESTART);
		
	// }

	// 获取面板宽度
    public getWidth():number{
        return this.width;
    }    

    // 获取面板高度
    public getHeight():number{
        return this.height;
    }
}