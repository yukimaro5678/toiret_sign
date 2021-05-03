basic.forever(function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # . .
        . # . # .
        . # . . .
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . # .
        . # # . .
        . # . . .
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(1000)
})
