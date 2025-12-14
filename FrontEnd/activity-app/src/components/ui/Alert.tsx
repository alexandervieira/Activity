import React from 'react';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  onClose?: () => void;
  dismissible?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  onClose,
  dismissible = true,
}) => {
  const typeConfig = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: '✓',
      title: 'bg-green-100 text-green-800',
      text: 'text-green-700',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: '✕',
      title: 'bg-red-100 text-red-800',
      text: 'text-red-700',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: '⚠',
      title: 'bg-yellow-100 text-yellow-800',
      text: 'text-yellow-700',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'ℹ',
      title: 'bg-blue-100 text-blue-800',
      text: 'text-blue-700',
    },
  };

  const config = typeConfig[type];

  return (
    <div
      className={`rounded-lg border ${config.bg} ${config.border} p-4`}
      role="alert"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <span className={`text-xl font-bold ${config.text}`}>{config.icon}</span>
          <div>
            {title && (
              <h3 className={`font-semibold mb-1 ${config.title} rounded px-2 py-1 inline-block`}>
                {title}
              </h3>
            )}
            <p className={`${config.text}`}>{message}</p>
          </div>
        </div>
        {dismissible && onClose && (
          <button
            onClick={onClose}
            className={`text-lg font-bold ${config.text} hover:opacity-70`}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
