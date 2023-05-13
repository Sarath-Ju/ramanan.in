import os
from PIL import Image

def compress_images(input_folder, output_folder, max_size):
    # Check if the output folder exists, if not create it
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
        
    
    # Loop through all files in the input folder
    for filename in os.listdir(input_folder):
        # Check if the file is an image
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            # Construct the input and output paths
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename)
            print(input_path,output_path)
            # Open the image file
            with Image.open(input_path) as image:
                # Get the current aspect ratio
                aspect_ratio = image.size[0] / image.size[1]
                
                # Calculate the new size based on the max_size and aspect ratio
                new_size = (int(max_size * aspect_ratio), max_size)
                
                # Resize the image
                resized_image = image.resize(new_size, resample=Image.LANCZOS)
                print(resized_image,">>>>>>>>>")
                
                # Save the resized image with the same quality as the original
                resized_image.save(output_path, optimize=True, quality=image.info.get("quality", 95))
                # print(">>>>>>>>>x here",x)
# Example usage
compress_images("still_life", "still_life", 1000)
