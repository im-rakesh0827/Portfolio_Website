function projects() {
  return {
    dark: false,
    scrolled: false,
    mobileMenu: false,
    filter: 'all',

    // Project category filters
    filterOptions: [
      { value: 'all', label: 'All Projects' },
      { value: 'enterprise', label: 'Enterprise Apps' },
      { value: 'saas', label: 'SaaS Applications' },
      { value: 'ecommerce', label: 'E-Commerce' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'agriculture', label: 'Agriculture' }
    ],

    // Portfolio projects
    allProjects: [
      {
        id: 1,
        title: 'Blood Bank Management System',
        category: 'healthcare',
        categoryLabel: 'Healthcare',
        tags: [
          'Healthcare',
          'ASP.NET Core Web API',
          'Blazor WebAssembly',
          'Entity Framework Core',
          'SQL Server',
          'JWT'
        ],
        year: '2024',
        desc: 'A healthcare management application designed to streamline donor registration, blood inventory tracking, patient requests and approval workflows. Built with ASP.NET Core Web API, Blazor WebAssembly and SQL Server, following a layered architecture with authentication and authorization.',
        img: 'assets/images/BloodBank.png',
        url: 'case-study.html'
      },

      {
        id: 2,
        title: 'FarmSystem',
        category: 'agriculture',
        categoryLabel: 'Agriculture',
        tags: [
          'Agriculture',
          'Angular',
          'ASP.NET Core Web API',
          'C#',
          'Dapper',
          'SQL Server'
        ],
        year: '2025',
        desc: 'A dairy farm management platform for organizing cattle records, monitoring milk production, managing inventory and generating operational reports. Developed using Angular, ASP.NET Core Web API, Dapper and SQL Server.',
        img: 'assets/images/FarmManagement.png',
        url: 'case-study.html'
      },

      {
        id: 3,
        title: 'The Divine Taste',
        category: 'ecommerce',
        categoryLabel: 'E-Commerce',
        tags: [
          'E-Commerce',
          'Angular',
          'ASP.NET Core Web API',
          'C#',
          'Dapper',
          'SQL Server'
        ],
        year: '2026',
        desc: 'A restaurant and online food ordering platform featuring menu management, customer authentication, order placement, order tracking and administrative workflows. Built with Angular and ASP.NET Core Web API, backed by SQL Server and Dapper.',
        img: 'assets/images/thedivinetaste2.png',
        url: 'https://thedivinetasteui.onrender.com/'
      },

      {
        id: 4,
        title: 'AI Smart Healthcare System',
        category: 'healthcare',
        categoryLabel: 'Healthcare',
        tags: [
          'Healthcare',
          '.NET',
          'Azure',
          'AI'
        ],
        year: '2026',
        desc: 'A healthcare application concept focused on organizing patient information and appointment workflows, with an emphasis on exploring AI-assisted healthcare capabilities.',
        img: 'assets/images/healthcare-system.jpg',
        url: 'case-study.html'
      },

      {
        id: 5,
        title: 'TenantVerse',
        category: 'saas',
        categoryLabel: 'SaaS Application',
        tags: [
          'SaaS Application',
          '.NET 8',
          'Blazor',
          'ASP.NET Core Web API',
          'Dapper',
          'SQL Server',
          'Razorpay'
        ],
        year: '2026',
        desc: 'A cloud-based rental property management SaaS built with .NET 8, Blazor Interactive Server and ASP.NET Core Web API. It helps property owners manage properties, units, tenants, rental invoices and payments, with automated email reminders and Razorpay subscription billing integration.',
        img: 'assets/images/TenantVerseRental.png',
        url: 'https://tenantverse.runasp.net/'
      }
    ],

    // Number of projects matching the selected filter
    get visibleCount() {
      if (this.filter === 'all') {
        return this.allProjects.length;
      }

      return this.allProjects.filter(
        project => project.category === this.filter
      ).length;
    },

    // Initialize theme, scroll state and reveal animations
    init() {
      const savedTheme = localStorage.getItem('theme');

      this.dark =
        savedTheme === 'dark' ||
        (
          !savedTheme &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        );

      // Keep the header state synchronized with scrolling
      const updateScrollState = () => {
        this.scrolled = window.scrollY > 20;
      };

      updateScrollState();

      window.addEventListener('scroll', updateScrollState, {
        passive: true
      });

      // Reveal elements when they enter the viewport
      this.$nextTick(() => {
        if (!('IntersectionObserver' in window)) {
          document.querySelectorAll('.reveal').forEach(element => {
            element.classList.add('visible');
          });

          return;
        }

        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.08,
            rootMargin: '0px 0px -30px 0px'
          }
        );

        document.querySelectorAll('.reveal').forEach(element => {
          observer.observe(element);
        });
      });
    }
  };
}

// Automatically update the footer copyright year
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
