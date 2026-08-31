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
  fetchGitHubRepos();
  initContactForm();
  syncConfigurableLinks();
});

/* ==========================================================================
   1. Theme Controller (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('shreya_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'dark');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('shreya_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('themeIcon');
  if (!themeIcon) return;
  
  if (theme === 'light') {
    themeIcon.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    themeIcon.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
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
   5. Live GitHub Repositories Showcase
   ========================================================================== */
async function fetchGitHubRepos() {
  const container = document.getElementById('githubReposContainer');
  if (!container) return;

  const username = 'shreya-shetty205';

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) {
      throw new Error(`GitHub API status: ${response.status}`);
    }
    const repos = await response.json();

    if (Array.isArray(repos) && repos.length > 0) {
      container.innerHTML = repos.map(repo => `
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-card">
          <div>
            <div class="repo-header">
              <span class="repo-name">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                ${escapeHtml(repo.name)}
              </span>
              <span style="font-size: 0.7rem; padding: 2px 6px; border: 1px solid var(--border-subtle); border-radius: var(--radius-full); color: var(--text-muted);">
                ${repo.private ? 'Private' : 'Public'}
              </span>
            </div>
            <p class="repo-desc">${repo.description ? escapeHtml(repo.description) : 'Technical repository and development work by Shreya Shetty.'}</p>
          </div>
          <div class="repo-meta">
            ${repo.language ? `
              <span class="repo-lang">
                <span class="lang-dot"></span>
                ${escapeHtml(repo.language)}
              </span>
            ` : ''}
            <span style="display: flex; align-items: center; gap: 4px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ${repo.stargazers_count || 0}
            </span>
            <span style="display: flex; align-items: center; gap: 4px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
              ${repo.forks_count || 0}
            </span>
          </div>
        </a>
      `).join('');
    }
  } catch (err) {
    console.info("GitHub API fetch completed with local fallback state.");
  }
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
      const body = encodeURIComponent(`Hi Shreya,\n\n${message}\n\nFrom: ${name} (${email})`);
      const mailtoLink = `mailto:shreyashetty205@gmail.com?subject=${subject}&body=${body}`;

      showToast('Opening your email client...');
      window.location.href = mailtoLink;
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
