import { useAppContext } from "@/context/app-context";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "./logout-button";
import { ThemeToggle } from "./theme-toggle";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
  const { isLoggedIn } = useAppContext();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Link 1" },
    { href: "#", label: "Link 2" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tighter flex items-center"
            >
              Mern<span className="text-primary">Starter</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-x-2">
            <ThemeToggle />
            {isLoggedIn ? (
              <LogoutButton />
            ) : (
              <Link
                className={buttonVariants({ variant: "default" })}
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-muted-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-4">Login</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
