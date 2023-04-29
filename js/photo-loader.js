// Get element for the gallery 

const galleryContainerRow = document.getElementsByClassName('row portfolio-column');

// console.log(galleryContainerRow);

const url = 'https://api.github.com/repos/<username>/<repo>/contents/<path-to-image-folder>';

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      if (item.type === 'file' && (item.name.endsWith('.jpg') || item.name.endsWith('.png'))) {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        imageList.appendChild(listItem);
      }
    });
  })
  .catch(error => console.error(error));


