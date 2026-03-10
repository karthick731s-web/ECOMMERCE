// withBrand.jsx
export const withBrand = (WrappedComponent) => {
  return function({ brand, ...props }) {
    return (
      <div>
        {/* Brand displayed on top */}
        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1"> {brand}</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
  