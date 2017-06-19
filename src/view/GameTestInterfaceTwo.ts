class GameTestInterfaceTwo extends eui.Component{
	public constructor() {
		super();
		this.skinName = 'gameTest';
		this.init();
	}

	private audioTimerOnOff:boolean;

	// 总容器
	private mainGroup:eui.Group;

	// 爪子总容器
	private zhuaziGroup:eui.Group;
	
	// 生命数组，根据配置文件设置
	private gametestArr:any[];

	// 放图片容器
	private groupImage:any;

	// 题目
	private subjectText:any;
	
	// 题目文字显示区域
	private gameTestText:eui.Label;

	// 显示出来的物品
	private displayArr:any[];

	// 标记爪子里面的物品
	private goods:any;

	// 第三个爪子
	private zhuaThreeGroup:eui.Group;
	private zhuaTwoGroup:eui.Group;
	private zhuaOwnGroup:eui.Group;

	// 烟雾
	private yanwuMovieClip:egret.MovieClip;

	// 人物及猴子
	private peopleOwn:eui.Image;
	private peopleTwo:eui.Image;
	private peopleThree:eui.Image;
	private peopleFour:eui.Image;
	private dog:eui.Image;
	private dogZhua:eui.Image;
	private houzi:eui.Image;
	// 恐龙
	private konglong:eui.Image;
	// 恐龙喷火容器
	private penhuoGroup:eui.Group;


	// 记录坐标
	private recordXY:egret.Point;


	private testNumber:number;

	private init(){
		this.audioTimerOnOff = true;
		let SoundsOwn = Sounds.wordTestAudio.play(0,1);
		// 恐龙移动出场
		egret.Tween.get(this.mainGroup).wait(1000).to({x:0},1500);

		this.testNumber = 0;
		SoundsOwn.addEventListener(egret.Event.SOUND_COMPLETE,function(){
			this.audioaPlaybackFinished();
			this.zhuaOwnGroup.visible = true;
			this.zhuaTwoGroup.visible = true;
			this.zhuaThreeGroup.visible = true;
			
		},this)

		// 初始化点击操作
		this.operationFun();
	
		// this.gameTestTextAudio();
		

		
    
	}
	//音频初始化播放完毕后执行的函数
	private audioaPlaybackFinished(){
		// 配置文件生成数组(存储的信息)
		this.gametestArr = GlobalData.config_json.testGame;
		// 打乱数组，找出前三项进行测评
		this.displayArr = this.InterceptArray(this.gametestArr,3);
		// 从中随机取出一项，作为题目
		this.subjectText = this.displayArr[Math.floor(Math.random()*3)].name;
		// 改变文字
		// this.gameTestText.text = this.subjectText;
		// 播放对应音频
		this.playAudioAccordingToText(this.subjectText);
		

		this.recordXY = new egret.Point();

		// 测试开始，进行初始化，加入图片
		this.InitializePicture(this.displayArr);


		
	}


	// 点击操作函数
	private operationFun(){

		
		let _MovieXingPng = RES.getRes('zhuaxing_png');
        let _MovieXingData = RES.getRes('zhuaxing_json');
       
        let mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(_MovieXingData, _MovieXingPng);
        let role:egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("xing"));
        this.addChild(role);

		let _yanwuPng = RES.getRes('yanwu_png');
        let _yanwuData = RES.getRes('yanwu_json');
       
        let mcDataFactoryTwo:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(_yanwuData, _yanwuPng);
        this.yanwuMovieClip = new egret.MovieClip(mcDataFactoryTwo.generateMovieClipData("yanwu"));
		this.yanwuMovieClip.frameRate = 15;
        this.addChild(this.yanwuMovieClip);

		let _konglongPng = RES.getRes('konglong_png');
        let _konglongJson = RES.getRes('konglong_json');
       
        let mcKongLongMovicpData:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(_konglongJson,_konglongPng);
        let mcKongLongMovicp:egret.MovieClip = new egret.MovieClip(mcKongLongMovicpData.generateMovieClipData("konglong"));
        
	
	

		



		for(let i = 0; i<this.zhuaziGroup.$children.length; i++){

			this.zhuaziGroup.$children[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(e){
				
				if(this.audioTimerOnOff === false){
					return;
				}
				this.audioTimerOnOff = false;
				this.chongzhiaudioTimerOnOff();

				let context = e.target;
				role.x = context.x - context.width/2 + 50;
				role.y = context.y-context.height;
				
				// 根据点击的爪子，找到文字
				this.goods = context.$children[1].name;
				// 根据文字播放文字读音
				let a = this.playAudioName(this.goods);

				if(a === true){
					
					this.konglong.source = 'gameTestKonglongTuHuo_png';
					Sounds.konglongAudio_wav.play(0,1)
					let setTimer = egret.setTimeout(function(){
						this.konglong.source = 'gameTestKonglong_png';
					},this,1500)

					// 播放动画
					role.gotoAndPlay(0,1);


					

					
					switch(this.testNumber){
						case 0:
							this.recordXY.x = this.peopleOwn.x;
							this.recordXY.y = this.peopleOwn.y;
							break;
						case 1:
							this.recordXY.x = this.peopleTwo.x;
							this.recordXY.y = this.peopleTwo.y;
							break;
						case 2:
							this.recordXY.x = this.peopleThree.x;
							this.recordXY.y = this.peopleThree.y;
							break;
						case 3:
							this.recordXY.x = this.peopleFour.x;
							this.recordXY.y = this.peopleFour.y;
							break;
						case 4:
							this.recordXY.x = this.dog.x;
							this.recordXY.y = this.dog.y;
							break;
						case 5:
							this.recordXY.x = this.houzi.x;
							this.recordXY.y = this.houzi.y;
							break;
					}
					

					context.$children[0].source = 'gameCheckedBtn_png';

					// 烟雾动画所在地
					this.yanwuMovieClip.x = this.recordXY.x-120;
					this.yanwuMovieClip.y = this.recordXY.y-30;
					// 烟雾动画播放
					this.yanwuMovieClip.gotoAndPlay(0,1);
					// 监听动画播放完毕后执行的函数
					this.yanwuMovieClip.addEventListener(egret.Event.COMPLETE,function(){

						switch(this.testNumber){
							case 0:
								this.peopleOwn.visible = true;
								break;
							case 1:
								this.peopleTwo.visible = true;
								break;
							case 2:
								this.peopleThree.visible = true;
								break;
							case 3:
								this.peopleFour.visible = true;
								break;
							case 4:
								this.dog.visible = true;
								this.dogZhua.visible = true;
								break;
							case 5:
								this.houzi.visible = true;
								break;
						}
					},this);
					let timerout = egret.setTimeout(function(){
						timerout = null;
						this.testNumber++;


						if(this.testNumber >= 6){
							// 大于6的时候，恐龙吐火
							this.konglong.source = 'gameTestKonglongTuHuo_png';
							egret.clearTimeout(setTimer);
							this.penhuoGroup.addChild(mcKongLongMovicp);
							mcKongLongMovicp.gotoAndPlay(0,1);
							mcKongLongMovicp.addEventListener(egret.Event.COMPLETE,function(){
								egret.Tween.get(this.mainGroup).to({x:this.mainGroup.width},2000).wait(1000).call(function(){
									// 触发结束函数
									this.gameoverFun();
								},this)
							},this)
							

							
							
							
							
							return;
						}
						
						let a = egret.setTimeout(function(){
							a= null;
							// this.groupRemoveChild();
							this.audioaPlaybackFinished();
							// 清楚所有的
							this.clearAllZhuaZiColor();
						},this,2000)


					},this,1000)




					
					
				}else{
					// 错误音
					Sounds.errorAudio.play(0,1)

					// 清楚所有的
					this.clearAllZhuaZiColor();
					// 显示当前的
					let imageOwn:eui.Image = e.target.$children[0];
					imageOwn.source = 'gameplayDisbled_png';

					let imageTwo:eui.Image = e.target.$children[1];
					switch(imageTwo.name){
						case "apple":
							imageTwo.source = "applehui_png"
							break;
						case "banana":
							imageTwo.source = "bananahui_png"
							break;
						case "grape":
							imageTwo.source = "grapehui_png"
							break;
						case "red":
							imageTwo.source = "redhui_png"
							break;
						case "yellow":
							imageTwo.source = "redhui_png"
							break;
						case "purple":
							imageTwo.source = "redhui_png"
						default:
							console.log('没找到');

					}
				}

			},this)
			
		}
	}

	// 初始化，配置图片，音频之类的
	private InitializePicture(arr){
		
		for(let i = 0; i<this.zhuaziGroup.$children.length; i++){
			let item:any = this.zhuaziGroup.$children[i].$children[1];
			item.name = arr[i].name;
			item.source = arr[i].Image;
			
			// let img:egret.Bitmap = new egret.Bitmap();
			// img.texture = RES.getRes(arr[i].Image);
			// img.width = 220;
			// img.height = 185;
			// img.x = 124.94;
			// img.y = 96;
			// img.name = arr[i].name;
			// if(img.name == 'red' || img.name == "yellow" || img.name == "purple"){
			// 	img.width = 270;
			// 	img.height = 250;
			// 	img.x = 100;
			// 	img.y = 64;
			// }
			
			// this.groupImage = this.zhuaziGroup.$children[i];
			// this.groupImage.addChild(img);
		}
	}	

	// 打乱数组，截取数组前三项
	private InterceptArray(arr,n){
		let a = arr.sort(function(){ return 0.5 - Math.random() })
		
		return a.slice(0,n);
	}

	// 根据文字播放音频
	private playAudioAccordingToText(name,a = null){
		
			for(let i = 0; i<this.displayArr.length; i++){
				if(a == null){
					if(this.displayArr[i].name === name){
						Sounds[this.displayArr[i].audio].play(0,1);
					}
				}else{
					if(this.displayArr[i].name === name){
						Sounds[this.displayArr[i].noAudio].play(0,1);
					}
				}
			}
		
	}

	// 点击文字播放对应音频
	// private gameTestTextAudio(){
	// 	this.gameTestText.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
	// 		if(this.gameTestText.text != ''){
	// 			this.playAudioAccordingToText(this.gameTestText.text);
	// 		}
	// 	},this)
	// }

	// 点击播放读音
	private playAudioName(name){
		if(this.subjectText === name){
			this.playAudioAccordingToText(name);
			return true;
		}else{
			
			this.playAudioAccordingToText(name,"a")
		}
	}

	// 清楚所有的爪子颜色
	private clearAllZhuaZiColor(){
		for(let i = 0; i<this.zhuaziGroup.$children.length; i++){
			let item:any = this.zhuaziGroup.$children[i].$children[0];
			item.source = 'gameCheckboxBtn_png';
			let itemTwo:any = this.zhuaziGroup.$children[i].$children[1];
			itemTwo.source = itemTwo.name+"Test_png";
		}
	}



	// 点击开关重置
	private chongzhiaudioTimerOnOff(){
		let a = egret.setTimeout(function(){
			a = null;
			this.audioTimerOnOff = true;
		},this,2100)
	}


	// 完毕后执行函数
	private gameoverFun(){
		// Global.dispatchEvent(MainNotify.closeXuanXiangKaNotify, null, false);
		
		Global.dispatchEvent(MainNotify.openBonusInterfaceNotify,{scope:'onStartGame'},false)
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