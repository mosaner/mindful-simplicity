
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 230 21% 23%;
    --primary-foreground: 210 40% 98%;

    --secondary: 0 81% 70%;
    --secondary-foreground: 0 0% 100%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 177 55% 62%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-dm-sans;
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  .section-spacing {
    @apply py-16 md:py-24 px-4 md:px-8 lg:px-16;
  }
  
  .gradient-blob {
    background: linear-gradient(45deg, #2D3047, #FF6B6B);
    filter: blur(70px);
    opacity: 0.7;
  }
  
  .hover-card-effect {
    @apply transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px];
  }
  
  .btn-primary {
    @apply bg-studio-blue text-white py-3 px-6 rounded-md transition-all duration-300 
    hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-studio-blue focus:ring-opacity-50 
    font-medium inline-flex items-center justify-center;
  }
  
  .btn-secondary {
    @apply bg-transparent border border-studio-blue text-studio-blue py-3 px-6 rounded-md transition-all 
    duration-300 hover:bg-studio-blue hover:text-white focus:outline-none focus:ring-2 
    focus:ring-studio-blue focus:ring-opacity-50 font-medium inline-flex items-center justify-center;
  }
}
