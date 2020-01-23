import React from "react";
import "../../css/footer.css";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="store-wrapper">
                    <div style={{ display: 'inline' }}>อีกหลากหลายวิธีในการเลือกซื้อ: ไปที่ </div>
                    <a href="Amaj9Store" style={{ display: 'inline', color: 'darkcyan' }}>Amaj9 Store</a>
                    <div style={{ display: 'inline' }}>, โทร 001‑000‑69‑6969 English support available. หรือ </div>
                    <a href="Dealer" style={{ display: 'inline', color: 'darkcyan' }}>ตัวแทนจำหน่าย</a>
                </div>

                <div className="hline"></div>

                <div className="contact-wrapper">
                    <div className="copyright">Copyright © 6969 B.C. Amaj9 Technologies Inc. สงวนสิทธิ์ทุกประการ</div>
                    <a id="contact" href="Instagram"><img src={require("../../img/footer/instagram.svg")} width="25" height="25" alt="ig"></img></a>
                    <a id="contact" href="Facebook"><img src={require("../../img/footer/facebook.svg")} width="25" height="25" alt="fb"></img></a>
                    <a id="contact" href="Twitter"><img src={require("../../img/footer/twitter.svg")} width="25" height="25" alt="twit"></img></a>
                    <a id="contact" href="https://www.pornhub.com/"><img src={require("../../img/footer/vk.svg")} width="25" height="25" alt="vk"></img></a>
                    <a id="contact" href="github"><img src={require("../../img/footer/github.svg")} width="25" height="25" alt="git"></img></a>
                </div>

            </div>
        </div>
    );
}
