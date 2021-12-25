import React, { useRef, useState } from "react";
import "../../css/detail.css";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
} from "react-share";

const data = [
  {
    img: "/imgs/mam-qua-cuoi-1-1024x791.jpg",
    title: "Chất Lượng Sản Phẩm Tốt Nhất :",
    des: "Mâm quả ngày cưới là một trong những nghi thức cưới hỏi mang đậm dấu ấn truyền thống của người Việt. Đặc biệt, trong các thủ tục đám cưới, đám hỏi của người Việt Nam, lễ gia tiên – ăn hỏi là một phần vô cùng quan trọng. Việc chuẩn bị lễ vật này thường được nhà trai ban bạc rồi đưa tới nhà gái trong ăn ăn hỏi, nên rất được chú trọng. Mâm quả này được xem như lời hứa hẹn của nhà trai trước khi xin rước cô gái về làm vợ, làm con dâu trong gia đình.",
  },
  {
    img: "/imgs/mam-qua-cuoi-hoi.jpg",
    title: "Chất Lượng Sản Phẩm Tốt Nhất :",
    des: "Mâm quả ngày cưới là một trong những nghi thức cưới hỏi mang đậm dấu ấn truyền thống của người Việt. Đặc biệt, trong các thủ tục đám cưới, đám hỏi của người Việt Nam, lễ gia tiên – ăn hỏi là một phần vô cùng quan trọng. Việc chuẩn bị lễ vật này thường được nhà trai ban bạc rồi đưa tới nhà gái trong ăn ăn hỏi, nên rất được chú trọng. Mâm quả này được xem như lời hứa hẹn của nhà trai trước khi xin rước cô gái về làm vợ, làm con dâu trong gia đình.",
  },
  {
    img: "/imgs/mam-qua-ngay-cuoi-1.jpg",
    title: "Chất Lượng Sản Phẩm Tốt Nhất :",
    des: "Mâm quả ngày cưới là một trong những nghi thức cưới hỏi mang đậm dấu ấn truyền thống của người Việt. Đặc biệt, trong các thủ tục đám cưới, đám hỏi của người Việt Nam, lễ gia tiên – ăn hỏi là một phần vô cùng quan trọng. Việc chuẩn bị lễ vật này thường được nhà trai ban bạc rồi đưa tới nhà gái trong ăn ăn hỏi, nên rất được chú trọng. Mâm quả này được xem như lời hứa hẹn của nhà trai trước khi xin rước cô gái về làm vợ, làm con dâu trong gia đình.",
  },
  {
    img: "/imgs/hannah.jpg",
    title: "Chất Lượng Sản Phẩm Tốt Nhất :",
    des: "Mâm quả ngày cưới là một trong những nghi thức cưới hỏi mang đậm dấu ấn truyền thống của người Việt. Đặc biệt, trong các thủ tục đám cưới, đám hỏi của người Việt Nam, lễ gia tiên – ăn hỏi là một phần vô cùng quan trọng. Việc chuẩn bị lễ vật này thường được nhà trai ban bạc rồi đưa tới nhà gái trong ăn ăn hỏi, nên rất được chú trọng. Mâm quả này được xem như lời hứa hẹn của nhà trai trước khi xin rước cô gái về làm vợ, làm con dâu trong gia đình.",
  },
];
const shareUrl = "http://github.com";
const title = "GitHub";

const Footer = (props) => {
  return (
    <div className="detail-container">
      <div className="detail-title">
        {data.map((item, i) => (
          <div key={i} className="detail-item">
            <div className="detail-image">
              <img src={item.img} />
            </div>
            <div className="detail-content">
              <h3>{item.title}</h3>
              <p>{item.des}</p>
              <div className="detail-button">
                <p>Chia sẻ :</p>
                <FacebookShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button btn"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <FacebookMessengerShareButton
                  url={shareUrl}
                  appId="521270401588372"
                  className="Demo__some-network__share-button btn"
                >
                  <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
              </div>
              <button className="detail-btn-ct">
                <a href="/">Chi Tiết</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
