"use client";

import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAccessibility } from "@/components/accessibility-provider";
import { AuthDialog } from "@/components/auth-dialog";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/user-menu";

export const Header = () => {
  const { user } = useAuth();

  const { announceMessage } = useAccessibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    announceMessage(mobileMenuOpen ? "Menu closed" : "Menu opened");
  };

  return (
    <header
      className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50"
      role="banner"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            Uniscope
          </h1>
        </div>

        <nav
          className="hidden md:flex items-center gap-6"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            href="/universities"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-enhanced rounded-sm px-2 py-1"
          >
            Universities
          </Link>
          <Link
            href="/compare"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-enhanced rounded-sm px-2 py-1"
          >
            Compare
          </Link>
          <Link
            href="/community"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-enhanced rounded-sm px-2 py-1"
          >
            Community
          </Link>
          <Link
            href="/scholarships"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-enhanced rounded-sm px-2 py-1"
          >
            Scholarships
          </Link>
          <Link
            href="/analytics"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-enhanced rounded-sm px-2 py-1"
          >
            Impact
          </Link>
          <Link
            href="/support"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-enhanced rounded-sm px-2 py-1"
          >
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <UserMenu />
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <AuthDialog>
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-enhanced focus-visible:ring-enhanced bg-transparent"
                >
                  Sign In
                </Button>
              </AuthDialog>
              <AuthDialog>
                <Button
                  size="sm"
                  className="btn-enhanced focus-visible:ring-enhanced"
                >
                  Get Started
                </Button>
              </AuthDialog>
            </div>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden btn-enhanced focus-visible:ring-enhanced"
            onClick={handleMobileMenuToggle}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm animate-slide-up"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/universities"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-enhanced rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Universities
            </Link>
            <Link
              href="/compare"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-enhanced rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compare
            </Link>
            <Link
              href="/community"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-enhanced rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/scholarships"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-enhanced rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Scholarships
            </Link>
            <Link
              href="/analytics"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-enhanced rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Impact
            </Link>
            <Link
              href="/support"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:ring-enhanced rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            {!user && (
              <div className="flex flex-col gap-3 pt-4 border-t border-border sm:hidden">
                <AuthDialog>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent btn-enhanced focus-visible:ring-enhanced"
                  >
                    Sign In
                  </Button>
                </AuthDialog>
                <AuthDialog>
                  <Button className="w-full btn-enhanced focus-visible:ring-enhanced">
                    Get Started
                  </Button>
                </AuthDialog>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
