class CurriculumSchedule extends eui.Component{
	public constructor() {
		super();
		this.skinName = 'CurricuPropup'
		this.init();
	}

	private init(){
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this)
	}
	private onTouch(){
		Global.dispatchEvent(MainNotify.closeCurriculumScheduleNotify,null,false);
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