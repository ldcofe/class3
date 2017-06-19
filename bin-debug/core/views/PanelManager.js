/**
  * 面板管理类
  * by dily
  * (c) copyright false,0,0,2014 - 2035
  * All Rights Reserved.
  * 面板的管理类
  */
var PanelManager;
(function (PanelManager) {
    // 开始场景
    var startPanel;
    // 单词卡场景
    var xuanxiangka;
    // 单词卡弹框界面
    var dancikapropoUp;
    // 游戏场景
    var gamePanel;
    // 游戏场景
    var gameCut;
    // 课程表弹框信息
    var curriculumSchedule;
    // 奖励弹出层
    var gameOverPropUpLei;
    // 测试模块
    var gameTestInterface;
    // 单词卡扩展模块
    var dancikaKuozhan;
    //var gameOverPanel:GameOverPanel;
    // 初始化所有面板
    function initPanel() {
        var _width = document.documentElement.clientWidth;
        var _height = document.documentElement.clientHeight;
        if (_width < _height) {
            GlobalData.initIsVertical = true;
        }
        // 开始界面控制器
        Global.addEventListener(MainNotify.openStartPanelNotify, this.openStartPanel, this);
        Global.addEventListener(MainNotify.closeStartPanelNotify, this.closeStartPanel, this);
        // 游戏进程界面控制器
        Global.addEventListener(MainNotify.openGamePanelNotify, this.openGamePanel, this);
        Global.addEventListener(MainNotify.closeGamePanelNotify, this.closeGamePanel, this);
        // 切水果进程界面控制器
        Global.addEventListener(MainNotify.openGameCutNotify, this.openGameCut, this);
        Global.addEventListener(MainNotify.closeGameCutNotify, this.closeGameCut, this);
        // 单词卡界面控制器
        Global.addEventListener(MainNotify.openXuanXiangKaNotify, this.openXuanXiangKaPanel, this);
        Global.addEventListener(MainNotify.closeXuanXiangKaNotify, this.closeXuanXiangKaPanel, this);
        // 单词卡弹框控制器
        Global.addEventListener(MainNotify.openXuanXiangMessageNotify, this.openXuanXiangMessagePanel, this);
        Global.addEventListener(MainNotify.closeXuanXiangMessageNotify, this.closeXuanXiangMessagePanel, this);
        // 结束弹框奖励控制器
        Global.addEventListener(MainNotify.openBonusInterfaceNotify, this.openBonusInterfacePanel, this);
        Global.addEventListener(MainNotify.closeBonusInterfaceNotify, this.closeBonusInterfacePanel, this);
        // 课程表弹框控制器
        Global.addEventListener(MainNotify.openCurriculumScheduleNotify, this.openCurriculumSchedulePanel, this);
        Global.addEventListener(MainNotify.closeCurriculumScheduleNotify, this.closeCurriculumSchedulePanel, this);
        // 测试界面控制器
        Global.addEventListener(MainNotify.openTestInterfaceNotify, this.openTestInterfacePanel, this);
        Global.addEventListener(MainNotify.closeTestInterfaceNotify, this.closeTestInterfacePanel, this);
        // 单词卡扩展界面控制器
        Global.addEventListener(MainNotify.openDancikaKuozhanNotify, this.openDancikaKuozhanNotifyPanel, this);
        Global.addEventListener(MainNotify.closeDancikaKuozhanNotify, this.closeDancikaKuozhanNotifyPanel, this);
    }
    PanelManager.initPanel = initPanel;
    // 打开开始界面
    function openStartPanel() {
        if (this.startPanel == null) {
            this.startPanel = new StartPanel();
            PopUpManager.addPopUp(this.startPanel, false, 0, 0, 2);
        }
    }
    PanelManager.openStartPanel = openStartPanel;
    // 关闭开始界面
    function closeStartPanel() {
        if (this.startPanel != null) {
            PopUpManager.removePopUp(this.startPanel, 0);
            this.startPanel = null;
        }
    }
    PanelManager.closeStartPanel = closeStartPanel;
    // 打开单词卡界面
    function openXuanXiangKaPanel() {
        if (this.XuanXiangKa == null) {
            this.XuanXiangKa = new XuanXiangKa();
            // 初始化单词卡弹框出现次数
            GlobalData.xuanXiangKaNum = 0;
            PopUpManager.addPopUp(this.XuanXiangKa, false, 0, 0, 2);
        }
    }
    PanelManager.openXuanXiangKaPanel = openXuanXiangKaPanel;
    // 关闭单词卡界面
    function closeXuanXiangKaPanel() {
        if (this.XuanXiangKa != null) {
            PopUpManager.removePopUp(this.XuanXiangKa, 0);
            this.XuanXiangKa = null;
        }
    }
    PanelManager.closeXuanXiangKaPanel = closeXuanXiangKaPanel;
    // 打开单词卡弹框界面
    function openXuanXiangMessagePanel(e) {
        if (this.dancikapropoUp == null) {
            GlobalData.xuanXiangKaNum++;
            this.dancikapropoUp = new DancikapropoUp(e);
            PopUpManager.addPopUp(this.dancikapropoUp, false, 0, 0, 4);
        }
    }
    PanelManager.openXuanXiangMessagePanel = openXuanXiangMessagePanel;
    // 关闭单词卡弹框界面
    function closeXuanXiangMessagePanel() {
        if (this.dancikapropoUp != null) {
            PopUpManager.removePopUp(this.dancikapropoUp, 0);
            this.dancikapropoUp = null;
        }
    }
    PanelManager.closeXuanXiangMessagePanel = closeXuanXiangMessagePanel;
    // 打开游戏界面
    function openGamePanel() {
        if (this.gamePanel == null) {
            this.gamePanel = new GamePanel();
            PopUpManager.addPopUp(this.gamePanel, false, 0, 0, 2);
        }
    }
    PanelManager.openGamePanel = openGamePanel;
    // 关闭游戏界面
    function closeGamePanel() {
        if (this.gamePanel != null) {
            PopUpManager.removePopUp(this.gamePanel, 0);
            this.gamePanel = null;
        }
    }
    PanelManager.closeGamePanel = closeGamePanel;
    // 打开切水果游戏界面
    function openGameCut() {
        if (this.gameCut == null) {
            this.gameCut = new GameCut();
            PopUpManager.addPopUp(this.gameCut, false, 0, 0, 2);
        }
    }
    PanelManager.openGameCut = openGameCut;
    // 关闭切水果游戏界面
    function closeGameCut() {
        if (this.gameCut != null) {
            PopUpManager.removePopUp(this.gameCut, 0);
            this.gameCut = null;
        }
    }
    PanelManager.closeGameCut = closeGameCut;
    // 打开课程表弹框界面
    function openCurriculumSchedulePanel() {
        if (this.curriculumSchedule == null) {
            this.curriculumSchedule = new CurriculumSchedule();
            PopUpManager.addPopUp(this.curriculumSchedule, false, 0, 0, 3);
        }
    }
    PanelManager.openCurriculumSchedulePanel = openCurriculumSchedulePanel;
    // 关闭课程表弹框界面
    function closeCurriculumSchedulePanel() {
        if (this.curriculumSchedule != null) {
            PopUpManager.removePopUp(this.curriculumSchedule, 3);
            this.curriculumSchedule = null;
        }
    }
    PanelManager.closeCurriculumSchedulePanel = closeCurriculumSchedulePanel;
    // 打开奖励面板
    function openBonusInterfacePanel(e) {
        if (this.gameOverPropUpLei == null) {
            this.gameOverPropUpLei = new GameOverPropUpLei(e);
            PopUpManager.addPopUp(this.gameOverPropUpLei, false, 0, 0, 3);
        }
    }
    PanelManager.openBonusInterfacePanel = openBonusInterfacePanel;
    // 关闭奖励面板
    function closeBonusInterfacePanel() {
        if (this.gameOverPropUpLei != null) {
            PopUpManager.removePopUp(this.gameOverPropUpLei, 3);
            this.gameOverPropUpLei = null;
        }
    }
    PanelManager.closeBonusInterfacePanel = closeBonusInterfacePanel;
    // 打开测试界面
    function openTestInterfacePanel() {
        if (this.gameTestInterface == null) {
            this.gameTestInterface = new GameTestInterfaceTwo();
            PopUpManager.addPopUp(this.gameTestInterface, false, 0, 0, 3);
        }
    }
    PanelManager.openTestInterfacePanel = openTestInterfacePanel;
    // 关闭测试界面
    function closeTestInterfacePanel() {
        if (this.gameTestInterface != null) {
            PopUpManager.removePopUp(this.gameTestInterface, 3);
            this.gameTestInterface = null;
        }
    }
    PanelManager.closeTestInterfacePanel = closeTestInterfacePanel;
    // 打开单词卡扩展界面控制器
    function openDancikaKuozhanNotifyPanel() {
        if (this.dancikaKuozhan == null) {
            this.dancikaKuozhan = new DancikaKuozhan();
            PopUpManager.addPopUp(this.dancikaKuozhan, false, 0, 0, 3);
        }
    }
    PanelManager.openDancikaKuozhanNotifyPanel = openDancikaKuozhanNotifyPanel;
    // 关闭单词卡界面控制器
    function closeDancikaKuozhanNotifyPanel() {
        if (this.dancikaKuozhan != null) {
            PopUpManager.removePopUp(this.dancikaKuozhan, 3);
            this.dancikaKuozhan = null;
        }
    }
    PanelManager.closeDancikaKuozhanNotifyPanel = closeDancikaKuozhanNotifyPanel;
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
})(PanelManager || (PanelManager = {}));
//# sourceMappingURL=PanelManager.js.map