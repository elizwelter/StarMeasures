/// Function to handle dropdown selection for Part C
document.getElementById('part-c-dropdown').addEventListener('change', function() {
  const selectedCategory = this.value;
  if (selectedCategory) {
    window.location.href = `${selectedCategory}.html`; // Navigate to the page based on the selected category
  }
});

// Function to handle Part D dropdown change and redirect to selected category page
document.getElementById('part-d-dropdown').addEventListener('change', function() {
  const selectedCategory = this.value; // Get the selected value from the dropdown
  
  if (selectedCategory) {
    // Redirect to the selected HTML page
    window.location.href = `${selectedCategory}.html`;
  }
});