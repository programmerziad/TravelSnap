
// <!-- Theme Configuration -->
tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#4299f0",
              "background-light": "#f6f7f8",
              "background-dark": "#101922",
              accent: "#f97316", // Slight orange accent
            },
            fontFamily: {
              display: ["Plus Jakarta Sans", "sans-serif"],
              body: ["Noto Sans", "sans-serif"],
            },
            borderRadius: {
              DEFAULT: "0.25rem",
              lg: "0.5rem",
              xl: "0.75rem",
              "2xl": "1rem",
              full: "9999px",
            },
            backgroundImage: {
              "hero-pattern":
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')",
            },
          },
        },
    };
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu");
    const closeBtn = document.getElementById("closeSidebar");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });