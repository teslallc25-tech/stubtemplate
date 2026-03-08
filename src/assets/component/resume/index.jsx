import './index.css';

function Resume() {
  return (
    <div className="w-full flex justify-center bg-gray-100 p-8">
      <div className="w-[850px] bg-white border shadow-lg">

        {/* HEADER */}
        <div className="bg-blue-600 text-white p-4 flex justify-between">
          <div className="text-left">
            <h1 className="text-lg font-bold">The Fresh Market</h1>
            <p className="text-sm">13493 Atlantic Blvd, Jacksonville, FL 32225</p>
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold">EARNINGS STATEMENT</h2>
            <p className="text-sm">Pay Date: 02/26/2026</p>
            <p className="text-sm">Reporting Period: 01/27/2026 - 02/23/2026</p>
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
              <span className="text-right">8</span>
            </div>
            <div className="flex justify-between w-32 mt-1">
              <span className="font-semibold">SSN</span>
              <span className="text-right">XXX-XX-6385</span>
            </div>
          </div>
        </div>

        {/* MAIN TABLES */}
        <div className="grid grid-cols-2 gap-6 p-4">

          {/* INCOME */}
          <div className="border">
            <div className="bg-blue-500 text-white font-semibold p-2 text-left">Income</div>
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
                  <td className="p-2 text-right">80</td>
                  <td className="p-2 text-right">1,219.20</td>
                </tr>
                <tr className="border-t font-semibold">
                  <td className="p-2 text-left">YTD Gross</td>
                  <td></td>
                  <td></td>
                  <td className="p-2 text-right">4,114.80</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* DEDUCTIONS */}
          <div className="border">
            <div className="bg-blue-500 text-white font-semibold p-2">Deductions</div>
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
                  <td className="p-2 text-left font-semibold">Statutory Deductions</td>
                  <td className="text-left"></td>
                  <td className="text-left"></td>
                </tr>
                <tr>
                  <td className="p-2 text-left">FICA - Medicare</td>
                  <td className="p-2 text-right">17.68</td>
                  <td className="p-2 text-right">59.67</td>
                </tr>
                <tr>
                  <td className="p-2 text-left">FICA - Social Security</td>
                  <td className="p-2 text-right">75.59</td>
                  <td className="p-2 text-right">255.12</td>
                </tr>
                <tr>
                  <td className="p-2 text-left">Federal Tax</td>
                  <td className="p-2 text-right">6.50</td>
                  <td className="p-2 text-right">197.14</td>
                </tr>
                <tr>
                  <td className="p-2 text-left">FL STATE TAX W/H</td>
                  <td className="text-left"></td>
                  <td className="text-left"></td>
                </tr>
                <tr className="border-t font-semibold">
                  <td className="p-2 text-left">Total Deductions</td>
                  <td className="p-2 text-right">99.77</td>
                  <td className="p-2 text-right">511.93</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* TOTALS */}
        <div className="border-t grid grid-cols-3 p-4 text-sm">
          <div className="text-left">
            <p className="font-semibold">YTD Gross</p>
            <p>4,114.80</p>
          </div>
          <div className="text-left">
            <p className="font-semibold">YTD Deductions</p>
            <p>511.93</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">YTD Net Pay</p>
            <p className="text-xl font-bold text-green-600">3,602.87</p>
          </div>
        </div>

        {/* Flexed Totals Section */}
        <div className="border-t p-4 text-sm flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span>1,219.20</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Deductions</span>
            <span>99.77</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-semibold">Net Pay</span>
            <span className="text-xl font-bold text-green-600">1,119.43</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Resume;