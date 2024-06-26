import React from "react";

const TableLayout = ({ dataProductList }: any) => {
  return (
    <div className="w-full mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Sales count ($)
            </th>
          </tr>
        </thead>
        <tbody>
          {dataProductList?.map((row: any) => (
            <tr
              key={row?._id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {row?.name}
              </th>
              <td className="px-6 py-4">{row?.Price}</td>
              <td className="px-6 py-4">{row?.Sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLayout;
