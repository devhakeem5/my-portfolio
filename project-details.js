// Project Data
const projectsData = {
    quicksouq: {
        title: 'QuickSouq',
        description: 'A comprehensive multi-vendor e-commerce marketplace application delivering a seamless shopping experience with optimized performance.',
        tech: {
            framework: 'Flutter',
            stateManagement: 'GetX'
        },
        features: [
            'Multi-vendor architecture with specialized store profiles',
            'Real-time order tracking and management system',
            'Optimized checkout flow with multiple payment integrations',
            'Advanced product filtering and search algorithms'
        ],
        folder: 'quick_souq',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
    },
    codeplus: {
        title: 'CodePlus',
        description: 'A professional educational platform featuring high-security video streaming and offline learning capabilities.',
        tech: {
            framework: 'Flutter',
            stateManagement: 'GetX',
            backend: 'Supabase'
        },
        features: [
            'Advanced video encryption with custom DRM protection',
            'Telegram Storage integration for high-speed video hosting',
            'Smart offline mode with encrypted local storage',
            'Comprehensive multi-role course management system'
        ],
        folder: 'code_plus',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        links: [
            { type: 'telegram', label: 'Telegram Channel', url: 'https://t.me/code_plus_pro/169' },
            { type: 'amazon', label: 'Amazon Appstore', url: 'https://www.amazon.in/Hakeem-Tech-Code-Plus/dp/B0G2NPFS7W' }
        ]
    },
    requestmanager: {
        title: 'Request Manager',
        description: 'A professional mobile API testing and development environment optimized for efficiency on the go.',
        tech: {
            framework: 'Flutter',
            stateManagement: 'GetX'
        },
        features: [
            'Full support for parameterized HTTP methods and custom headers',
            'Response visualization with intelligent syntax highlighting',
            'Environment variables and dynamic request history',
            'Import/Export compatibility for team collaboration'
        ],
        folder: 'request_manager',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg']
    },
    snapcut: {
        title: 'SnapCut',
        description: 'A high-performance video engine that enables frame-accurate editing without re-encoding or quality loss.',
        tech: {
            framework: 'Flutter',
            native: 'Kotlin',
            processing: 'FFmpeg'
        },
        features: [
            'Non-destructive video trimming using native system libraries',
            'Direct stream manipulation to prevent quality degradation',
            'Zero-bloat exports maintaining original metadata',
            'Ultra-low latency frame-by-frame preview'
        ],
        folder: 'snapcut',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png']
    },
    rials: {
        title: 'Rials (ريالات)',
        description: 'A secure financial management suite with direct cloud sync and multi-currency support.',
        tech: {
            framework: 'Flutter',
            stateManagement: 'GetX',
            backend: 'Supabase'
        },
        features: [
            'Phone-number based secure cloud backup system',
            'Triple-currency accounting engine (Local, SAR, USD)',
            'Dynamic report generation with custom professional branding',
            'Privacy-first design with biometric/PIN locks'
        ],
        folder: 'rials',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
        links: [
            { type: 'download', label: 'Download APK (MediaFire)', url: 'https://www.mediafire.com/file/h7wcc4m7va81wen/Rials-App-V1.0.2.apk/file' }
        ]
    },
    veryai: {
        title: 'VeryAi',
        description: 'Advanced AI verification suite for high-precision content authentication.',
        tech: {
            framework: 'Flutter',
            stateManagement: 'GetX',
            ai: 'Gemini API'
        },
        features: [
            'Sophisticated linguistic analysis for AI text detection',
            'Deep learning vision models for image authentication',
            '97% proven accuracy rate across mixed datasets',
            'Real-time verification with detailed confidence metrics'
        ],
        folder: 'very_ai',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        links: [
            { type: 'github', label: 'Source Code', url: 'https://github.com/devhakeem5/Very-Ai-App' }
        ]
    },
    mindclear: {
        title: 'MindClear',
        description: 'A deep-level digital wellbeing service that enforces focus through intelligent app lifecycle management.',
        tech: {
            framework: 'Flutter',
            native: 'Android/Kotlin',
            service: 'Accessibility Service'
        },
        features: [
            'Real-time app monitoring using system Accessibility Services',
            'Intelligent background blocking with non-intrusive overlays',
            'Scheduled focus periods and sophisticated usage limits',
            'Bypassing-proof architecture for guaranteed productivity'
        ],
        folder: 'mind_clear',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
        links: [
            { type: 'download', label: 'Download APK (MediaFire)', url: 'https://www.mediafire.com/file/enoro0c4xdk5lgd/MindClear-v1.0.1.apk/file' }
        ]
    },
    silentguard: {
        title: 'SilentGuard',
        description: 'A high-security anti-theft system that maintains control over devices without internet connectivity.',
        tech: {
            framework: 'Flutter',
            native: 'Android/Kotlin',
            api: 'SMS Retrieval & Device Admin'
        },
        features: [
            'Offline remote control via encrypted SMS command triggers',
            'Remote factory reset and location tracking without data',
            'Hardened background listeners for zero-failure reliability',
            'Secure Device Policy Manager integration'
        ],
        folder: 'silent_guard',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
    },
    mikroman: {
        title: 'MikroMan',
        description: 'An advanced network management suite for large-scale MikroTik operations.',
        tech: {
            framework: 'Flutter',
            stateManagement: 'BLoC',
            api: 'RouterOS API'
        },
        features: [
            'Automated enterprise-grade voucher generation and printing',
            'Real-time remote monitoring of multi-device network clusters',
            'Sophisticated reporting engine with deep sales analytics',
            'Direct protocol integration with RouterOS for low-level control'
        ],
        folder: 'mikro_man',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg']
    },
    securespace: {
        title: 'SecureSpace',
        description: 'A professional-grade privacy vault featuring multi-layer encryption and stealth camouflage technologies.',
        tech: {
            framework: 'Flutter',
            native: 'Kotlin',
            backend: 'Laravel (API)'
        },
        features: [
            'Advanced stealth camouflage (Timer/Note app disguise)',
            'Multi-layer AES file encryption with cloud-sync backup',
            'Low-level call recording and secure private vaulting',
            'Self-destruct security protocol for failed intrusion attempts'
        ],
        folder: 'secure_space',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', 'Screenshot_٢٠٢٦٠٢٠٤_٠٣٠١١٥.jpg']
    },
    yemenraseed: {
        title: 'Yemen Raseed (يمن رصيد)',
        description: 'A vital utility application providing real-time balance tracking for Yemeni telecom operators.',
        tech: {
            framework: 'Flutter',
            api: 'Official Yemen Mobile API',
            notifications: 'FCM / Local'
        },
        features: [
            'Direct integration with official telecom billing systems',
            'Real-time monitoring for minutes, SMS, and data quotas',
            'Smart expiry prediction with proactive notification alerts',
            'Unified interface for multiple provider balance management'
        ],
        folder: 'yemen_raseed',
        images: ['main.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        links: [
            { type: 'download', label: 'Download APK (MediaFire)', url: 'https://www.mediafire.com/file/ob7is1a8c93aa0e/Yemen-Raseed-4.0.0.apk/file?dkey=4zdwwjkqnaq&r=1415' },
            { type: 'amazon', label: 'Amazon Appstore', url: 'https://www.amazon.in/Hakeem-Tech-%D8%B1%D8%B5%D9%8A%D8%AF-Yemen-Raseed/dp/B0F82M14ZF' }
        ]
    }
};

let currentImages = [];
let currentLightboxIndex = 0;

// Get project ID from URL
function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Load project data
function loadProject() {
    const projectId = getProjectId();
    const project = projectsData[projectId];

    if (!project) {
        document.querySelector('.project-details-page .container').innerHTML = `
            <div style="text-align: center; padding: 100px 20px;">
                <h1 style="color: var(--text-primary); margin-bottom: 20px;">Project Not Found</h1>
                <a href="index.html#projects" class="btn btn-primary">Back to Projects</a>
            </div>
        `;
        return;
    }

    // Update page title
    document.title = `${project.title} | Portfolio`;

    // Populate header
    document.getElementById('projectTitle').textContent = project.title;

    // Description
    document.getElementById('projectDescription').textContent = project.description;

    // Render Tech Stack
    const techStack = document.getElementById('techStack');
    let techHtml = '';
    if (project.tech) {
        Object.entries(project.tech).forEach(([key, value]) => {
            techHtml += `
                <div class="tech-item">
                    <span>${key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span>${value}</span>
                </div>
            `;
        });
    }
    techStack.innerHTML = techHtml;

    // Render Features
    const featuresList = document.getElementById('featuresList');
    if (project.features) {
        featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
    }

    // Screenshots grid
    currentImages = project.images.map(img => `${project.folder}/${img}`);
    const grid = document.getElementById('screenshotsGrid');
    grid.innerHTML = currentImages.map((img, index) => `
        <div class="screenshot-item" onclick="openLightbox(${index})">
            <img src="${img}" alt="Screenshot ${index + 1}" loading="lazy">
            <div class="screenshot-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                </svg>
            </div>
        </div>
    `).join('');

    // Update total images count
    document.getElementById('totalImages').textContent = currentImages.length;

    // Render Links
    const linksSection = document.getElementById('projectLinksSection');
    const linksGrid = document.getElementById('projectLinks');

    if (project.links && project.links.length > 0) {
        linksSection.style.display = 'block';
        linksGrid.innerHTML = project.links.map(link => {
            let icon = '';
            switch (link.type) {
                case 'github':
                    icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
                    break;
                case 'amazon':
                    icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
                    break;
                case 'telegram':
                    icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
                    break;
                default:
                    icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
            }
            return `
                <a href="${link.url}" target="_blank" class="link-btn">
                    ${icon}
                    <span>${link.label}</span>
                </a>
            `;
        }).join('');
    } else {
        linksSection.style.display = 'none';
    }
}

// Lightbox functions
function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxImage();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) currentLightboxIndex = currentImages.length - 1;
    if (currentLightboxIndex >= currentImages.length) currentLightboxIndex = 0;
    updateLightboxImage();
}

function updateLightboxImage() {
    document.getElementById('lightboxImage').src = currentImages[currentLightboxIndex];
    document.getElementById('currentIndex').textContent = currentLightboxIndex + 1;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeLightboxImage(-1);
    if (e.key === 'ArrowRight') changeLightboxImage(1);
});

// Close lightbox on backdrop click
document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

// Mobile navigation
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Initialize
document.addEventListener('DOMContentLoaded', loadProject);
