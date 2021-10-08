input.onButtonPressed(Button.A, function () {
    MÄDCHEN += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Gesamt =" + (MÄDCHEN + junge))
    basic.showString("MÄDCHEN" + MÄDCHEN)
    basic.showString("JUNGEN" + junge)
})
input.onButtonPressed(Button.B, function () {
    junge += 1
})
let MÄDCHEN = 0
let junge = 0
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
junge = 0
MÄDCHEN = 0
basic.forever(function () {
	
})
