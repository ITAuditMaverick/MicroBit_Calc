input.onButtonPressed(Button.A, function () {
    number += 1
})
input.onGesture(Gesture.LogoUp, function () {
    number = number * 2
})
input.onButtonPressed(Button.B, function () {
    number += -1
})
input.onGesture(Gesture.LogoDown, function () {
    number = number / 2
})
let number = 0
number = 5
basic.forever(function () {
    basic.showNumber(number)
})
