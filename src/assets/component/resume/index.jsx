import './index.css';

function Resume() {
  return (
    <div className="w-full flex justify-center bg-gray-100 p-8">
      <div className="w-[850px] bg-white border shadow-lg">

        {/* HEADER */}
        <div className="bg-blue-600 text-white flex justify-between p-4">
          <div className="text-left">
            <h1 className="text-lg font-bold">The Fresh Market</h1>
            <p className="text-sm">13493 Atlantic Blvd, Jacksonville, FL 32225</p>
          </div>

          <div className="text-left">
            <h2 className="text-lg font-semibold">EARNINGS STATEMENT</h2>
            <p className="text-sm">Pay Date: 01/26/2026</p>
            <p className="text-sm">Reporting Period: 12/24/2025 - 01/23/2026</p>
          </div>
        </div>

        {/* EMPLOYEE INFO */}
        <div className="flex justify-between p-4 border-b text-sm">

          <div className="text-left">
            <p><b>Employee</b></p>
            <p>Donald Hicks</p>
            <p className="text-xs">574 Vikings Ln</p>
            <p className="text-xs">Atlantic Beach FL 32233-4151</p>
          </div>

          <div className="flex flex-col justify-between text-sm">

            <div className="flex justify-between w-32">
              <span className="font-semibold">Employee No.</span>
              <span>8</span>
            </div>

            <div className="flex justify-between w-32 mt-1">
              <span className="font-semibold">SSN</span>
              <span>XXX-XX-6385</span>
            </div>

          </div>

        </div>


        {/* MAIN TABLES */}
        <div className="grid grid-cols-2 gap-6 p-4">

          {/* INCOME */}
          <div className="border">

            <div className="bg-blue-500 text-white font-semibold p-2 text-left">
              Income
            </div>

            <table className="w-full text-sm">

              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Income</th>
                  <th className="p-2 text-right">Rate</th>
                  <th className="p-2 text-right">Hours</th>
                  <th className="p-2 text-right">Current Pay</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td className="p-2 text-left">Gross Earnings</td>
                  <td className="p-2 text-right">15.24</td>
                  <td className="p-2 text-right">190</td>
                  <td className="p-2 text-right">2,895.60</td>
                </tr>

                <tr className="border-t font-semibold">
                  <td className="p-2 text-left">YTD Gross</td>
                  <td></td>
                  <td></td>
                  <td className="p-2 text-right">2,895.60</td>
                </tr>

              </tbody>

            </table>

          </div>


          {/* DEDUCTIONS */}
          <div className="border">

            <div className="bg-blue-500 text-white font-semibold p-2">
              Deductions
            </div>

            <table className="w-full text-sm">

              <thead className="bg-gray-100">

                <tr>
                  <th className="p-2 text-left">Deductions</th>
                  <th className="p-2 text-right">Total</th>
                  <th className="p-2 text-right">YTD Total</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td className="p-2 text-left font-semibold">
                    Statutory Deductions
                  </td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td className="p-2 text-left">FICA - Medicare</td>
                  <td className="p-2 text-right">41.99</td>
                  <td className="p-2 text-right">41.99</td>
                </tr>

                <tr>
                  <td className="p-2 text-left">FICA - Social Security</td>
                  <td className="p-2 text-right">179.53</td>
                  <td className="p-2 text-right">179.53</td>
                </tr>

                <tr>
                  <td className="p-2 text-left">Federal Tax</td>
                  <td className="p-2 text-right">190.64</td>
                  <td className="p-2 text-right">190.64</td>
                </tr>

                <tr>
                  <td className="p-2 text-left">FL STATE TAX W/H</td>
                  <td></td>
                  <td></td>
                </tr>

                <tr className="border-t font-semibold">
                  <td className="p-2 text-left">Total Deductions</td>
                  <td className="p-2 text-right">412.16</td>
                  <td className="p-2 text-right">412.16</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>


        {/* TOTALS */}
        <div className="border-t grid grid-cols-3 p-4 text-sm">

          <div>
            <p className="font-semibold">YTD Gross</p>
            <p>2,895.60</p>
          </div>

          <div>
            <p className="font-semibold">YTD Deductions</p>
            <p>412.16</p>
          </div>

          <div className="text-right">
            <p className="font-semibold">YTD Net Pay</p>
            <p className="text-xl font-bold text-green-600">
              2,483.44
            </p>
          </div>

        </div>


        {/* TOTAL SUMMARY */}
        <div className="border-t p-4 text-sm flex flex-col gap-2">

          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span>2,895.60</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Deductions</span>
            <span>412.16</span>
          </div>

          <div className="flex justify-between mt-2">
            <span className="font-semibold">Net Pay</span>
            <span className="text-xl font-bold text-green-600">
              2,483.44
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Resume;