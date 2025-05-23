let y_l = 0
let x_l = 0
let y = 0
let x = 0
let text: string = ""
radio.setGroup(234)
radio.setFrequencyBand(54)
radio.setTransmitSerialNumber(true)
let k: boolean = false

input.onButtonPressed(Button.B, function () {
    radio.sendValue("njimok@<", control.deviceSerialNumber())
    k = true
})

basic.forever(function () {

    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    // Osa X
    if (x >= 700 && x <= 1000) {
        x_l = 2;
    } else if (x > 400 && x < 700) {
        x_l = 1;
    } else if (x >= -400 && x <= 400) {
        x_l = 0;
    } else if (x > -700 && x < -400) {
        x_l = -1;
    } else if (x >= -1000 && x <= -700) {
        x_l = -2;
    }

    // Osa Y
    if (y >= 700 && y <= 1000) {
        y_l = 2;
    } else if (y > 400 && y < 700) {
        y_l = 1;
    } else if (y >= -400 && y <= 400) {
        y_l = 0;
    } else if (y > -700 && y < -400) {
        y_l = -1;
    } else if (y >= -1000 && y <= -700) {
        y_l = -2;
    }
    text = `${y_l},${x_l}`

    radio.sendString(text)
    basic.pause(20)
    
})