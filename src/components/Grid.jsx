import { useEffect } from "react";
import GridRow from "./GridRow";

const Grid = ({ headers }) => {
  const rows = [
    { UrunKodu: "001", UrunAdi: "Kalem", Miktar: 100 },
    { UrunKodu: "002", UrunAdi: "Defter", Miktar: 200 },
    { UrunKodu: "003", UrunAdi: "Silgi", Miktar: 150 },
  ];

  return (
    <>
      <div className="Grid">
        <table className="w-full mt-5 border-2 border-[#6c63ff]">
          <thead>
            <tr className="bg-[#6c63ff] text-white">
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              {/* headers.map((header, index) => (<th key={index}>{header}</th>))               */}
            </tr>
          </thead>
          <tbody>
            {rows && rows.map((row, index) => <GridRow key={index} {...row} />)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Grid;
