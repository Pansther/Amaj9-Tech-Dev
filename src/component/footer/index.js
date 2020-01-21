import React from "react";
import "../../css/footer.css";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="store">
                    <div style={{ display: 'inline' }}>อีกหลากหลายวิธีในการเลือกซื้อ: ไปที่ </div>
                    <a href="" style={{ display: 'inline', color: 'darkcyan' }}>Amaj9 Store</a>
                    <div style={{ display: 'inline' }}>, โทร 001‑000‑69‑6969 English support available. หรือ </div>
                    <a href="" style={{ display: 'inline', color: 'darkcyan' }}>ตัวแทนจำหน่าย</a>
                </div>

                <div className="hline"></div>

                <div className="menu-box">
                    <div className="copyright">Copyright © 6969 B.C. Amaj9 Technologies Inc. สงวนสิทธิ์ทุกประการ</div>
                    <a id="contact" href="#">นโยบายความเป็นส่วนตัว</a>
                    <a id="contact" href="#">ข้อกำหนดการใช้งาน</a>
                    <a id="contact" href="#">การขายและการคืนเงิน</a>
                    <a id="contact" href="#">ข้อมูลทางกฎหมาย</a>
                    <a id="contact" href="#">แผนผังเว็บไซต์</a>
                </div>

            </div>
        </div>
    );
}