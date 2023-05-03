// Get element for the gallery 


// https://github.com/Sarath-Ju/ramanan.in
const url = 'https://api.github.com/repos/Sarath-Ju/ramanan.in/contents/nature?per_page=100&page=2';


async function fetchPhotos() {
    const response = await fetch(url)
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
            console.log(item);
           

          if (item.type === 'file' && (item.name.endsWith('.jpg') || item.name.endsWith('.png')  || item.name.endsWith('.jpeg')  || item.name.endsWith('.cr2'))) {
            
            // const galleryContainerRow = document.getElementsByClassName('row portfolio-column')[0];
            // console.log(galleryContainerRow);

            // create elements
            const rowParentDiv = document.createElement('div');
            const img = document.createElement('img');
            const hoverDiv = document.createElement('div');
            const hoverImg = document.createElement('a');
            const eyeI = document.createElement('i');
    
            // adding class
            rowParentDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'column_single_gallery_item', 'portraits', 'life');
            hoverDiv.classList.add('hover_overlay');
            hoverImg.classList.add('gallery_img');
            eyeI.classList.add('fa', 'fa-eye');
    
            // adding sources
    
            img.src = item.download_url;
            img.alt =item.name;
            hoverImg.href = item.download_url;
    
            hoverImg.appendChild(eyeI);
            hoverDiv.appendChild(hoverImg);
            rowParentDiv.appendChild(img);
            rowParentDiv.appendChild(hoverDiv);
            document.getElementsByClassName('row portfolio-column')[0].appendChild(rowParentDiv);
            // div.appendChild(rowParentDiv);
    
          }
        });
      })
      .catch(error => console.error(error));
    
    console.log(response);
    return response;
  }


  fetchPhotos();

