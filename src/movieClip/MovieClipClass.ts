class MovieClipClass extends egret.DisplayObjectContainer{
	// public constructor(data,img,_thisScope,dongAimation){
	// 	super();
	// 	// this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd=function(){
	// 	// 	this.add(data,img,_thisScope,dongAimation);
	// 	// },this);
	// 	// this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onRemove,this);
	// }
	public static onAdd(data,img,_thisScope,dongAimation):any{
		let datas = RES.getRes(data);
		let imgs = RES.getRes(img);
		var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( datas, imgs );
		var mc:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData(dongAimation) );
		_thisScope.addChild(mc);
		return mc;
	}
	// private onRemove():void{
	// 	this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);
	// 	this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onRemove,this);
	// }
	
	public static playOnce(mc,dongzuo):void{
		mc.gotoAndPlay(dongzuo,1);
	}
	public static playLoop(mc,dongzuo):void{
		mc.gotoAndPlay(dongzuo,-1);
	}
	public static playStop(mc,dongzuo):void{
		mc.gotoAndStop(dongzuo);
	}
	public static specifiedFrame(mc,n):void{
		mc.gotoAndPlay(n,1);
	}
}