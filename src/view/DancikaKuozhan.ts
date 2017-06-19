class DancikaKuozhan extends eui.Component{


	// 配置文件解析的数组
	private configure:any[];

	// 随机抽取两个(或三个)添加进数组
	private randomTwoArray:any[];

	// 计数，逐步截取数组
	private numArr:number;

	// 第一个实物容器
	private groupOwn:eui.Group;

	// 第二个实物容器
	private groupTwo:eui.Group;

	// 第三个实物容器
	private groupThree:eui.Group;

	// 主容器
	private mainGroup:eui.Group;

	// 开关，判断应该添加几个容器，添加几个物品
	private addGroupOnOff:boolean;

	// 开关，判断显示哪种状态
	private visibleOnOff:boolean;

	// 随机一个数，取其中一个作为题目
	private randomNum:number;

	// 题目
	private subjectItem:any;

	// 题目显示模块
	private Spirit:eui.Group;
	// 题目显示框里面的文字
	private SpiritChildrenGroup:eui.Group;

	// 文本总容器
	private textGroup:eui.Group;

	// 文本容器
	private textLable:eui.Label;

	// 题目文本框容器
	private duihuakuang:eui.Group;
	private timutextLabel:eui.Label;

	// 点击开关，判断在什么时候可以点击
	private onOffOnClick:boolean;

	// 进行切换不同食物的计数
	private numberTwo:number;

	// 记录数（用于明确是否该进行下一关）
	private checkpointNum:number;

	// 帧动画
	private specialEffects:egret.MovieClip;

	



	public constructor() {
		super();
		this.skinName = 'dancikaKuozhan';
		this.init();
	}

	private init(){

		// 添加动画
		let _MovieXingPng = RES.getRes('zhuaxing_png');
        let _MovieXingData = RES.getRes('zhuaxing_json');
       
        let mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(_MovieXingData, _MovieXingPng);
        this.specialEffects = new egret.MovieClip(mcDataFactory.generateMovieClipData("xing"));
        this.addChild(this.specialEffects);


		// 初始化数（主要进行三个盘子读完之后进行下一关）
		this.checkpointNum = 0;

		// 初始化截取整个数组中那两个
		this.numArr = 0;
		this.numberTwo = 0;

		// 初始化开关(添加容器的)
		this.addGroupOnOff = false;

		// 开关判断显示哪种容器
		this.visibleOnOff = true;

		

		// 调用初始化函数
		this.configInitFun();

		// 场景递推函数
		this.recursiveGameFun();

		// 点击函数
		this.onClickFun();


	}

	// 点击函数
	private onClickFun(){
		for(let i = 0; i<this.mainGroup.$children.length; i++){
			let Item:any = this.mainGroup.$children[i];
			Item.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this)
		}
	}
	private onTouch(e){
		if(this.onOffOnClick && e.target.$children[0].visible == true){
			if(e.target.name === this.subjectItem.name){
				// 特效的位置
				this.specialEffects.x = e.target.x+50;
				this.specialEffects.y = e.target.y;
				this.specialEffects.gotoAndPlay(0,1);



				this.textGroup.visible = true;
				this.textLable.text = this.subjectItem.name;
				this.textGroup.x = e.target.x+20;
				this.textGroup.y = e.target.y+e.target.height;
				Sounds[this.subjectItem.audio].play(0,1);

				// 再来一遍，重置
				this.aginPlay();
			}else{
				
				// 错误音
				Sounds.errorAudio.play(0,1)

				
				// 删除物品容器里面的物品
				e.target.$children[2].removeChildren();

				this.createBitmapByName(this.randomTwoArray[0].Image);
				switch(e.target.name){
					case "apple":
						let ItemOwn = this.createBitmapByName("applehui_png");
						ItemOwn.width = 350;
						ItemOwn.height = 350;
						e.target.$children[2].addChild(ItemOwn);
						break;
					case "banana":
						let ItemTwo = this.createBitmapByName("bananahui_png");
						ItemTwo.width = 350;
						ItemTwo.height = 350;
						e.target.$children[2].addChild(ItemTwo);
						break;
					case "grape":
						let ItemThree = this.createBitmapByName("grapehui_png");
						ItemThree.width = 350;
						ItemThree.height = 350;
						e.target.$children[2].addChild(ItemThree);
						break;
					case "red":
						let ItemFour = this.createBitmapByName("redhui_png");
						ItemFour.width = 350;
						ItemFour.height = 350;
						e.target.$children[2].addChild(ItemFour);
						break;
					case "yellow":
						let ItemFive = this.createBitmapByName("redhui_png");
						ItemFive.width = 350;
						ItemFive.height = 350;
						e.target.$children[2].addChild(ItemFive);
						break;
					case "purple":
						let ItemSix = this.createBitmapByName("redhui_png");
						ItemSix.width = 350;
						ItemSix.height = 350;
						e.target.$children[2].addChild(ItemSix);
					default:
						console.log('没找到');

				}
				
			}

			this.switchSkinFun(e.target,false);
		}
	}

	// 根据参数指向，切换皮肤状态
	private switchSkinFun(item,onOff){
		if(onOff){
			item.$children[0].visible = true;
			item.$children[1].visible = false;
			item.$children[2].visible = false;

		}else{
			item.$children[0].visible = false;
			item.$children[1].visible = true;
			item.$children[2].visible = true;
		}
		
	}

	// 一次完成，重复
	private aginPlay(){
		let timerOwn = egret.setTimeout(function(){

			if(!this.addGroupOnOff){
				this.numberTwo+=2;
				
			}else{
				
				this.numberTwo+=3;
			}
			

			if(this.numberTwo>=6){

				this.checkpointNum++;


				if(this.checkpointNum > 1){
					let timerOwn = egret.setTimeout(function(){
						// this.removeChildren();
						timerOwn = null;
						Global.dispatchEvent(MainNotify.openBonusInterfaceNotify,{scope:'onGamePanel'},false)
						
					},this,1000)
					


					
					return;	
				}

				this.numberTwo = 0;	
				
				this.addGroupOnOff = true;
				// this.visibleOnOff = true;
			}


			this.groupOwn.visible = true;
			this.groupTwo.visible = true;
			this.groupThree.visible = true;
			timerOwn = null;
			this.visibleOnOff = true;
			

			
			
			// 清空容器
			this.clearWuPinGroup();

			


			

			this.configInitFun();
			this.recursiveGameFun();


			
		},this,1000)
		

		
	

	}

	// 初始化函数
	private configInitFun(){
		// 初始化点击开关
		this.onOffOnClick = false;

		// 题目显示模块隐藏( 初始化 )
		this.Spirit.visible = false;

		// 初始化配置信息
		this.configure = GlobalData.config_json.danciKaKuoZhan;

		// 初始化存储两个信息的数组
		this.randomTwoArray = [];

		


		// 执行初始化两个数组的函数
		this.arrItemTwoFun(this.numberTwo);
		
		// 初始化容器显示
		this.configGroupInit(this.addGroupOnOff,this.visibleOnOff)

		// 初始化物品
		this.addWuPinFun();


		// 题目初始化调用
		this.extractTopics();

		// 文本隐藏
		this.textGroup.visible = false;

		// 题目对话框隐藏
		this.duihuakuang.visible = false;
		

		

		
	
	}

	// 场景逻辑
	private recursiveGameFun(){
		this.numArr = 0;
		//	this.addGroupOnOff 为false的时候，显示两个
		if(!this.addGroupOnOff){
			let n = 0;
			// 定时器时间
			let timerNum = 2000;
			let timerInterVal = egret.setInterval(function(){
				
				if(n!=1){
					// 记录物品所在位置
					let disx = this.mainGroup.$children[n].x+20;
					let disy = this.mainGroup.$children[n].y+this.mainGroup.$children[n].height;

					// 对话框显示在对应位置
					this.textGroupFun(disx,disy);
					// 播放对应音频,显示对应文字
					this.playDuiYingAudio(this.numArr);
					this.numArr++;
				}else{
					timerNum = 0;
				}
				n++;
				
				if(n>2){
					// 换盘子
					this.qiehuanZhuangtai();
					egret.clearInterval(timerInterVal);
				}
			},this,timerNum)
			
		}else{
			let n = 0;
			let timerInterVal = egret.setInterval(function(){
				
				// 记录物品所在位置
				let disx = this.mainGroup.$children[n].x+20;
				let disy = this.mainGroup.$children[n].y+this.mainGroup.$children[n].height;
				// 对话框显示在对应位置
				this.textGroupFun(disx,disy);
				// 播放对应音频,显示对应文字
				this.playDuiYingAudio(this.numArr);
				this.numArr++;
			
				n++;
				if(n>2){
					// 换盘子
					this.qiehuanZhuangtai();
					egret.clearInterval(timerInterVal);
				}

			},this,3000)
	
		}
	}

	// 添加两个进数组
	private arrItemTwoFun(n){
		if(!this.addGroupOnOff){
			for(let i = 0; i<2; i++){
				this.randomTwoArray.push(this.configure[n]);
				n++;
				if(n>this.configure.length){
					n = 0;
				}
			}
		}else{
			for(let i = 0; i<3; i++){
				this.randomTwoArray.push(this.configure[n]);
				n++;
				if(n>this.configure.length){
					n = 0;
				}
			}
		}
		
	}

	// 播放对应音频函数,对应文本显示
	private playDuiYingAudio(num){
		Sounds[this.randomTwoArray[num].audio].play(0,1);
		this.textLable.text = this.randomTwoArray[num].text;
	}



	// 隐藏容器里面的第一个图片,显示第二个,根据参数来显示两个或者三个。true时显示三个
	// 第一个参数是显示两个或者三个，第二个参数是显示那种状态
	private configGroupInit(visibleOnOff,toogleVisible){

		for(let i = 0; i<this.mainGroup.$children.length; i++){
			this.mainGroup.$children[i].$children[0].visible = false;
			this.mainGroup.$children[i].$children[1].visible = false;

			if(toogleVisible){
				if(visibleOnOff){
					this.mainGroup.$children[i].$children[0].visible = false;
					this.mainGroup.$children[i].$children[1].visible = true;
				}else{
					if(i != 1){
						this.mainGroup.$children[i].$children[0].visible = false;
						this.mainGroup.$children[i].$children[1].visible = true;
					}
				}
			}else{
				if(visibleOnOff){
					this.mainGroup.$children[i].$children[1].visible = false;
					this.mainGroup.$children[i].$children[0].visible = true;
				}else{
					if(i != 1){
						this.mainGroup.$children[i].$children[1].visible = false;
						this.mainGroup.$children[i].$children[0].visible = true;
					}
				}
			}
			
			
		}
	}


	// 初始化添加物品函数
	private addWuPinFun(){
		if(this.addGroupOnOff === false){
			
			let imageOwn = this.createBitmapByName(this.randomTwoArray[0].Image);
			let imageTwo = this.createBitmapByName(this.randomTwoArray[1].Image);
			imageOwn.width = 350;
			imageOwn.height = 350;
			imageTwo.width = 350;
			imageTwo.height = 350;
			this.groupOwn.addChild(imageOwn);
			this.groupThree.addChild(imageTwo);
			this.groupOwn.parent.name = this.randomTwoArray[0].name;
			this.groupThree.parent.name = this.randomTwoArray[1].name;

		}else{

		

			let imageOwn = this.createBitmapByName(this.randomTwoArray[0].Image);
			let imageTwo = this.createBitmapByName(this.randomTwoArray[1].Image);
			let imageThree = this.createBitmapByName(this.randomTwoArray[2].Image);
			imageOwn.width = 350;
			imageOwn.height = 350;
			imageTwo.width = 350;
			imageTwo.height = 350;
			imageThree.width = 350;
			imageThree.height = 350;
			this.groupOwn.addChild(imageOwn);
			this.groupTwo.addChild(imageTwo);
			this.groupThree.addChild(imageThree);
			this.groupOwn.parent.name = this.randomTwoArray[0].name;
			this.groupTwo.parent.name = this.randomTwoArray[1].name;
			this.groupThree.parent.name = this.randomTwoArray[2].name;

		}
	}

	// 随机一个数
	private randomNumFun(){
		return Math.floor(Math.random()*2);
	}



	// 清空容器
	private clearWuPinGroup(){
		this.groupOwn.removeChildren();
		this.groupTwo.removeChildren();
		this.groupThree.removeChildren();
		this.SpiritChildrenGroup.removeChildren();
	}

	// 文本显示再隐藏（设置文本框位置）
	private textGroupFun(disx,disy){
		this.textGroup.visible = true;
		this.textGroup.x = disx;
		this.textGroup.y = disy;

		let timerOut = egret.setTimeout(function(){
			timerOut = null;
			this.textGroup.visible = false;
		},this,2500)

	}

	// 食物隐藏，盘子显示
	private qiehuanZhuangtai(){
		let setTimer = egret.setTimeout(function(){
			// 开关判断显示哪种容器
			this.visibleOnOff = false;

			this.configGroupInit(this.addGroupOnOff,this.visibleOnOff);
			this.groupOwn.visible = false;
			this.groupTwo.visible = false;
			this.groupThree.visible = false;

			// 题目显示模块显示( 初始化 )
			// this.Spirit.visible = true;
			this.timuVisibleTimer();

			// 找到题目，生成图片
			let timuImage:any = this.createBitmapByName(this.subjectItem.Image);
			timuImage.width = 364;
			timuImage.height = 228;
	
			let timerOwn = egret.setTimeout(function(){

				this.onOffOnClick = true;
				// 将图片添加进题目中
				this.SpiritChildrenGroup.addChild(timuImage);
				// 题目对话框显示
				// this.duihuakuang.visible = true;
				// 对话框显示对应文字
				this.timutextLabel.text = this.subjectItem.text;
				Sounds[this.subjectItem.audio].play(0,1)
			},this,1000)
			

		},this,2500)
		
	}
	

	// 抽取题目函数
	private extractTopics(){
		// 题目初始化
		this.subjectItem = this.randomTwoArray[this.randomNumFun()];
	}

	// 题目显示一段时间后隐藏
	private timuVisibleTimer(){
		this.Spirit.visible = true;
		let timerOut = egret.setTimeout(function(){
			// this.Spirit.visible = false;
			this.duihuakuang.visible = false;
		},this,2000)
	}


	// 获取面板宽度
    public getWidth():number{
        return this.width;
    }    

    // 获取面板高度
    public getHeight():number{
        return this.height;
    }

	// 创建位图函数
	private createBitmapByName(name:string):egret.Bitmap {
        let result = new egret.Bitmap();
        let texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}