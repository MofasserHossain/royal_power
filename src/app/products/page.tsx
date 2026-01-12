export const dynamic = 'force-static'

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Explore our range of engineering solutions and products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Product Image {i}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product {i}</h3>
              <p className="text-muted-foreground mb-4">
                Description of product {i} with engineering solutions
              </p>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
