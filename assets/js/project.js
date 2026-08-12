function openLightbox(sourceImage) {
  const dialog = document.getElementById('project-lightbox');
  const image = document.getElementById('project-lightbox-image');
  if (!dialog || !image || !sourceImage) return;

  image.src = sourceImage.src;
  image.alt = sourceImage.alt;
  dialog.showModal();
}

function closeLightbox() {
  const dialog = document.getElementById('project-lightbox');
  if (dialog && dialog.open) dialog.close();
}
