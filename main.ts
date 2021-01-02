let varLight: number;
while (true) {
    console.log(input.lightLevel())
    varLight = input.lightLevel()
}
let counter = 1
if (varLight < 5) {
    counter -= 1
}

if (counter < 1) {
    light.setAll(color.rgb(255, 0, 0))
}

