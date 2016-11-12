/**
 * Created by 嬌嬌 on 2016/11/10.
 */
function Obstacle(canvas,num) {
    this.cobj = canvas.getContext("2d");
    this.x = canvas.width;
    this.y = 280;
    this.width = 100;//障碍物大小
    this.height = 70;
    this.img = document.querySelectorAll(".obstacle");
    this.type=num;//1代表地上的障碍物
}
Obstacle.prototype={
    draw:function () {
        if(this.type==1){//地上
            this.cobj.drawImage(this.img[0],0,0,450,376,this.x,this.y,this.width,this.height);//障碍物放置的位置和大小
        }else if(this.type==2){//天上
            this.cobj.drawImage(this.img[1],0,0,800,802,this.x,this.y-10,this.width,this.height);//障碍物放置的位置和大小
        }else if(this.type==3){
            this.cobj.drawImage(this.img[1],0,0,800,802,this.x,this.y,this.width,this.height);//障碍物放置的位置和大小
        }
    },
    update:function () {
        if(this.type==1||this.type==3){
            this.x-=5;
        }else if(this.type==2){
            this.x-=7;
            this.y=100;
        }else if(this.type==3){
            this.x-=5;
        }
        this.draw();
    }
};