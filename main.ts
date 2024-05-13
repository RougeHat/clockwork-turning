let mySprite = sprites.create(assets.image`Bot`, SpriteKind.Player)
mySprite.setPosition(35, 60)
tiles.setCurrentTilemap(tilemap`level 1`)
scene.setBackgroundColor(1)
forever(function () {
    scene.cameraFollowSprite(mySprite)
    if (controller.left.isPressed() || (controller.right.isPressed() || controller.down.isPressed())) {
        controller.moveSprite(mySprite, 100, 100)
    }
})
forever(function () {
    mySprite.setVelocity(0, 50)
})
