document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('artist-search');
  const artistRows = document.querySelectorAll('.artist-row');

  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    artistRows.forEach(row => {
      if (row.textContent.toLowerCase().includes(query)) {
        row.style.display = 'flex';
      } else {
        row.style.display = 'none';
      }
    });
  });
});