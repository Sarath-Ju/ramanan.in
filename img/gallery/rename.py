import os

dir = 'products/'
count =0
for file in os.listdir(dir):
    count +=1
    old_filepath = os.path.join(dir, file)
    new_name = 'bsramanan_products_' + str(count) +'.jpg'
    new_filepath = os.path.join(dir, new_name)

    os.rename(old_filepath, new_filepath)
