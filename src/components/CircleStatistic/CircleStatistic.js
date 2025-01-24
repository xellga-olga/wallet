import './CircleStatistic.scss'

export const CircleStatistic = ({ children, label, percent }) => {
    const radius = 50; // Радиус круга
    const totalPercent = 2 * Math.PI * radius; // Полный периметр круга
    const _percent = (percent / 100) * totalPercent; // Длина заполненной части

    return (
        <div className="CircleStatistic">
            <div className="CircleStatistic-circle">
                <svg viewBox="0 0 105 105">
                    <defs>
                        <linearGradient x1="0" y1="0" x2="0" y2="1" id="grey">
                            <stop offset="0%" stopColor="#f0f0f0"/>
                            <stop offset="100%" stopColor="#cccccc"/>
                        </linearGradient>
                        <linearGradient x1="0" y1="0" x2="0" y2="1" id="primary">
                            <stop offset="0%" stopColor="#ff5722"/>
                            <stop offset="100%" stopColor="#ff9800"/>
                        </linearGradient>
                    </defs>
                    <circle
                        className="CircleStatistic-circle_default"
                        r={radius}
                        cx="52.5"
                        cy="52.5"
                        stroke="url(#grey)"
                    />
                    <circle
                        className="CircleStatistic-circle_primary"
                        r={radius}
                        cx="52.5"
                        cy="52.5"
                        stroke="url(#primary)"
                        style={{
                            strokeDasharray: `${_percent} ${totalPercent}`,
                        }}
                    />
                </svg>
                <div className="CircleStatistic-content">{children}</div>
            </div>
            <div className="CircleStatistic-label">{label}</div>
        </div>
    );
};