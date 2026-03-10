import './index.css';

function Resume() {
  return (
    <div className="w-full flex justify-center bg-gray-100 p-8">
      <div className="w-[850px] bg-white border shadow-lg">

        {/* HEADER */}
        <div className="bg-orange-600 text-white flex justify-between p-4">
          <div className="text-left">
            <h1 className="text-lg font-bold">Gyro 365</h1>
            <p className="text-sm">11101-1 Old St Augustine Rd</p>
            <p className="text-sm">Jacksonville, FL 32257</p>
          </div>

          <div className="text-left">
            <h2 className="text-lg font-semibold">EARNINGS STATEMENT</h2>
            <p className="text-sm">Pay Date: 01/30/2026</p>
            <p className="text-sm">Reporting Period: 12/28/2025 - 01/27/2026</p>
          </div>
        </div>

        {/* EMPLOYEE INFO */}
        <div className="flex justify-between p-4 border-b text-sm">

          <div className="text-left">
            <p className="font-semibold">Employee</p>
            <p>William Wedebrock</p>
            <p className="text-xs">635 Sailfish Dr E</p>
            <p className="text-xs">Atlantic Beach FL 32233-4200</p>
          </div>

          <div className="flex flex-col justify-between text-sm">

            <div className="flex justify-between w-40">
              <span className="font-semibold">Employee No.</span>
              <span>1</span>
            </div>

            <div className="flex justify-between w-40 mt-1">
              <span className="font-semibold">SSN</span>
              <span>XXX-XX-9658</span>
            </div>

          </div>

        </div>


        {/* MAIN TABLES */}
        <div className="grid grid-cols-2 gap-6 p-4">

          {/* INCOME */}
          <div className="border">

            <div className="bg-orange-500 text-white font-semibold p-2 text-left">
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
                  <td className="p-2 text-right">14.30</td>
                  <td className="p-2 text-right">80</td>
                  <td className="p-2 text-right">1,144.00</td>
                </tr>

                <tr className="border-t font-semibold">
                  <td className="p-2 text-left">YTD Gross</td>
                  <td></td>
                  <td></td>
                  <td className="p-2 text-right">1,144.00</td>
                </tr>

              </tbody>

            </table>

          </div>


          {/* DEDUCTIONS */}
          <div className="border">

            <div className="bg-orange-500 text-white font-semibold p-2 text-left">
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
                  <td className="p-2 text-right">16.59</td>
                  <td className="p-2 text-right">16.59</td>
                </tr>

                <tr>
                  <td className="p-2 text-left">FICA - Social Security</td>
                  <td className="p-2 text-right">70.93</td>
                  <td className="p-2 text-right">70.93</td>
                </tr>

                <tr>
                  <td className="p-2 text-left">Federal Tax</td>
                  <td className="p-2 text-right">0.00</td>
                  <td className="p-2 text-right">0.00</td>
                </tr>

                <tr>
                  <td className="p-2 text-left">FL STATE TAX W/H</td>
                  <td className="p-2 text-right">0.00</td>
                  <td className="p-2 text-right">0.00</td>
                </tr>

                <tr className="border-t font-semibold">
                  <td className="p-2 text-left">Total Deductions</td>
                  <td className="p-2 text-right">87.52</td>
                  <td className="p-2 text-right">87.52</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>


        {/* TOTALS */}
        <div className="border-t grid grid-cols-3 gap-6 p-4 text-sm">

          <div className="text-left">
            <p className="font-semibold">YTD Gross</p>
            <p>1,144.00</p>
          </div>

          <div className="text-left">
            <p className="font-semibold">YTD Deductions</p>
            <p>87.52</p>
          </div>

          <div className="text-right">
            <p className="font-semibold">YTD Net Pay</p>
            <p className="text-xl font-bold text-green-600">
              1,056.48
            </p>
          </div>

        </div>


        {/* TOTAL SUMMARY */}
        <div className="border-t p-4 text-sm flex flex-col gap-2">

          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span>1,144.00</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Deductions</span>
            <span>87.52</span>
          </div>

          <div className="flex justify-between mt-2">
            <span className="font-semibold">Net Pay</span>
            <span className="text-xl font-bold text-green-600">
              1,056.46
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Resume;
