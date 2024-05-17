controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Bot)
    animation.runImageAnimation(
    Bot,
    assets.animation`BotWalk`,
    200,
    false
    )
    if (controller.up.isPressed()) {
        Bot.y += 1
    }
})
let Bot: Sprite = null
scene.cameraFollowSprite(Bot)
scene.setBackgroundColor(1)
Bot = sprites.create(assets.image`Bot`, SpriteKind.Player)
Bot.setPosition(40, 50)
scene.setBackgroundImage(assets.image`Clocktower`)
tiles.setCurrentTilemap(tilemap`level 1`)
while (false) {
    Bot.vy = 100
    Bot.ay = 100
    animation.runImageAnimation(
    Bot,
    assets.animation`BotJump`,
    1000,
    true
    )
}
