export const dynamic = 'force-static'

export default function OurClients() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
        <p className="text-lg text-muted-foreground mb-12">
          We are happy to have you here. Hope our service might satisfy you.
          Thank you so much. Have a nice day!!
        </p>

        <div className="bg-card rounded-lg p-12 text-center border">
          <p className="text-xl text-muted-foreground mb-8">
            Our valued clients trust us for quality engineering solutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm">
                  Client {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
