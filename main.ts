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
        music.play(music.createSoundExpression(WaveShape.Triangle, 1462, 5000, 0, 255, 2000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    } else if (User == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        music.play(music.createSoundExpression(WaveShape.Sawtooth, 1, 5000, 255, 255, 2000, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 255, 255, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
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
music.play(music.stringPlayable("C E C F G B A C5 ", 160), music.PlaybackMode.UntilDone)
