import { cn } from "@crm/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const BRAND_BLUE = "#0D65FE";

const spinnerVariants = cva("shrink-0", {
	variants: {
		size: {
			default: "size-4",
			lg: "size-10",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

function Spinner({
	className,
	size,
	...props
}: React.ComponentProps<"svg"> & VariantProps<typeof spinnerVariants>) {
	return (
		<svg
			data-slot="spinner"
			role="status"
			aria-label="Loading"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			className={cn("animate-spin", spinnerVariants({ size }), className)}
			{...props}
		>
			<circle
				cx="12"
				cy="12"
				r="9"
				stroke={BRAND_BLUE}
				strokeOpacity={0.18}
				strokeWidth="3"
			/>
			<circle
				cx="12"
				cy="12"
				r="9"
				stroke={BRAND_BLUE}
				strokeWidth="3"
				strokeLinecap="round"
				strokeDasharray="16 57"
			/>
		</svg>
	);
}

export { Spinner };
