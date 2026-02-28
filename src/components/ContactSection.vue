<script setup lang="ts">
import { ref } from 'vue'

const CONTACT_EMAIL = 'yusuf_ahmed@gmx.de'
const SUBJECT = 'Webseiten anfrage'

const form = ref({ name: '', email: '', message: '' })
const state = ref<'idle' | 'success'>('idle')

function handleSubmit() {
  const body = `Name: ${form.value.name}\nE-Mail: ${form.value.email}\n\n${form.value.message}`
  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink
  state.value = 'success'
}
</script>

<template>
  <section id="contact" class="section section-alt" aria-labelledby="contact-heading">
    <div class="container">
      <header class="section-header reveal">
        <span class="section-tag">04 / Kontakt</span>
        <h2 id="contact-heading" class="section-title">Projekt anfragen</h2>
        <p class="section-sub">
          Sie suchen einen erfahrenen Webentwickler in Ludwigsburg oder Stuttgart?
          Schreiben Sie mir — ich melde mich innerhalb von 24 Stunden.
        </p>
      </header>

      <div class="contact-grid">
        <!-- Info -->
        <div class="contact-info reveal">
          <p class="info-lead">
            Ob neue Website, Shop-System, CMS-Migration oder Web-App —
            ich entwickle passgenaue Lösungen für Ihr Unternehmen.
          </p>

          <address class="contact-cards" style="font-style:normal">
            <a :href="`mailto:${CONTACT_EMAIL}`" class="contact-card glass" id="contact-email">
              <div class="cc-icon" aria-hidden="true">✉️</div>
              <div class="cc-body">
                <span class="cc-label">E-Mail</span>
                <span class="cc-val">{{ CONTACT_EMAIL }}</span>
              </div>
            </a>
            <div class="contact-card glass" id="contact-location">
              <div class="cc-icon" aria-hidden="true">📍</div>
              <div class="cc-body">
                <span class="cc-label">Standort</span>
                <span class="cc-val">Ludwigsburg, BW</span>
              </div>
            </div>
            <a href="https://github.com/8bamo" target="_blank" rel="noopener noreferrer" class="contact-card glass" id="contact-github">
              <div class="cc-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <div class="cc-body">
                <span class="cc-label">GitHub</span>
                <span class="cc-val">@8bamo</span>
              </div>
            </a>
          </address>

          <!-- Trust badges -->
          <div class="trust-badges">
            <div class="trust-badge">✅ &gt;10 Jahre Erfahrung</div>
            <div class="trust-badge">✅ Raum Ludwigsburg & Stuttgart</div>
            <div class="trust-badge">✅ SEO & Barrierefreiheit inklusive</div>
            <div class="trust-badge">✅ Antwort innerhalb 24h</div>
          </div>
        </div>

        <!-- Form -->
        <form
          class="contact-form glass reveal reveal-delay-2"
          id="contact-form"
          @submit.prevent="handleSubmit"
          novalidate
          aria-label="Kontaktformular"
        >
          <div class="form-row">
            <div class="form-group">
              <label for="cf-name">Ihr Name *</label>
              <input
                v-model="form.name"
                type="text"
                id="cf-name"
                name="name"
                placeholder="Max Mustermann"
                required
                autocomplete="name"
              />
            </div>
            <div class="form-group">
              <label for="cf-email">E-Mail-Adresse *</label>
              <input
                v-model="form.email"
                type="email"
                id="cf-email"
                name="email"
                placeholder="max@firma.de"
                required
                autocomplete="email"
              />
            </div>
          </div>
          <div class="form-group">
            <label>Betreff</label>
            <div class="subject-fixed" aria-label="Betreff (vorausgefüllt)">{{ SUBJECT }}</div>
          </div>
          <div class="form-group">
            <label for="cf-message">Ihre Nachricht *</label>
            <textarea
              v-model="form.message"
              id="cf-message"
              name="message"
              rows="5"
              placeholder="Beschreiben Sie kurz Ihr Projekt und Ihre Anforderungen..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-primary btn-full"
            id="form-submit-btn"
          >
            <span v-if="state === 'idle'">
              E-Mail senden
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </span>
            <span v-else>✅ E-Mail-Programm wird geöffnet…</span>
          </button>

          <p v-if="state === 'success'" class="form-success" role="status">
            ✅ Ihr E-Mail-Programm öffnet sich mit der vorausgefüllten Nachricht. Vielen Dank!
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-sub {
  color: var(--text-muted);
  font-size: 16px;
  margin-top: 12px;
  max-width: 600px;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 64px;
  align-items: start;
}
.info-lead {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 28px;
}
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
}
.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: var(--radius);
  transition: all .3s;
  cursor: pointer;
}
.contact-card:hover {
  border-color: var(--border-glow);
  transform: translateX(4px);
}
.cc-icon {
  font-size: 1.4rem;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}
.cc-label {
  display: block;
  font-size: 11px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 2px;
}
.cc-val {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}

/* Trust badges */
.trust-badges {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.trust-badge {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 500;
}

/* Form */
.contact-form {
  padding: 40px;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.form-group label {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: .04em;
}
.form-group input,
.form-group textarea {
  background: rgba(255,255,255,.04);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 13px 16px;
  font-family: var(--font);
  font-size: 14px;
  color: var(--text);
  transition: all .25s;
  outline: none;
  resize: vertical;
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-dim); }
.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary);
  background: rgba(99,102,241,.05);
  box-shadow: 0 0 0 3px rgba(99,102,241,.1);
}
.form-success {
  padding: 12px 16px;
  background: rgba(34,197,94,.1);
  border: 1px solid rgba(34,197,94,.25);
  border-radius: var(--radius-sm);
  font-size: 13.5px;
  color: #4ade80;
  text-align: center;
}
.form-error {
  padding: 12px 16px;
  background: rgba(239,68,68,.1);
  border: 1px solid rgba(239,68,68,.25);
  border-radius: var(--radius-sm);
  font-size: 13.5px;
  color: #f87171;
  text-align: center;
}
button:disabled { opacity: .7; cursor: not-allowed; }

.subject-fixed {
  background: rgba(255,255,255,.04);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 13px 16px;
  font-size: 14px;
  color: var(--text-muted);
  font-style: italic;
}

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
}
@media (max-width: 480px) {
  .contact-form { padding: 24px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
