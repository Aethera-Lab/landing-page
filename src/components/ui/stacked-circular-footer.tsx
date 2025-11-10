import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter, Zap, Mail } from "lucide-react"
import logo from "@/assets/atheraLogo.png";

function StackedCircularFooter() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-energy/10 p-8">
            {/*<Zap className="w-12 h-12 text-energy" />*/}
            <img
              src={logo}
            />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#solutions" className="hover:text-energy transition-colors">Solutions</a>
            <a href="#impact" className="hover:text-energy transition-colors">Impact</a>
            <a href="#technology" className="hover:text-energy transition-colors">Technology</a>
            <a href="#partners" className="hover:text-solar transition-colors">Partners</a>
            <a href="#contact" className="hover:text-solar transition-colors">Contact</a>
          </nav>
          <div className="mb-8 flex space-x-4">
            {/*<Button variant="outline" size="icon" className="rounded-full border-energy/20 hover:bg-energy/10 hover:border-energy">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>*/}
            <a
              href="https://x.com/aetheraFi" // <-- Add your Twitter profile URL here
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
            >
              <Button variant="outline" size="icon" className="rounded-full border-energy/20 hover:bg-energy/10 hover:border-energy">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
            {/*<Button variant="outline" size="icon" className="rounded-full border-solar/20 hover:bg-solar/10 hover:border-solar">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>*/}
            {/*<Button variant="outline" size="icon" className="rounded-full border-solar/20 hover:bg-solar/10 hover:border-solar">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>*/}
            <a
              href="mailto:pantomime_chapped889@simplelogin.com" // <-- Add your email address here
              aria-label="Send an email"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-energy/20 hover:bg-energy/10 hover:border-energy" // You can change the border/hover colors
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
          <div className="mb-8 w-full max-w-md">
            {/*<form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input 
                  id="email" 
                  placeholder="Stay updated on clean energy" 
                  type="email" 
                  className="rounded-full border-border bg-background/50 focus-visible:ring-energy" 
                />
              </div>
              <Button type="submit" variant="hero" className="rounded-full">
                Subscribe
              </Button>
            </form>*/}
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Aethera. Powering a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
