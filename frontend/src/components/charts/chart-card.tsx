"use client";

import React from "react";
import { Card } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { ResponsiveContainer, AreaChart, Area, YAxis } from "recharts";
import { tv } from "@nextui-org/react";

const chartStyles = tv({
  slots: {
    card: "shadow-none",
    iconWrapper: "rounded-small p-2",
    trendIconWrapper: "mt-2 flex items-center gap-x-1 text-xs font-medium",
  },
  variants: {
    color: {
      default: {
        card: "bg-default-50",
        iconWrapper: "bg-default-200/50 text-default-700",
        trendIconWrapper: "text-default-700",
      },
      primary: {
        card: "bg-primary-50 ",
        iconWrapper: "bg-primary-100 dark:bg-primary-100/50 text-primary",
        trendIconWrapper: "text-primary",
      },
      secondary: {
        card: "bg-secondary-50",
        iconWrapper: "bg-secondary-100 dark:bg-secondary-100/50 text-secondary",
        trendIconWrapper: "text-secondary",
      },
      success: {
        card: "bg-success-50",
        iconWrapper: "bg-success-100 dark:bg-success-100/50 text-success",
        trendIconWrapper: "text-success",
      },
      warning: {
        card: "bg-warning-50",
        iconWrapper: "bg-warning-100 dark:bg-warning-100/50 text-warning",
        trendIconWrapper: "text-warning",
      },
      danger: {
        card: "bg-danger-50",
        iconWrapper: "bg-danger-100 dark:bg-danger-100/50 text-danger",
        trendIconWrapper: "text-danger",
      },
    },
  },
  defaultVariants: {
    color: "default",
  },
});

type ChartData = {
  month: string;
  value: number;
};

type DynamicChartCardProps = {
  title: string;
  value: number | string;
  change: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  icon?: string;
  xaxis?: "month" | "day";
  chartData: ChartData[];
};

const DynamicChartCardComponent: React.FC<DynamicChartCardProps> = ({
  title,
  value,
  change,
  color = "default",
  icon,
  xaxis = "month",
  chartData,
}) => {
  const styles = chartStyles({ color });

  return (
    <Card className={styles.card()} disableAnimation>
      <section className="flex flex-nowrap justify-between">
        <div className="flex flex-col justify-between gap-y-2 p-4">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-3">
              {icon && (
                <div className={styles.iconWrapper()}>
                  <Icon
                    className="text-inherit"
                    height={16}
                    icon={icon}
                    width={16}
                  />
                </div>
              )}
              <dt className="text-sm font-medium text-default-600">{title}</dt>
            </div>
            <dd className="text-3xl font-semibold text-default-700">{value}</dd>
          </div>
          <div className={styles.trendIconWrapper()}>
            {color === "success" ? (
              <Icon
                height={16}
                icon={"solar:arrow-right-up-linear"}
                width={16}
              />
            ) : color === "warning" ? (
              <Icon height={16} icon={"solar:arrow-right-linear"} width={16} />
            ) : (
              <Icon
                height={16}
                icon={"solar:arrow-right-down-linear"}
                width={16}
              />
            )}
            <span>{change}</span>
            <span className="text-default-500">
              vs {xaxis === "day" ? "yesterday" : "last " + xaxis}
            </span>
          </div>
        </div>
        <div className="mt-10 min-h-24 w-36 min-w-[140px] shrink-0">
          <ResponsiveContainer
            className="[&_.recharts-surface]:outline-none"
            width="100%"
          >
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--nextui-primary))"
                    stopOpacity={0.2}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--nextui-primary))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <YAxis hide />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--nextui-primary))"
                fill="url(#chartGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </Card>
  );
};

export default React.memo(DynamicChartCardComponent);
