export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={
                `inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-white text-sm font-semibold transition bg-blue-600 hover:bg-blue-700 disabled:opacity-50 ` +
                className
            }
        >
            {children}
        </button>
    );
}
