let y_value = 0
let x_value = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, y_value)
        basic.pause(500)
        y_value += 1
        while (y_value > 4) {
            y_value = -1
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x_value, 0)
        basic.pause(500)
        x_value += 1
        while (x_value > 4) {
            x_value = -1
        }
    }
})
