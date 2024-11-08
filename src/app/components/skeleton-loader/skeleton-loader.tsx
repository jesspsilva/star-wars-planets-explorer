type SkeletonLoaderProps = {
  numberOfItems: number;
};

export default function SkeletonLoader({ numberOfItems }: SkeletonLoaderProps) {
  return (
    <div className="py-5" data-testid="skeleton-loader">
      {Array.from({ length: numberOfItems }, (_, index) => (
        <div key={index} className="bg-gray-50 h-12 my-2 rounded" />
      ))}
    </div>
  );
}
