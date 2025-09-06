import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
// import at top
import Link from "next/link";
import {
  Scale,
  Heart,
  Users,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Shield,
  Clock,
  Lock,
  Calendar,
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  Headphones,
  MessageCircle,
  AlertTriangle,
  Info,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">JUSNOVA MENTRIA</h1>
                <p className="text-xs text-muted-foreground">Justice with care. Healing with law.</p>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#team" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Our Team
            </a>
            
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
           {/* New: Admin Portal button */}
           <Link href="/admin/login">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Admin Login</Button>
           </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Comprehensive Support Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
                Justice with Care.
                <br />
                <span className="text-primary">Healing with Law.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                JUSNOVA MENTRIA provides a comprehensive platform combining legal expertise, psychological counseling,
                and technical support to meet the unique needs of victims facing legal complications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Schedule Consultation Link */}
              <Link href="/consult">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comprehensive Support Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integrated approach combines legal expertise with mental health support to provide holistic care for
              victims and individuals facing legal challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Legal Professionals</CardTitle>
                <CardDescription>
                  Expert legal representation and guidance from experienced attorneys specializing in victim advocacy
                  and rights protection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Case evaluation and strategy</li>
                  <li>• Court representation</li>
                  <li>• Legal documentation</li>
                  <li>• Rights advocacy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Psychological Counseling</CardTitle>
                <CardDescription>
                  Professional mental health support to help victims process trauma and develop healthy coping
                  mechanisms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Individual therapy sessions</li>
                  <li>• Trauma-informed care</li>
                  <li>• Support group facilitation</li>
                  <li>• Crisis intervention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Technical Support Team</CardTitle>
                <CardDescription>
                  Dedicated technical assistance to help navigate digital platforms, documentation, and communication
                  systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Platform navigation assistance</li>
                  <li>• Digital documentation help</li>
                  <li>• Communication facilitation</li>
                  <li>• Technology accessibility</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Team Profiles */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Professional Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing compassionate, expert support across legal,
              mental health, and technical services.
            </p>
          </div>

          {/* Legal Professionals */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Legal Professionals</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="divya.jpg"
                      alt="Divyadharshini G"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Divyadharshini G, BBA.LLB(Hons)</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Scale className="w-3 h-3 mr-1" />
                      Team lead
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                  Ensuring alignment with law and mental aid. Leads with passion and guiding towards justice and companion and also works to provide care and Justice to clients.
                  </p>

                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="sanjaykumar.jpg"
                      alt="Sanjaykumar S"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Sanjaykumar S, BA.LLB(Hons)</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Operations and project manager
                    </Badge>

                  </div>
                  <p className="text-sm text-muted-foreground">
                  The strategist who keeps everything on track. Ensuring smooth coordination amd works as the pillar behind execution.                  </p>

                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="arjun.jpg"
                      alt="arjun"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Arjun B, BBA.LLB(Hons)</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Scale className="w-3 h-3 mr-1" />
                      Research and legal analyst
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                  Dives deep into cases, policies, and judgments, ensuring that our work is always backed by strong legal insights.
                  </p>
                 
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/jayanthara.jpg"
                      alt="jayanthara"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Jayathra YS, B.COM.LLB ( Hons)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Client and mental aid Manager
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                  Listens, understands, and connects clients to both legal solutions and mental support, with care and empathy.
                  </p>
                 
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/Cristina.jpg"
                      alt="Christina"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Christina Shera/ini N, BBA.LLB ( Hons)</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      Communications and connecting manager
                    </Badge>                    
                  </div>
                  <p className="text-sm text-muted-foreground">
                  Manages clients satisfaction and ensures that our message reaches the right people and confidential.
                  </p>                  
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/Shareeka.jpg"
                      alt="Shreeka"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Shreeka, BBA.LLB(Hons) </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Documentation and information officer
                    </Badge>
                   
                  </div>
                  <p className="text-sm text-muted-foreground">
                  Handles records, reports, and research archives, keeping our work clear, accessible and secure.

                  </p>
                
                </CardContent>
              </Card>


              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/adhithya.jpg"
                      alt="Aathithya Karikalan A"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Aathithya Karikalan A, BBA.LLB(Hons) </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Technical support                    </Badge>                  
                  </div>
                  <p className="text-sm text-muted-foreground">
                  Provides technical support and innovations. Ensures our presence is modern, impactful and engaging.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get the Support You Need</h2>
            <p className="text-lg text-muted-foreground">
              Reach out to our compassionate team for confidential consultation and support.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4 text-primary" />
              <span>All communications are strictly confidential and protected</span>
            </div>
          </div>

          {/* Emergency and Quick Contact */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-border bg-card border-2 border-destructive/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-2 p-3 bg-destructive/10 rounded-full w-fit">
                  <Phone className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-lg text-destructive">Emergency Crisis Line</CardTitle>
                <CardDescription>24/7 immediate crisis support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="text-2xl font-bold text-destructive">+919342656199</p>
                </div>
                <Button className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Schedule Consultation</CardTitle>
                <CardDescription>Book a confidential appointment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Next available:</p>
                  <p className="font-semibold">Today at 2:00 PM</p>
                </div>
                <Link href="/consult">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </Link>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-2 p-3 bg-secondary/10 rounded-full w-fit">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Secure Messaging</CardTitle>
                <CardDescription>Confidential communication portal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Encrypted messaging</p>
                  <p className="font-semibold">Response within 2 hours</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

         

          {/* Contact Information */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Working Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2 text-sm">
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-muted-foreground">8:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-muted-foreground">Emergency Only</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Phone Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2 text-sm">
                <div>
                  <p className="font-medium">Main Line</p>
                  <p className="text-muted-foreground">+919787001594
                  </p>
                </div>
                <div>
                  <p className="font-medium">Crisis Line</p>
                  <p className="text-muted-foreground">+919342656199 </p>
                </div>
                <div>
                  <p className="font-medium">Text Support</p>
                  <p className="text-muted-foreground">+919677215303</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Email Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2 text-sm">
                <div>
                  <p className="font-medium">General Inquiries</p>
                  <p className="text-muted-foreground">jusnovamentria@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Legal Support</p>
                  <p className="text-muted-foreground">jusnovamentria@gmail.com</p>
                </div>

              </CardContent>
            </Card>

            
          </div>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <Lock className="h-4 w-4 text-primary" />
              <span className="text-sm">All communications are encrypted and HIPAA compliant</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              JUSNOVA MENTRIA is committed to protecting your privacy and maintaining the confidentiality of all client
              information. Our secure systems ensure your personal data and communications remain protected at all
              times.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scale className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">JUSNOVA MENTRIA</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Justice with care. Healing with law. Supporting victims with comprehensive legal and mental health
                services.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Legal Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Counseling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Technical Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Crisis Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Legal Rights Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Mental Health Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support Groups
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Educational Materials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>24/7 Crisis Line</li>
                <li>General Inquiries</li>
                <li>Legal Consultations</li>
                <li>Counseling Appointments</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 JUSNOVA MENTRIA. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
