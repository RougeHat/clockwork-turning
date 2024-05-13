tiles.set_current_tilemap(tilemap("""
    level 0
"""))
mySprite = sprites.create(assets.image("""
    Bot
"""), SpriteKind.player)
mySprite.set_position(31, 50)

def on_forever():
    scene.camera_follow_sprite(mySprite)
    mySprite.set_velocity(0, 100)
    if controller.up.is_pressed():
        mySprite.set_velocity(50, 100)
    if controller.any_button.is_pressed():
        animation.run_image_animation(mySprite, assets.animation("""
            BotWalk
        """), 200, True)
        controller.move_sprite(mySprite)
forever(on_forever)