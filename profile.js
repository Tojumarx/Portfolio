<script>
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  function toggleCard(card) {
    card.classList.toggle('expanded');
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks! Your message has been sent.");
    e.target.reset();
  }
</script>
