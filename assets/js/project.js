function projects() {
        return {
          dark: false,
          scrolled: false,
          mobileMenu: false,
          filter: 'all',

          filterOptions: [
            { value: 'all', label: 'All' },
            { value: 'enterprise', label: 'Enterprise Apps' },
            { value: 'ecommerce', label: 'E-Commerce' },
            { value: 'healthcare', label: 'Healthcare' },
            { value: 'agriculture', label: 'Agriculture' },
          ],

          allProjects: [

            {
              id: 1,
              title: 'Blood Bank Management System',
              category: 'healthcare',
              categoryLabel: 'Healthcare',
              tags: ['ASP.NET Core', 'Blazor', 'Azure SQL'],
              year: '2024',
              desc: 'Complete blood bank management platform with donor registration, blood requests, patient management, authentication, authorization and Azure deployment.',
              img: 'assets/images/blood-bank.jpg',
              url: 'case-study.html'
            },

            {
              id: 2,
              title: 'FarmSystem',
              category: 'agriculture',
              categoryLabel: 'Agriculture',
              tags: ['Angular', 'ASP.NET Core', 'Dapper'],
              year: '2025',
              desc: 'Scalable dairy farm management system with cow tracking, inventory management, authentication, authorization and reporting.',
              img: 'assets/images/farm-system.jpg',
              url: 'case-study.html'
            },

            {
              id: 3,
              title: 'The Divine Taste',
              category: 'ecommerce',
              categoryLabel: 'E-Commerce',
              tags: ['ASP.NET Core', 'Angular', 'SQL Server'],
              year: '2026',
              desc: 'Restaurant and food ordering platform with menu management, secure authentication and order tracking.',
              img: 'assets/images/divine-taste.jpg',
              url: 'case-study.html'
            },

            {
              id: 4,
              title: 'AI Smart Healthcare System',
              category: 'healthcare',
              categoryLabel: 'Healthcare',
              tags: ['.NET', 'Azure', 'AI'],
              year: '2026',
              desc: 'Healthcare platform integrating patient records, appointments and AI-powered healthcare insights.',
              img: 'assets/images/healthcare-system.jpg',
              url: 'case-study.html'
            },
          ],

          get visibleCount() {
            if (this.filter === 'all') return this.allProjects.length;
            return this.allProjects.filter(
              p => p.category === this.filter
            ).length;
          },

          init() {
            this.dark =
              localStorage.getItem('theme') === 'dark' ||
              (!localStorage.getItem('theme') &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);

            window.addEventListener(
              'scroll',
              () => {
                this.scrolled = window.scrollY > 20;
              },
              { passive: true }
            );

            this.$nextTick(() => {
              const obs = new IntersectionObserver(
                entries => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                      obs.unobserve(entry.target);
                    }
                  });
                },
                {
                  threshold: 0.08,
                  rootMargin: '0px 0px -30px 0px'
                }
              );

              document
                .querySelectorAll('.reveal')
                .forEach(el => obs.observe(el));
            });
          }
        };
      }

      document.getElementById('year').textContent =
        new Date().getFullYear();

      document.getElementById('year').textContent = new Date().getFullYear();