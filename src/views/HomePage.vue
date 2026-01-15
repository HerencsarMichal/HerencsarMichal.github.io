<template>
  <div class="home-page">
    <div class="container">
      <!-- Hero sekcia -->
      <section class="hero">
        <h1 class="hero-title">Vitajte v BookReader</h1>
        <p class="hero-subtitle">Vaša osobná digitálna knižnica</p>
        <div class="hero-buttons">
          <router-link to="/catalog" class="btn btn-primary">
            Preskúmať knihy </router-link>
          <router-link to="/library" class="btn btn-secondary">
            Moja knižnica </router-link>
        </div>
      </section>

      <!-- Funkcie -->
      <section class="features">
        <h2>Prečo BookReader?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3>Čítajte pohodlne</h3>
            <p>Prispôsobte si veľkosť písma, font a farby presne podľa seba</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔖</div>
            <h3>Záložky</h3>
            <p>Ukladajte si obľúbené miesta a vráťte sa k nim kedykoľvek</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Sledujte pokrok</h3>
            <p>Pozrite si štatistiky a históriu vášho čítania</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>



<style scoped>
.home-page {
  padding: 40px 0;
}

/* Hero sekcia */
.hero {
  text-align: center;
  padding: 60px 20px;
  background: white;
  margin-bottom: 60px;
}
</style>