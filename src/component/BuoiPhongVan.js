import React, { useState } from "react";
import QRCode from "qrcode.react";
import '../component/new.css'

function BuoiPhongVan() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="form__group field">
      <input className="form__field" placeholder="Input Link, đoạn văn, ..." type="text" value={text} onChange={handleTextChange} />
      <label for="Input link" class="form__label">Input link</label>
      <br></br>
      <QRCode className="QR" value={text} /><br></br>
      <p>Chuột phải rồi Save nếu muốn lưu lại nhé... </p>  
    </div>
  );
}

export default BuoiPhongVan;
