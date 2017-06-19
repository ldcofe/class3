  /**
    * 面板管理类
    * by dily
    * (c) copyright false,0,0,2014 - 2035
    * All Rights Reserved. 
    * 面板的管理类
    */
module PanelManager {

	// 开始场景
    var startPanel:StartPanel;
	// 单词卡场景
	var xuanxiangka:XuanXiangKa;
	// 单词卡弹框界面
	var dancikapropoUp:DancikapropoUp;
	// 游戏场景
    var gamePanel:GamePanel;

	// 游戏场景
    var gameCut:GameCut;

	// 课程表弹框信息
	var curriculumSchedule:CurriculumSchedule;

	// 奖励弹出层
	var gameOverPropUpLei:GameOverPropUpLei;
	// 测试模块
	var gameTestInterface:GameTestInterfaceTwo;

	// 单词卡扩展模块
	var dancikaKuozhan:DancikaKuozhan;


    //var gameOverPanel:GameOverPanel;
	// 初始化所有面板
	export function initPanel():void{ 
		var _width=document.documentElement.clientWidth;
    	var _height=document.documentElement.clientHeight;
    	if(_width < _height){
    		GlobalData.initIsVertical = true;
    	}

		// 开始界面控制器
        Global.addEventListener(MainNotify.openStartPanelNotify,this.openStartPanel,this)
        Global.addEventListener(MainNotify.closeStartPanelNotify,this.closeStartPanel,this)

		// 游戏进程界面控制器
        Global.addEventListener(MainNotify.openGamePanelNotify,this.openGamePanel,this)
        Global.addEventListener(MainNotify.closeGamePanelNotify,this.closeGamePanel,this)


		// 切水果进程界面控制器
        Global.addEventListener(MainNotify.openGameCutNotify,this.openGameCut,this)
        Global.addEventListener(MainNotify.closeGameCutNotify,this.closeGameCut,this)

		// 单词卡界面控制器
		Global.addEventListener(MainNotify.openXuanXiangKaNotify,this.openXuanXiangKaPanel,this)
        Global.addEventListener(MainNotify.closeXuanXiangKaNotify,this.closeXuanXiangKaPanel,this)

		// 单词卡弹框控制器
		Global.addEventListener(MainNotify.openXuanXiangMessageNotify,this.openXuanXiangMessagePanel,this)
        Global.addEventListener(MainNotify.closeXuanXiangMessageNotify,this.closeXuanXiangMessagePanel,this)

		

		// 结束弹框奖励控制器
		Global.addEventListener(MainNotify.openBonusInterfaceNotify,this.openBonusInterfacePanel,this);
		Global.addEventListener(MainNotify.closeBonusInterfaceNotify,this.closeBonusInterfacePanel,this);

		// 课程表弹框控制器
		Global.addEventListener(MainNotify.openCurriculumScheduleNotify,this.openCurriculumSchedulePanel,this)
        Global.addEventListener(MainNotify.closeCurriculumScheduleNotify,this.closeCurriculumSchedulePanel,this)

		// 测试界面控制器
		Global.addEventListener(MainNotify.openTestInterfaceNotify,this.openTestInterfacePanel,this)
		Global.addEventListener(MainNotify.closeTestInterfaceNotify,this.closeTestInterfacePanel,this)

		// 单词卡扩展界面控制器
		Global.addEventListener(MainNotify.openDancikaKuozhanNotify,this.openDancikaKuozhanNotifyPanel,this)
		Global.addEventListener(MainNotify.closeDancikaKuozhanNotify,this.closeDancikaKuozhanNotifyPanel,this)


		
		
		

	} 

	// 打开开始界面
	export function openStartPanel():void{ 
		if(this.startPanel == null){
			this.startPanel = new StartPanel();
			PopUpManager.addPopUp(this.startPanel,false,0,0,2);
		}
	} 
	// 关闭开始界面
	export function closeStartPanel():void{ 
		if(this.startPanel != null){
			PopUpManager.removePopUp(this.startPanel,0);
			this.startPanel = null;
		}
	} 
	
	// 打开单词卡界面
	export function openXuanXiangKaPanel():void{
		if(this.XuanXiangKa == null){
			this.XuanXiangKa = new XuanXiangKa();
			// 初始化单词卡弹框出现次数
			GlobalData.xuanXiangKaNum = 0;
			PopUpManager.addPopUp(this.XuanXiangKa,false,0,0,2);
			// Global.dispatchEvent(MainNotify.closeStartPanelNotify,null,false);
		}
	}

	// 关闭单词卡界面
	export function closeXuanXiangKaPanel():void{
		if(this.XuanXiangKa != null){
			PopUpManager.removePopUp(this.XuanXiangKa,0);
			this.XuanXiangKa = null;
		}
	}

	// 打开单词卡弹框界面
	export function openXuanXiangMessagePanel(e):void{
		
		
		if(this.dancikapropoUp == null){
			GlobalData.xuanXiangKaNum++;
			this.dancikapropoUp = new DancikapropoUp(e);
			
			PopUpManager.addPopUp(this.dancikapropoUp,false,0,0,4);
		}
	}
	// 关闭单词卡弹框界面
	export function closeXuanXiangMessagePanel():void{
		if(this.dancikapropoUp != null){
			PopUpManager.removePopUp(this.dancikapropoUp,0);
			this.dancikapropoUp = null;
		}
	}

	// 打开游戏界面
	export function openGamePanel():void{ 
		
		if(this.gamePanel == null){
			this.gamePanel = new GamePanel();
			PopUpManager.addPopUp(this.gamePanel,false,0,0,2);
		}
	} 
	// 关闭游戏界面
	export function closeGamePanel():void{ 
		if(this.gamePanel != null){
			PopUpManager.removePopUp(this.gamePanel,0);
			this.gamePanel = null;
		}
	} 

	// 打开切水果游戏界面
	export function openGameCut():void{ 
		
		if(this.gameCut == null){
			this.gameCut = new GameCut();
			PopUpManager.addPopUp(this.gameCut,false,0,0,2);
		}
	} 
	// 关闭切水果游戏界面
	export function closeGameCut():void{ 
		if(this.gameCut != null){
			PopUpManager.removePopUp(this.gameCut,0);
			this.gameCut = null;
		}
	} 

	// 打开课程表弹框界面
	export function openCurriculumSchedulePanel(){
		if(this.curriculumSchedule == null){
			this.curriculumSchedule = new CurriculumSchedule();
			PopUpManager.addPopUp(this.curriculumSchedule,false,0,0,3);
			// PopUpManager.removePopUp(this.XuanXiangKa,0);
		}
	}

	// 关闭课程表弹框界面
	export function closeCurriculumSchedulePanel(){
		if(this.curriculumSchedule != null){
			PopUpManager.removePopUp(this.curriculumSchedule,3);
			this.curriculumSchedule = null;
		}
	}

	// 打开奖励面板
	export function openBonusInterfacePanel(e){
		if(this.gameOverPropUpLei == null){
			this.gameOverPropUpLei = new GameOverPropUpLei(e);
			PopUpManager.addPopUp(this.gameOverPropUpLei,false,0,0,3);
		}
	}

	// 关闭奖励面板
	export function closeBonusInterfacePanel(){
		if(this.gameOverPropUpLei != null){
			PopUpManager.removePopUp(this.gameOverPropUpLei,3);
			this.gameOverPropUpLei = null;
		}
	}

	// 打开测试界面
	export function openTestInterfacePanel(){
		if(this.gameTestInterface == null){
			this.gameTestInterface = new GameTestInterfaceTwo();
			PopUpManager.addPopUp(this.gameTestInterface,false,0,0,3);
			// PopUpManager.removePopUp(this.gameOverPropUpLei,0);
			// PopUpManager.removePopUp(this.gamePanel,0);
		}
	}
	// 关闭测试界面
	export function closeTestInterfacePanel(){
		if(this.gameTestInterface != null){
			PopUpManager.removePopUp(this.gameTestInterface,3);
			this.gameTestInterface = null;
		}
	}

	// 打开单词卡扩展界面控制器
	export function openDancikaKuozhanNotifyPanel(){
		if(this.dancikaKuozhan == null){
			this.dancikaKuozhan = new DancikaKuozhan();
			PopUpManager.addPopUp(this.dancikaKuozhan,false,0,0,3);
		}
	}
	// 关闭单词卡界面控制器
	export function closeDancikaKuozhanNotifyPanel(){
		if(this.dancikaKuozhan != null){
			PopUpManager.removePopUp(this.dancikaKuozhan,3);
			this.dancikaKuozhan = null;
		}
	}



	// 关闭课程表弹框界面

	// // 打开结束界面
	// export function openGameOverPanel():void{ 
	// 	console.log("openGameOverPanel")
	// 	if(this.gameOverPanel == null){
	// 		this.gameOverPanel = new GameOverPanel();
	// 		PopUpManager.addPopUp(this.gameOverPanel,false,0,0,3);
	// 	}
	// } 
	// // 关闭结束界面
	// export function closeGameOverPanel():void{ 
	// 	console.log("closeGameOverPanel")
	// 	if(this.gameOverPanel != null){
	// 		PopUpManager.removePopUp(this.gameOverPanel,3);
	// 		this.gameOverPanel = null;
	// 	}
	// } 



}


