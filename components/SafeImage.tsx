'use client';

import React, { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

interface SafeImageProps extends Omit<ImageProps, 'onError' | 'src'> {
  src: string;
  /** Fallback URL used if the primary src fails to load. */
  fallbackSrc?: string;
  /** Forwarded error handler invoked after the fallback swap. */
  onError?: ImageProps['onError'];
}

/**
 * SafeImage — next/image wrapper that swaps to a fallback src when the
 * primary image fails. Necessary because Next.js Image does not expose
 * a stable onError hook for remote URLs in all environments.
 */
export default function SafeImage({
  src,
  fallbackSrc,
  onError,
  ...rest
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  return (
    <Image
      {...rest}
      src={currentSrc}
      onError={(event) => {
        if (!failed && fallbackSrc) {
          setFailed(true);
          setCurrentSrc(fallbackSrc);
        }
        onError?.(event);
      }}
    />
  );
}