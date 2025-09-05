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
                      src="/professional-woman-lawyer-headshot.png"
                      alt="Dr. Amanda Foster, Chief Legal Counsel"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Dr. Amanda Foster, J.D., Ph.D.</CardTitle>
                  <CardDescription>Chief Legal Counsel</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Scale className="w-3 h-3 mr-1" />
                      Constitutional Law
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Shield className="w-3 h-3 mr-1" />
                      Civil Rights
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    20+ years in constitutional and civil rights law. Former federal prosecutor with expertise in
                    complex victim compensation cases.
                  </p>
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-xs">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      Yale Law School
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/professional-lawyer-headshot.png"
                      alt="James Patterson, Immigration Attorney"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">James Patterson, J.D.</CardTitle>
                  <CardDescription>Immigration & Human Rights Attorney</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Immigration Law
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      Human Trafficking
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Specializes in immigration law and human trafficking cases. Fluent in Spanish and French with 14
                    years of advocacy experience.
                  </p>
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-xs">
                      <Award className="w-3 h-3 mr-1" />
                      Board Certified
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/professional-woman-legal-paralegal-headshot.jpg"
                      alt="Maria Santos, Victim Advocate"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Maria Santos, J.D.</CardTitle>
                  <CardDescription>Senior Victim Advocate</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Scale className="w-3 h-3 mr-1" />
                      Victim Advocacy
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      Restorative Justice
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dedicated victim advocate with expertise in restorative justice and trauma-informed legal practices.
                    10 years of direct victim support.
                  </p>
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-xs">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      Georgetown Law
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mental Health Professionals */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Mental Health Professionals</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/professional-woman-therapist-psychologist-headshot.jpg"
                      alt="Dr. Amanda Foster, Clinical Psychologist"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Dr. Amanda Foster, Ph.D.</CardTitle>
                  <CardDescription>Clinical Psychologist</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Trauma Therapy
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Shield className="w-3 h-3 mr-1" />
                      PTSD Treatment
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Specializes in trauma-informed care and PTSD treatment. 18 years of experience helping victims heal
                    and recover.
                  </p>
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-xs">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      Ph.D. Clinical Psychology
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/professional-man-counselor-therapist-headshot.jpg"
                      alt="James Wilson, Licensed Counselor"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">James Wilson, LCSW</CardTitle>
                  <CardDescription>Licensed Clinical Social Worker</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      Group Therapy
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Crisis Intervention
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Expert in crisis intervention and group therapy facilitation. Specializes in supporting survivors of
                    violence.
                  </p>
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-xs">
                      <Award className="w-3 h-3 mr-1" />
                      Licensed LCSW
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="/professional-woman-psychiatrist-doctor-headshot.jpg"
                      alt="Dr. Maria Santos, Psychiatrist"
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <CardTitle className="text-lg">Dr. Maria Santos, M.D.</CardTitle>
                  <CardDescription>Psychiatrist</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Heart className="w-3 h-3 mr-1" />
                      Medication Management
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <Shield className="w-3 h-3 mr-1" />
                      Anxiety & Depression
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Board-certified psychiatrist specializing in trauma-related mental health conditions and medication
                    management.
                  </p>
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-xs">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      M.D. Psychiatry
                    </Badge>
                  </div>
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
                  <p className="text-2xl font-bold text-destructive">1-800-CRISIS-1</p>
                  <p className="text-sm text-muted-foreground">Available 24 hours, 7 days a week</p>
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
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2 text-sm">
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-muted-foreground">8:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-muted-foreground">3:00 PM - 5:00 PM</p>
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
                  <p className="text-muted-foreground">(555) 123-HELP</p>
                </div>
                <div>
                  <p className="font-medium">Crisis Line</p>
                  <p className="text-muted-foreground">(800) CRISIS-1</p>
                </div>
                <div>
                  <p className="font-medium">Text Support</p>
                  <p className="text-muted-foreground">(555) 123-TEXT</p>
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
                  <p className="text-muted-foreground">info@jusnovamentria.org</p>
                </div>
                <div>
                  <p className="font-medium">Legal Support</p>
                  <p className="text-muted-foreground">legal@jusnovamentria.org</p>
                </div>
                <div>
                  <p className="font-medium">Counseling</p>
                  <p className="text-muted-foreground">counseling@jusnovamentria.org</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Locations</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2 text-sm">
                <div>
                  <p className="font-medium">Main Office</p>
                  <p className="text-muted-foreground">Downtown Legal Center</p>
                </div>
                <div>
                  <p className="font-medium">Satellite Offices</p>
                  <p className="text-muted-foreground">5 Community Locations</p>
                </div>
                <div>
                  <p className="font-medium">Virtual Services</p>
                  <p className="text-muted-foreground">Available Nationwide</p>
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
