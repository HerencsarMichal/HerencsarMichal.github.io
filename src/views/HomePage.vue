<template>
  <div class="page home-page">
    <div class="container">
      <div class="home-container card shadow rounded-xl">

        <!-- Hero sekcia -->
        <section class="hero text-center mb-5">
          <h1>Vitajte v BookReader</h1>
          <p class="subtitle">Vaša osobná digitálna knižnica</p>
          <div class="hero-buttons d-flex gap-3 justify-content-center">
            <router-link to="/catalog" class="btn btn-primary">
              Preskúmať knihy
            </router-link>
            <router-link to="/library" class="btn btn-secondary">
              Moja knižnica
            </router-link>
          </div>
        </section>
        <section class="long-text">
          <h2>Sila sústredeného čítania</h2>

          <div class="text-columns">
            <p>
              V dnešnom digitálnom svete je naša pozornosť neustále rozptyľovaná
              notifikáciami, sociálnymi sieťami a rýchlym obsahom. Sústredené čítanie
              sa preto stáva čoraz vzácnejšou, no zároveň hodnotnejšou schopnosťou.
            </p>

            <p>
              Čítanie knihy bez prerušovania pomáha mozgu spomaliť, lepšie spracovať
              informácie a vytvárať hlbšie myšlienkové spojenia. Nie je to len o
              získavaní vedomostí, ale aj o mentálnom oddychu.
            </p>

            <p>
              Pravidelné čítanie podporuje predstavivosť, empatiu a schopnosť
              sústrediť sa na jednu vec dlhší čas. Aj niekoľko strán denne môže mať
              pozitívny vplyv na psychickú pohodu a kreativitu.
            </p>

            <p>
              Digitálne čítačky, ak sú správne navrhnuté, dokážu ponúknuť pokojné
              prostredie bez rušivých prvkov. Vďaka prispôsobiteľnému textu a
              jednoduchému rozhraniu sa čítanie opäť stáva vedomým zážitkom.
            </p>

            <p>
              Nájsť si čas na knihu znamená nájsť si čas pre seba. Je to malý únik
              z každodenného zhonu, ktorý môže mať veľký vplyv na kvalitu života.
            </p>
          </div>
        </section>


        <!-- Funkcie -->
        <section class="features">
          <h2 class="text-center mb-4">Prečo BookReader?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">📖</div>
              <h3>Čítajte pohodlne</h3>
              <p>Prispôsobte si veľkosť písma, font a farby presne podľa seba</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔖</div>
              <h3>Záložky</h3>
              <p>Naša čítačka si automaticky zapamätá vaše obľúbené miesta aby ste sa kedikoľvek mohli vrátiť do
                čítania.</p>
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
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.page {
  padding-top: 80px;
  padding-bottom: 40px;
  min-height: 100vh;
}

.home-container {
  background-color: white;
  padding: 2.5rem;
}

.subtitle {
  color: var(--gray-600);
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  color: var(--brown-medium);
  margin-bottom: 1rem;
}

.hero-buttons {
  margin-top: 2rem;
}

.features {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px solid var(--gray-200);
}

.features h2 {
  font-size: 2rem;
  color: var(--brown-medium);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--gray-100);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  color: var(--brown-medium);
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: var(--gray-600);
  margin: 0;
}

/* Responzívne úpravy */
@media (max-width: 768px) {
  .home-container {
    padding: 1.5rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-buttons .btn {
    width: 100%;
    max-width: 300px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>