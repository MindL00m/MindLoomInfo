// Shared behaviour for every MindLoom page: mobile menu, scroll reveal,
// industry examples and the footer year.
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mobileNav?.classList.toggle('open', !open);
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

const industries = {
  professional: {
    kicker: 'Professional services',
    title: 'Reuse the best of the firm on every project.',
    description: 'Methods, past proposals, client history and the judgement of senior people, available to every team from day one.',
    outcomes: ['Faster project starts', 'Less duplicated work', 'Expertise that stays when people leave'],
    question: 'Have we done a pricing review like this for a retailer before?',
    answer: 'Yes, twice. The 2024 project for a grocery chain is the closest match. Mei led it and is available. Here are the proposal and lessons learned.'
  },
  financial: {
    kicker: 'Financial services',
    title: 'Make policies and controls easy to follow.',
    description: 'Current policies, approved exceptions and the right reviewer, with every answer showing the source it came from.',
    outcomes: ['Consistent decisions', 'Answers you can audit', 'Faster case handling'],
    question: 'Can we approve this client exception without a second review?',
    answer: 'Not for amounts above the limit in the Credit Policy, updated in March. Route it to the risk team; Daniel owns this process.'
  },
  healthcare: {
    kicker: 'Healthcare operations',
    title: 'Help staff find the current way of doing things.',
    description: 'Up-to-date procedures, clear hand-offs between teams, and quick routes to the internal specialist when a question is unusual.',
    outcomes: ['Faster staff onboarding', 'Clearer hand-offs', 'Trusted, current procedures'],
    question: 'What is the hand-over process when a patient moves to another ward?',
    answer: 'Use the ward transfer checklist, updated last month. The key change: the receiving nurse now confirms medication in person.'
  },
  software: {
    kicker: 'Software companies',
    title: 'Keep engineering knowledge in one place.',
    description: 'Past incidents, design decisions and the people who know each system, so new engineers get productive and old problems stay solved.',
    outcomes: ['Faster problem solving', 'Less repeated debugging', 'Quicker onboarding for engineers'],
    question: 'Why did we move billing off the old payment provider?',
    answer: 'Decided in May after three outages. The decision note lists the options considered. Priya and Tom were involved.'
  }
};

const tabs = document.querySelectorAll('.industry-tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const data = industries[tab.dataset.industry];
    if (!data) return;
    tabs.forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
    document.getElementById('industry-kicker').textContent = data.kicker;
    document.getElementById('industry-title').textContent = data.title;
    document.getElementById('industry-description').textContent = data.description;
    document.getElementById('industry-outcomes').innerHTML = data.outcomes.map((item) => `<span>${item}</span>`).join('');
    document.getElementById('industry-question').textContent = data.question;
    document.getElementById('industry-answer').textContent = data.answer;
  });
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
