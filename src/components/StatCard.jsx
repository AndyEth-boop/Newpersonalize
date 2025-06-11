import { TrendUp, TrendDown } from "@phosphor-icons/react";
import clsx from "clsx";

const StatCard = ({
  title,
  value,
  change,
  changeType = "positive",
  icon: Icon,
  iconColor = "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
}) => {
  const isPositive = changeType === "positive";

  return (
    <div className="card card-hover p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            {value}
          </p>
          {change && (
            <div
              className={clsx(
                "flex items-center mt-2 text-sm",
                isPositive
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              )}
            >
              {isPositive ? (
                <TrendUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendDown className="w-4 h-4 mr-1" />
              )}
              <span>{change}</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className={clsx("p-3 rounded-full", iconColor)}>
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
