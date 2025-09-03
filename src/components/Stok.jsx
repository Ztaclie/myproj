import Grid from "./Grid";

const Stok = () => {
  const KaydetOnClick = () => {};

  const headers = ["Ürün Kodu", "Ürün Adı", "Miktar"];

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
        <Grid headers={headers} />
      </div>
    </>
  );
};

export default Stok;
