import Link from 'next/link'
import { ArrowRight, Zap, Users, Award, CheckCircle } from 'lucide-react'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Royal Power Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              House of Engineering Solutions Provider Nationwide
            </p>
            <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
              Driven by engineers who are presumed in their fields. Quality,
              innovation, and expertise in the power sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/service"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all hover:scale-105"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Response</h3>
              <p className="text-muted-foreground">
                Quick and efficient solutions to meet your engineering needs
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality & Trust</h3>
              <p className="text-muted-foreground">
                Proven expertise with years of field experience
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Well-qualified engineers with hands-on experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong>Royal Power Service</strong> is a House of Engineering
                solutions provider nationwide with quality and trust, which is
                driven by engineers who are presumed in their fields. Royal Power
                was established with a clear vision to be a significant entity in
                the engineering solutions provider business in Bangladesh through
                enhanced quality, innovation applications, and expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The combinations of engineering expertise of our team are versatile
                and are considered to be the best in the power sector. We have a
                team of well-qualified and hands-on experienced managers and
                engineers with many years of field experience to provide fast
                response and cost-effective solutions to our valued customer's
                needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Focused</h4>
                    <p className="text-sm text-muted-foreground">
                      Enhanced quality in every solution we provide
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Innovation Driven</h4>
                    <p className="text-sm text-muted-foreground">
                      Latest technology and innovative applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">
                      Versatile engineering expertise in power sector
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Cost Effective</h4>
                    <p className="text-sm text-muted-foreground">
                      Affordable solutions without compromising quality
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact us today for fast response and cost-effective engineering
            solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+8801729959988"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all"
            >
              Call Now: +88 01729959988
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
