import { useEffect, useState } from "react";
import classes from "./BarChart.module.css";
import Papa, { ParseResult } from "papaparse";

type Population = {
  dcode: number;
  name: string;
  2550: string;
  2551: string;
  2552: string;
  2553: string;
  2554: string;
  2555: string;
  2556: string;
  2557: string;
  2558: string;
  2559: string;
};

type PopulationPlot = {
  year: string;
  val: string | number;
};

// Get csv data to json
const CSVToJson = () => {
  const [CSVData, setCSVData] = useState<Population[]>([]);
  const commonConfig = { delimiter: "," };
  const csvFilePath = "/bkk_population_growth.csv";

  const getCSV = () => {
    Papa.parse(csvFilePath, {
      ...commonConfig,
      header: true,
      download: true,
      complete: (result: ParseResult<Population>) => {
        setCSVData(result.data);
      },
    });
  };

  useEffect(() => {
    getCSV();
  }, []);

  return CSVData;
};

// Create chart
const Chart = ({ children, width, height }: any) => (
  <>
    <svg
      viewBox={`500 0 ${width} ${height}`}
      width="740"
      height="300"
      preserveAspectRatio="xMidYMax meet"
    >
      {children}
    </svg>
  </>
);

// Create Bar
const Bar = ({ x, y, width, height, label }: any) => (
  <>
    <rect x={x + 500} y={y} width={width} height={height} fill="#ed2e7c" />
    <text x={0} y={y + 20} fill="white" font-size="1.5em">
      {label}
    </text>
  </>
);

const BarChart = () => {
  const data: Population[] = CSVToJson();
  const [filterData, setFilterData] = useState<PopulationPlot[]>([]);
  const nameList = Array.from(new Set(data.map((item) => item.name)));
  const yearList = Array.from(new Set(filterData.map((item) => item.year)));

  const [filterName, setFilterName] = useState<string>("");
  const [filterYearFrom, setFilterYearFrom] = useState<string>("");
  const [filterYearEnd, setFilterYearEnd] = useState<string>("");

  const applyFilter = () => {
    let updateData = data;
    let newUpdateData = [];

    if (!filterName || !filterYearFrom || !filterYearEnd) {
      updateData = data;
    }

    if (filterName) {
      updateData = updateData?.filter((data) => data.name.includes(filterName));

      const updateDataLen = Object.keys(updateData[0]).length;

      for (let i = 0; i < updateDataLen; i++) {
        const [key, value] = Object.entries(updateData[0])[i];
        const member = {
          year: key,
          val: value,
        };
        newUpdateData.push(member);
      }
    }

    if (filterYearFrom && filterYearEnd) {
      newUpdateData = newUpdateData.filter(
        (data) =>
          Number(data.year) >= Number(filterYearFrom) &&
          Number(data.year) <= Number(filterYearEnd)
      );
    }

    newUpdateData = newUpdateData.filter(
      (data) => !data.year.includes("dcode")
    );

    newUpdateData = newUpdateData.filter((data) => !data.year.includes("name"));

    setFilterData(newUpdateData);
  };

  useEffect(() => {
    applyFilter();
  }, [filterName, filterYearFrom, filterYearEnd]);

  return (
    <div className={classes.layout}>
      <p className={classes.subHeader}>การเติบโต</p>
      <div className={classes.filter}>
        <div className={classes.filterContent}>
          <p>เขต</p>
          <select
            className={classes.selectBoxDistrict}
            name="selectedDistrict"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          >
            {nameList.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.filterDuration}>
          <div className={classes.filterContent}>
            <p>ตั้งแต่</p>
            <select
              className={classes.selectBoxDuration}
              name="selectedYearFrom"
              value={filterYearFrom}
              onChange={(e) => setFilterYearFrom(e.target.value)}
            >
              {yearList.map((year) => (
                <option key={year} value={year}>
                  พ.ศ. {year}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.filterContent}>
            <p>ถึง</p>
            <select
              className={classes.selectBoxDuration}
              name="selectedYearEnd"
              value={filterYearEnd}
              onChange={(e) => setFilterYearEnd(e.target.value)}
            >
              {yearList.map((year) => (
                <option key={year} value={year}>
                  พ.ศ. {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Create chart  */}
      <Chart height={600} width={200}>
        {filterData.map((data, index) => {
          const dataVal: string = `${data.val}`;
          const barWidth = Number(dataVal.slice(0, -1)) * 100;
          return (
            <Bar
              key={data.year}
              y={index * 60}
              x={barWidth < 0 ? barWidth : 0}
              height={30}
              width={Math.abs(barWidth)}
              label={data.year}
            />
          );
        })}
      </Chart>
    </div>
  );
};

export default BarChart;
