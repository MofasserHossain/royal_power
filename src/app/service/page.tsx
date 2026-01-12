import { Zap, Settings, Wrench, Shield, CheckCircle } from 'lucide-react'

export const dynamic = 'force-static'

const services = [
  {
    icon: Zap,
    title: 'Power Solutions',
    description:
      'Comprehensive power engineering solutions for industrial and commercial applications',
  },
  {
    icon: Settings,
    title: 'Engineering Services',
    description:
      'Expert engineering services with innovative applications and quality assurance',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description:
      'Ongoing maintenance and technical support for all your engineering needs',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Rigorous quality control and testing to ensure reliable performance',
  },
]

export default function Service() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive engineering solutions with quality, trust,
            and expertise. Our team delivers fast response and cost-effective
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Experienced engineering team',
              'Fast response time',
              'Cost-effective solutions',
              'Quality guaranteed',
              'Nationwide service',
              'Innovation driven',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
