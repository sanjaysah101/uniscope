"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpen } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";
import { AuthDialog } from "@/components/auth-dialog";
import { UserMenu } from "@/components/user-menu";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 pb-6 border-b">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Uniscope</span>
          </div>

          <nav className="flex flex-col gap-4 py-6 flex-1">
            <Link
              href="/universities"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Universities
            </Link>
            <Link
              href="/compare"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Compare
            </Link>
            <Link
              href="/community"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/support"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Support
            </Link>
          </nav>

          <div className="border-t pt-6">
            {user ? (
              <div className="flex items-center gap-3">
                <UserMenu />
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.name}
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <AuthDialog>
                  <Button variant="outline" className="w-full bg-transparent">
                    Sign In
                  </Button>
                </AuthDialog>
                <AuthDialog>
                  <Button className="w-full">Get Started</Button>
                </AuthDialog>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
