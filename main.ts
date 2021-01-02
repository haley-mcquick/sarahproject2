let varLight: number;
while (true) {
    console.log(input.lightLevel())
    varLight = input.lightLevel()
    if (varLight < 5) {
        //  counter -= 1
        light.setAll(color.rgb(255, 0, 0))
        light.setLength(30)
    }
    
}
