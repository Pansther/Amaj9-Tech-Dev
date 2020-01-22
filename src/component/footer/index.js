import React from "react";
import "../../css/footer.css";

export default function Footer() {
    return (
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
                    <div className="contact-vline">
                        <a id="contact" href="Facebook">Facebook </a>
                    </div>
                    
                    <a id="contact" href="Instagram">Instagram </a>
                    <a id="contact" href="Twitter">Twitter </a>
                    <a id="contact" href="Line">Line </a>
                    <a id="contact" href="VK">VK</a>
                </div>

            </div>
    );
}