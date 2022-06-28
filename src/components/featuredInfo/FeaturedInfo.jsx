import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState({});
  const [percIncome, setPercIncome] = useState(0);
  const [incomeComparate, setIncomeComparate] = useState(0);
  const [salesComparate, setSalesComparate] = useState(0);
  const [percSales, setPercSales] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("order/stats/income");
        if (Object.keys(((res.data[0])).length !== 0)) {
          setIncome((Object.keys((res.data[1])).length !== 0) ? res.data[1] : res.data[0]);

          setIncomeComparate((Object.keys((res.data[1])).length !== 0) ? res.data[1].total - res.data[0].total : res.data[0].total);
          setPercIncome((Object.keys((res.data[1])).length !== 0) ? (res.data[1].total * 100) / res.data[0].total - 100 : 100);

          setSalesComparate((Object.keys((res.data[1])).length !== 0) ? res.data[1].quantity - res.data[0].quantity : res.data[0].quantity);
          setPercSales((Object.keys((res.data[1])).length !== 0) ? (res.data[1].quantity * 100) / res.data[0].quantity - 100 : 100);
        }
      } catch { }
    }
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Ingresos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₡{incomeComparate}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(percIncome)}{" "}
            {percIncome < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : <ArrowUpward className="featuredIcon" />
            }
          </span>
        </div>
        <span className="featuredSub">Comparado al mes pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ventas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{salesComparate}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(percSales)}{" "}
            {percSales < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : <ArrowUpward className="featuredIcon" />
            }
          </span>
        </div>
        <span className="featuredSub">Comparado al mes pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ingresos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₡{income.total}</span>
        </div>
        <span className="featuredSub">Total del mes</span>
      </div>
    </div>
  );
}
