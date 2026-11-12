import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};

/**
 * Custom sculpted Mango & Leaf icon for fruit-forward flavour highlights.
 */
export function MangoFruitIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="staminaMangoGrad" x1="6" y1="8" x2="26" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFC928" />
          <stop offset="100%" stopColor="#FF7A1A" />
        </linearGradient>
      </defs>
      <path
        d="M17.5 8.5C22.8 8.5 26 12.6 25.5 18.2C24.9 24.4 19.6 28.5 13.8 27.9C9.5 27.5 6.5 24.2 6.8 20.1C7.1 16.4 9.7 14.9 11.4 12.3C12.7 10.3 14.3 8.5 17.5 8.5Z"
        fill="url(#staminaMangoGrad)"
        fillOpacity="0.22"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8.5C16.8 5.9 18.6 4.2 21.5 4C21.2 6.8 19.5 8.4 16.5 8.5Z"
        fill="#55B747"
        fillOpacity="0.28"
        stroke="#55B747"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2 8.5C15.8 6.4 14.8 4.8 13.2 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M11.5 18.8C11.2 21.2 12.4 23.1 14.4 23.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

/**
 * Custom Glossy Juice Droplet icon representing refreshing taste.
 */
export function FruitNectarDropIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 4.2C16 4.2 7.5 13.6 7.5 19.6C7.5 24.3 11.3 28 16 28C20.7 28 24.5 24.3 24.5 19.6C24.5 13.6 16 4.2 16 4.2Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M12.2 19.8C12.2 22.1 13.8 23.8 16 24.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="20.5" cy="9.5" r="1.5" fill="#FFC928" />
      <circle cx="23.5" cy="13.2" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/**
 * Custom 250 ml PET Bottle silhouette with grooved ribs and sealed cap.
 */
export function ChilledBottleIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="12.5"
        y="3.5"
        width="7"
        height="3.2"
        rx="1"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M13 6.7V9.2C13 10.3 10.2 11.8 10.2 14.3V25.5C10.2 27.1 11.5 28.4 13.1 28.4H18.9C20.5 28.4 21.8 27.1 21.8 25.5V14.3C21.8 11.8 19 10.3 19 9.2V6.7"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.4 16.2H21.6" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <path d="M10.4 22.8H21.6" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <path
        d="M14 19.5H18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Custom Everyday Refreshment Glass with citrus garnish.
 */
export function EverydayGlassIcon({ size = 26, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="22.5"
        cy="9.5"
        r="4.2"
        fill="#FFC928"
        fillOpacity="0.3"
        stroke="#FF7A1A"
        strokeWidth="1.6"
      />
      <path
        d="M8.5 10.5H21.5L19.8 26.2C19.6 27.4 18.6 28.3 17.4 28.3H12.6C11.4 28.3 10.4 27.4 10.2 26.2L8.5 10.5Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 16.5C12 15.2 14.5 17.6 16.8 16.5C18.3 15.8 19.8 15.9 20.8 16.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15 10.5L17.5 4.2L21 3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Custom Hygiene Seal Shield icon.
 */
export function HygieneSealShieldIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 3.5L6.5 7.5V15.4C6.5 21.8 10.6 26.9 16 28.7C21.4 26.9 25.5 21.8 25.5 15.4V7.5L16 3.5Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M11.8 16.2L14.7 19.1L20.6 13.2"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Custom Food-Grade Stainless Blending Vessel icon.
 */
export function BlendingVesselIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.5 10.5C8.5 7.4 11.8 5.5 16 5.5C20.2 5.5 23.5 7.4 23.5 10.5V21.5C23.5 23.5 20.2 25.5 16 25.5C11.8 25.5 8.5 23.5 8.5 21.5V10.5Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.85"
      />
      <path d="M8.5 12H23.5" stroke="currentColor" strokeWidth="1.6" opacity="0.65" />
      <path d="M16 3.5V5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11.5 24.5L10.5 28.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20.5 24.5L21.5 28.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="17.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/**
 * Custom Cleanroom Bottling Nozzle & Conveyor icon.
 */
export function AutomatedBottlingLineIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 4H20V7.5L17.5 10H14.5L12 7.5V4Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M16 10V13.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12.5 15.5H19.5L20.5 18.2V24.5C20.5 25.3 19.8 26 19 26H13C12.2 26 11.5 25.3 11.5 24.5V18.2L12.5 15.5Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M5 28.5H27" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Custom Indian 100% Vegetarian Symbol with botanical leaf.
 */
export function VegLeafMarkIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="4"
        stroke="#55B747"
        strokeWidth="2"
        fill="#55B747"
        fillOpacity="0.1"
      />
      <path
        d="M8.5 15.5C8.5 11.2 11.5 8 16.2 7.8C16 12.5 12.8 15.5 8.5 15.5Z"
        fill="#55B747"
      />
    </svg>
  );
}

