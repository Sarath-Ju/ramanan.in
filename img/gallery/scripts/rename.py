import os

dir = 'outdoor/'
count =0

for file in os.listdir(dir):
    count +=1
    new_name = 'bsramanan_outdoor_' + str(count) +'.jpg'

    old_filepath = os.path.join(dir, file)
    
    new_filepath = os.path.join(dir, new_name)
    # if file startwith

    os.rename(old_filepath, new_filepath)
