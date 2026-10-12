import type * as React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={835}
		height={849}
		viewBox="0 0 835 849"
		fill="none"
		aria-label="Connect Tech Global Logo"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.571 424.098c0 234.146 189.829 423.973 423.975 423.973 0-234.146-189.829-423.973-423.975-423.973Z"
			fill="#0D65FE"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.571 424.095C0.571 189.949 190.4.121 424.546.121c0 234.146-189.829 423.974-423.975 423.974Z"
			fill="#0D65FE"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M834.195 533.754c-48.321 181.023-213.418 314.315-409.65 314.315l42.128-157.178c23.17-86.447 112.817-157.137 199.264-157.137h168.258Z"
			fill="#0D65FE"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M834.195 314.436C785.874 133.413 620.777.121 424.545.121L466.673 157.3c23.17 86.446 112.817 157.136 199.264 157.136h168.258Z"
			fill="#0D65FE"
		/>
	</svg>
);
export default Logo;
