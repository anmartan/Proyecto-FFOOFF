const SelectGameMode=
{
    key: "selectGameMode",
    preload : function() 
    {
        this.load.image("Ffo","../assets/Ffo.png");
        this.load.image("Off","../assets/Off.png");
        this.load.image("Half-Ffo","../assets/Half-Ffo.png");
        this.load.image("Half-Off","../assets/Half-Off.png");
        this.load.image("Foo&Off","../assets/Foo&Off.png");

        this.load.image("button","../assets/debug/white.png");
        this.load.image("button2","../assets/debug/pink.png");
        this.load.audio("introAntiHero", "../assets/audio/music/DM_Intro.mp3");
        this.load.audio("loopAntiHero", "../assets/audio/music/DM_Loop_x3.mp3");
        this.load.audio("introHero", "../assets/audio/music/Knight_Intro.mp3");
        this.load.audio("loopHero", "../assets/audio/music/Knight_Loop_x3.mp3");

        this.load.image("default",  "../assets/debug/default.png");
        this.load.image("default2", "../assets/debug/default2.png");
        this.load.image("green",    "../assets/debug/green.png");
        this.load.image("green2",   "../assets/debug/green2.png");

        this.load.image("trapSymbol",    "../assets/ui/dungeonEditor/traps.png");
        this.load.image("trapSymbol2",   "../assets/ui/dungeonEditor/traps2.png");
        this.load.image("sizeSymbol",   "../assets/ui/dungeonEditor/size.png");
        this.load.image("sizeSymbol2",  "../assets/ui/dungeonEditor/size2.png");
        this.load.image("enemiesSymbol",     "../assets/ui/dungeonEditor/enemies.png");
        this.load.image("enemiesSymbol2",     "../assets/ui/dungeonEditor/enemies2.png");
        this.load.image("clicked",    "../assets/ui/dungeonEditor/clicked.png");


        /*Objetos nuevos*/
        this.load.image("Sword0", "../assets/objects/sword0.png")
        this.load.image("Sword1", "../assets/objects/sword1.png")
        this.load.image("Sword2", "../assets/objects/sword2.png")
        this.load.image("Sword3", "../assets/objects/sword3.png")

        this.load.image("Potion", "../assets/objects/potion.png")
        this.load.image("Bow", "../assets/objects/bow.png")
        this.load.image("Bomb", "../assets/objects/bomb.png")
        this.load.image("Radar", "../assets/objects/radar.png")
        this.load.image("Arrow", "../assets/objects/arrow.png")


        this.load.image("Shield1", "../assets/objects/shield1.png")
        this.load.image("Shield2", "../assets/objects/shield2.png")
        this.load.image("Shield3", "../assets/objects/shield3.png")
        /*----------*/
        
        this.load.spritesheet("trap", "../assets/traps/spike_animation.png",{ frameWidth: 22, frameHeight: 19})


        this.load.image("caballero_idle0", "../assets/player/knight_m_idle_anim_f0.png")
        this.load.image("caballero_idle1", "../assets/player/knight_m_idle_anim_f1.png")
        this.load.image("caballero_idle2", "../assets/player/knight_m_idle_anim_f2.png")
        this.load.image("caballero_idle3", "../assets/player/knight_m_idle_anim_f3.png")

        this.load.image("zombie", "../assets/enemies/zombie1.png")
        this.load.image("zombie_idle1", "../assets/enemies/zombie2.png")
        this.load.image("zombie_idle2", "../assets/enemies/zombie3.png")
        this.load.image("zombie_idle3", "../assets/enemies/zombie4.png")

        this.load.image("bee", "../assets/enemies/bee1.png")
        this.load.image("bee_idle1", "../assets/enemies/bee2.png")
        this.load.image("bee_idle2", "../assets/enemies/bee3.png")
        this.load.image("bee_idle3", "../assets/enemies/bee4.png")


        this.load.spritesheet("spider", "../assets/enemies/spider.png",{ frameWidth: 32, frameHeight: 32 })
        this.load.spritesheet("wizard", "../assets/enemies/wizard.png",{ frameWidth: 32, frameHeight: 32 })
        this.load.spritesheet("beetle", "../assets/enemies/beetle.png",{ frameWidth: 32, frameHeight: 32 })

        this.load.image("full_Heart",   "../assets/player/fullHeart.png")
        this.load.image("empty_Heart",  "../assets/player/emptyHeart.png")

        this.load.image("DungeonTiles","../assets/ground/DungeonStarter.png");
        this.load.tilemapTiledJSON("tiles","../assets/ground/tiles.json");
        this.load.image("tilesImage","../assets/ground/intento32/tileset_dungeon.png");
        this.load.tilemapTiledJSON("tiles2","../assets/ground/intento32/intento.json");

        this.load.image("coins", "../assets/ui/dungeonEditor/coins.png");


    },
    create:function () {
        let playerIdle = this.anims.create({     //animación del jugador
            key: 'idle',
            frames:
            [
                {key: "caballero_idle0"},
                {key: "caballero_idle1"},
                {key: "caballero_idle2"},
                {key: "caballero_idle3"},
            ],
            frameRate: 10,
            repeat: -1,
        });
        let zombieIdle = this.anims.create({    //animación del zombie
            key: 'idleZombie',
            frames:
            [
                {key: "zombie"},
                {key: "zombie_idle1"},
                {key: "zombie_idle2"},
                {key: "zombie_idle3"},
            ],
            frameRate: 5,
            repeat: -1,
        });
        this.anims.create({    //animación del zombie
            key: 'idleBee',
            frames:
            [
                {key: "bee"},
                {key: "bee_idle1"},
                {key: "bee_idle2"},
                {key: "bee_idle3"},
            ],
            frameRate: 5,
            repeat: -1,
        });


        this.anims.create({
            key: 'idleSpider',
            frames: this.anims.generateFrameNumbers('spider', { start: 0, end: 5 }),
            frameRate: 7,
            yoyo: true,
            repeat: -1
        });

        this.anims.create({
            key: 'idleWizard',
            frames: this.anims.generateFrameNumbers('wizard', { start: 0, end: 10 }),
            frameRate: 7,
            repeat: -1
        });
        this.anims.create({
            key: 'idleBeetle',
            frames: this.anims.generateFrameNumbers('beetle', { start: 0, end: 6 }),
            frameRate: 4,
            repeat: -1
        });

        this.anims.create({
            key: 'trapAnim',
            frames: this.anims.generateFrameNumbers('trap', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: 0
        });

        this.add.image(0,0,"Foo&Off").setOrigin(0,0);
        this.left = this.add.image(0,0,"Half-Off").setOrigin(0,0);
        this.right = this.add.image(0,0,"Half-Ffo").setOrigin(0,0);
        //let left = this.add.sprite(10*2,88*2,"button");
        //let right = this.add.sprite(166*2,88*2,"button2");
        let style = {fontFamily:"m5x7", fontSize:"32px", color:"#FF"};
        this.left.setInteractive({pixelPerfect: true, alphaTolerance:1});
        this.left.text=this.add.text(32,32,"Offwaldo",style);
        this.right.setInteractive({pixelPerfect: true, alphaTolerance:1});
        this.right.text=this.add.text((this.cameras.main.centerX*2)-(32*5),(this.cameras.main.centerY*2)-32,"Ffort",style);

        this.right.on("pointerover", () =>
        {
            this.right.text.setTintFill("0xFF00FF","","0xFF00FF","");
        })
        this.right.on("pointerout",()=>this.right.text.clearTint());
        this.left.on("pointerover", () =>
        {
            this.left.text.setTintFill("0xFF00FF","","0xFF00FF","");
        })
        this.left.on("pointerout",()=>this.left.text.clearTint());

        this.right.on("pointerdown", () =>
        {
            this.game.scene.stop("selectGameMode");
            socket.emit("start", "Hero");
            socket.on("startMatch", () =>
            {
                this.game.scene.start("ItemShop");
            })
        })

        this.left.on("pointerdown", () =>
        {
            this.game.scene.stop("selectGameMode");
            socket.emit("start", "AntiHero");
            socket.on("startMatch", () =>
            {
                this.game.scene.start("DungeonEditor");
            })
        })
        socket.on("Role", (string)=>console.log(string.role+" is your role"))
       
        

    },
    update: function () {
        
    }

}



export default SelectGameMode
