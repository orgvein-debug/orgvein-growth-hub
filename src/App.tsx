<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary SEO -->
    <title>Orgvein Pvt Ltd | Business Consulting, ERP & HR Solutions</title>
    <meta name="title" content="Orgvein Pvt Ltd | Business Consulting, ERP & HR Solutions">
    <meta name="description" content="Orgvein is a leading business transformation partner in Calicut offering Management Consulting, ERP Implementation (Odoo/SAP), HR Solutions, and Corporate Training to help SMEs scale with clarity and structure.">
    <meta name="keywords" content="Business Consulting Calicut, ERP Implementation Kerala, HR Solutions, Odoo Partner India, SME Growth, Workflow Automation, Sales Systems, Corporate Training, Management Consulting">
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <meta name="author" content="Orgvein Pvt Ltd">
    <link rel="canonical" href="https://orgvein.com/">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://orgvein.com/">
    <meta property="og:title" content="Orgvein Pvt Ltd | Business Consulting, ERP & HR Solutions">
    <meta property="og:description" content="Empowering organisations to operate with clarity, structure, and seamless flow. Expert Consulting, HR, and Tech solutions.">
    <meta property="og:image" content="https://github.com/user-attachments/assets/2cfee8e1-3696-4d78-ba2c-437ee8eba33a">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://orgvein.com/">
    <meta property="twitter:title" content="Orgvein Pvt Ltd | Business Consulting, ERP & HR Solutions">
    <meta property="twitter:description" content="Empowering organisations to operate with clarity, structure, and seamless flow. Expert Consulting, HR, and Tech solutions.">
    <meta property="twitter:image" content="https://github.com/user-attachments/assets/2cfee8e1-3696-4d78-ba2c-437ee8eba33a">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="https://github.com/user-attachments/assets/2cfee8e1-3696-4d78-ba2c-437ee8eba33a">
    
    <!-- Structured Data (JSON-LD) for Rich Results -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Orgvein Pvt Ltd",
      "url": "https://orgvein.com",
      "logo": "https://github.com/user-attachments/assets/2cfee8e1-3696-4d78-ba2c-437ee8eba33a",
      "description": "Multi-disciplinary business transformation company specializing in Consulting, ERP, and HR.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tower 2, 7th Floor, Hilite Business Park",
        "addressLocality": "Calicut",
        "addressRegion": "Kerala",
        "postalCode": "673014",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9249501300",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Malayalam"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-9249501301",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": ["English", "Malayalam"]
        }
      ],
      "sameAs": [
        "https://in.linkedin.com/company/orgvein",
        "https://www.instagram.com/orgvein",
        "https://www.facebook.com/orgvein"
      ]
    }
    </script>

    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        :root {
            --brand-gold: #C5A059;
            --brand-dark: #0F2A30;
            --brand-cream: #F9F7F2;
            --brand-slate: #64748B;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--brand-cream);
            color: var(--brand-dark);
        }

        /* Color Utilities */
        .text-brand-gold { color: var(--brand-gold); }
        .bg-brand-gold { background-color: var(--brand-gold); }
        .text-brand-dark { color: var(--brand-dark); }
        .bg-brand-dark { background-color: var(--brand-dark); }
        
        /* Glass & Card Effects */
        .glass-panel {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(197, 160, 89, 0.15);
            transition: all 0.3s ease;
        }

        .hover-lift {
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: var(--brand-gold);
        }

        /* Navigation Underline Animation */
        .nav-item {
            position: relative;
        }
        .nav-item::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: var(--brand-gold);
            transition: width 0.3s ease;
        }
        .nav-item:hover::after {
            width: 100%;
        }

        /* Process Connector Line */
        .process-line {
            position: absolute;
            top: 2.5rem;
            left: 10%;
            width: 80%;
            height: 1px;
            background: linear-gradient(90deg, transparent, #C5A059, transparent);
            z-index: 0;
            opacity: 0.2;
        }

        /* Industry Tag */
        .industry-tag {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.75rem 1.5rem;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-weight: 600;
            color: white;
            transition: all 0.2s;
        }
        .industry-tag:hover {
            background: var(--brand-gold);
            border-color: var(--brand-gold);
            color: var(--brand-dark);
            transform: translateY(-2px);
        }

        /* SPA Logic Styles */
        .page-view {
            display: none;
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
        }
        .page-view.active {
            display: block;
            opacity: 1;
        }

        /* --- CINEMATIC ANIMATIONS --- */
        
        /* 1. Golden Drop */
        .hero-drop {
            position: absolute;
            left: 50%;
            top: -100px;
            width: 6px;
            height: 60px;
            background: linear-gradient(to bottom, #C5A059, #fff);
            border-radius: 50%;
            transform: translateX(-50%);
            filter: drop-shadow(0 0 10px #C5A059);
            opacity: 0;
            z-index: 5;
        }

        .hero-drop.animate {
            animation: dropFall 2s cubic-bezier(0.5, 0, 1, 1) forwards;
        }

        @keyframes dropFall {
            0% { top: 0; opacity: 1; height: 40px; }
            80% { height: 120px; opacity: 1; }
            99% { top: 92%; height: 20px; opacity: 1; width: 6px; }
            100% { top: 93%; height: 5px; width: 40px; opacity: 0; }
        }

        /* 2. Impact Glow */
        .impact-glow {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%) scale(0);
            width: 200px;
            height: 100px;
            background: radial-gradient(circle, rgba(197, 160, 89, 0.8) 0%, rgba(197, 160, 89, 0) 70%);
            border-radius: 50%;
            opacity: 0;
            z-index: 4;
        }

        .impact-glow.animate {
            animation: impactPulse 1s ease-out forwards;
        }

        @keyframes impactPulse {
            0% { transform: translateX(-50%) scale(0); opacity: 1; }
            100% { transform: translateX(-50%) scale(2); opacity: 0; }
        }

        /* 3. Growing Veins */
        .vein-svg {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            width: 100%;
            max-width: 1200px;
            z-index: 0;
            pointer-events: none;
        }

        .vein-path {
            fill: none;
            stroke: #C5A059;
            stroke-width: 4; /* Thick veins */
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            filter: drop-shadow(0 0 5px rgba(197, 160, 89, 0.6));
            opacity: 0.2;
        }

        .vein-path.animate {
            animation: veinGrow 3s ease-out forwards;
        }

        @keyframes veinGrow {
            to { stroke-dashoffset: 0; opacity: 0.4; }
        }

        /* Logo Glow Animation Trigger */
        .logo-glow {
            animation: logoPulse 2s ease-in-out infinite;
        }
        @keyframes logoPulse {
            0% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.4); border-color: #C5A059; }
            50% { box-shadow: 0 0 20px 0 rgba(197, 160, 89, 0.7); border-color: #fff; }
            100% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.4); border-color: #C5A059; }
        }

    </style>
</head>
<body class="antialiased selection:bg-[#C5A059] selection:text-white flex flex-col min-h-screen">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300" id="main-nav">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between h-24 items-center">
                <!-- Brand -->
                <a href="#" onclick="navigateTo('home')" class="flex-shrink-0 flex items-center gap-4 cursor-pointer">
                    <div id="nav-logo-container" class="relative w-14 h-14 overflow-hidden rounded-full border-2 border-[#C5A059] bg-white flex items-center justify-center shadow-sm transition-all duration-500">
                        <img src="https://github.com/user-attachments/assets/2cfee8e1-3696-4d78-ba2c-437ee8eba33a" alt="Orgvein Logo" class="w-full h-full object-cover object-center scale-[1.25]">
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="text-xl font-extrabold tracking-tight text-brand-dark leading-none uppercase">ORG<span class="text-brand-gold">VEIN</span></span>
                        <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-1">Organisation's Vein</span>
                    </div>
                </a>
                
                <!-- Desktop Links -->
                <div class="hidden md:flex items-center gap-8">
                    <button onclick="navigateTo('home')" class="nav-item text-sm font-semibold text-slate-600 hover:text-brand-dark transition-colors">Home</button>
                    <button onclick="scrollToSection('about')" class="nav-item text-sm font-semibold text-slate-600 hover:text-brand-dark transition-colors">About</button>
                    <button onclick="navigateTo('services')" class="nav-item text-sm font-semibold text-slate-600 hover:text-brand-dark transition-colors">Services</button>
                    <button onclick="scrollToSection('methodology')" class="nav-item text-sm font-semibold text-slate-600 hover:text-brand-dark transition-colors">Process</button>
                    <button onclick="scrollToSection('contact')" class="bg-brand-gold text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#b08d4b] transition-all shadow-lg shadow-[#C5A059]/30">Consult Now</button>
                </div>

                <!-- Mobile Toggle -->
                <button id="mobile-menu-button" class="md:hidden text-brand-dark p-2">
                    <i data-lucide="menu" class="w-8 h-8"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-24 shadow-xl p-8 flex flex-col gap-6">
            <button onclick="navigateTo('home'); toggleMenu()" class="text-lg font-bold text-brand-dark text-left">Home</button>
            <button onclick="scrollToSection('about'); toggleMenu()" class="text-lg font-bold text-brand-dark text-left">About</button>
            <button onclick="navigateTo('services'); toggleMenu()" class="text-lg font-bold text-brand-dark text-left">Services</button>
            <button onclick="scrollToSection('methodology'); toggleMenu()" class="text-lg font-bold text-brand-dark text-left">Process</button>
            <button onclick="scrollToSection('contact'); toggleMenu()" class="text-brand-gold font-bold text-lg text-left">Request Consultation</button>
        </div>
    </nav>

    <!-- MAIN CONTENT AREA -->
    <main class="flex-grow pt-24">
        
        <!-- HOME PAGE VIEW -->
        <div id="view-home" class="page-view active">
            <!-- Hero Section [REARRANGED: Dark Theme with Animation] -->
            <section class="relative pt-20 pb-24 lg:pt-40 lg:pb-40 overflow-hidden bg-[#0F2A30] min-h-[90vh] flex items-center">
                
                <!-- Animation Elements -->
                <div class="hero-drop" id="heroDrop"></div>
                <div class="impact-glow" id="impactGlow"></div>
                
                <!-- Background Veins SVG - Updated to match Logo Style -->
                <svg class="vein-svg" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
                    <!-- Left Main Trunk -->
                    <path class="vein-path" d="M500,800 C490,720 460,600 380,450 C320,340 280,220 250,100" stroke-width="8" />
                    
                    <!-- Right Main Trunk -->
                    <path class="vein-path" d="M500,800 C510,720 540,600 620,450 C680,340 720,220 750,100" stroke-width="8" />

                    <!-- Left Branches (Connected perfectly to trunk) -->
                    <!-- Branching off around 460,600 -->
                    <path class="vein-path" d="M460,600 C420,580 350,580 300,500" stroke-width="5" style="animation-delay: 0.4s" />
                    <!-- Branching off around 380,450 -->
                    <path class="vein-path" d="M380,450 C400,400 420,350 425,280" stroke-width="4" style="animation-delay: 0.6s" />
                    <!-- Branching off around 320,340 -->
                    <path class="vein-path" d="M320,340 C280,300 240,280 200,250" stroke-width="3" style="animation-delay: 0.7s" />
                    <!-- Sub-branch from 300,500 -->
                    <path class="vein-path" d="M300,500 C280,460 260,440 240,400" stroke-width="3" style="animation-delay: 0.8s" />

                    <!-- Right Branches (Connected perfectly to trunk) -->
                    <!-- Branching off around 540,600 -->
                    <path class="vein-path" d="M540,600 C580,580 650,580 700,500" stroke-width="5" style="animation-delay: 0.4s" />
                    <!-- Branching off around 620,450 -->
                    <path class="vein-path" d="M620,450 C600,400 580,350 575,280" stroke-width="4" style="animation-delay: 0.6s" />
                    <!-- Branching off around 680,340 -->
                    <path class="vein-path" d="M680,340 C720,300 760,280 800,250" stroke-width="3" style="animation-delay: 0.7s" />
                    <!-- Sub-branch from 700,500 -->
                    <path class="vein-path" d="M700,500 C720,460 740,440 760,400" stroke-width="3" style="animation-delay: 0.8s" />
                </svg>

                <!-- Decorative Elements -->
                <div class="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/10 blur-[100px] rounded-full translate-x-1/3 -z-10"></div>
                <div class="absolute bottom-0 left-0 w-1/3 h-2/3 bg-white/5 blur-[80px] rounded-full -translate-x-1/4 -z-10"></div>

                <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
                    <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
                        <span class="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse"></span>
                        <span class="text-xs font-bold uppercase tracking-widest text-white">Business Transformation Engine</span>
                    </div>
                    
                    <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] tracking-tight mb-8 drop-shadow-2xl">
                        Clarity. <span class="hidden md:inline mx-2"></span>
                        <span class="text-brand-gold block md:inline">Structure.</span> <span class="hidden md:inline mx-2"></span>
                        <span class="block md:inline">Flow.</span>
                    </h1>
                    
                    <p class="text-xl text-slate-300 leading-relaxed font-medium max-w-3xl mb-10">
                        Orgvein represents the essential pathways that keep a business alive—people, processes, systems, and performance. We integrate consulting, training, and technology to help you scale.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                        <button onclick="scrollToSection('contact')" class="bg-brand-gold text-brand-dark px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl shadow-[#C5A059]/20 flex items-center justify-center gap-2 text-lg">
                            Get Business Audit <i data-lucide="arrow-right" class="w-5 h-5 text-brand-dark"></i>
                        </button>
                        <button onclick="navigateTo('services')" class="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-lg">
                            Our Solutions
                        </button>
                    </div>
                </div>
            </section>

            <!-- About Section [Light Theme] -->
            <section id="about" class="py-24 bg-white relative">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="grid lg:grid-cols-12 gap-16">
                        <div class="lg:col-span-5 space-y-10">
                            <div>
                                <span class="text-brand-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Identity</span>
                                <h2 class="text-4xl font-extrabold text-brand-dark mb-6">Organisation + Vein</h2>
                                <p class="text-slate-600 leading-relaxed mb-6">
                                    Orgvein represents the essential pathways that keep a business alive and thriving—its people, processes, systems, and performance. We are your organisation’s flow partner.
                                </p>
                            </div>
                        </div>
                        <div class="lg:col-span-7 grid gap-6 content-center">
                            <div class="bg-brand-dark text-white p-10 rounded-[2.5rem] relative overflow-hidden shadow-xl">
                                <h3 class="text-2xl font-bold mb-4 flex items-center gap-3"><i data-lucide="eye" class="text-brand-gold"></i> Vision</h3>
                                <p class="text-slate-300 font-medium text-lg leading-relaxed">To be India’s most trusted growth partner for businesses.</p>
                            </div>
                            <div class="bg-[#F9F7F2] p-10 rounded-[2.5rem] border border-[#C5A059]/10">
                                <h3 class="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-3"><i data-lucide="target" class="text-brand-gold"></i> Mission</h3>
                                <p class="text-slate-600 font-medium leading-relaxed">To empower organisations with structured consulting and transformative training that streamline operations, build a skilled workforce, and enable sustainable growth through technology-driven ERP systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services Preview Section (8 Pillars) [Cream Theme] -->
            <section class="py-32 bg-[#F9F7F2]">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="text-center max-w-3xl mx-auto mb-20">
                        <span class="text-brand-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 block">What We Do</span>
                        <h2 class="text-4xl lg:text-5xl font-extrabold text-brand-dark">8 Pillars of Transformation</h2>
                        <p class="text-slate-500 mt-4">We deliver end-to-end organisational solutions designed for growth.</p>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- Service Cards -->
                        <div onclick="showServiceDetail('consulting')" class="glass-panel p-8 rounded-3xl cursor-pointer hover-lift group bg-white">
                            <div class="w-12 h-12 bg-amber-100 text-brand-dark rounded-xl flex items-center justify-center mb-6"><i data-lucide="briefcase" class="w-6 h-6"></i></div>
                            <h3 class="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">Consulting Services</h3>
                            <p class="text-xs text-slate-500 uppercase tracking-widest font-bold">Business Engineering</p>
                        </div>
                        <div onclick="showServiceDetail('hr')" class="glass-panel p-8 rounded-3xl cursor-pointer hover-lift group bg-white">
                            <div class="w-12 h-12 bg-teal-100 text-teal-800 rounded-xl flex items-center justify-center mb-6"><i data-lucide="users" class="w-6 h-6"></i></div>
                            <h3 class="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">HR & Workforce</h3>
                            <p class="text-xs text-slate-500 uppercase tracking-widest font-bold">Workforce Engineering</p>
                        </div>
                        <div onclick="showServiceDetail('finance')" class="glass-panel p-8 rounded-3xl cursor-pointer hover-lift group bg-white">
                            <div class="w-12 h-12 bg-slate-200 text-slate-800 rounded-xl flex items-center justify-center mb-6"><i data-lucide="pie-chart" class="w-6 h-6"></i></div>
                            <h3 class="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">Financial Governance</h3>
                            <p class="text-xs text-slate-500 uppercase tracking-widest font-bold">Accounts & Control</p>
                        </div>
                        <div onclick="showServiceDetail('ops')" class="glass-panel p-8 rounded-3xl cursor-pointer hover-lift group bg-white">
                            <div class="w-12 h-12 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mb-6"><i data-lucide="settings" class="w-6 h-6"></i></div>
                            <h3 class="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">Operations Mgmt</h3>
                            <p class="text-xs text-slate-500 uppercase tracking-widest font-bold">Execution Engineering</p>
                        </div>
                        <div onclick="showServiceDetail('sales')" class="glass-panel p-8 rounded-3xl cursor-pointer hover-lift group bg-white">
                            <div class="w-12 h-12 bg-rose-100 text-rose-800 rounded-xl flex items-center justify-center mb-6"><i data-lucide="trending-up" class="w-6 h-6"></i></div>
                            <h3 class="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">Sales Systems</h3>
                            <p class="text-xs text-slate-500 uppercase tracking-widest font-bold">Revenue Engineering</p>
                        </div>
                        <div onclick="showServiceDetail('marketing')" class="glass-panel p-8 rounded-3xl cursor-pointer hover-lift group bg-white">
                            <div class="w-12 h-12 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center mb-6"><i data-lucide="megaphone" class="w-6 h-6"></i></div>
                            <h3 class="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">Marketing Systems</h3>
                            <p class="text-xs text-slate-500 uppercase tracking-widest font-bold">Demand Generation</p>
                        </div>
                        <div onclick="showServiceDetail('tech')" class="bg-brand-dark p-8 rounded-3xl cursor-pointer hover-lift group text-white">
                            <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6"><i data-lucide="database" class="w-6 h-6"></i></div>
                            <h3 class="text-lg font-bold mb-2 group-hover:text-brand-gold transition-colors">IT & Tech Solutions</h3>
                            <p class="text-xs text-slate-400 uppercase tracking-widest font-bold">Operational Backbone</p>
                        </div>
                        <div onclick="showServiceDetail('training')" class="bg-brand-gold p-8 rounded-3xl cursor-pointer hover-lift group text-white">
                            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6"><i data-lucide="graduation-cap" class="w-6 h-6"></i></div>
                            <h3 class="text-lg font-bold mb-2 text-brand-dark">Training & Dev</h3>
                            <p class="text-xs text-brand-dark/70 uppercase tracking-widest font-bold">Orgvein Academy</p>
                        </div>
                    </div>
                    
                    <div class="text-center mt-12">
                        <button onclick="navigateTo('services')" class="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-gold transition-colors">
                            View Detailed Service Catalog <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            </section>

            <!-- Methodology Section (The 7 Ds) [REARRANGED: White Theme] -->
            <section id="methodology" class="py-32 bg-white relative overflow-hidden">
                <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div class="text-center mb-24">
                        <span class="text-brand-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Process</span>
                        <h2 class="text-4xl lg:text-6xl font-extrabold leading-tight text-brand-dark">The 7-D Framework</h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- Cards are now clean slate-50/white with shadow -->
                        <div class="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:border-brand-gold transition-all shadow-sm hover:shadow-lg group">
                            <div class="text-brand-dark/20 font-black text-4xl mb-4 group-hover:text-brand-gold transition-colors">01</div>
                            <h4 class="text-xl font-bold mb-3 text-brand-dark">Diagnose</h4>
                            <p class="text-sm text-slate-500 font-medium">We analyse your current systems, people, processes, and workflows.</p>
                        </div>
                        <div class="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:border-brand-gold transition-all shadow-sm hover:shadow-lg group">
                            <div class="text-brand-dark/20 font-black text-4xl mb-4 group-hover:text-brand-gold transition-colors">02</div>
                            <h4 class="text-xl font-bold mb-3 text-brand-dark">Design</h4>
                            <p class="text-sm text-slate-500 font-medium">We craft structured frameworks, SOPs, strategies, and system flows.</p>
                        </div>
                        <div class="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:border-brand-gold transition-all shadow-sm hover:shadow-lg group">
                            <div class="text-brand-dark/20 font-black text-4xl mb-4 group-hover:text-brand-gold transition-colors">03</div>
                            <h4 class="text-xl font-bold mb-3 text-brand-dark">Develop</h4>
                            <p class="text-sm text-slate-500 font-medium">We train teams, build capability, and ensure adoption.</p>
                        </div>
                        <div class="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:border-brand-gold transition-all shadow-sm hover:shadow-lg group">
                            <div class="text-brand-dark/20 font-black text-4xl mb-4 group-hover:text-brand-gold transition-colors">04</div>
                            <h4 class="text-xl font-bold mb-3 text-brand-dark">Deploy</h4>
                            <p class="text-sm text-slate-500 font-medium">We implement solutions across departments with hands-on support.</p>
                        </div>
                        <div class="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:border-brand-gold transition-all shadow-sm hover:shadow-lg group">
                            <div class="text-brand-dark/20 font-black text-4xl mb-4 group-hover:text-brand-gold transition-colors">05</div>
                            <h4 class="text-xl font-bold mb-3 text-brand-dark">Direct</h4>
                            <p class="text-sm text-slate-500 font-medium">We Direct and manage team or individuals also provide decision making support.</p>
                        </div>
                        <div class="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:border-brand-gold transition-all shadow-sm hover:shadow-lg group">
                            <div class="text-brand-dark/20 font-black text-4xl mb-4 group-hover:text-brand-gold transition-colors">06</div>
                            <h4 class="text-xl font-bold mb-3 text-brand-dark">Drive</h4>
                            <p class="text-sm text-slate-500 font-medium">We track performance, optimise systems, and enable long-term scalability.</p>
                        </div>
                        <div class="lg:col-span-2 bg-brand-dark p-8 rounded-[2rem] text-white flex flex-col justify-center relative overflow-hidden group">
                            <div class="absolute -right-10 -top-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-all"></div>
                            <div class="text-brand-gold font-black text-4xl mb-4">07</div>
                            <h4 class="text-2xl font-bold mb-3 text-white">Deconstruct</h4>
                            <p class="text-slate-300 font-medium">Reconstruct the full above 6 steps if any changes comes in the design.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Industries Section [REARRANGED: Dark Theme] -->
            <section id="industries" class="py-24 bg-[#0F2A30]">
                <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <span class="text-brand-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Sectors</span>
                    <h2 class="text-4xl font-extrabold text-white mb-12">Industries We Serve</h2>
                    
                    <div class="flex flex-wrap justify-center gap-4">
                        <span class="industry-tag">Startups</span>
                        <span class="industry-tag">SMEs</span>
                        <span class="industry-tag">Retail & E-commerce</span>
                        <span class="industry-tag">Manufacturing</span>
                        <span class="industry-tag">Real Estate</span>
                        <span class="industry-tag">Education & Training</span>
                        <span class="industry-tag">Services & Agencies</span>
                        <span class="industry-tag">Healthcare & Wellness</span>
                    </div>
                </div>
            </section>
        </div>

        <!-- SERVICES FULL PAGE VIEW -->
        <div id="view-services" class="page-view">
            <!-- Header also Dark for consistency -->
            <div class="bg-[#0F2A30] text-white pt-32 pb-20">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 class="text-5xl font-black mb-6">Service Catalog</h1>
                    <p class="text-xl text-slate-300 max-w-2xl">A comprehensive guide to our 8 pillars of organizational transformation. Select a pillar to view detailed service offerings.</p>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div class="grid lg:grid-cols-12 gap-8">
                    <!-- Service Sidebar -->
                    <div class="lg:col-span-3">
                        <div class="sticky top-28 space-y-2">
                            <button onclick="scrollToService('service-consulting')" class="block w-full text-left px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-white transition-colors font-bold text-brand-dark">Consulting</button>
                            <button onclick="scrollToService('service-hr')" class="block w-full text-left px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-white transition-colors font-bold text-brand-dark">HR & Workforce</button>
                            <button onclick="scrollToService('service-finance')" class="block w-full text-left px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-white transition-colors font-bold text-brand-dark">Financial Gov</button>
                            <button onclick="scrollToService('service-ops')" class="block w-full text-left px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-white transition-colors font-bold text-brand-dark">Operations</button>
                            <button onclick="scrollToService('service-sales')" class="block w-full text-left px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-white transition-colors font-bold text-brand-dark">Sales Systems</button>
                            <button onclick="scrollToService('service-marketing')" class="block w-full text-left px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-white transition-colors font-bold text-brand-dark">Marketing</button>
                            <button onclick="scrollToService('service-tech')" class="block w-full text-left px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-white transition-colors font-bold text-brand-dark">IT & Tech</button>
                            <button onclick="scrollToService('service-training')" class="block w-full text-left px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-white transition-colors font-bold text-brand-dark">Training</button>
                        </div>
                    </div>

                    <!-- Service Details -->
                    <div class="lg:col-span-9 space-y-16">
                        <!-- Pillar 1 -->
                        <div id="service-consulting" class="scroll-mt-32">
                            <span class="text-brand-gold font-bold tracking-widest text-xs uppercase">Pillar 1</span>
                            <h2 class="text-3xl font-black text-brand-dark mb-2">Consulting Services</h2>
                            <p class="text-lg text-slate-500 mb-6 italic">Business Engineering: Diagnose, design, and govern how a business operates.</p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Comprehensive business diagnosis & operational audits</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Structural gap & failure-point analysis</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Strategic roadmap development (1-year / 3-year)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> KPI framework & governance cadence design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Market positioning & go-to-market strategy</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> New market / product entry strategy</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Investor & fundraising readiness</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Franchise & replication model design</li>
                                </ul>
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Organizational restructuring & governance architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> JD & KRA engineering (strategic level)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Change management design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Corporate governance frameworks</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Virtual CXO services (CEO / COO / CMO as a Service)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Strategic advisory board facilitation</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Crisis management & turnaround advisory</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Pillar 2 -->
                        <div id="service-hr" class="scroll-mt-32 pt-8 border-t border-slate-100">
                            <span class="text-brand-gold font-bold tracking-widest text-xs uppercase">Pillar 2</span>
                            <h2 class="text-3xl font-black text-brand-dark mb-2">HR & Workforce Solutions</h2>
                            <p class="text-lg text-slate-500 mb-6 italic">Workforce Engineering: Build a legally compliant, role-clear, performance-driven workforce system.</p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Statutory compliance architecture (PF, ESI, PT, labour laws)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Payroll & compensation structure design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> HR policy & documentation engineering</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Employment contracts & compliance frameworks</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Organizational role architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> JD & KRA engineering (operational level)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Performance Management System (PMS) design & rollout</li>
                                </ul>
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Structured onboarding system (30-60-90 day framework)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Recruitment process architecture (RPO design)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Hiring workflow & interview governance design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Culture & conduct framework design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Grievance redressal & POSH framework</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Workforce compliance audits</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Pillar 3 -->
                        <div id="service-finance" class="scroll-mt-32 pt-8 border-t border-slate-100">
                            <span class="text-brand-gold font-bold tracking-widest text-xs uppercase">Pillar 3</span>
                            <h2 class="text-3xl font-black text-brand-dark mb-2">Accounts & Financial Governance</h2>
                            <p class="text-lg text-slate-500 mb-6 italic">Financial Engineering: Give founders absolute financial visibility, control, and compliance.</p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Chart of Accounts (COA) & accounting architecture design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Opening balance & historical data correction</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Full-cycle bookkeeping (AR / AP / GL)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> GST, TDS & statutory filing management</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Internal control & payment approval architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> MIS reporting & BI dashboards</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Cash-flow & working capital control</li>
                                </ul>
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Costing & profitability analysis</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> FP&A, budgeting & forecasting</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Financial modeling & scenario planning</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Audit readiness & audit coordination</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Tax planning & compliance advisory</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Business valuation support</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Pillar 4 -->
                        <div id="service-ops" class="scroll-mt-32 pt-8 border-t border-slate-100">
                            <span class="text-brand-gold font-bold tracking-widest text-xs uppercase">Pillar 4</span>
                            <h2 class="text-3xl font-black text-brand-dark mb-2">Operations Management</h2>
                            <p class="text-lg text-slate-500 mb-6 italic">Execution Engineering: Eliminate execution chaos and build scalable operating workflows.</p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Process mapping & bottleneck analysis</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> SOP design & documentation</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Workflow redesign & optimization</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Task orchestration & dependency mapping</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Capacity & load planning</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Accountability & RACI architecture</li>
                                </ul>
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Execution governance frameworks</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Risk & failure-mode architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Contingency & incident response design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Vendor governance & contract frameworks</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Performance standards & SLA design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Execution monitoring & audit systems</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Pillar 5 -->
                        <div id="service-sales" class="scroll-mt-32 pt-8 border-t border-slate-100">
                            <span class="text-brand-gold font-bold tracking-widest text-xs uppercase">Pillar 5</span>
                            <h2 class="text-3xl font-black text-brand-dark mb-2">Sales Systems & Enablement</h2>
                            <p class="text-lg text-slate-500 mb-6 italic">Revenue Engineering: Build a predictable, CRM-driven, founder-independent sales engine.</p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Sales funnel & pipeline architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Lead capture & qualification framework</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> MQL / SQL scoring models</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> CRM architecture & deployment (Odoo / Zoho / HubSpot)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Sales process & stage-exit condition design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Sales playbooks & call-flow frameworks</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Objection-handling & negotiation scripts</li>
                                </ul>
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Pricing & quotation control frameworks</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Deal approval & authority matrices</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Sales dashboards & performance analytics</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Call monitoring & quality audit systems</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Sales training & enablement programs</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Channel partner & affiliate program design</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Pillar 6 -->
                        <div id="service-marketing" class="scroll-mt-32 pt-8 border-t border-slate-100">
                            <span class="text-brand-gold font-bold tracking-widest text-xs uppercase">Pillar 6</span>
                            <h2 class="text-3xl font-black text-brand-dark mb-2">Marketing Systems</h2>
                            <p class="text-lg text-slate-500 mb-6 italic">Demand Generation: Engineer predictable demand and enforce ROI discipline.</p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Brand narrative & positioning architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Messaging & tone-of-voice frameworks</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Audience segmentation & ICP design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Funnel & campaign architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Content strategy framework</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Lead magnet & landing page systems</li>
                                </ul>
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Odoo marketing automation architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Lead nurturing workflows</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Attribution modeling & ROI analytics</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Campaign performance dashboards</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Lead quality scoring & audits</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Sales–marketing handoff governance</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Pillar 7 -->
                        <div id="service-tech" class="scroll-mt-32 pt-8 border-t border-slate-100">
                            <span class="text-brand-gold font-bold tracking-widest text-xs uppercase">Pillar 7</span>
                            <h2 class="text-3xl font-black text-brand-dark mb-2">IT & Technology Solutions</h2>
                            <p class="text-lg text-slate-500 mb-6 italic">Operational Backbone: Build a stable, auditable digital infrastructure that runs the business.</p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Odoo ERP implementation & customization</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Business process digitization</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> CRM, HRMS, Accounting system deployment</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Workflow automation & rule engines</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> System integration & API architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Data model & master-data design</li>
                                </ul>
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Role, access & security architecture</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Reporting & BI dashboard systems</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Automation opportunity mapping</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> AI use-case design & implementation</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Infrastructure & cloud architecture (AWS / Azure / GCP)</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> DevOps & CI/CD pipeline design</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Pillar 8 -->
                        <div id="service-training" class="scroll-mt-32 pt-8 border-t border-slate-100">
                            <span class="text-brand-gold font-bold tracking-widest text-xs uppercase">Pillar 8</span>
                            <h2 class="text-3xl font-black text-brand-dark mb-2">Training & Development</h2>
                            <p class="text-lg text-slate-500 mb-6 italic">Orgvein Academy: Build workforce capability to run engineered systems.</p>
                            <div class="grid md:grid-cols-2 gap-4">
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> ERP & CRM adoption training</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Sales process & playbook training</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Leadership & governance training</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Process & SOP training</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Compliance & finance training</li>
                                </ul>
                                <ul class="space-y-3 text-sm font-medium text-slate-700">
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Performance management training</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Orgvein system onboarding</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Client workforce readiness programs</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Custom curriculum design</li>
                                    <li class="flex gap-3"><i data-lucide="check" class="w-4 h-4 text-brand-gold flex-shrink-0"></i> Certification programs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CONTACT SECTION (Footer Area) [Cream Theme] -->
        <section id="contact" class="py-32 bg-[#F9F7F2] border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-20 lg:gap-28">
                    <div>
                        <span class="text-brand-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Reach Out</span>
                        <h2 class="text-5xl font-extrabold text-brand-dark mb-12 leading-tight">Strengthen your organizational veins today.</h2>
                        <div class="space-y-12">
                            <!-- Phones -->
                            <div class="flex gap-8 group">
                                <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm"><i data-lucide="phone" class="w-8 h-8"></i></div>
                                <div class="flex-grow">
                                    <h4 class="font-bold text-brand-dark text-xl mb-4">Consultation Lines</h4>
                                    <div class="grid sm:grid-cols-2 gap-4">
                                        <a href="tel:+919249501300" class="flex flex-col p-5 border border-slate-200 rounded-2xl hover:border-brand-gold transition-all group/link bg-white">
                                            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Growth Inquiry</span>
                                            <span class="text-lg font-black text-brand-dark group-hover/link:text-brand-gold">+91 9249 501 300</span>
                                        </a>
                                        <a href="tel:+919249501301" class="flex flex-col p-5 border border-slate-200 rounded-2xl hover:border-brand-gold transition-all group/link bg-white">
                                            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Business Support</span>
                                            <span class="text-lg font-black text-brand-dark group-hover/link:text-brand-gold">+91 9249 501 301</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- Email -->
                            <div class="flex gap-8 group">
                                <div class="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg"><i data-lucide="mail" class="w-8 h-8"></i></div>
                                <div class="flex flex-col justify-center">
                                    <span class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">General Enquiries</span>
                                    <div class="flex flex-col">
                                        <a href="mailto:hello@orgvein.com" class="text-xl font-black text-brand-dark hover:text-brand-gold transition-colors">hello@orgvein.com</a>
                                        <a href="mailto:info@orgvein.com" class="text-xl font-black text-brand-dark hover:text-brand-gold transition-colors">info@orgvein.com</a>
                                    </div>
                                </div>
                            </div>
                            <!-- Office -->
                            <div class="flex gap-8 group pt-6 border-t border-slate-200">
                                <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm"><i data-lucide="map-pin" class="w-8 h-8"></i></div>
                                <div>
                                    <h4 class="font-bold text-brand-dark text-xl mb-6">Our Offices </h4>
                                    <ul class="grid gap-6">
                                        <li class="flex items-start gap-4 text-slate-600">
                                            <div class="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div> 
                                            <div>
                                                <strong class="block text-brand-dark mb-1">Hilite City</strong>
                                                <span class="text-sm font-medium leading-relaxed">
                                                    2715-C, 7th Floor, Tower 2,<br>
                                                    Hilite Business Park, Calicut - 673014
                                                </span>
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-4 text-slate-600">
                                            <div class="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div> 
                                            <div>
                                                <strong class="block text-brand-dark mb-1">Lulu Mall</strong>
                                                <span class="text-sm font-medium leading-relaxed">
                                                    35/2659A, Near Lulu Mall,<br>
                                                    Calicut - 673007
                                                </span>
                                            </div>
                                        </li>
                                        <li class="flex items-start gap-4 text-slate-600">
                                            <div class="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div> 
                                            <div>
                                                <strong class="block text-brand-dark mb-1">Karanthur</strong>
                                                <span class="text-sm font-medium leading-relaxed">
                                                    20/292A, 9 Blue Moon,<br>
                                                    Karanthur, Calicut - 673571
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-10 lg:p-12 rounded-[3rem] border border-[#C5A059]/10 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                        <!-- Decorative Element -->
                        <div class="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -z-0"></div>
                        
                        <form class="space-y-5 relative z-10">
                            <div class="mb-2">
                                <h3 class="text-3xl font-black text-brand-dark leading-tight">Schedule Diagnostic</h3>
                                <p class="text-sm text-slate-500 font-medium mt-1">Book a free strategy session with our experts.</p>
                            </div>
                            
                            <!-- Name (Full Width) -->
                            <div class="space-y-1.5">
                                <label class="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                <input type="text" placeholder="Your Name" class="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all font-bold text-brand-dark shadow-sm">
                            </div>

                            <!-- Phone & Email (Grid) -->
                            <div class="grid md:grid-cols-2 gap-5">
                                <div class="space-y-1.5">
                                    <label class="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                                    <input type="tel" placeholder="+91 ..." class="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all font-bold text-brand-dark shadow-sm">
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                                    <input type="email" placeholder="email@company.com" class="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all font-bold text-brand-dark shadow-sm">
                                </div>
                            </div>

                            <!-- Service Interest (Full Width) -->
                            <div class="space-y-1.5">
                                <label class="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Area of Interest</label>
                                <div class="relative">
                                    <select class="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-brand-gold focus:bg-white outline-none font-bold text-brand-dark appearance-none cursor-pointer shadow-sm">
                                        <option value="" disabled selected>Select a Service...</option>
                                        <option>Business Consulting & Strategy</option>
                                        <option>HR & Workforce Solutions</option>
                                        <option>Accounts & Financial Governance</option>
                                        <option>Operations Management</option>
                                        <option>Sales Systems & Enablement</option>
                                        <option>Marketing Systems & Demand Gen</option>
                                        <option>IT & Technology Solutions</option>
                                        <option>Training & Development</option>
                                    </select>
                                    <i data-lucide="chevron-down" class="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"></i>
                                </div>
                            </div>

                            <!-- Message (New to fill space) -->
                            <div class="space-y-1.5">
                                <label class="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Message (Optional)</label>
                                <textarea rows="3" placeholder="Tell us briefly about your requirements..." class="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all font-bold text-brand-dark resize-none shadow-sm"></textarea>
                            </div>
                            
                            <button class="w-full py-5 bg-brand-dark text-brand-gold rounded-2xl font-black text-lg hover:bg-[#1a3e45] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group transform hover:-translate-y-0.5">
                                <span>Get Started</span> <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                            </button>

                            <p class="text-center text-[10px] font-bold text-slate-400 uppercase tracking-wide pt-1">
                                <i data-lucide="lock" class="w-3 h-3 inline-block mr-1 mb-0.5"></i> Your details are strictly confidential.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- Footer [Dark Theme] -->
    <footer class="bg-brand-dark text-slate-400 py-20 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-1 md:col-span-2 space-y-8">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold flex items-center justify-center bg-white flex-shrink-0">
                            <img src="https://github.com/user-attachments/assets/2cfee8e1-3696-4d78-ba2c-437ee8eba33a" alt="Logo" class="w-full h-full object-cover object-center scale-[1.25]">
                        </div>
                        <div class="flex flex-col">
                            <span class="text-3xl font-extrabold text-white tracking-tight uppercase leading-none">ORG<span class="text-brand-gold">VEIN</span></span>
                            <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-2">Organisation's Vein</span>
                        </div>
                    </div>
                    <p class="max-w-sm text-sm font-medium leading-relaxed">Orgvein is a multi-disciplinary business transformation company. We help organisations build skilled teams and scalable systems.</p>
                </div>
                <div>
                    <h5 class="text-white font-bold uppercase text-xs tracking-widest mb-8">Navigation</h5>
                    <ul class="space-y-4 text-sm font-bold">
                        <li><button onclick="scrollToSection('about')" class="hover:text-brand-gold transition-colors text-left">About Us</button></li>
                        <li><button onclick="navigateTo('services')" class="hover:text-brand-gold transition-colors text-left">What We Do</button></li>
                        <li><button onclick="scrollToSection('methodology')" class="hover:text-brand-gold transition-colors text-left">Our Process</button></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-bold uppercase text-xs tracking-widest mb-8">Connect</h5>
                    <div class="flex gap-4">
                        <a href="https://in.linkedin.com/company/orgvein" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
                        <a href="https://www.instagram.com/orgvein" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all"><i data-lucide="instagram" class="w-5 h-5"></i></a>
                        <a href="https://www.facebook.com/orgvein" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all"><i data-lucide="facebook" class="w-5 h-5"></i></a>
                    </div>
                </div>
            </div>
            <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-600">
                <span>&copy; <span id="year"></span> Orgvein Pvt Ltd. All Rights Reserved.</span>
                <div class="flex gap-8 mt-4 md:mt-0">
                    <a href="#" class="hover:text-brand-gold">Privacy Policy</a>
                    <a href="#" class="hover:text-brand-gold">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        lucide.createIcons();
        document.getElementById('year').textContent = new Date().getFullYear();
        
        const btn = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');
        
        function toggleMenu() {
            menu.classList.toggle('hidden');
        }
        
        btn.addEventListener('click', toggleMenu);

        // --- Single Page App Router Logic ---
        
        function navigateTo(viewId) {
            // Hide all views
            document.querySelectorAll('.page-view').forEach(view => {
                view.classList.remove('active');
            });
            
            // Show requested view
            const target = document.getElementById('view-' + viewId);
            if (target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            }
        }

        function scrollToSection(sectionId) {
            // Ensure we are on home view first
            navigateTo('home');
            
            // Wait for render then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if(element) {
                    element.scrollIntoView({behavior: 'smooth'});
                }
            }, 100);
        }

        function showServiceDetail(serviceId) {
            navigateTo('services');
            setTimeout(() => {
                scrollToService('service-' + serviceId);
            }, 100);
        }

        function scrollToService(serviceId) {
            const element = document.getElementById(serviceId);
            if(element) {
                const offset = 120; // sticky header offset
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }

        // Initialize default view
        navigateTo('home');

        // --- Cinematic Animation Sequencing ---
        
        document.addEventListener('DOMContentLoaded', () => {
            const drop = document.getElementById('heroDrop');
            const glow = document.getElementById('impactGlow');
            const veins = document.querySelectorAll('.vein-path');
            const logo = document.getElementById('nav-logo-container');

            // 1. Start Drop Animation
            setTimeout(() => {
                drop.classList.add('animate');
            }, 500); // Small delay on load

            // 2. Trigger Impact & Veins when Drop finishes (approx 2s)
            setTimeout(() => {
                glow.classList.add('animate');
                veins.forEach(vein => vein.classList.add('animate'));
            }, 2000); // 500ms delay + 1.5s drop duration (approx sync)

            // 3. Trigger Logo Pulse when Veins finish (approx 2s + 3s growth)
            setTimeout(() => {
                logo.classList.add('logo-glow');
            }, 5000); 
        });

    </script>
</body>
</html>
