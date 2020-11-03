for (let x = 0; x <= 4; x++) {
    led.plot(x + 4, x)
    basic.pause(200)
    led.plot(x + 3, x)
}
basic.forever(function () {
	
})
