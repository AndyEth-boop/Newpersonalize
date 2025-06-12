import { TrendUp, TrendDown } from "@phosphor-icons/react";
import clsx from "clsx";

const StatCard = ({
  title,
  value,
  change,
  changeType = "positive",
  icon: Icon,
  iconColor = "bg-gradient-to-r from-blue-500 to-purple-500",
  trend,
}) => {
  const isPositive = changeType === "positive";

  return (
    <div className="stat-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {value}
          </p>
          {change && (
            <div
              className={clsx(
                "flex items-center text-sm font-medium",
                isPositive
                  ? "text-emerald-600 dark:text-emerald-400"
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
          <div
            className={clsx(
              "p-3 rounded-xl shadow-lg transition-transform group-hover:scale-110",
              iconColor
            )}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
      </div>

      {/* Mini trend chart */}
      {trend && (
        <div className="flex items-end space-x-1 h-8">
          {trend.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-blue-500/20 to-blue-500/40 rounded-sm flex-1 transition-all duration-300 hover:from-blue-500/40 hover:to-blue-500/60"
              style={{ height: `${(value / Math.max(...trend)) * 100}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StatCard;
