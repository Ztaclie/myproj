const Stok = () => {
  const KaydetOnClick = () => {
    let StokKodu = document.getElementById("StokKodu");
    let StokAdi = document.getElementById("StokAdi");
    let Miktar = document.getElementById("Miktar");

    console.log(StokKodu.value, StokAdi.value, Miktar.value);

    if (StokKodu.value === "") {
      alert("Stok Kodu Boş Olamaz");
      StokKodu.focus();
      return;
    }
    if (StokAdi.value === "") {
      alert("Stok Adi Boş Olamaz");
      StokAdi.focus();
      return;
    }
    if (Miktar.value === "") {
      alert("Miktar Boş Olamaz");
      Miktar.focus();
      return;
    }

    let tbody = document.querySelector("table tbody");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerText = StokKodu.value;
    td2.innerText = StokAdi.value;
    td3.innerText = Miktar.value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.classList.add("text-center", "border-b-2", "border-[#6c63ff]");
    tbody.appendChild(tr);

    StokKodu.value = "";
    StokAdi.value = "";
    Miktar.value = "";
    StokKodu.focus();
  };

  return (
    <>
      <div className="Stok mt-48 px-5">
        <div className="w-72 border-2 border-[#6c63ff] mb-5 p-4 rounded-2xl">
          <h1 className="text-[#6c63ff] text-5xl">Stok Ekle</h1>
          <div className="flex flex-col gap-2 my-5">
            <label
              htmlFor="StokKodu"
              className="font-bold text-lg text-[#6c63ff]"
            >
              Stok Kodu
            </label>
            <input
              type="text"
              name="StokKodu"
              id="StokKodu"
              className="p-2 border-2 border-[#6c63ff] w-50 scale-y-100 rounded-lg hover:scale-y-110 transition outline-0 text-[#6c63ff]"
            />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label
              htmlFor="StokAdi"
              className="font-bold text-lg text-[#6c63ff]"
            >
              Stok Adi
            </label>
            <input
              type="text"
              name="StokAdi"
              id="StokAdi"
              className="p-2 border-2 border-[#6c63ff] w-50 scale-y-100 rounded-lg hover:scale-y-110 transition outline-0 text-[#6c63ff]"
            />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <label
              htmlFor="Miktar"
              className="font-bold text-lg text-[#6c63ff]"
            >
              Miktar
            </label>
            <input
              type="number"
              name="Miktar"
              id="Miktar"
              className="p-2 border-2 border-[#6c63ff] w-50 scale-y-100 rounded-lg hover:scale-y-110 transition outline-0 text-[#6c63ff]"
            />
          </div>
          <button
            type="button"
            className="px-7 py-3 bg-[#6c63ff] text-2xl text-white rounded-xl hover:scale-110 transition cursor-pointer"
            onClick={KaydetOnClick}
          >
            Kaydet
          </button>
        </div>
        <div className="flex flex-row items-center justify-start gap-5">
          <h1 className="text-[#6c63ff] text-5xl">Stok Grid</h1>
        </div>
        <table className="w-full mt-5 border-2 border-[#6c63ff]">
          <thead>
            <tr className="bg-[#6c63ff] text-white">
              <th>Ürün Kodu</th>
              <th>Ürün Adı</th>
              <th>Miktar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center border-b-2 border-[#6c63ff]">
              <td>001</td>
              <td>Ürün 1</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Stok;
