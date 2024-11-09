type SkeletonLoaderProps = {
  numberOfItems?: number;
  dataTestid?: string;
};

const DEFAULT_NUMBER_OF_ITEMS = 7;

export default function SkeletonLoader({
  numberOfItems,
  dataTestid,
}: SkeletonLoaderProps) {
  return (
    <div
      className="py-5"
      data-testid={`skeleton-loader${dataTestid ? `-${dataTestid}` : ""}`}
    >
      {Array.from({ length: numberOfItems || DEFAULT_NUMBER_OF_ITEMS }, (_, index) => (
        <div
          key={index}
          className="min-[1024px]:bg-gray-100 max-[1024px]:bg-gray-200 h-11 min-[1024px]:my-2 max-[1024px]:my-4 rounded"
        />
      ))}
    </div>
  );
}
