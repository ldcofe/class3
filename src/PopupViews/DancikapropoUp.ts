class DancikapropoUp extends eui.Component{
	public constructor(e) {
		super();
		this.skinName = 'dancikaPropup'
		this.init(e);
	}
	public danciKaImageGroup:eui.Group;
	public dancikaTextLabel:eui.Label;
	private init(e){
		// 获取两张不同的图片
		let tankuangImageOwn = e.param.tankuangImageOwn;
		let tankuangImageTwo = e.param.tankuangImageTwo;
		// 文字段落(区分音频和文字)
		let paragraph = e.param.paragraph;
		let appleKuai = e.param.appleKuai;
		let appleMan = e.param.appleMan;


				// 删除图片容器里面的图片
				this.danciKaImageGroup.removeChildren();
				// 删除文本里面的字
				this.dancikaTextLabel.text = '';
				// 添加图片(介绍图+介绍文字)
				var img:egret.Bitmap = new egret.Bitmap();
				img.width = 543;
				img.height = 600;
				img.texture = RES.getRes(tankuangImageOwn);
				this.danciKaImageGroup.addChild(img);


				// 苹果
				if(paragraph == 'TheappleisredApple'){
					
					let TimerOwn = egret.setTimeout(function(){
						TimerOwn = null;
						// 播放对应音频(Theappleisred)
						let a = Sounds.theAppleIsRed_wav.play(0,1)
						// 添加文字
						this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
							{text: "The ", style: {}}, 
							{text:"apple ",style:{"textColor":0xff0000}},
							{text:"is red",style:{}}
						];
						// 播放完毕之后删除图片和文字
						a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
							a = null;
							

							//定时器控制延迟
							let TimerTwo = egret.setTimeout(function(){

								// 删除图片和文字
								this.danciKaImageGroup.removeChildren();
								this.dancikaTextLabel.textFlow = '';
								// 添加第二张图片
								var img:egret.Bitmap = new egret.Bitmap();
								img.texture = RES.getRes(tankuangImageTwo);
								img.width = 543;
								img.height = 672;
								this.danciKaImageGroup.addChild(img);
								this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
									{text: "apple ", style: {size:150}}
								];

								// 清空延迟器
								TimerTwo = null;
								// 播放识物音频(快)
								let a = appleKuai.play(0,1)
								// 播放完毕之后进行回掉
								a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
									// 清空音频控制器
									a = null;
									//设置第二个音频延迟器
									let bb = egret.setTimeout(function(){
										// 播放识物音频(慢)
										let b = appleKuai.play(0,1)
										// 设置文字
										this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
											{text: "apple ", style: {size:150}}
										];
										// 音频播放完毕之后执行的函数
										b.addEventListener(egret.Event.SOUND_COMPLETE,function(){
											// 清空音频控制器
											b = null;
											// 触发销毁弹框界面的触发
											Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
											this.qihuanChangeJudge();
										},this)
									},this,1500)
								},this)
							},this,1500)
							
						},this)
					},this,1500)
				}else if(paragraph == 'ThegrapesarepurpleGrape'){
					// 葡萄

					let TimerOwn = egret.setTimeout(function(){
						TimerOwn = null;
						// 播放对应音频(Theappleisred)
						
						let a = Sounds.thegrapesarepurple_wav.play(0,1)
						// 添加文字
						this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
							{text: "The ", style: {}}, 
							{text:"grapes ",style:{"textColor":0xff0000}},
							{text:"are purple",style:{}}
						];
						// 播放完毕之后删除图片和文字
						a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
							a = null;
							

							// 定时器控制延迟
							let TimerTwo = egret.setTimeout(function(){

								// 删除图片和文字
								this.danciKaImageGroup.removeChildren();
								this.dancikaTextLabel.textFlow = '';
								// 添加第二张图片
								var img:egret.Bitmap = new egret.Bitmap();
								img.texture = RES.getRes(tankuangImageTwo);
								img.width = 543;
								img.height = 672;
								this.danciKaImageGroup.addChild(img);
								this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
									{text: "grape ", style: {size:150}}
								];

								// 清空延迟器
								TimerTwo = null;



								// 播放识物音频(快)
								let a = appleKuai.play(0,1)
								// 播放完毕之后进行回掉
								a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
									// 清空音频控制器
									a = null;
									// 设置第二个音频延迟器
									let bb = egret.setTimeout(function(){
										// 播放识物音频(慢)
										let b = appleKuai.play(0,1)
										// 设置文字
										this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
											{text: "grape ", style: {size:150}}
										];
										// 音频播放完毕之后执行的函数
										b.addEventListener(egret.Event.SOUND_COMPLETE,function(){
											// 清空音频控制器
											b = null;
											// 触发销毁弹框界面的触发
											Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
											this.qihuanChangeJudge();
										},this)
									},this,1500)
								},this)
							},this,1500)
							
						},this)
					},this,1500)
				}else if(paragraph == 'TheBannerIsYellowBanana'){
					// 香蕉
					
					let TimerOwn = egret.setTimeout(function(){
						TimerOwn = null;
						// 播放对应音频(Theappleisred)
						let a = Sounds.theBannerIsYellow_wav.play(0,1)
						// 添加文字
						this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
							{text: "The ", style: {}}, 
							{text:"bananas ",style:{"textColor":0xff0000}},
							{text:"are yellow",style:{}}
						];
						// 播放完毕之后删除图片和文字
						a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
							a = null;
							

							// 定时器控制延迟
							let TimerTwo = egret.setTimeout(function(){

								// 删除图片和文字
								this.danciKaImageGroup.removeChildren();
								this.dancikaTextLabel.textFlow = '';
								// 添加第二张图片
								var img:egret.Bitmap = new egret.Bitmap();
								img.texture = RES.getRes(tankuangImageTwo);
								img.width = 543;
								img.height = 672;
								this.danciKaImageGroup.addChild(img);
								this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
									{text: "banana ", style: {size:150}}
								];


								// 清空延迟器
								TimerTwo = null;
								// 播放识物音频(快)
								let a = appleKuai.play(0,1)
								// 播放完毕之后进行回掉
								a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
									// 清空音频控制器
									a = null;
									// 设置第二个音频延迟器
									let bb = egret.setTimeout(function(){
										// 播放识物音频(慢)
										let b = appleKuai.play(0,1)
										// 设置文字
										this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
											{text: "banana ", style: {size:150}}
										];
										// 音频播放完毕之后执行的函数
										b.addEventListener(egret.Event.SOUND_COMPLETE,function(){
											// 清空音频控制器
											b = null;
											// 触发销毁弹框界面的触发
											Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
											this.qihuanChangeJudge();
										},this)
									},this,1500)
								},this)
							},this,1500)
							
						},this)
					},this,1500)
				}else if(paragraph == 'TheappleisredRed'){
					// 红色
					
					let TimerOwn = egret.setTimeout(function(){
						TimerOwn = null;
						// 播放对应音频(Theappleisred)
						
						let a = Sounds.theAppleIsRed_wav.play(0,1)
						// 添加文字
						this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
							{text: "The ", style: {}}, 
							{text:"apple is ",style:{}},
							{text:"red",style:{"textColor":0xff0000}}
						];
						// 播放完毕之后删除图片和文字
						a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
							a = null;
							

							// 定时器控制延迟
							let TimerTwo = egret.setTimeout(function(){

								// 删除图片和文字
								this.danciKaImageGroup.removeChildren();
								this.dancikaTextLabel.textFlow = '';
								// 添加第二张图片
								// var img:egret.Bitmap = new egret.Bitmap();
								// img.texture = RES.getRes(tankuangImageTwo);
								let shuaziAnimate = publicClass.MovieClip('redshuazi_json','redshuazi_png','redshuazi');
								shuaziAnimate.x = -250;
								shuaziAnimate.play(1);
								this.danciKaImageGroup.addChild(shuaziAnimate);
								shuaziAnimate.gotoAndPlay(0,1);

								
								this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
									{text: "red ", style:{size:150}}
								];

								// 清空延迟器
								TimerTwo = null;
								// 播放识物音频(快)
								let a = appleKuai.play(0,1)
								// 播放完毕之后进行回掉
								a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
									// 清空音频控制器
									a = null;
									// 设置第二个音频延迟器
									let bb = egret.setTimeout(function(){
										// 播放识物音频(慢)
										let b = appleKuai.play(0,1)
										// 设置文字
										this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
											{text: "red ", style: {size:150}}
										];
										// 音频播放完毕之后执行的函数
										b.addEventListener(egret.Event.SOUND_COMPLETE,function(){
											// 清空音频控制器
											b = null;
											// 触发销毁弹框界面的触发
											Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
											this.qihuanChangeJudge();
										},this)
									},this,1500)
								},this)
							},this,1500)
							
						},this)
					},this,1500)
				}else if(paragraph == 'ThegrapesarepurplePurple'){
					// 紫色
					
					let TimerOwn = egret.setTimeout(function(){
						TimerOwn = null;
						// 播放对应音频(Theappleisred)
						
						let a = Sounds.thegrapesarepurple_wav.play(0,1)
						// 添加文字
						this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
							{text: "The ", style: {}}, 
							{text:"grapes are ",style:{}},
							{text:"purple",style:{"textColor":0xff0000}}
						];
						// 播放完毕之后删除图片和文字
						a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
							a = null;
							

							// 定时器控制延迟
							let TimerTwo = egret.setTimeout(function(){

								// 删除图片和文字
								this.danciKaImageGroup.removeChildren();
								this.dancikaTextLabel.textFlow = '';
								// 添加第二张图片
								// var img:egret.Bitmap = new egret.Bitmap();
								// img.texture = RES.getRes(tankuangImageTwo);
								let shuaziAnimate = publicClass.MovieClip('purpleshuazi_json','purpleshuazi_png','purpleshuazi');
								shuaziAnimate.x = -300;
								shuaziAnimate.play(1);
								
								this.danciKaImageGroup.addChild(shuaziAnimate);
								shuaziAnimate.gotoAndPlay(0,1);
												

								this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
									{text: "purple ", style:{size:150}}
								];


								// 清空延迟器
								TimerTwo = null;
								// 播放识物音频(快)
								let a = appleKuai.play(0,1)
								// 播放完毕之后进行回掉
								a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
									// 清空音频控制器
									a = null;
									// 设置第二个音频延迟器
									let bb = egret.setTimeout(function(){
										// 播放识物音频(慢)
										let b = appleKuai.play(0,1)
										// 设置文字
										this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
											{text: "purple ", style: {size:150}}
										];
										// 音频播放完毕之后执行的函数
										b.addEventListener(egret.Event.SOUND_COMPLETE,function(){
											// 清空音频控制器
											b = null;
											// 触发销毁弹框界面的触发
											Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
											this.qihuanChangeJudge();
										},this)
									},this,1500)
								},this)
							},this,1500)
							
						},this)
					},this,1500)
				}else if(paragraph = 'TheBannerIsYellowBananaYellow'){
					// 黄色
					
					let TimerOwn = egret.setTimeout(function(){
						TimerOwn = null;
						// 播放对应音频(Theappleisred)
						let a = Sounds.theBannerIsYellow_wav.play(0,1)
						// 添加文字
						this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
							{text: "The ", style: {}}, 
							{text:"bananas are",style:{}},
							{text:" yellow",style:{"textColor":0xff0000}}
						];
						// 播放完毕之后删除图片和文字
						a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
							a = null;
							

							// 定时器控制延迟
							let TimerTwo = egret.setTimeout(function(){

								// 删除图片和文字
								this.danciKaImageGroup.removeChildren();
								this.dancikaTextLabel.textFlow = '';
								// 添加第二张图片
								// var img:egret.Bitmap = new egret.Bitmap();
								// img.texture = RES.getRes(tankuangImageTwo);
								let shuaziAnimate = publicClass.MovieClip('shuaziYellow_json','shuaziYellow_png','shuaziYellow');
								shuaziAnimate.x = -300;
								shuaziAnimate.play(1);
								
								this.danciKaImageGroup.addChild(shuaziAnimate);
								shuaziAnimate.gotoAndPlay(0,1);
												

								this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
									{text: "yellow ", style:{size:150}}
								];


								// 清空延迟器
								TimerTwo = null;
								// 播放识物音频(快)
								let a = appleKuai.play(0,1)
								// 播放完毕之后进行回掉
								a.addEventListener(egret.Event.SOUND_COMPLETE,function(){
									// 清空音频控制器
									a = null;
									// 设置第二个音频延迟器
									let bb = egret.setTimeout(function(){
										// 播放识物音频(慢)
										let b = appleKuai.play(0,1)
										// 设置文字
										this.dancikaTextLabel.textFlow = <Array<egret.ITextElement>>[
											{text: "yellow ", style: {size:150}}
										];
										// 音频播放完毕之后执行的函数
										b.addEventListener(egret.Event.SOUND_COMPLETE,function(){
											// 清空音频控制器
											b = null;
											// 触发销毁弹框界面的触发
											Global.dispatchEvent(MainNotify.closeXuanXiangMessageNotify, null, false);
											this.qihuanChangeJudge();
										},this)
									},this,1500)
								},this)
							},this,1500)
							
						},this)
					},this,1500)
				}
		
			
	}

	private qihuanChangeJudge(){
		//console.log(GlobalData.xuanXiangKaNum);
		if(GlobalData.xuanXiangKaNum >= 6){
			egret.clearInterval(GlobalData.dancikaTimerClear);
			GlobalData.dancikaTimerClear = null;
			Global.dispatchEvent(MainNotify.closeXuanXiangKaNotify, null, false);
			Global.dispatchEvent(MainNotify.openDancikaKuozhanNotify, null, false);
		}
		
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