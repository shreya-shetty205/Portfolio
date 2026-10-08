/**
 * ==========================================================================
 * SHREYA SHETTY PORTFOLIO - APPLICATION CONTROLLER
 * Rock-solid interactive behaviors, theme handling, modal controller & utilities
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjectModals();
  initContactForm();
  syncConfigurableLinks();
  initEffects();
});

/* ==========================================================================
   1. Theme Controller (Dark / Light Mode)
   ========================================================================== */
function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }

function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const storedTheme = safeGet('shreya_theme_v4');
  
  const currentTheme = storedTheme || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      safeSet('shreya_theme_v4', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('themeIcon');
  if (!themeIcon) return;
  
  if (theme === 'light') {
    // Show Moon icon so user can toggle into dark mode
    themeIcon.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    // Show Sun icon so user can toggle into light mode
    themeIcon.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/* ==========================================================================
   2. Navigation & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active section scroll spy
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  });
}

/* ==========================================================================
   3. Sync Configurable Links (LinkedIn, GitHub & Resume)
   ========================================================================== */
function syncConfigurableLinks() {
  if (typeof LINKEDIN_URL !== 'undefined') {
    document.querySelectorAll('.linkedin-link').forEach(el => {
      el.setAttribute('href', LINKEDIN_URL);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }

  if (typeof RESUME_FILE_PATH !== 'undefined') {
    document.querySelectorAll('.view-resume-btn').forEach(el => {
      el.setAttribute('href', RESUME_FILE_PATH);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    document.querySelectorAll('.download-resume-btn').forEach(el => {
      el.setAttribute('href', RESUME_FILE_PATH);
      el.setAttribute('download', RESUME_FILENAME);
    });
  }
}

/* ==========================================================================
   4. Project Modal Controller
   ========================================================================== */
function initProjectModals() {
  window.openProjectModal = function(projectId) {
    if (typeof portfolioData === 'undefined' || !portfolioData.projects) return;
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const modalOverlay = document.getElementById('projectModal');
    const modalBody = document.getElementById('projectModalBody');
    if (!modalOverlay || !modalBody) return;

    modalBody.innerHTML = `
      ${project.image ? `
        <div style="margin-bottom: 16px; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-subtle); max-height: 260px; background: var(--bg-surface);">
          <img src="${project.image}" alt="${project.title} Screenshot" style="width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block;">
        </div>
      ` : ''}

      <div style="margin-bottom: 18px;">
        ${project.award ? `
          <div style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.4); border-radius: var(--radius-full); color: var(--amber); font-size: 0.8rem; font-weight: 700; margin-bottom: 10px;">
            🏆 ${project.award}
          </div>
        ` : ''}
        <h3 style="font-size: 1.55rem; margin-bottom: 4px;">${project.title}</h3>
        <p style="color: var(--cyan); font-weight: 500; margin-bottom: 12px; font-size: 0.92rem;">${project.category}</p>
        <p style="color: var(--text-secondary); line-height: 1.65; font-size: 0.95rem; margin-bottom: 18px;">${project.shortDescription}</p>
      </div>

      ${project.workflow ? `
        <div style="background: var(--bg-input); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 20px;">
          <div style="font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 8px;">System Workflow Pipeline</div>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-size: 0.84rem; font-weight: 600;">
            ${project.workflow.map((step, idx) => `
              <span style="padding: 3px 8px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); color: var(--primary-light);">${step}</span>
              ${idx < project.workflow.length - 1 ? '<span style="color: var(--text-muted);">→</span>' : ''}
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          Key Highlights
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
          ${project.highlights.map(h => `
            <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.9rem; color: var(--text-secondary);">
              <span style="color: var(--emerald); font-weight: bold;">✓</span>
              ${h}
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 0.84rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 8px;">Technologies</h4>
        <div class="project-tech-tags" style="margin-bottom: 0;">
          ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-top: 20px; padding-top: 14px; border-top: 1px solid var(--border-subtle);">
        <span style="font-size: 0.82rem; color: var(--text-muted);">Source Code & Implementation</span>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          Open on GitHub
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => {
        m.classList.remove('active');
      });
      document.body.style.overflow = '';
    }
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}



/* ==========================================================================
   6. Contact Form & Clipboard Interactions
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.');
        return;
      }

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Shreya,

${message}

From: ${name} (${email})`);
      const composeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shreyashetty205@gmail.com&su=${subject}&body=${body}`;

      showToast('Opening Gmail...');
      window.open(composeLink, '_blank', 'noopener');
      form.reset();
    });
  }
}

window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`);
  }).catch(() => {
    showToast(`Failed to copy ${label}`);
  });
};

/* ==========================================================================
   7. Toast Notification Utility
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast toast-success';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ==========================================================================
   8. Visual Effects (progress bar, reveal, counters, card spotlight)
   ========================================================================== */
function initEffects() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress + navbar state
  const bar = document.getElementById('scrollProgress');
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll reveal
  const revealSel = '.section-header, .about-text, .focus-card, .skill-card, .tl-item, .project-card, .cert-flow, .gh-banner, .list-card, .edu-card, .contact-shell, .col-title';
  const items = document.querySelectorAll(revealSel);
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    items.forEach(el => {
      const sibs = el.parentElement ? Array.from(el.parentElement.children).filter(n => n.matches(revealSel)) : [];
      el.style.setProperty('--d', Math.min(sibs.indexOf(el), 5) * 70 + 'ms');
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  // Count-up stats (final values are already in the HTML for no-JS / reduced motion)
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const run = (el) => {
      const target = parseFloat(el.dataset.count), dec = +el.dataset.decimals || 0, suf = el.dataset.suffix || '';
      const start = performance.now(), dur = 1300;
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec) + (p === 1 ? suf : '');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const co = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { run(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(el => { el.textContent = (0).toFixed(+el.dataset.decimals || 0); co.observe(el); });
  }

  // Cursor spotlight on glass cards
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest && e.target.closest('.glass-card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
}
