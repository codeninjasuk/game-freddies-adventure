namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const Win = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Win, function (sprite, otherSprite) {
    _54321789.startEffect(effects.fire)
    scaredy_cats_1.startEffect(effects.fountain)
    game.setGameOverEffect(true, effects.hearts)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        ....................
        ....................
        ....................
        ....2222...2222.....
        ...222222.222222....
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ..222222222222222...
        ...2222222222222....
        ....22222222222.....
        .....222222222......
        ......2222222.......
        .......22222........
        ........222.........
        .........2..........
        .........2..........
        ....................
        `)
    sprite.startEffect(effects.spray)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let scaredy_cats_1: Sprite = null
let _54321789: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f8888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888ffffffffffffffffffff
    f888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888ffffffffffffffffffff
    f888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888ffffffffffffffffffff
    f888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888ffffffffffffffffff
    f888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888ffffffffffffffffff
    fffffffffffffffffffffffffffffff888888888888888888888888888888888ffffffffffffffffffffffff8888888888888888888888888888fffff8888888fffffffff88888ffffffffffffffffff
    fffffffffffffffffffffffffffffff88888ffffffffffffffffff888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888fffffffff88888ffffffffffffffffff
    fffffffffffffffffffffffffffffff88888ffffffffffffffff8888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888ffffffff88888ffffffffffffffffff
    fffffffffffffffffffffffffffffff88888fffffffffffffff8888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888fffffff88888ffffffffffffffffff
    fffffffffffffffffffffffffffffff88888ffffffffffffff8888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888ffffff88888ffffffffffffffffff
    fffffffffffffffffffffffffffffff88888fffffffffffff8888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888fffff88888ffffffffffffffffff
    fffffffffffffffffffffffffffffff888888fffffffffff8888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888fffff88888ffffffffffffffffff
    fffffffffffffffffffffffffffffff88888888ffffffff888888888ffffffffffffffffff66666ffffffffffffffffffffffffffffffffffffffffffffff88888888ffff88888ffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888888fffff888888888fffff66666ffffffff666666fffffffffff66666fffffffffffffffffffffffffffffff88888888fff88888ffffffffffffffffff
    fffffffffffffffffffffffffffffff88888888888fff888888888fffff666666ffffffff666666ffffffffff666666ffffffffffffffffffffffffffffffff88888888ff88888ffffffffffffffffff
    ffffffffffffffffffffffffffffffff888888888888888888888ffffff6666666fffffff666666ffffffffff666666ffffffffffffffffffffffffffffffff888888888f88888ffffffffffffffffff
    ffffffffffffffffffffffffffffffff88888888888888888888fffffff6666666fffffff666666fffffffff6666666ffffffffffffffffffff666666fffffff88888888f88888ffffffffffffffffff
    ffffffffffffffffffffffffffffffffff88888888888888888ffffffff6666666fffffff66666fffffffff66666666fffffffffffffffffff6666666ffffffff8888888888888ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff88888888888888fffffffff66666666ffffff66666fffffffff66666666fffffffffffffffffff6666666fffffffff888888888888ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff88888888888ffffffffff66666666ffffff66666ffffffff666666666ffffffffffffffffff666666666fffffffff88888888888ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff8888888888fffffffffff666666666fffff66666fffffff6666666666fffffffffffffffff6666666666fffffffff88888888888ffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff8888888888ffffffffffff666666666fffff66666fffffff6666666666fffffffffffffffff66666666666fffffffff8888888888ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff8888888888fffffffffffff6666666666ffff66666ffffff66666666666ffffffffffffffff666666666666ffffffffff888888888ffffffffffffffffff
    fffffffffffffffffffffffffffffffffff888888888fffffffffffffff6666666666ffff66666fffff666666666666ffffffffffffffff666666666666fffffffffff88888888ffffffffffffffffff
    ffffffffffffffffffffffffffffffffff888888888ffffffffffffffff66666666666fff66666fffff666666666666fffffffffffffff66666666666666ffffffffffff888888ffffffffffffffffff
    fffffffff3fffffffffffffffffffffff888888888fffffffffffffffff66666666666ff666666ffff6666666666666ffffffffffffff66666666f666666ffffffffffff888888ffffffffffffffffff
    fffffffffffffffff3ffffffffffffff888888888fffffffffffffffff666666666666ff666666fff66666666f66666ffffffffffffff6666666ff6666666fffffffffff888888ffffffffffffffffff
    fffffffffffffffff3fffffffffffff888888888ffffffffffffffffff6666666666666f666666fff6666666ff66666fffffffffffff66666666ff6666666fffffffffff88888fffffffffffffffffff
    ffffffffffffffffffffffffffffff888888888fffffffffffffffffff666666f666666f666666ff66666666ff66666fffffffffffff6666666ffff666666fffffffffff88888fffffffffffffffffff
    ffffffffffffffffffffffffffff8888888888ffffffffffffffffffff666666f666666666666ff66666666fff66666ffffffffffff6666666fffff6666666ffffffffff88888fffffffffffffffffff
    fffffffffffffffffffffffffff8888888888fffffffffffffffffffff66666ff666666666666ff6666666ffff66666fffffffffff66666666666666666666ffffffffff88888fffffffffffffffffff
    ffffffffffffffffffffffffff8888888888ffffffffffffffffffffff66666fff66666666666f66666666ffff66666fffffffffff66666666666666666666ffffffffff88888fffffffffffffffffff
    ffffffffffffffff3ffffffff8888888888fffffffffffffffffffffff66666fff6666666666666666666fffff66666ffffffffff6666666666666666666666fffffffff88888fffffffffffffffffff
    fffffffff33ffff33fffffff8888888888ffffffffffffffffffffffff66666ffff66666666666666666ffffff66666fffffffff66666666666666666666666fffffffff88888fffffffffffffffffff
    ffffffffff333333fffffff888888888ffffffffffffffffffffffffff66666ffff66666666666666666ffffff66666fffffffff666666666666666666666666ffffffff88888fffffffffffffffffff
    ffffffffffffffffffffff888888888fffffffffffffffffffffffffff66666fffff666666666666666fffffff66666ffffffff66666666ffffffffff6666666ffffffff88888fffffffffffffffffff
    fffffffffffffffffffff888888888ffffffffffffffffffffffffffff66666fffff66666666666666ffffffff66666ffffffff6666666ffffffffffff666666ffffffff88888fffffffffffffffffff
    ffffffffffffffffffff888888888fffffffffffffffffffffffffffff66666ffffff6666666666666ffffffff66666fffffff6666666fffffffffffff6666666fffffff88888fffffffffffffffffff
    fffffffffffffffffff888888888ffffffffffffffffffffffffffffff66666ffffff666666666666fffffffff66666ffffff66666666ffffffffffffff666666fffffff88888fffffffffffffffffff
    ffffffffffffffffff888888888fffffffffffffffffffffffffffffff66666ffffff66666666666ffffffffff66666ffffff6666666fffffffffffffff6666666ffffff88888fffffffffffffffffff
    ffffffffffffffff8888888888ffffffffffffffffffffffffffffffff66666fffffff6666666666ffffffffff66666ffffff6666666fffffffffffffff6666666ffffff88888fffffffffffffffffff
    fffffffffffffff8888888888fffffffffffffffffffffffffffffffff66666fffffff666666666fffffffffff66666ffffff666666fffffffffffffffff666666ffffff88888fffffffffffffffffff
    ffffffffffffff8888888888fffffffffffffffffffffffffffffffffffffffffffffff6666666ffffffffffff66666ffffff66666ffffffffffffffffff6666666ffff888888fffffffffffffffffff
    fffffffffffff8888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666ffffff66666fffffffffffffffffff666666ffff888888fffffffffffffffffff
    ffffffffffff8888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666ffff888888fffffffffffffffffff
    fffffffffff888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888fffffffffffffffff666666ffff888888fffffffffffffffffff
    ffffffffff888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888ffffffffffffffffff66666ffff88888ffffffffffffffffffff
    fffffffff888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff888888888fffffffffffffffffffffffffffffffffffffffffffffffff3ffffffff3fffffffffffffffff888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff8888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffff
    fff8888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888f88888888ffffffffffffffffffffffffffffffffffffffffffffffffff
    ff8888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888ff88888888fffffffffffffffffffffffffffffffffffffffffffffffffff
    f8888888888ffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffff888888888888888888fff8888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffff3fffff888888888888888888ff88888888ffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffff33ffffff88888888888ff88888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888ffffffffffffffffffffffffffffffffffffffffffffffffff3ffffff33333333ffffffff888888888ffff8888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888fffffffffffffffffffffffff3ffffffffffffff3fffffffffffff
    88888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888fffffffffffffffffffffffffffffffffffffffff3fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff3fffffff3fffffffffffffffffffffffffffffffffffffffff88888888fffffffffffffffffffffffffffffffffffffffff3fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff3fffffff3ffffffffffffffffffffffffffffffffffffffff88888888ffffffffffffffffffffffffffffff3fffffffffff3fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff3fffffff3ffffffffffffffffffffffffffffffffffffffff8888888fffffffffffffffffffffffffffffff3ffffffffff33fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff3333fff33fffffffffffffffffffffffffffffffffffffff88888888fffffffffffffffffffffffffffffff3ffffffff333ffffffffffffffff
    ffffffffffffffffffff3ffffffffffffffffffffffffffff3333fffffffffffffffffffffffffffffffffffffff88888888ffffffffffffffffffffffffffffffff333ffff333ffffffffffffffffff
    fffffffffffffffffffff3ffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888ffffffffffffffffffffffffffffffffffff33333ffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666fffffffffffffffffffffffff88888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666fffffffffffffffffffffffff8888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666fffffffffffffffffffffffff888888ffffffffffffff6666666666666ffffffffffffffffffffffffffffffffffff
    ffffffffff3fffffffffff3ffffffffffffffffffffffffffffffffffffff66666fffffffffffffffffffffffff888888ffffffffffffff666666666666666ffffffffffffffffffffffffffffffffff
    ffffffffff3fffffffffff333ffffffff33ffffffffffffffffffffffffff66666fffffffffffffffffffffffff88888fffffffffffffff666666666666666ffffffffffffffffffffffffffffffffff
    fffffffffff3fffffffffffff33333333fffffffffffffffffffff666666666666666666666ffffffffffffffffffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffff
    ffffffffffff3fffffffffffffffffffffffffffffffffffffffff666666666666666666666ffffffffffffffffffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffff
    ffffffffffff3fffffffffffffffffffffffffffffffffffffffff666666666666666666666fffffffff66666ffffffffffffffffffffff66666fff6666666ffffffffffffffffffffffffffffffffff
    fffffffffffff3ffffffffffffffffffffffffffffffffffffffff666666666666666666666fffffffff66666ffffffffffffffffffffff66666ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff3ffffffffffffffffffffffffffffffffffffffff666666666666666666666fffffffff66666ffffffffffffffffffffff66666ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff3ffffffffffffff3fffffffffffffffffffffffffffffff66666ffffffffffffffffff66666ffffffffffffffffffffff66666ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff3ffffffffffff33fffffffffffffffffffffffffffffff66666ffffffffffffffffff66666ffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff3ffffffffffff3ffffffffffffffffffffffffffffffff66666ffffffffffffffffff66666ffffffffffffffffffffff6666666fffffffffffffffffffffffffff3ffffffffffffff
    ffffffffffffffff33fffffffff33fffffffffffffffffffffffffffffff666666ffffffffffffffffff66666ffffffffffffffffffffff66666666fffffffffffffffff3fffffffffffffffffffffff
    fffffffffffffffff3ffffff333fffffffffffffffffffffffffffffffff666666ffffffffffffffffff66666ffffffffffffffffffffff666666666ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff3ffff33fffffffffffffffffffffffffffffffffff666666ffffffffffffffffff666666666666666666ffffffffff666666666fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff3fff3ffffffffffffffffffffffffffffffffffff666666ffffffffffffffffff6666666666666666666fffffffff6666666666ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff3f33fffffffffffffffffffffffffffffffffffff66666fffffffffffffffffff6666666666666666666ffffffffff66666666666fffffffffffffffffffffff3ffffffffffff
    ffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffff66666fffffffffffffffffff6666666666666666666fffffffffff6666666666fffffffffffffffffffffff3ffffffffffff
    ffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffff66666fffffffffffffffffff6666666666666666666ffffffffffff666666666ffffffffffff3ffffffffff3ffffffffffff
    ffffffffffffffffffff3ffffffffffffffffffff3ffffffffffffffffff66666fffffffffffffffffff66666fffffffff66666ffffffffffffff6666666ffffffffffff33fffffffff3ffffffffffff
    ffffffffffffffffffff3ffffffffffffffffffff3ffffffffffffffffff66666fffffffffffffffffff66666fffffffff66666fffffffffffffff6666666ffffffffffff33ffffff333ffffffffffff
    ffffffffffffffffffff3fffffffffffffffff3f33ffffffffffffffffff66666fffffffffffffffffff66666fffffffff66666ffffffffffffffff666666fffffffffffff3ffff33fffffffffffffff
    ffffffffffffffffffff3fffffffffffffff33ff33ffffffffffffffffff66666fffffffffffffffffff66666fffffffff66666ffffffffffff6666666666ffffffffffffff3333fffffffffffffffff
    ffffffffffffffffffff3ffffffffffffff3ffff3f3fffff33ffffffffff66666fffffffffffffffffff66666fffffffff66666fffffffffff66666666666fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff3fffffffffffff3fffff3f3fffff3fffff3ffff6666666666666ffffffffffff66666fffffffff66666ffffff6666666666666666fffffffffffffffffffffffffffffffffff
    fffffffffffffffffff3ffffffffffffff3fffff3f33ffff3fffff3ffff66666666666666666666fffff66666fffffffff66666ffffff6666666666666666fffffffffffffffffffffffffffffffffff
    fffffffffffffffffff3fffffffffffff3ffffff33f3ffff3ffff33ffff66666666666666666666fffff66666fffffffff66666ffffff6666666666666666fffffffffffffffffffffffffffffffffff
    fffffffffffffffffff3fffffffffffff3fffffff3f3ffff3ffff33ffff66666666666666666666fffff66666fffffffff66666ffffff66666666666ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff3fffffffffffff3fffffff3f3ffff3ffff33ffff66666666666666666666fffff66666fffffffff66666ffffff666666666ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff3fffffffffffff3ffffffff3f3ffff3ffff33fffffffffffff66666666666fffff66666fffffffff66666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff3fffffffffffff3ffffffff3f3fffff3fff3ffffffffffffffffffffffffffffff66666fffffffff66666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff3fffffffffffff3ffffffff33ffffff33333ffffffffffffffffffffffffffffff66666fffffffff66666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff3ffffffffffff3fffffffff33ffffffffff3ffffffffffffffffffffffffffffffffffffffffffff66666ffffffff3ffffffff3fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff3ffffffffffff3fffffff33f3fffffffff33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff3ffffffffffff3fffff33fff3333ffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff3fffffffffffff3fff33ffffffffffffff33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffff3fffffffffffffffffff
    fffffffffffffffff3fffffffffffff3333ffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffff3fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33fffffffff3ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff3fff33fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffff3fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff3333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33fffff33ffffffffff3fffffffffffff33fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333ffffffffffff3ffffffffffff3ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33fffffffff3fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33ffffff3ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let freddie = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f a a a a f f . . . . 
    . . f 8 8 8 f a a a a f f . . . 
    . . f 8 5 8 2 f f a a a f . . . 
    . f 2 8 8 8 2 2 2 f f f f . . . 
    . f 2 2 f f f f 2 2 2 2 f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 f f b e 4 4 e f f . . 
    . f f e d 8 f 1 4 d 4 e e f . . 
    . . f f d d d e e e e e f f . . 
    . . . f e 4 e d d 4 f f f . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f 6 f f f f f 6 f . . . . 
    . . . 6 9 6 . . . 6 9 6 . . . . 
    `, SpriteKind.Player)
freddie.setPosition(21, 6)
let pewpew = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 9 . . 9 . . . 9 . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . 9 . . . . . . 9 . . . . 
    . . . . . 9 9 9 9 9 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
pewpew.setPosition(138, 6)
controller.moveSprite(freddie, 100, 100)
freddie.setStayInScreen(true)
pewpew.follow(freddie, 10)
scaredy_cats_1 = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 3 f f . . 
    . . f d f f 3 5 5 3 f d f . . . 
    . . . f f 3 3 3 3 3 f d f . . . 
    . . . f 3 3 5 3 3 5 3 f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f . . . . . . . . . 
    `, SpriteKind.Goal)
scaredy_cats_1.setPosition(20, 75)
_54321789 = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Goal)
_54321789.setPosition(47, 83)
let beebidy_bobidy_boopy = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f 6 6 6 6 f f f f f f 
    f f f f 6 6 6 5 5 6 6 6 f f f f 
    f f f 7 7 7 7 6 6 6 6 6 6 f f f 
    f f 6 7 7 7 7 8 8 8 1 1 6 6 f f 
    f f 7 7 7 7 7 8 8 8 1 1 5 6 f f 
    f 6 7 7 7 7 8 8 8 8 8 5 5 6 6 f 
    f 6 7 7 7 8 8 8 f f f 6 5 6 6 f 
    f 6 6 7 7 8 8 f 1 1 1 f 6 6 6 f 
    f 6 8 7 7 8 8 f 1 1 1 f 6 6 6 f 
    f f 6 8 7 7 8 f 1 1 1 f 8 6 f f 
    f f 6 8 8 7 8 8 f f f 8 6 6 f f 
    f f f 6 8 8 8 8 8 8 8 8 6 f f f 
    f f f f 6 6 8 8 8 8 6 6 f f f f 
    f f f f f f 6 6 6 6 f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Win)
