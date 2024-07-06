import { ProgressCircleProps } from "./types";
import lines from '../../images/for-progress-circle/lines.png'

export const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage, color }) => {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const strokePct = ((percentage) * circ) / 100;

  return (
    <svg width='100%' height='100%' viewBox="0 0 100 100" overflow="visible" preserveAspectRatio="xMinYMin meet">
    <defs>
      <pattern id="image" patternUnits="userSpaceOnUse" height="100" width="100">
        <image transform="rotate(-6 125 125) translate(-50 -50)" x="0" y="0" height="250" width='250' xlinkHref={lines}></image>
      </pattern>
    </defs>
      <g transform={`rotate(-180 ${"50 50"})`}>   
        <circle
          r={r}
          cx='50'
          cy='50'
          fill="transparent"
          stroke={color}
          strokeDasharray={circ}
          strokeWidth={"15px"}
          strokeDashoffset={0}
        >
        </circle>    
        <circle
          r={r}
          cx='50'
          cy='50'
          fill="transparent"
          stroke={strokePct !== circ ? 'white' : ""}
          strokeDasharray={circ}
          strokeWidth={"15px"}
          strokeDashoffset={strokePct}
          className="animate-rotate"
        ></circle> 
        <circle
          r={r}
          cx='50'
          cy='50'
          fill="transparent"
          stroke={strokePct !== circ ? 'url(#image)' : ""}
          strokeDasharray={circ}
          strokeWidth={"15px"}
          strokeDashoffset={strokePct}
          className="animate-rotate"
        ></circle>
        </g>
      <path transform="translate(29 28) scale(0.4)" strokeWidth='0' d="M66.3607 72.9161L72.4168 66.86L56.4114 50.8546V30.956H47.7598V54.3152L66.3607 72.9161ZM52.0856 95.8428C46.1016 95.8428 40.4781 94.7072 35.215 92.4362C29.952 90.1652 25.3739 87.083 21.4807 83.1898C17.5875 79.2966 14.5053 74.7185 12.2343 69.4555C9.96326 64.1924 8.82774 58.5689 8.82774 52.5849C8.82774 46.6009 9.96326 40.9774 12.2343 35.7143C14.5053 30.4513 17.5875 25.8732 21.4807 21.98C25.3739 18.0868 29.952 15.0046 35.215 12.7336C40.4781 10.4626 46.1016 9.32706 52.0856 9.32706C58.0696 9.32706 63.6931 10.4626 68.9562 12.7336C74.2192 15.0046 78.7973 18.0868 82.6905 21.98C86.5837 25.8732 89.6658 30.4513 91.9369 35.7143C94.2079 40.9774 95.3434 46.6009 95.3434 52.5849C95.3434 58.5689 94.2079 64.1924 91.9369 69.4555C89.6658 74.7185 86.5837 79.2966 82.6905 83.1898C78.7973 87.083 74.2192 90.1652 68.9562 92.4362C63.6931 94.7072 58.0696 95.8428 52.0856 95.8428ZM52.0856 87.1912C61.6744 87.1912 69.8393 83.8207 76.5804 77.0797C83.3214 70.3386 86.6919 62.1737 86.6919 52.5849C86.6919 42.9961 83.3214 34.8312 76.5804 28.0901C69.8393 21.3491 61.6744 17.9786 52.0856 17.9786C42.4968 17.9786 34.3319 21.3491 27.5908 28.0901C20.8498 34.8312 17.4793 42.9961 17.4793 52.5849C17.4793 62.1737 20.8498 70.3386 27.5908 77.0797C34.3319 83.8207 42.4968 87.1912 52.0856 87.1912Z" fill="#ECEEF1"/>
  </svg>
  )
}