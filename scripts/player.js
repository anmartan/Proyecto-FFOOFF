export class livingEntity extends Phaser.GameObjects.Sprite
{
    
    constructor(scene,x,y,_speed,sprite)
    {
        super(scene, x, y, sprite)
        this.speed = _speed;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
    }
    moveLeft()
    {
        this.x-=this.speed;
    }
    moveRight()
    {
        this.x+= this.speed;
    }
    moveDown()
    {
        this.y+=this.speed;        
    }
    moveUp()
    {
        this.y-=this.speed;
    }

    attack(dir){};
}


export class player extends livingEntity
{
    constructor(scene, x, y, speed,sprite)
    {
        super(scene,x,y, speed,sprite)
        this.key_D = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_A = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_W = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }
    handleLogic()
        {
            if(this.key_D.isDown)
            {
                this.moveRight();
                this.setFlipX(false);
     
             }
             if(this.key_A.isDown)
             {
                this.moveLeft();
                this.setFlipX(true);
            }
            if(this.key_W.isDown)
            {
                this.moveUp();
            }
            if (this.key_S.isDown)
            {
                this.moveDown();
            }
        }
} 
 