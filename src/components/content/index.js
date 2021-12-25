import React from "react";
import "../../css/content.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function Content() {
  return (
    <>
      <Header />
      <div className="content-container">
        <div className="content-title">
          <h1>Mâm Quả Cưới </h1>
          <h3>Giá Tham Khảo : 2.000.000 - 7.000.000</h3>
        </div>
        <div>
          <div className="content-des">
            <h3>Mâm quả cưới – Gói 1:</h3>
            <p>Giá: 3.300.000</p>
            <p>Gói này gồm 5 quả và 1 khay trà rượu cụ thể như sau:</p>
            <ul>
              <li>
                <p>Quả Trầu cau 60 trái</p>
              </li>
              <li>
                <p>Quả bánh phu thê 80 cái</p>
              </li>
              <li>
                <p>
                  Quả trái cây ngũ quả (nho Mỹ, táo Mỹ, xoài, mãng cầu, thăng
                  long)
                </p>
              </li>
              <li>
                <p>Quả bánh cốm (20 hộp)</p>
              </li>
              <li>
                <p>
                  Quả trà rượu đèn (Trà tam châu ô long, rượu vang đỏ, đèn cầy
                  nhũ vàng)
                </p>
              </li>
              <li>
                <p>
                  Khay trà rượu (có têm trầu, bì thư hỷ đỏ & 1 chai rượu nếp
                  trắng)
                </p>
              </li>
              <li>
                <p>Bánh kem 2 tầng</p>
              </li>
            </ul>
          </div>
          <div className="content-image">
            <img src="/imgs/cac-mau-trap-an-hoi-dep-nhat_050625123.jpg" />
          </div>
        </div>
        <div>
          <div className="content-des">
            <h3>Mâm quả cưới – Gói 1:</h3>
            <p>Giá: 3.300.000</p>
            <p>Gói này gồm 5 quả và 1 khay trà rượu cụ thể như sau:</p>
            <ul>
              <li>
                <p>Quả Trầu cau 60 trái</p>
              </li>
              <li>
                <p>Quả bánh phu thê 80 cái</p>
              </li>
              <li>
                <p>
                  Quả trái cây ngũ quả (nho Mỹ, táo Mỹ, xoài, mãng cầu, thăng
                  long)
                </p>
              </li>
              <li>
                <p>Quả bánh cốm (20 hộp)</p>
              </li>
              <li>
                <p>
                  Quả trà rượu đèn (Trà tam châu ô long, rượu vang đỏ, đèn cầy
                  nhũ vàng)
                </p>
              </li>
              <li>
                <p>
                  Khay trà rượu (có têm trầu, bì thư hỷ đỏ & 1 chai rượu nếp
                  trắng)
                </p>
              </li>
              <li>
                <p>Bánh kem 2 tầng</p>
              </li>
            </ul>
          </div>
          <div className="content-image">
            <img src="/imgs/cac-mau-trap-an-hoi-dep-nhat_050625123.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
