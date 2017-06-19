class XuanXiangKa extends eui.Component{

	
	public constructor() {
		super();
		this.skinName = 'XuangXiangKa';
		

		this.init()
	}
	// 图片容器
	private scrollGroup:eui.Group;
	// 左边按钮
	private leftBtn:eui.Button;
	// 右边按钮
	private rightBtn:eui.Button;
	

	// 文字容器
	private xuanxiangkaziti:eui.Label;
	// 控制回掉重复调用
	private setInteronOff:boolean;

	// 打印机
	private typerTF:ETextField;

	// 多次点击开关
	private onClickOnOff:boolean;
	
	// 位图阴影
	private glowFilter:egret.GlowFilter;

	// 单词卡弹框界面
	private dancikapropoUp:DancikapropoUp;

	// 一起学习吧语音控制器
	private yiqixuexidanci_wav:egret.SoundChannel;

	// 识物音频
	private publicAudioKuai_wav:egret.SoundChannel;
	private publicAudioMan_wav:egret.SoundChannel;

	// 苹果音频(对应河马)
	private audioKuai:egret.Sound;
	private audioMan:egret.Sound;
	private tankuangImageOwn:any;
	private tankuangImageTwo:any;
	private tankuangText:any;
	private paragraph:any;

	// 香蕉音频(对应青蛙)
	private qingwaKuai:egret.Sound;
	private qingwaMan:egret.Sound;

	// 小熊
	private xiaoxiongKuai:egret.Sound;
	private xiaoxiongMan:egret.Sound;

	// 鸭子
	private yaziKuai:egret.Sound;
	private yaziMan:egret.Sound;

	// 猪
	private zhuKuai:egret.Sound;
	private zhuMan:egret.Sound;
	
	// 单词卡容器
	public textGroup:eui.Group;

	// 初始化
	private init():void{
		this.textGroup.visible = false;

		// 一起学习单词音频播放控制器
		this.yiqixuexidanci_wav = Sounds.yiqixuexidanci_wav.play(0,1)
		// 播放完毕后值值执行函数
		this.yiqixuexidanci_wav.addEventListener(egret.Event.SOUND_COMPLETE,this.yiqixuexidanciOver,this)
		
		
		
	}

	// 音频播放完毕值执行的函数
	private yiqixuexidanciOver(){
	egret.setTimeout(function(){
		// 单词框隐藏
		this.textGroup.visible = true;

		var color: number = 0xf7ff1c;        /// 光晕的颜色，十六进制，不包含透明度
        var alpha: number = 0.8;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
        var blurX: number = 80;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY: number = 80;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength: number = 3;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
        var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
        var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
        this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
            strength, quality, inner, knockout);
		
		this.onClickOnOff = false;
		this.initEffect();
		this.audioPublicPlay();
		

		
		

		


		

		

		// 初始化下标
		let n = 0;

		GlobalData.dancikaTimerClear = egret.setInterval(function(){
			this.setInteronOff = true;
			let a = 0;
			for(let i = 0;i< this.scrollGroup.$children.length; i++){
				a = i-1;
				if(a<0){
					a = this.scrollGroup.$children.length-1;
					
					if(n>this.scrollGroup.$children.length-1){
						n = 0;
					}

					this.scrollGroup.$children[n].visible = false;
				}
				
				egret.Tween.get(this.scrollGroup.$children[i]).to({
					x:this.scrollGroup.$children[a].x,
					y:this.scrollGroup.$children[a].y,
					scaleX:this.scrollGroup.$children[a].scaleX,
					scaleY:this.scrollGroup.$children[a].scaleY
				},200).call(function(){
					if(this.setInteronOff){
						this.scrollGroup.$children[n].visible = true;

						
						// 点击后字体变化
						this.typerTF.setText("");
						EffectUtils.typerEffect(this.typerTF,this.onchangeText(),0);
						// 点击后音频变化
						this.audioPublicPlay();
						
						
						
						// 控制重复回掉节省性能
						this.setInteronOff = false;
					}
				},this)
			}
			egret.setTimeout(function(){
				n++;
			},this,220)
		},this,16000)

		// 左边按钮点击
		// this.leftBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
		// 	if(this.onClickOnOff == false){
		// 		return;
		// 	}
		// 	this.onClickOnOff = false;
		// 	this.setInteronOff = true;
		// 	let a = 0;
		// 	for(let i = 0;i< this.scrollGroup.$children.length; i++){
		// 		a = i-1;
		// 		if(a<0){
		// 			a = this.scrollGroup.$children.length-1;
					
		// 			if(n>this.scrollGroup.$children.length-1){
		// 				n = 0;
		// 			}

		// 			this.scrollGroup.$children[n].visible = false;
		// 		}
				
		// 		egret.Tween.get(this.scrollGroup.$children[i]).to({
		// 			x:this.scrollGroup.$children[a].x,
		// 			y:this.scrollGroup.$children[a].y,
		// 			scaleX:this.scrollGroup.$children[a].scaleX,
		// 			scaleY:this.scrollGroup.$children[a].scaleY
		// 		},200).call(function(){
		// 			if(this.setInteronOff){
		// 				this.scrollGroup.$children[n].visible = true;

						
		// 				// 点击后字体变化
		// 				this.typerTF.setText("");
		// 				EffectUtils.typerEffect(this.typerTF,this.onchangeText(),0);
		// 				// 点击后音频变化
		// 				this.audioPublicPlay();
						
						
						
		// 				// 控制重复回掉节省性能
		// 				this.setInteronOff = false;
		// 			}
		// 		},this)
		// 	}
		// 	egret.setTimeout(function(){
		// 		n++;
		// 	},this,220)
			
		// },this)


		// // 右边按钮点击
		// this.rightBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(){
		// 		if(this.onClickOnOff === false){
		// 			return;
		// 		}
		// 		this.onClickOnOff = false;
		// 		this.setInteronOff = true;
		// 		let a = 0;
		// 		n--;
		// 		for(let i = 0;i< this.scrollGroup.$children.length; i++){
		// 			a = i+1;
		// 			if(a>this.scrollGroup.$children.length-1){
		// 				a = 0;
		// 				if(n<0){
		// 					n = this.scrollGroup.$children.length-1;
		// 				}
		// 				this.scrollGroup.$children[n].visible = false;
		// 			}
					
		// 			egret.Tween.get(this.scrollGroup.$children[i]).to({
		// 				x:this.scrollGroup.$children[a].x,
		// 				y:this.scrollGroup.$children[a].y,
		// 				scaleX:this.scrollGroup.$children[a].scaleX,
		// 				scaleY:this.scrollGroup.$children[a].scaleY
		// 			},200).call(function(){
		// 				if(this.setInteronOff){
		// 					this.scrollGroup.$children[n].visible = true;

							
		// 					// 点击后字体变化
		// 					this.typerTF.setText("");
		// 					EffectUtils.typerEffect(this.typerTF,this.onchangeText(),0);
		// 					// 点击后音频变化
		// 					this.audioPublicPlay();


		// 					this.setInteronOff = false;
		// 				}
						
						
		// 			},this)
		// 		}
				

		// },this)
		},this,500)
	}

	// 效果第一次执行
	private initEffect():void{
		// 打印机效果第一次执行
		this.dayinji()
		// 初始化第3个位图发光
		this.scrollGroup.$children[3].filters = [this.glowFilter];
	}


	// 清理其他的颜色阴影
	private colorClear():void{
		for(let i = 0; i<this.scrollGroup.$children.length; i++){
			this.scrollGroup.$children[i].filters = null;
		}
	}

	// 打印机
	private dayinji(){
		this.typerTF = new ETextField();
        this.typerTF.bold = true;
        this.typerTF.textColor = 0x00000;
        this.typerTF.stroke = 1;
        this.typerTF.width = 520;
		this.typerTF.height = 148;
		this.typerTF.textAlign = 'center';
		this.typerTF.verticalAlign = 'middle';
		this.typerTF.size = 100;
        
        this.typerTF.x = 728;
        this.typerTF.y = 1000;
        this.addChild(this.typerTF);
		this.typerTF.setText("");
		EffectUtils.typerEffect(this.typerTF,this.onchangeText(),0);
	}

	


	// 根据name找到图片相对应文字,加载相应音频
	private onchangeText(){

		let index = this.fillBig();
		for(let i in GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage){
			if(i === this.scrollGroup.$children[index].name){
				this.colorClear();
				this.scrollGroup.$children[index].filters = [this.glowFilter];
				return GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].text
			}
		}
	}
	


	// 遍历找到最大的图片
	private fillBig(){
		let a = 0;
		let arr = [];
		let newArr = [];
		for(let i = 0; i<this.scrollGroup.$children.length; i++){
			newArr.push([this.scrollGroup.$children[i].scaleX,i])
			arr.push(this.scrollGroup.$children[i].scaleX);
		}
		let maxNum = Math.max(...arr);
		newArr.filter((item,index)=>{
			if(maxNum == item[0]){
				a = index;
			}
		})
		return a;
	}

	

	// 根据实物点击播放不同音频
	public audioPublicPlay(){
		
		let index = this.fillBig();
		for(let i in GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage){
			if(i === this.scrollGroup.$children[index].name){
				this.audioKuai = RES.getRes(GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].kuaiAudio);
				this.audioMan = RES.getRes(GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].manduAudio);
				this.tankuangImageOwn = GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].tankuangImageOwn;
				this.tankuangImageTwo = GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].tankuangImageTwo;
				this.tankuangText = GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].tankuangText;
				this.paragraph = GlobalData.config_json.XuanXiangKa.xuanXiangKaMessage[i].paragraph;

				// 根据配置文件设置音频，图片，文字信息函数
				this.audioPublicPlaying();
				
			}
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

	// 根据配置文件给单词卡弹框设置图片和文字，音频
	private audioPublicPlaying(){
		// 播放识物音频(快)
		let SoundsKuai = this.audioKuai.play(0,1)

		// 播放完执行函数
		SoundsKuai.addEventListener(egret.Event.SOUND_COMPLETE,function(){
			// 清空控制器
			SoundsKuai = null;

			// 定时器延迟一下
			let hemaManTimer = egret.setTimeout(function(){
				// 清空延迟器
				hemaManTimer = null;
				// 播放识物音频(慢)
				let SoundsMan = this.audioMan.play(0,1);
				// 清空字然后再打印字
				this.typerTF.setText("");
				EffectUtils.typerEffect(this.typerTF,this.onchangeText(),200);
				
				
					// 音频播放(慢)执行完后值执行函数
					SoundsMan.addEventListener(egret.Event.SOUND_COMPLETE,function(){

						// 清空音频
						SoundsMan = null;

						let timerTwo = egret.setTimeout(function(){
							timerTwo = null;
							// 发送执行完毕相应(触发弹框) 传递参数
							Global.dispatchEvent(MainNotify.openXuanXiangMessageNotify, 
							{
							'tankuangImageOwn':this.tankuangImageOwn,
							'tankuangText':this.tankuangText,
							'paragraph':this.paragraph,
							"tankuangImageTwo":this.tankuangImageTwo,
							"appleKuai":this.audioKuai,
							"appleMan":this.audioMan
							}, false);
							// 控制多次点击
						},this,1000)
						this.onClickOnOff = true;
					},this)
				
				

			},this,1500)
			
			
		},this)
	}
	














}