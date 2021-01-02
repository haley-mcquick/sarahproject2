while True:
    print(input.light_level())
    varLight = input.light_level()

# counter = 1
if varLight < 5:
    # counter -= 1
    light.set_all(color.rgb(255, 0, 0))
    light.set_length(30)

# if counter < 1:
#     light.set_all(color.rgb(255, 0, 0))