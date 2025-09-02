const Stok = () => {
  return (
    <>
      <div className="Stok mt-48 px-5">
        <div className="flex flex-row items-center justify-start gap-5">
          <h1 className="text-[#6c63ff] text-5xl">Stok Grid</h1>
          <button
            type="button"
            className="px-7 py-3 bg-[#6c63ff] text-2xl text-white rounded-xl hover:scale-110 transition cursor-pointer"
          >
            Ekle
          </button>
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
