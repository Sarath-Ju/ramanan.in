import os

dir = 'new_products/'
count =97
for file in os.listdir(dir):
    count +=1
    old_filepath = os.path.join(dir, file)
    new_name = 'bsramanan_wedding_' + str(count) +'.jpg'
    new_filepath = os.path.join(dir, new_name)
    # if file startwith

    os.rename(old_filepath, new_filepath)
