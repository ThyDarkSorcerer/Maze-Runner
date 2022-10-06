namespace SpriteKind {
    export const MiniMenu = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    CheckLevelQualification(3)
    if (IsQualified == true) {
        Maze_Level_3()
        IsQualified = false
    } else {
        MazeRunner.setPosition(60, 120)
        game.splash("You cannot access this level yet!", " Do the previous one first!.")
    }
})
function Maze_Level_2 () {
    tiles.setCurrentTilemap(tilemap`level13`)
    tiles.placeOnRandomTile(MazeRunner, sprites.dungeon.stairEast)
    game.splash("Maze Level 2", "Type: Easy")
    SpawnGhosts(2, 55)
}
function LobbyLevel () {
    tiles.setCurrentTilemap(tilemap`lobby`)
    if (isDebug == true) {
        tiles.setTileAt(tiles.getTileLocation(4, 1), assets.tile`myTile4`)
        tiles.setTileAt(tiles.getTileLocation(5, 1), assets.tile`myTile4`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
    CheckLevelQualification(7)
    if (IsQualified == true) {
        Maze_Level_1()
        IsQualified = false
    } else {
        MazeRunner.setPosition(60, 120)
        game.splash("You cannot access this level yet!", " Do the previous one first!.")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (isDebug == true) {
        IsQualified = false
        Test_Map()
    } else {
        MazeRunner.setPosition(60, 120)
        game.splash("How did we glitch here?", "This is a test map lol.")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    pause(200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    CheckLevelQualification(2)
    if (IsQualified == true) {
        IsQualified = false
        Maze_Level_2()
    } else {
        MazeRunner.setPosition(60, 120)
        game.splash("You cannot access this level yet!", " Do the previous one first!.")
    }
})
function CheckLevelQualification (Level: number) {
    if (info.score() >= Level) {
        IsQualified = true
    } else {
        IsQualified = false
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    CheckLevelQualification(8)
    if (IsQualified == true) {
        Maze_Level_1()
        IsQualified = false
    } else {
        MazeRunner.setPosition(60, 120)
        game.splash("You cannot access this level yet!", " Do the previous one first!.")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    CheckLevelQualification(1)
    if (IsQualified == true) {
        Maze_Level_1()
        IsQualified = false
    } else {
        MazeRunner.setPosition(60, 120)
        game.splash("You cannot access this level yet!", " Do the previous one first!.")
    }
})
function Test_Map () {
    tiles.setCurrentTilemap(tilemap`TestMap`)
    tiles.placeOnRandomTile(MazeRunner, sprites.dungeon.stairWest)
    tiles.placeOnRandomTile(MazeRunner, sprites.dungeon.stairNorth)
    tiles.placeOnRandomTile(MazeRunner, sprites.dungeon.stairSouth)
    tiles.placeOnRandomTile(MazeRunner, sprites.dungeon.stairWest)
    game.splash("Thy Test Map", "Type: $Unknown$")
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    CheckLevelQualification(4)
    if (IsQualified == true) {
        Maze_Level_1()
        IsQualified = false
    } else {
        MazeRunner.setPosition(60, 120)
        game.splash("You cannot access this level yet!", " Do the previous one first!.")
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    pause(200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    CheckLevelQualification(6)
    if (IsQualified == true) {
        Maze_Level_1()
        IsQualified = false
    } else {
        MazeRunner.setPosition(60, 120)
        game.splash("You cannot access this level yet!", " Do the previous one first!.")
    }
})
function Create_Player () {
    MazeRunner = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(MazeRunner, 100, 100)
    scene.cameraFollowSprite(MazeRunner)
    info.setLife(10)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile6`, function (sprite, location) {
    CheckLevelQualification(5)
    if (IsQualified == true) {
        Maze_Level_1()
        IsQualified = false
    } else {
        MazeRunner.setPosition(60, 120)
        game.splash("You cannot access this level yet!", " Do the previous one first!.")
    }
})
function Maze_Level_3 () {
    tiles.setCurrentTilemap(tilemap`level16`)
    tiles.placeOnRandomTile(MazeRunner, sprites.dungeon.stairEast)
    game.splash("Maze Level 3", "Type: Manageable")
}
function Maze_Level_1 () {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(MazeRunner, sprites.dungeon.stairWest)
    game.splash("Maze Level 1", "Type: Easy")
}
function SpawnGhosts (Amount: number, Speed: number) {
    for (let index = 0; index < Amount; index++) {
        Ghosts = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Ghosts, sprites.dungeon.floorLight2)
        Ghosts.follow(MazeRunner, Speed)
        animation.runImageAnimation(
        Ghosts,
        assets.animation`myAnim`,
        500,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    LobbyLevel()
    effects.confetti.startScreenEffect(500)
    MazeRunner.setPosition(75, 50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    color.startFade(color.originalPalette, color.Black, 500)
    color.startFade(color.Black, color.originalPalette, 500)
    tiles.placeOnRandomTile(MazeRunner, assets.tile`myTile6`)
})
let Ghosts: Sprite = null
let MazeRunner: Sprite = null
let isDebug = false
let IsQualified = false
scene.setBackgroundImage(assets.image`MainScreen`)
game.splash("Maze Runner", "By Starlight Studios")
info.setScore(2)
IsQualified = false
isDebug = true
let LastAction = 0
let TimeBetweenAction = 1000
Create_Player()
color.startFade(color.originalPalette, color.Black, 500)
color.startFade(color.Black, color.originalPalette, 500)
LobbyLevel()
