// Variables globales
let currentLanguage = 'fr';
let visitorCount = 0;

// Traductions - section hero, titres des sections et descriptions
const translations = {
    fr: {
        'hero.greeting': 'Bonjour, je suis',
        'hero.subtitle': 'Développeur Web & IA',
        'hero.description': 'Je crée des applications web modernes et intelligentes, propulsées par l\'IA, qui transforment vos idées en solutions concrètes.',
        'hero.projects': 'Voir mes projets',
        'hero.contact': 'Me contacter',
        'section.about': 'À propos de moi',
        'section.skills': 'Mes compétences',
        'section.projects': 'Mes projets',
        'section.contact': 'Contactez-moi',
        'about.description1': 'Étudiant ingénieur en Informatique et Réseaux à l\'EMSI Marrakech, je suis développeur web et IA. Je conçois des applications web complètes et performantes, du backend jusqu\'à l\'interface, avec une attention particulière à l\'expérience utilisateur.',
        'about.description2': 'J\'intègre l\'intelligence artificielle dans mes projets (machine learning, NLP, analyse de données) pour créer des solutions plus intelligentes. Mes stages à l\'ANP et à la SRM Marrakech-Safi m\'ont permis de livrer des plateformes concrètes en entreprise.',
        'contact.title': 'Travaillons ensemble !',
        'contact.description': 'Vous avez un projet en tête ? N\'hésitez pas à me contacter pour discuter de vos besoins.'
    },
    en: {
        'hero.greeting': 'Hello, I am',
        'hero.subtitle': 'Web & AI Developer',
        'hero.description': 'I build modern, intelligent web applications powered by AI that turn your ideas into real solutions.',
        'hero.projects': 'View my projects',
        'hero.contact': 'Contact me',
        'section.about': 'About me',
        'section.skills': 'My skills',
        'section.projects': 'My projects',
        'section.contact': 'Contact me',
        'about.description1': 'Engineering student in Computer Science and Networks at EMSI Marrakech, I am a web and AI developer. I build complete, high-performance web applications, from the backend to the interface, with a strong focus on user experience.',
        'about.description2': 'I bring artificial intelligence into my projects (machine learning, NLP, data analysis) to create smarter solutions. My internships at ANP and SRM Marrakech-Safi allowed me to deliver real platforms in a professional setting.',
        'contact.title': 'Let\'s work together!',
        'contact.description': 'Do you have a project in mind? Don\'t hesitate to contact me to discuss your needs.'
    },
    ar: {
        'hero.greeting': 'مرحبا، أنا',
        'hero.subtitle': 'مطور ويب وذكاء اصطناعي',
        'hero.description': 'أصمم تطبيقات ويب حديثة وذكية مدعومة بالذكاء الاصطناعي، تحول أفكارك إلى حلول ملموسة.',
        'hero.projects': 'عرض مشاريعي',
        'hero.contact': 'اتصل بي',
        'section.about': 'حولي',
        'section.skills': 'مهاراتي',
        'section.projects': 'مشاريعي',
        'section.contact': 'اتصل بي',
        'about.description1': 'طالب مهندس في المعلوميات والشبكات بـ EMSI مراكش، أنا مطور ويب وذكاء اصطناعي. أصمم تطبيقات ويب متكاملة وعالية الأداء، من الواجهة الخلفية إلى واجهة المستخدم، مع اهتمام خاص بتجربة المستخدم.',
        'about.description2': 'أدمج الذكاء الاصطناعي في مشاريعي (التعلم الآلي، معالجة اللغة الطبيعية، تحليل البيانات) لإنشاء حلول أكثر ذكاءً. وقد مكنتني تداريبي في الوكالة الوطنية للموانئ (ANP) وفي SRM مراكش-آسفي من تقديم منصات ملموسة داخل المقاولة.',
        'contact.title': 'دعنا نعمل معاً!',
        'contact.description': 'هل لديك مشروع في ذهنك؟ لا تتردد في الاتصال بي لمناقشة احتياجاتك.'
    }
};

// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation de la navbar au scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Lien actif selon la section visible
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));

// Animation des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer tous les éléments avec la classe fade-in
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.skill-category, .project-card, .stat, .contact-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Animation des barres de progression
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressFill = entry.target.querySelector('.progress-fill');
            if (progressFill) {
                const width = progressFill.getAttribute('data-width');
                setTimeout(() => {
                    progressFill.style.width = width + '%';
                }, 500);
            }
        }
    });
}, { threshold: 0.5 });

// Observer les barres de progression
document.addEventListener('DOMContentLoaded', () => {
    const progressItems = document.querySelectorAll('.skill-progress-item');
    progressItems.forEach(item => {
        progressObserver.observe(item);
    });
});


// Animation de frappe pour le titre
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            // Si on arrive à une balise HTML, l'ajouter complètement
            if (text.charAt(i) === '<') {
                let tagEnd = text.indexOf('>', i);
                if (tagEnd !== -1) {
                    element.innerHTML += text.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                } else {
                    element.innerHTML += text.charAt(i);
                    i++;
                }
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Fonction pour animer le titre avec la traduction
function animateTitleWithTranslation() {
    const heroTitle = document.getElementById('hero-title');
    const greeting = translations[currentLanguage]['hero.greeting'];
    const heroName = document.getElementById('hero-name');
    
    // Utiliser le nom déjà traduit dans le DOM
    const name = heroName ? heroName.outerHTML : '<span class="highlight">Mehdi El khou</span>';
    
    const fullText = greeting + ' ' + name;
    typeWriter(heroTitle, fullText, 100);
}

// Animation du titre principal au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Attendre que les traductions soient appliquées
    setTimeout(() => {
        animateTitleWithTranslation();
    }, 200);
});


// Système de notifications
function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles de la notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Couleurs selon le type
    if (type === 'success') {
        notification.style.background = '#10b981';
    } else if (type === 'error') {
        notification.style.background = '#ef4444';
    } else {
        notification.style.background = '#3b82f6';
    }
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Filtres des projets
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
        document.querySelectorAll('.project-card').forEach(card => {
            card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
        });
    });
});

// Effet parallaxe léger pour la section hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Animation de chargement de la page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Fonction pour changer de langue - section hero et titres des sections
function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('language', lang);
    
    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Traduire tous les éléments avec data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Traduire le nom
    const heroName = document.getElementById('hero-name');
    if (heroName) {
        if (lang === 'ar') {
            heroName.textContent = 'مهدي الخو';
        } else {
            heroName.textContent = 'Mehdi El khou';
        }
    }
    
    // Mettre à jour le titre sans animation pour les changements de langue
    const heroTitle = document.getElementById('hero-title');
    const greeting = translations[lang] && translations[lang]['hero.greeting'];
    
    if (heroTitle && greeting && heroName) {
        heroTitle.innerHTML = greeting + ' ' + heroName.outerHTML;
    }
}



// Galerie des projets
const projectGalleries = window.PROJECT_GALLERIES || {};

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.setAttribute('role', 'dialog');
lightbox.setAttribute('aria-modal', 'true');
lightbox.innerHTML = `
    <div class="lightbox-header">
        <h3 class="lightbox-title"></h3>
        <span class="lightbox-counter"></span>
        <button type="button" class="lightbox-close" aria-label="Fermer"><i class="fas fa-times"></i></button>
    </div>
    <div class="lightbox-stage">
        <button type="button" class="lightbox-nav lightbox-prev" aria-label="Image précédente"><i class="fas fa-chevron-left"></i></button>
        <figure class="lightbox-figure">
            <img class="lightbox-image" alt="">
            <figcaption class="lightbox-caption"></figcaption>
        </figure>
        <button type="button" class="lightbox-nav lightbox-next" aria-label="Image suivante"><i class="fas fa-chevron-right"></i></button>
    </div>
    <div class="lightbox-thumbs"></div>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxThumbs = lightbox.querySelector('.lightbox-thumbs');
let galleryImages = [];
let galleryIndex = 0;

function showGalleryImage(index) {
    galleryIndex = (index + galleryImages.length) % galleryImages.length;
    const item = galleryImages[galleryIndex];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.caption;
    lightbox.querySelector('.lightbox-caption').textContent = item.caption;
    lightbox.querySelector('.lightbox-counter').textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
    lightboxThumbs.querySelectorAll('button').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === galleryIndex);
        if (i === galleryIndex) thumb.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    });
    const next = galleryImages[(galleryIndex + 1) % galleryImages.length];
    new Image().src = next.src;
}

function openGallery(slug, title) {
    const gallery = projectGalleries[slug];
    if (!gallery) return;
    galleryImages = gallery.images;
    lightbox.querySelector('.lightbox-title').textContent = title;
    lightboxThumbs.innerHTML = galleryImages
        .map((item, i) => `<button type="button" data-index="${i}" aria-label="${item.caption}"><img src="${item.thumb}" alt="" loading="lazy"></button>`)
        .join('');
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    showGalleryImage(0);
}

function closeGallery() {
    lightbox.classList.remove('open');
    if (!projectView.classList.contains('open')) document.body.style.overflow = '';
}

lightbox.querySelector('.lightbox-close').addEventListener('click', closeGallery);
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showGalleryImage(galleryIndex - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showGalleryImage(galleryIndex + 1));
lightboxThumbs.addEventListener('click', e => {
    const thumb = e.target.closest('button');
    if (thumb) showGalleryImage(Number(thumb.dataset.index));
});
lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-stage')) closeGallery();
});
document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') {
        e.preventDefault();
        closeGallery();
    }
    if (e.key === 'ArrowLeft') showGalleryImage(galleryIndex - 1);
    if (e.key === 'ArrowRight') showGalleryImage(galleryIndex + 1);
});

let touchStartX = null;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) showGalleryImage(galleryIndex + (dx < 0 ? 1 : -1));
    touchStartX = null;
});

const projectDetails = window.PROJECT_DETAILS || {};
const projectList = [];

document.querySelectorAll('.project-card').forEach(card => {
    const button = card.querySelector('[data-gallery]');
    if (!button) return;
    const slug = button.dataset.gallery;
    if (!projectGalleries[slug]) return;
    projectList.push({
        slug,
        title: card.querySelector('h3').textContent,
        description: card.querySelector('.project-content p').textContent,
        badge: card.querySelector('.project-badge')?.textContent || '',
        date: card.querySelector('.project-date')?.textContent.trim() || '',
        icon: card.querySelector('.project-placeholder i')?.className || 'fas fa-folder-open',
        techs: [...card.querySelectorAll('.project-tech span')].map(s => s.textContent)
    });
    button.addEventListener('click', () => openProject(slug, true));
});

const projectView = document.createElement('div');
projectView.className = 'project-view';
projectView.setAttribute('role', 'dialog');
projectView.setAttribute('aria-modal', 'true');
projectView.innerHTML = `
    <div class="pv-topbar">
        <div class="container pv-topbar-inner">
            <button type="button" class="pv-back"><i class="fas fa-arrow-left"></i> Retour aux projets</button>
            <span class="pv-topbar-title"></span>
            <button type="button" class="pv-close" aria-label="Fermer"><i class="fas fa-times"></i></button>
        </div>
    </div>
    <div class="pv-body"></div>`;
document.body.appendChild(projectView);

const projectViewBody = projectView.querySelector('.pv-body');
let currentProject = null;
let projectPushed = false;

function projectImageIndex(slug, name) {
    return projectGalleries[slug].images.findIndex(img => img.src.split('/').pop().replace(/\.\w+$/, '') === name);
}

function renderShot(slug, index) {
    const img = projectGalleries[slug].images[index];
    return `
        <figure class="pv-shot" data-index="${index}">
            <div class="pv-shot-frame"><img src="${img.src}" alt="${img.caption}" loading="lazy"><span class="pv-zoom"><i class="fas fa-expand"></i></span></div>
            <figcaption>${img.caption}</figcaption>
        </figure>`;
}

function openProject(slug, push) {
    const position = projectList.findIndex(p => p.slug === slug);
    if (position === -1) return;
    const project = projectList[position];
    const details = projectDetails[slug] || {};
    const images = projectGalleries[slug].images;
    const prev = projectList[(position - 1 + projectList.length) % projectList.length];
    const next = projectList[(position + 1) % projectList.length];

    const used = new Set();
    const sections = (details.sections || []).map((section, i) => {
        const indexes = section.images.map(name => projectImageIndex(slug, name)).filter(idx => idx !== -1);
        indexes.forEach(idx => used.add(idx));
        return `
            <article class="pv-step">
                <div class="pv-step-head">
                    <span class="pv-step-num">${String(i + 1).padStart(2, '0')}</span>
                    <div>
                        <h3>${section.title}</h3>
                        <p>${section.text}</p>
                    </div>
                </div>
                <div class="pv-shots ${indexes.length === 1 ? 'single' : ''}">${indexes.map(idx => renderShot(slug, idx)).join('')}</div>
            </article>`;
    });
    const rest = images.map((_, idx) => idx).filter(idx => !used.has(idx));
    if (!details.sections) {
        sections.push(`<article class="pv-step"><div class="pv-shots">${rest.map(idx => renderShot(slug, idx)).join('')}</div></article>`);
    }

    projectViewBody.innerHTML = `
        <header class="pv-hero">
            <div class="container pv-hero-inner">
                <div class="pv-hero-text">
                    <div class="pv-meta">
                        <span class="pv-badge">${project.badge}</span>
                        ${project.date ? `<span class="pv-date"><i class="far fa-calendar-alt"></i> ${project.date}</span>` : ''}
                    </div>
                    <h1>${project.title}</h1>
                    <p class="pv-lead">${project.description}</p>
                    <div class="pv-tech">${project.techs.map(t => `<span>${t}</span>`).join('')}</div>
                    <button type="button" class="btn btn-primary pv-open-gallery"><i class="fas fa-images"></i> Voir toutes les captures</button>
                </div>
                <div class="pv-hero-cover" data-index="0">
                    <img src="${images[0].src}" alt="${images[0].caption}">
                    <span class="pv-hero-icon"><i class="${project.icon}"></i></span>
                </div>
            </div>
        </header>
        <div class="container pv-content">
            ${details.stats ? `
            <div class="pv-stats">${details.stats.map(s => `<div class="pv-stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join('')}</div>` : ''}
            ${details.context ? `
            <section class="pv-block pv-overview">
                <div>
                    <h2><i class="fas fa-circle-info"></i> Présentation</h2>
                    ${[].concat(details.context).map(p => `<p>${p}</p>`).join('')}
                    ${details.objectives ? `
                    <h3 class="pv-subtitle"><i class="fas fa-bullseye"></i> Objectifs</h3>
                    <ul class="pv-objectives">${details.objectives.map(o => `<li>${o}</li>`).join('')}</ul>` : ''}
                </div>
                ${details.features ? `
                <div class="pv-features-card">
                    <h2><i class="fas fa-list-check"></i> Fonctionnalités clés</h2>
                    <ul class="pv-features">${details.features.map(f => `<li><i class="fas fa-check"></i><span>${f}</span></li>`).join('')}</ul>
                </div>` : ''}
            </section>` : ''}
            ${details.architecture ? `
            <section class="pv-block">
                <h2><i class="fas fa-layer-group"></i> Architecture technique</h2>
                <div class="pv-arch">${details.architecture.map(a => `<div class="pv-arch-item"><h3>${a.label}</h3><p>${a.text}</p></div>`).join('')}</div>
            </section>` : ''}
            <section class="pv-block">
                <h2><i class="fas fa-route"></i> Visite guidée</h2>
                <div class="pv-steps">${sections.join('')}</div>
            </section>
            ${details.challenges ? `
            <section class="pv-block">
                <h2><i class="fas fa-puzzle-piece"></i> Défis et solutions</h2>
                <div class="pv-challenges">${details.challenges.map(c => `<div class="pv-challenge"><h3>${c.title}</h3><p>${c.text}</p></div>`).join('')}</div>
            </section>` : ''}
            ${details.learnings ? `
            <section class="pv-block pv-learnings">
                <h2><i class="fas fa-flag-checkered"></i> Résultats et apprentissages</h2>
                <ul>${details.learnings.map(l => `<li><i class="fas fa-arrow-right"></i><span>${l}</span></li>`).join('')}</ul>
            </section>` : ''}
            <nav class="pv-pager">
                <button type="button" class="pv-pager-btn" data-slug="${prev.slug}">
                    <span><i class="fas fa-arrow-left"></i> Projet précédent</span>
                    <strong>${prev.title}</strong>
                </button>
                <button type="button" class="pv-pager-btn next" data-slug="${next.slug}">
                    <span>Projet suivant <i class="fas fa-arrow-right"></i></span>
                    <strong>${next.title}</strong>
                </button>
            </nav>
        </div>`;

    projectView.querySelector('.pv-topbar-title').textContent = project.title;
    currentProject = project;
    projectView.classList.add('open');
    projectView.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    const hash = `#projet-${slug}`;
    if (push && location.hash !== hash) {
        history.pushState({ project: slug }, '', hash);
        projectPushed = true;
    } else if (!push && location.hash !== hash) {
        history.replaceState({ project: slug }, '', hash);
    }
}

function hideProject() {
    projectView.classList.remove('open');
    currentProject = null;
    document.body.style.overflow = '';
}

function closeProject() {
    if (projectPushed) {
        projectPushed = false;
        history.back();
    } else {
        hideProject();
        history.replaceState(null, '', '#projets');
    }
}

projectView.addEventListener('click', e => {
    if (e.target.closest('.pv-back, .pv-close')) return closeProject();
    if (e.target.closest('.pv-open-gallery')) return openGallery(currentProject.slug, currentProject.title);
    const shot = e.target.closest('[data-index]');
    if (shot) {
        openGallery(currentProject.slug, currentProject.title);
        showGalleryImage(Number(shot.dataset.index));
        return;
    }
    const pager = e.target.closest('.pv-pager-btn');
    if (pager) openProject(pager.dataset.slug, false);
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && currentProject && !e.defaultPrevented) closeProject();
});

window.addEventListener('popstate', () => {
    const match = location.hash.match(/^#projet-(.+)$/);
    if (match) {
        openProject(match[1], false);
    } else if (currentProject) {
        projectPushed = false;
        hideProject();
    }
});

const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

const initialProject = location.hash.match(/^#projet-(.+)$/);
if (initialProject) openProject(initialProject[1], false);

const certificatsGrid = document.querySelector('.certificats-grid');
const certificats = projectGalleries.certificats;
if (certificatsGrid && certificats) {
    certificatsGrid.innerHTML = certificats.images.map((cert, i) => `
        <button type="button" class="certificat-card fade-in" data-index="${i}">
            <img src="${cert.thumb}" alt="${cert.caption}" loading="lazy">
            <span class="certificat-info">
                <span class="certificat-title">${cert.caption}</span>
                <span class="certificat-meta">${cert.issuer} · ${cert.date}</span>
            </span>
        </button>
    `).join('');
    certificatsGrid.querySelectorAll('.certificat-card').forEach(card => {
        observer.observe(card);
        card.addEventListener('click', () => {
            openGallery('certificats', 'Certificats Coursera');
            showGalleryImage(Number(card.dataset.index));
        });
    });
}

// Animation des icônes sociales
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Détection de la préférence de thème (pour futures améliorations)
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
console.log('Préférence thème sombre:', prefersDark.matches);

// Performance: Lazy loading des images (pour futures améliorations)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialisation des nouvelles fonctionnalités
document.addEventListener('DOMContentLoaded', () => {
    // Charger les préférences sauvegardées
    const savedLanguage = localStorage.getItem('language') || 'fr';
    
    // Appliquer la langue
    currentLanguage = savedLanguage;
    document.documentElement.setAttribute('data-lang', currentLanguage);
    changeLanguage(currentLanguage);
    
    
    
});

// Console message pour les développeurs
console.log('%c🚀 Portfolio Mehdi El khou - Développeur Web Freelance', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cSite créé avec HTML, CSS et JavaScript pur', 'color: #64748b; font-size: 12px;');
console.log('%c📧 Contact: mehdi.elkhouu@gmail.com | 📞 +212 642836100', 'color: #10b981; font-size: 12px;');
