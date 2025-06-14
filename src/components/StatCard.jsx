import { TrendUp, TrendDown } from "@phosphor-icons/react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
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
    <Card className="shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
      <CardBody className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Typography
              variant="small"
              className="text-gray-600 font-medium mb-2"
            >
              {title}
            </Typography>
            <Typography variant="h4" className="text-gray-900 font-bold mb-2">
              {value}
            </Typography>
            {change && (
              <div
                className={clsx(
                  "flex items-center text-sm font-medium",
                  isPositive ? "text-green-600" : "text-red-600"
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
      </CardBody>
    </Card>
  );
};

export default StatCard;
