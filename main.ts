for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= i + 1; j++) {
        led.plot(4 - i + j, j)
        basic.pause(100)
    }
}
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4 - i; j++) {
        led.plot(j, i + j + 1)
        basic.pause(100)
    }
}
basic.forever(function () {
	
})
