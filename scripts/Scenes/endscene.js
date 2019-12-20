const EndGame = {
    key: "EndGame",
    preload:function () {
        
    },
    create:function () {
        this.add.image(0,0,this.game.player).setOrigin(0,0);
        let style = {fontFamily:"m5x7", fontSize:"32px", color:"#FF00FF",backgroundColor:"#ff"};
        
       this.add.text(this.cameras.main.centerX, (this.cameras.main.centerY*2)-32,this.game.endMessage,style).setOrigin(0.5,0.5);
       if(this.game.player==="Ffo")
       {
        this.game.scene.stop("DungeonRun");
       }
    },
    update:function () {
        
    }
}
export default EndGame;