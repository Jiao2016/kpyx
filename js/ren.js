/**
 * Created by 嬌嬌 on 2016/11/10.
 */
function Person(canvas) {
    this.cobj=canvas.getContext("2d");
    this.x=120;
    this.y=210;
    this.width=100;
    this.height=170;
    this.img=document.querySelectorAll(".person");
    this.pos=0;
    this.jump=false;
    this.click();
    this.jumpheight=0;
    this.heightcontrol=40;

}
Person.prototype={
    click:function () {
        document.onclick=(function () {
            this.jump=true;
        }).bind(this)
    },
    draw:function () {
        this.cobj.drawImage(this.img[this.pos],0,0,284,392,this.x,this.y-this.jumpheight,this.width,this.height);
    },
    update:function (frame) {
        if(this.jump){
            this.pos=4;
            if(frame%4==0){
                this.heightcontrol-=4;
                this.jumpheight+=this.heightcontrol;
                if(this.heightcontrol<=0){
                    this.jumpheight=0;
                    this.jump=false;
                    this.heightcontrol=40
                }
            }
            this.draw();
        }else{
            this.pos=Math.floor(frame/5)%this.img.length;
            this.draw();
        }

    }
};