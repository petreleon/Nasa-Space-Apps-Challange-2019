import os
listofdir = list(os.listdir())


def check_folder(input_list):
    if bool(input_list[0:13] == "DefineSprite_"):
        return True
    else:
        return False


fil = filter(check_folder, listofdir)

filtered_list = list(fil)

for li in filtered_list:
  os.rename(li+'/1.png', li[17:]+'.png')
