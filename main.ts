let 初期値 = 0
初期値 = pins.analogReadPin(AnalogPin.P0)
let 目的値 = 初期値 - 150
basic.forever(function () {
    while (目的値 < pins.analogReadPin(AnalogPin.P0)) {
        basic.showNumber(目的値)
        basic.pause(100)
        continue;
    }
    for (let index = 0; index < 3; index++) {
        music.playMelody("C E G C5 C E G C5 ", 120)
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("finish!")
    }
})
