:root {
    --primary: #0057ff; /* Salesforce / Behance Blue */
    --dark: #191919;
    --light: #f9f9f9;
    --text: #474747;
    --white: #ffffff;
    --border: #e8e8e8;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text);
    line-height: 1.6;
    scroll-behavior: smooth;
    background-color: var(--white);
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Navbar */
.navbar {
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    z-index: 1000;
    border-bottom: 1px solid var(--border);
}

.nav-container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
}

.logo {
    font-size: 24px;
    font-weight: 800;
    text-decoration: none;
    color: var(--dark);
}

.logo span { color: var(--primary); }

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    margin-left: 30px;
    font-weight: 600;
    font-size: 14px;
    transition: 0.3s;
}

.nav-links a:hover { color: var(--primary); }

/* Hero */
.hero {
    padding: 180px 0 100px;
    text-align: center;
}

.greeting {
    color: var(--primary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
}

h1 {
    font-size: 64px;
    font-weight: 800;
    color: var(--dark);
    margin: 10px 0;
}

.dynamic-text {
    font-size: 28px;
    color: #959595;
    margin-bottom: 20px;
}

.hero-desc {
    max-width: 600px;
    margin: 0 auto 30px;
    font-size: 18px;
}

/* Buttons */
.btn-primary {
    background: var(--primary);
    color: white !important;
    padding: 10px 24px;
    border-radius: 50px;
}

.btn-dark {
    background: var(--dark);
    color: white;
    padding: 15px 35px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    margin-right: 15px;
}

.btn-outline {
    border: 1px solid var(--border);
    padding: 15px 35px;
    border-radius: 50px;
    text-decoration: none;
    color: var(--dark);
    font-weight: 600;
    display: inline-block;
}

/* Sections */
.section { padding: 100px 0; }
.bg-light { background-color: var(--light); }
.section-title {
    font-size: 32px;
    font-weight: 800;
    color: var(--dark);
    margin-bottom: 50px;
}

/* Cards */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.skill-card {
    padding: 20px;
    border: 1px solid var(--border);
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
    transition: 0.3s;
}

.skill-card:hover {
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-5px);
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.project-card {
    background: var(--white);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    transition: 0.3s;
    border: 1px solid var(--border);
}

.project-card:hover { transform: translateY(-10px); }

.card-content { padding: 30px; }

.tag {
    color: var(--primary);
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
}

.project-card h4 {
    margin: 10px 0;
    font-size: 20px;
    color: var(--dark);
}

/* Certs & Badges */
.badge {
    display: inline-block;
    background: #eef4ff;
    color: var(--primary);
    padding: 5px 15px;
    border-radius: 5px;
    margin: 5px;
    font-size: 13px;
    font-weight: 600;
}

/* Footer */
.footer {
    background: var(--dark);
    color: white;
    padding: 80px 0 30px;
    text-align: center;
}

.footer h2 { font-size: 40px; margin-bottom: 20px; }

.contact-info a {
    color: white;
    margin: 0 20px;
    text-decoration: none;
    font-size: 18px;
}

.footer-bottom {
    margin-top: 60px;
    border-top: 1px solid #333;
    padding-top: 20px;
    font-size: 14px;
    color: #777;
}

.row { display: flex; gap: 50px; }
.col { flex: 1; }

@media (max-width: 768px) {
    h1 { font-size: 40px; }
    .row { flex-direction: column; }
    .nav-links { display: none; }
}
