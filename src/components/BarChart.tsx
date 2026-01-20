import { useState } from "react";

interface BarData {
  label: string;
  element1: number;
  element2: number;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  label: string;
  element: "Element 1" | "Element 2";
  value: number;
}

const chartData: BarData[] = [
  { label: "Budget", element1: 130, element2: 95 },
  { label: "Saving", element1: 120, element2: 85 },
  { label: "Analytic", element1: 100, element2: 65 },
];

const yAxisTicks = [0, 20, 40, 60, 80, 100, 120, 140];
const maxValue = 140;
const chartHeight = 200;

export const BarChart = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    label: "",
    element: "Element 1",
    value: 0,
  });

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    label: string,
    element: "Element 1" | "Element 2",
    value: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.closest('.chart-container')?.getBoundingClientRect();
    
    if (parentRect) {
      setTooltip({
        visible: true,
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top - 10,
        label,
        element,
        value,
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const getBarHeight = (value: number) => {
    return (value / maxValue) * chartHeight;
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-background">
      {/* Legend */}
      <div className="flex justify-center mb-6 text-sm gap-8">
        <span className="flex items-center gap-2">
          <span className="w-8 h-3 bg-chart-navy inline-block"></span>
          <span className="text-foreground">Element 1</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="w-8 h-3 bg-chart-light inline-block"></span>
          <span className="text-foreground">Element 2</span>
        </span>
      </div>

      {/* Chart Container */}
      <div className="relative chart-container">
        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="absolute z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            <div className="bg-chart-tooltip-bg text-white px-3 py-2 rounded text-sm shadow-lg">
              <div className="font-medium">{tooltip.label}</div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`w-3 h-3 inline-block ${
                    tooltip.element === "Element 1" ? "bg-chart-navy" : "bg-chart-light"
                  }`}
                ></span>
                <span>
                  {tooltip.element}: {tooltip.value}
                </span>
              </div>
            </div>
            {/* Tooltip arrow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-chart-tooltip-bg"></div>
          </div>
        )}

        <div className="flex">
          {/* Y-Axis */}
          <div className="flex flex-col justify-between h-[200px] pr-3 text-xs text-chart-axis">
            {[...yAxisTicks].reverse().map((tick) => (
              <span key={tick} className="leading-none">
                {tick}
              </span>
            ))}
          </div>

          {/* Chart Area */}
          <div className="flex-1 relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {yAxisTicks.map((tick) => (
                <div
                  key={tick}
                  className="w-full border-b border-border"
                ></div>
              ))}
            </div>

            {/* Bars */}
            <div className="relative flex justify-around items-end h-[200px]">
              {chartData.map((data, i) => (
                <div key={i} className="flex gap-1 items-end">
                  {/* Element 1 Bar */}
                  <div
                    className="w-10 bg-chart-navy cursor-pointer transition-opacity hover:opacity-80"
                    style={{ height: `${getBarHeight(data.element1)}px` }}
                    onMouseEnter={(e) =>
                      handleMouseEnter(e, data.label, "Element 1", data.element1)
                    }
                    onMouseLeave={handleMouseLeave}
                  ></div>
                  {/* Element 2 Bar */}
                  <div
                    className="w-10 bg-chart-light cursor-pointer transition-opacity hover:opacity-80"
                    style={{ height: `${getBarHeight(data.element2)}px` }}
                    onMouseEnter={(e) =>
                      handleMouseEnter(e, data.label, "Element 2", data.element2)
                    }
                    onMouseLeave={handleMouseLeave}
                  ></div>
                </div>
              ))}
            </div>

            {/* X-Axis Labels */}
            <div className="flex justify-around text-sm text-chart-axis mt-4">
              {chartData.map((data, i) => (
                <span key={i}>{data.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
