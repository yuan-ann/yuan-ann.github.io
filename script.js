/* ==========================================
   Gregory F. Veramendi - Academic Website
   Interactive JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initMobileNav();
  initAbstractToggles();
  initTopicFilters();
});

/* Mobile Navigation Toggle */
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
      // Update aria-expanded for accessibility
      const expanded = navLinks.classList.contains('show');
      navToggle.setAttribute('aria-expanded', expanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* Expandable Abstracts */
function initAbstractToggles() {
  const toggleButtons = document.querySelectorAll('.abstract-toggle');

  toggleButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const abstract = btn.closest('.paper-card').querySelector('.paper-abstract');

      if (abstract) {
        const isShowing = abstract.classList.toggle('show');
        btn.textContent = isShowing ? '− Abstract' : '+ Abstract';
        btn.setAttribute('aria-expanded', isShowing);
      }
    });
  });
}

/* Topic Filters for Research Page */
function initTopicFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const paperCards = document.querySelectorAll('.paper-card[data-topics]');
  const paperCount = document.querySelector('.paper-count');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const topic = btn.dataset.topic;

      // Update active button state
      filterButtons.forEach(function(b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      // Filter papers
      let visibleCount = 0;

      paperCards.forEach(function(card) {
        const topics = card.dataset.topics.split(' ');
        const shouldShow = topic === 'all' || topics.includes(topic);

        card.setAttribute('data-visible', shouldShow);
        if (shouldShow) visibleCount++;
      });

      // Update count
      if (paperCount) {
        paperCount.textContent = 'Showing ' + visibleCount + ' paper' + (visibleCount !== 1 ? 's' : '');
      }
    });
  });

  // Initialize with "all" selected
  const allBtn = document.querySelector('.filter-btn[data-topic="all"]');
  if (allBtn) {
    allBtn.click();
  }
}

/* Smooth scroll for anchor links (optional) */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
