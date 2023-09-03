import { useTitle } from "../hooks/useTitle";
import { ProductCard } from '../components';

export const Home = () => {
  useTitle("Home");
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/img1.jpg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/img2.jpg"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/img3.jpg"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/img4.jpg"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/img5.jpg"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/img6.jpg"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
