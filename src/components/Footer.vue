<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-brand">
                <h3>📚 BookReader</h3>
                <p>Vaša digitálna knižnica pre pohodlné čítanie kníh online.</p>
            </div>

            <div class="footer-links">
                <div class="footer-section">
                    <h4>Podpora</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Nápoveda</a></li>
                        <li><a href="#">Podmienky používania</a></li>
                        <li><a href="#">Ochrana súkromia</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Kontakt</h4>
                    <ul>
                        <li>📧 info@bookreader.sk</li>
                        <li>📞 +421 123 456 789</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2077 BookReader. Všetky práva vyhradené.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
    background-color: var(--brown-dark);
    color: white;
    padding: 2rem 0 0;
    width: 100%;
    position: relative;
    bottom: 0;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.footer-brand {
    text-align: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand h3 {
    color: var(--gold);
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
}

.footer-brand p {
    color: var(--gray-300);
    max-width: 400px;
    margin: 0 auto;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.footer-section h4 {
    color: var(--gold);
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section li {
    margin-bottom: 0.5rem;
    color: var(--gray-300);
}

.footer-section a {
    color: var(--gray-300);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section a:hover {
    color: var(--gold);
}

.footer-bottom {
    margin-top: 2rem;
    padding: 1rem 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--gray-300);
    font-size: 0.9rem;
}

@media (min-width: 768px) {
    .footer-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .footer-brand {
        text-align: left;
        border-bottom: none;
        flex: 1;
    }

    .footer-links {
        flex: 1;
        display: flex;
        justify-content: space-around;
    }

    .footer-bottom {
        text-align: left;
        padding: 1rem 20px;
    }
}

@media (max-width: 767px) {
    .footer-links {
        text-align: center;
    }

    .social-icons {
        justify-content: center;
    }
}
</style>