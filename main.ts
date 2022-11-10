input.onButtonPressed(Button.A, function () {
    if (index < 5) {
        index += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (index > 0) {
        index += -1
    }
})
let index = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (index == 0) {
    	
    }
})
