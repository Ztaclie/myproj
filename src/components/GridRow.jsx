import React from "react";

const GridRow = ({ UrunKodu, UrunAdi, Miktar }) => {
  return (
    <>
      <tr className="text-center border-b-2 border-[#6c63ff]">
        <td>{UrunKodu}</td>
        <td>{UrunAdi}</td>
        <td>{Miktar}</td>
      </tr>
    </>
  );
};

export default GridRow;
