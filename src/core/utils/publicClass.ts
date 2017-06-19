class publicClass {
	
	public static BtnTween(context,__this,callBack){
        egret.Tween.get(__this).to({scaleX:0.8,scaleY:0.8},150).to({scaleX:1,scaleY:1},150).call(function(){
            callBack();
        },this)
    }

    public static MovieClip(data,image,run){
        let datas = RES.getRes(data);
        let images = RES.getRes(image);
        let mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( datas, images );
        let mc1:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData( run ) );
        return mc1;
    }
}