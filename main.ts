tiles.setCurrentTilemap(tilemap`
    level 0
`)
let mySprite = sprites.create(assets.image`
    Bot
`, SpriteKind.Player)
mySprite.setPosition(31, 50)
forever(function on_forever() {
    scene.cameraFollowSprite(mySprite)
    mySprite.setVelocity(0, 100)
    if (controller.up.isPressed()) {
        mySprite.setVelocity(50, 100)
    }
    
    if (controller.anyButton.isPressed()) {
        animation.runImageAnimation(mySprite, assets.animation`
            BotWalk
        `, 200, true)
        controller.moveSprite(mySprite)
    }
    
})
