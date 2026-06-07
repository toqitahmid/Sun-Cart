import Care from "../ui/care/page";
import Hero from "../ui/hero/page";
import BrandMarquee from "../ui/marquee/page";
import ProductPage from "./products/page";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductPage></ProductPage>
      <Care></Care>
      <BrandMarquee></BrandMarquee>
    </div>
  );
}
