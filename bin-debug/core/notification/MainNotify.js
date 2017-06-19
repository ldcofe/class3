/**
  * 游戏配置文件
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 存放游戏的配置数据
  * 比如：游戏界面尺寸、分享随机百分比、获取系统数据
  */
var MainNotify;
(function (MainNotify) {
    //横屏竖屏切换
    MainNotify.onOrientationChange = "onOrientationChange";
    //陀螺仪监听
    MainNotify.onDeviceOrientation = "onDeviceOrientation";
    //摇一摇监听
    MainNotify.onDeviceMotion = "onDeviceMotion";
    //关闭提示
    MainNotify.closeAlertNotify = "closeAlertNotify";
    //关闭分享
    MainNotify.closeShareNotify = "closeAlertNotify";
    //更新分享信息
    MainNotify.updateShareNotify = "updateShareNotify";
    /**面板开关事件*/
    //打开开始界面
    MainNotify.openStartPanelNotify = "openStartPanelNotify";
    //关闭开始界面
    MainNotify.closeStartPanelNotify = "closeStartPanelNotify";
    //打开游戏界面
    MainNotify.openGamePanelNotify = "openGamePanelNotify";
    //关闭游戏界面
    MainNotify.closeGamePanelNotify = "closeGamePanelNotify";
    //打开结束界面
    MainNotify.openGameOverPanelNotify = "openGameOverPanelNotify";
    //关闭结束界面
    MainNotify.closeGameOverPanelNotify = "closeGameOverPanelNotify";
    //打开设置界面
    MainNotify.openSetPanelNotify = "openSetPanelNotify";
    //关闭设置界面
    MainNotify.closeSetPanelNotify = "closeSetPanelNotify";
    //打开提示界面
    MainNotify.openAlertPanelNotify = "openAlertPanelNotify";
    //关闭提示界面
    MainNotify.closeAlertPanelNotify = "closeAlertPanelNotify";
    // 打开单词卡界面
    MainNotify.openXuanXiangKaNotify = 'openXuanXiangKaNotify';
    // 关闭单词卡界面
    MainNotify.closeXuanXiangKaNotify = 'closeXuanXiangKaNotify';
    // 打开单词卡弹框界面
    MainNotify.openXuanXiangMessageNotify = 'openXuanXiangMessageNotify';
    // 关闭单词卡弹框界面
    MainNotify.closeXuanXiangMessageNotify = 'closeXuanXiangMessageNotify';
    // 打开课程表弹框界面
    MainNotify.openCurriculumScheduleNotify = 'openCurriculumScheduleNotify';
    // 关闭课程表弹框界面
    MainNotify.closeCurriculumScheduleNotify = 'closeCurriculumScheduleNotify';
    // 打开奖励界面
    MainNotify.openBonusInterfaceNotify = "openBonusInterfaceNotify";
    // 关闭奖励界面
    MainNotify.closeBonusInterfaceNotify = "closeBonusInterfaceNotify";
    // 打开测试界面
    MainNotify.openTestInterfaceNotify = "openTestInterfaceNotify";
    // 关闭测试界面
    MainNotify.closeTestInterfaceNotify = "closeTestInterfaceNotify";
    // 打开单词卡扩展模块
    MainNotify.openDancikaKuozhanNotify = 'openDancikaKuozhanNotify';
    // 关闭单词卡扩展模块
    MainNotify.closeDancikaKuozhanNotify = 'closeDancikaKuozhanNotify';
    //打开切水果游戏界面
    MainNotify.openGameCutNotify = "openGameCutNotify";
    //关闭切水果游戏界面
    MainNotify.closeGameCutNotify = "closeGameCutNotify";
})(MainNotify || (MainNotify = {}));
//# sourceMappingURL=MainNotify.js.map