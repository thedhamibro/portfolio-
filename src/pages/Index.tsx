
import { ThemeToggle } from "@/components/theme-toggle";
import { NavMenu } from "@/components/nav-menu";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ThemeToggle />
      <NavMenu />
      <div className="animate-fade-in text-center">
        <span className="text-sm uppercase tracking-widest">Hello, I am</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">
          Sehajdeep Singh Dhami
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Welcome to my digital space. I create meaningful experiences through code and design.
        </p>
      </div>
    </div>
  );
};

export default Index;
