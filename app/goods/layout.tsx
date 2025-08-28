import Container from "@/components/Container/Container";
import Link from "next/link";

const GoodsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
      <aside style={{ paddingTop: 8 }}>
        <Container>
          <ul>
            <li>
              <Link href="/goods/all">All Goods</Link>
            </li>
            <li>
              <Link href="/goods/computers/all">Computers</Link>
              <ul style={{ paddingLeft: 20 }}>
                <li>
                  <Link href="/goods/computers/pc">PC</Link>
                  <ul style={{ paddingLeft: 20 }}>
                    <li>
                      <Link href="/goods/computers/pc/for_gaming">Gaming</Link>
                    </li>
                    <li>
                      <Link href="/goods/computers/pc/work">Work</Link>
                    </li>
                    <li>
                      <Link href="/goods/computers/pc/education">
                        Education
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/goods/computers/laptops">Laptops</Link>
                </li>
                <li>
                  <Link href="/goods/computers/tablets">Tablets</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/goods/musical-instruments/all">
                Musical Instruments
              </Link>
              <ul style={{ paddingLeft: 20 }}>
                <li>
                  <Link href="/goods/musical-instruments/guitars">Guitars</Link>
                </li>
                <li>
                  <Link href="/goods/musical-instruments/drums">Drums</Link>
                </li>
                <li>
                  <Link href="/goods/musical-instruments/keys">Keys</Link>
                </li>
              </ul>
            </li>
          </ul>
        </Container>
      </aside>
      <div>{children}</div>
    </div>
  );
};

export default GoodsLayout;
