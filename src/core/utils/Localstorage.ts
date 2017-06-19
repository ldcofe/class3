class Localstorage {
	public constructor() {
	}
	// 获取本地localStorage
	public static MilestoneGet():number{
        var milestone = egret.localStorage.getItem("CYDTZ_Milestone");
        //如果没有数据，那么默认值就是第一关
        if(milestone == "" || milestone == null || milestone == '0'){
            milestone = "1";
        }
        return parseInt(milestone);
    }

	//设置当前的游戏最远进度(设置本地localStorage)
    public static MilestoneSet(value:number){
        egret.localStorage.setItem("CYDTZ_Milestone",value.toString());
    }
}