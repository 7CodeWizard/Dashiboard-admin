import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      //   colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      //   enableGraticule={true}
      //   graticuleLineColor="#dddddd"
      borderWidth={1.5}
      borderColor="#ffffff"
      //   defs={[
      //     {
      //       id: "dots",
      //       type: "patternDots",
      //       background: "inherit",
      //       color: "#38bcb2",
      //       size: 4,
      //       padding: 1,
      //       stagger: true,
      //     },
      //     {
      //       id: "lines",
      //       type: "patternLines",
      //       background: "inherit",
      //       color: "#eed312",
      //       rotation: -45,
      //       lineWidth: 6,
      //       spacing: 10,
      //     },
      //     {
      //       id: "gradient",
      //       type: "linearGradient",
      //       colors: [
      //         {
      //           offset: 0,
      //           color: "#000",
      //         },
      //         {
      //           offset: 100,
      //           color: "inherit",
      //         },
      //       ],
      //     },
      //   ]}
      //   fill={[
      //     {
      //       match: {
      //         id: "CAN",
      //       },
      //       id: "dots",
      //     },
      //     {
      //       match: {
      //         id: "CHN",
      //       },
      //       id: "lines",
      //     },
      //     {
      //       match: {
      //         id: "ATA",
      //       },
      //       id: "gradient",
      //     },
      //   ]}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;
