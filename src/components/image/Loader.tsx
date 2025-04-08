export const Loader: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <g>
        <rect fill="#c8c3c4" height="40" width="15" y="30" x="17.5">
          <animate
            begin="-0.2s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            values="18;30;30"
            keyTimes="0;0.5;1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            attributeName="y"
          />
          <animate
            begin="-0.2s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            values="64;40;40"
            keyTimes="0;0.5;1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            attributeName="height"
          />
        </rect>
        <rect fill="#ddc1a4" height="40" width="15" y="30" x="42.5">
          <animate
            begin="-0.1s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            values="20.999999999999996;30;30"
            keyTimes="0;0.5;1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            attributeName="y"
          />
          <animate
            begin="-0.1s"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            values="58.00000000000001;40;40"
            keyTimes="0;0.5;1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            attributeName="height"
          />
        </rect>
        <rect fill="#cdd5bb" height="40" width="15" y="30" x="67.5">
          <animate
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            values="20.999999999999996;30;30"
            keyTimes="0;0.5;1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            attributeName="y"
          />
          <animate
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            values="58.00000000000001;40;40"
            keyTimes="0;0.5;1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            attributeName="height"
          />
        </rect>
        <g />
      </g>
    </svg>
  );
};
