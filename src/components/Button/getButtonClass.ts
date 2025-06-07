export type GetButtonClassArgs = {
	variant?: "outline" | "solid" | "ghost";
	size?: "default" | "sm" | "icon" | "lg";
	class?: string | null | undefined;
};

export function getButtonClass({
	variant,
	size,
	class: className,
}: GetButtonClassArgs) {
	const baseClass =
		"inline-flex h-10 px-4 py-2 items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition focus-visible:outline-1 focus-visible:outline-black focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

	const solidClass =
		"bg-accent-9 text-accent-contrast hover:bg-accent-10 active:bg-accent-10 active:saturate-solid-active active:brightness-solid-active";

	const outlineClass =
		"ring ring-accent-a8 text-accent-a11 hover:bg-accent-a2 active:bg-accent-a3";

	const ghostClass = "hover:bg-accent-a3 active:bg-accent-a4";

	const iconSizeClass = "size-10";

	const smallSizeClass = "h-9 px-3";

	const largeSizeClass = "h-11 px-8";

	const sizeClass =
		size === "icon"
			? iconSizeClass
			: size === "sm"
				? smallSizeClass
				: size === "lg"
					? largeSizeClass
					: "";

	const mergedClass =
		variant === "outline"
			? `${baseClass} ${outlineClass} ${sizeClass} ${className}`
			: variant === "ghost"
				? `${baseClass} ${ghostClass} ${sizeClass} ${className}`
				: `${baseClass} ${solidClass} ${sizeClass} ${className}`;

	return mergedClass;
}
