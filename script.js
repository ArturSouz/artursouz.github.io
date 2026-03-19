// script.js
// Toggle menu mobile
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href) return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Fecha o menu mobile após clicar
    if (nav && nav.classList.contains('open')) nav.classList.remove('open');
  });
});

const languageSelect = document.getElementById('languageSelect');
const metaDescription = document.getElementById('metaDescription');
const jsonLdPerson = document.getElementById('jsonLdPerson');

const skillsImprovedList = document.getElementById('skills-improved-list');
const skillsHighlightsList = document.getElementById('skills-highlights-list');
const projectsList = document.getElementById('projects-list');

const translations = {
  'pt-BR': {
    pageTitle: 'Currículo | Artur Alves Souza Silva',
    metaDescription:
      'Currículo de Artur Alves Souza Silva - Desenvolvedor Pleno e DevOps Freelancer com experiência em .NET, TypeScript, SQL, Python e AWS.',

    'nav.openMenu': 'Abrir menu',
    'nav.about': 'Perfil',
    'nav.experience': 'Experiência',
    'nav.skills': 'Aptidões',
    'nav.projects': 'Projetos',
    'nav.education': 'Educação',
    'nav.contact': 'Contato',

    'hero.subtitle': 'Desenvolvedor Pleno & DevOps Freelancer',
    'hero.cta': 'Entrar em Contato',

    'about.heading': 'Perfil',
    'about.p1':
      'Estudo e me envolvo com computação desde a adolescência. Estou sempre lendo e aprendendo novos assuntos. Participei de eventos e campeonatos de programação; desenvolvi e colaborei na organização de eventos durante o meu período na universidade; auxiliei e ensinei tópicos a amigos, colegas e calouros; trabalhei em uma iniciação científica e acompanhei o desenvolvimento de outras pesquisas; também fiz intercâmbio durante o período de um ano da graduação.',
    'about.p2':
      'Pratico comunicação efetiva e sou bastante proativo na finalização de demandas, além de detectar novas oportunidades de melhoria nos fluxos de produção de valor. Gosto de aprender assuntos técnicos e psicológicos. Sempre que posso, estou lendo, assistindo, praticando e aprimorando meus conhecimentos.',

    'experience.heading': 'Experiência',
    'experience.mid.time': '2022 – Atual',
    'experience.mid.title': 'Desenvolvedor Pleno',
    'experience.mid.desc':
      'Atuei em diferentes times, onde aprendi a diversificar meus conhecimentos para acompanhar o ambiente de desenvolvimento de uma empresa de grande escala, uma das maiores do segmento no país. Os times utilizavam Kanban, Scrum e auto-gerenciamento. As ferramentas mais utilizadas foram .NET, VB, TypeScript, SQL, TortoiseGit/GitLab, Jira, Visual Studio e Insomnia; também empregamos outras tecnologias, como C#, Python e Notion. Desenvolvi telas e endpoints, além de soluções de integração entre sistemas; atualizei ambientes de testes e de produção, validando builds e deployments; realizei code review de branches, garantindo qualidade e aderência às boas práticas; apresentei e defendi alterações em comitês de mudança; e refatorei código para otimizar performance e ajustar tipagens de variáveis e classes, entregando informações de forma mais clara e eficiente ao front-end.',

    'experience.devops1.time': '2024 – Atual',
    'experience.devops1.title': 'DevOps Freelancer',
    'experience.devops1.desc':
      'Desenvolvo, mantenho e administro um sistema para restaurantes, utilizado em um pesque-pague que recebe, em média, 700 pessoas por final de semana. Utilizo Nest.js, Next.js, Flask e Python em um Raspberry Pi 5 local. O sistema oferece cardápio, fluxo de pedidos, fluxo de caixa, quadro Kanban e outras ferramentas. Também auxilio com consultoria em eficiência de processos, desenvolvimento e informatização do estabelecimento.',

    'experience.devops2.time': '2019 – 2022',
    'experience.devops2.title': 'DevOps Freelancer',
    'experience.devops2.desc':
      'Utilizando plataformas para encontrar projetos, desenvolvi diversos sistemas para pessoas e empresas. Após entender as necessidades dos clientes, delimitamos juntos as funcionalidades e o esforço necessário. Dessa forma, criei soluções do zero, desenhei a estrutura do banco de dados, escrevi o código, realizei testes e efetuei o deploy na AWS. Refatorei a codificação e propus mudanças nos sistemas para melhorar a performance. Todo o processo foi documentado para facilitar a adaptação de novos desenvolvedores após a conclusão do projeto.',

    'skills.heading': 'Aptidões',
    'skills.intro':
      'Consigo utilizar e aprender ferramentas de desenvolvimento com facilidade, incluindo mas não se limitando a novas linguagens, frameworks e ambientes de trabalho. Já utilizei as linguagens: C, C++, C#, VB, Java, Python, PHP, Javascript, SQL, HTML e CSS. Tive contato com outras e não possuo dificuldade em aprender e utilizar.',
    'skills.improvedHeading': 'Melhorei as seguintes habilidades',
    'skills.highlightsHeading': 'Destaques',

    'projects.heading': 'Projetos',

    'education.heading': 'Educação',
    'education.school': 'Universidade Federal Rural do Rio de Janeiro',
    'education.degree': 'Ciência da Computação — Graduação',
    'education.period': '2013–2018',
    'education.langSchool': 'CCAA',
    'education.langLevel': 'Inglês Avançado',

    'contact.heading': 'Contato',
    'contact.phone': '+55 (32) 99851-2325',
    'contact.email': 'arturalvessouzasilva@icloud.com',
    'contact.address': 'Rio Doce - MG - 35442-000',

    jsonLdJobTitle: 'Desenvolvedor Pleno e DevOps Freelancer',
    jsonLdTelephone: '+55 (32) 99851-2325',
    jsonLdEmail: 'arturalvessouzasilva@icloud.com',

    skillsImproved: [
      'Manutenção de Software',
      'Testes Integrados',
      'Atualização de Sistemas',
      'Sustentação de Sistemas em Produção',
      'Code Review',
      'Troca de Stack',
      'Conceitos de Computação e Princípios de Design',
      'Propor planos de ação e soluções antes e durante o desenvolvimento',
      'Documentar o desenvolvimento e os testes',
      'GIT',
      'Comunicação clara e eficaz (escrita e verbal)',
      'Capacidade de trabalhar e colaborar em equipe',
      'Resolver problemas e pensar fora da caixa',
      'Flexibilidade e adaptabilidade a mudanças',
      'Gestão de tempo e organização'
    ],

    skillsHighlights: [
      'Planejamento e desenvolvimento de grandes funcionalidades',
      'Refatoração de código legado com redução de 60% a 70% do tempo de execução',
      'Manter, melhorar, desenvolver novas versões, acompanhar logs e outras atividades da principal API do SuperApp'
    ],

    projects: [
      { title: 'Sistema de Assinatura Digital', tech: 'Django, MySQL e AWS' },
      {
        title: 'Sistema de Rota de Compra',
        desc: 'Crawler para adquirir os valores dos produtos. Sistema que cria uma rota baseada na lista de compra do usuário.',
        tech: 'Django, MySQL e AWS'
      },
      {
        title: 'LLM para Classificação de Raio-X',
        desc: 'Classificando entre Covid, Pneumonia e Normal',
        tech: 'Python, TensorFlow, Scikit-learn, Django, MySQL e AWS'
      },
      { title: 'Sistema de Votação', desc: 'Utilizando Blockchain', tech: 'Python' }
    ]
  },

  en: {
    pageTitle: 'CV | Artur Alves Souza Silva',
    metaDescription:
      'CV of Artur Alves Souza Silva - Mid-Level Developer and DevOps Freelancer with experience in .NET, TypeScript, SQL, Python, and AWS.',

    'nav.openMenu': 'Open menu',
    'nav.about': 'Profile',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    'hero.subtitle': 'Mid-Level Developer & DevOps Freelancer',
    'hero.cta': 'Get in Touch',

    'about.heading': 'Profile',
    'about.p1':
      'I have been studying and involved with computing since my teenage years. I am constantly reading and learning new topics. I have participated in programming events and competitions; developed and collaborated in organizing events during my time at university; assisted and taught topics to friends, colleagues, and freshmen; worked on a scientific initiation project and followed the development of other research; and also participated in a one-year exchange program during my undergraduate studies.',
    'about.p2':
      'I practice effective communication and am highly proactive in completing tasks, as well as identifying new opportunities to improve value delivery processes. I enjoy learning both technical and psychological subjects. Whenever possible, I am reading, watching, practicing, and improving my knowledge.',

    'experience.heading': 'Experience',
    'experience.mid.time': '2022 - Present',
    'experience.mid.title': 'Mid-Level Developer',
    'experience.mid.desc':
      'I worked in different teams, where I learned to diversify my knowledge to adapt to the development environment of a large-scale company, one of the biggest in its field in the country. The teams used Kanban, Scrum, and self-management. The most used tools were .NET, VB, TypeScript, SQL, TortoiseGit/GitLab, Jira, Visual Studio, and Insomnia; we also employed other technologies, such as C#, Python, and Notion. I developed user interfaces and endpoints, as well as system integration solutions; updated testing and production environments, validating builds and deployments; performed code reviews of branches, ensuring quality and adherence to best practices; presented and defended changes in change management committees; and refactored code to optimize performance and adjust variable and class typings, delivering information more clearly and efficiently to the front end.',

    'experience.devops1.time': '2024 - Present',
    'experience.devops1.title': 'DevOps, Freelancer',
    'experience.devops1.desc':
      'I develop, maintain, and administer a system for restaurants, used in a pesque-pague (fishing and leisure business) that receives an average of 700 people per weekend. I use Nest.js, Next.js, Flask, and Python on a local Raspberry Pi 5. The system provides a digital menu, order flow, cash flow, Kanban board, and other tools. I also provide consulting on process efficiency, development, and digitalization of the business.',

    'experience.devops2.time': '2019 - 2022',
    'experience.devops2.title': 'DevOps, Freelancer',
    'experience.devops2.desc':
      'Through freelancing platforms, I developed several systems for individuals and companies. After understanding clients’ needs, we jointly defined the features and required effort. I then created solutions from scratch, designed the database structure, wrote the code, carried out testing, and deployed to AWS. I refactored code and proposed system changes to improve performance. The entire process was documented to facilitate the adaptation of new developers after project completion.',

    'skills.heading': 'Skills',
    'skills.intro':
      'I can easily use and learn development tools, including but not limited to new languages, frameworks, and working environments. Languages I have used: C, C++, C#, VB, Java, Python, PHP, JavaScript, SQL, HTML, and CSS. I have also had contact with other languages and do not find it difficult to learn and work with them.',
    'skills.improvedHeading': 'Improved skills',
    'skills.highlightsHeading': 'Highlights',

    'projects.heading': 'Projects',

    'education.heading': 'Education',
    'education.school': 'Federal Rural University of Rio de Janeiro',
    'education.degree': "Bachelor's in Computer Science",
    'education.period': '2013 - 2018',
    'education.langSchool': 'CCAA',
    'education.langLevel': 'Advanced English',

    'contact.heading': 'Contact',
    'contact.phone': '+55 (32) 99851-2325',
    'contact.email': 'arturalvessouzasilva@icloud.com',
    'contact.address': 'Rio Doce - MG - 35442-000',

    jsonLdJobTitle: 'Mid-Level Developer and DevOps Freelancer',
    jsonLdTelephone: '+55 (32) 99851-2325',
    jsonLdEmail: 'arturalvessouzasilva@icloud.com',

    skillsImproved: [
      'Software Maintenance',
      'Integrated Testing',
      'System Updates',
      'Production System Support',
      'Code Review',
      'Stack Switching',
      'Computer Science Concepts and Design Principles',
      'Proposing action plans and solutions before and during development',
      'Documenting development and testing',
      'GIT',
      'Clear and effective written and verbal communication',
      'Teamwork and collaboration',
      'Problem-solving and out-of-the-box thinking',
      'Flexibility and adaptability to change',
      'Time management and organization'
    ],

    skillsHighlights: [
      'Planning and developing major features',
      'Refactoring legacy code with a 60–70% reduction in execution time',
      'Maintaining, improving, developing new versions, log monitoring, and other activities of the main SuperApp API'
    ],

    projects: [
      { title: 'Digital Signature System', tech: 'Django, MySQL, AWS' },
      {
        title: 'Shopping Route System',
        desc: "Crawler to acquire product prices; system creates a route based on the user's shopping list",
        tech: 'Django, MySQL, AWS'
      },
      {
        title: 'LLM for X-Ray Classification',
        desc: 'Classifying between Covid, Pneumonia, and Normal',
        tech: 'Python, TensorFlow, Scikit-learn, Django, MySQL, AWS'
      },
      { title: 'Voting System', desc: 'Based on Blockchain', tech: 'Python' }
    ]
  }
};

function renderBullets(ul, items) {
  if (!ul) return;
  ul.innerHTML = '';
  items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  });
}

function renderProjects(ul, projects) {
  if (!ul) return;
  ul.innerHTML = '';

  projects.forEach(p => {
    const li = document.createElement('li');
    li.className = 'project-item';

    const title = document.createElement('strong');
    title.textContent = p.title;
    li.appendChild(title);

    if (p.desc) {
      const desc = document.createElement('div');
      desc.className = 'project-desc';
      desc.textContent = p.desc;
      li.appendChild(desc);
    }

    if (p.tech) {
      const tech = document.createElement('div');
      tech.className = 'project-meta';
      tech.textContent = p.tech;
      li.appendChild(tech);
    }

    ul.appendChild(li);
  });
}

function applyLanguage(lang) {
  const t = translations[lang] || translations['pt-BR'];

  if (languageSelect) languageSelect.value = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

  document.title = t.pageTitle;
  if (metaDescription) metaDescription.setAttribute('content', t.metaDescription);

  // Atualiza texto normal
  document.querySelectorAll('[data-i18n]:not([data-i18n-attr])').forEach(el => {
    const key = el.dataset.i18n;
    const val = t[key];
    if (val !== undefined) el.textContent = val;
  });

  // Atualiza atributos (ex: aria-label)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const key = el.dataset.i18n;
    const attr = el.dataset.i18nAttr;
    const val = t[key];
    if (val !== undefined && attr) el.setAttribute(attr, val);
  });

  // Atualiza href do email
  const emailLink = document.getElementById('emailLink');
  if (emailLink) emailLink.href = 'mailto:' + t['contact.email'];

  // Atualiza JSON-LD (telefone / jobTitle)
  if (jsonLdPerson) {
    try {
      const data = JSON.parse(jsonLdPerson.textContent);
      data.jobTitle = t.jsonLdJobTitle;
      data.telephone = t.jsonLdTelephone;
      data.email = t.jsonLdEmail;
      jsonLdPerson.textContent = JSON.stringify(data);
    } catch (e) {
      // Se o JSON-LD estiver com algum erro, não quebra o restante da página.
    }
  }

  renderBullets(skillsImprovedList, t.skillsImproved || []);
  renderBullets(skillsHighlightsList, t.skillsHighlights || []);
  renderProjects(projectsList, t.projects || []);
}

const storedLang = localStorage.getItem('lang');
const initialLang = storedLang === 'en' ? 'en' : 'pt-BR';
applyLanguage(initialLang);

if (languageSelect) {
  languageSelect.addEventListener('change', e => {
    const nextLang = e.target.value === 'en' ? 'en' : 'pt-BR';
    localStorage.setItem('lang', nextLang);
    applyLanguage(nextLang);
  });
}
