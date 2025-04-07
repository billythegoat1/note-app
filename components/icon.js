import React from "react";

export default function FloralLogo() {
  // Using a rich magenta color that matches the image
  const logoColor = "#451b1b";
  
  return (
    <div className="flex items-center gap-2">
      {/* Professional floral icon with precise geometry */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        className="w-12 h-12"
      >
        <g fill={logoColor}>
          {/* Eight-petal geometric flower pattern */}
          <path d="M60,30 C66.6,30 72,35.4 72,42 C72,48.6 66.6,54 60,54 C53.4,54 48,48.6 48,42 C48,35.4 53.4,30 60,30 Z" />
          <path d="M60,66 C66.6,66 72,71.4 72,78 C72,84.6 66.6,90 60,90 C53.4,90 48,84.6 48,78 C48,71.4 53.4,66 60,66 Z" />
          <path d="M42,48 C42,54.6 36.6,60 30,60 C23.4,60 18,54.6 18,48 C18,41.4 23.4,36 30,36 C36.6,36 42,41.4 42,48 Z" />
          <path d="M90,48 C90,54.6 84.6,60 78,60 C71.4,60 66,54.6 66,48 C66,41.4 71.4,36 78,36 C84.6,36 90,41.4 90,48 Z" />

          {/* Diagonal petals */}
          <path d="M49.8,38.2 C54.4,33.6 61.6,33.6 66.2,38.2 C70.8,42.8 70.8,50 66.2,54.6 C61.6,59.2 54.4,59.2 49.8,54.6 C45.2,50 45.2,42.8 49.8,38.2 Z" />
          <path d="M49.8,65.4 C54.4,60.8 61.6,60.8 66.2,65.4 C70.8,70 70.8,77.2 66.2,81.8 C61.6,86.4 54.4,86.4 49.8,81.8 C45.2,77.2 45.2,70 49.8,65.4 Z" />
          <path d="M38.2,49.8 C42.8,45.2 50,45.2 54.6,49.8 C59.2,54.4 59.2,61.6 54.6,66.2 C50,70.8 42.8,70.8 38.2,66.2 C33.6,61.6 33.6,54.4 38.2,49.8 Z" />
          <path d="M65.4,49.8 C70,45.2 77.2,45.2 81.8,49.8 C86.4,54.4 86.4,61.6 81.8,66.2 C77.2,70.8 70,70.8 65.4,66.2 C60.8,61.6 60.8,54.4 65.4,49.8 Z" />
        </g>
      </svg>

      {/* Brand Name in a professional typeface style */}
      <div
        className="font-bold text-4xl tracking-tight"
        style={{ color: logoColor }}
      >
        ideaz.
      </div>
    </div>
  );
}
