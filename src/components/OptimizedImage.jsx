export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  loading = 'lazy', 
  className,
  decoding = 'async'
}) {
  // Use the image directly (JPG is already optimized)
  // Ready for WebP support when images are converted
  
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      className={className}
    />
  )
}
