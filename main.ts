// Rock Paper Scissors
// 
// --> User picks one of the three. Use the A button to scroll, the B button to select,
// --> Computer picks a random option.
// --> Compare, Say if you win, lose or tie.
input.onButtonPressed(Button.A, function () {
    User += 1
    if (User > 3) {
        User = 1
    }
    if (User == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (User == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    Computer = randint(1, 3)
    if (User == 1 == (Computer == 3)) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(15)
    radio.sendNumber(User)
})
let Computer = 0
let User = 0
User = 1
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
