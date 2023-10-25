let rand_value = 0
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    rand_value = 0
    serial.writeLine("Hello")
    basic.pause(1000)
})
