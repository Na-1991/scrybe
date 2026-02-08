import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getRandomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function getUniqueRandomIndices(count: number, max: number): number[] {
  const indices = new Set<number>();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * max));
  }
  return Array.from(indices);
}


export const companies = [
  "/companies/ADCB-png.png",
  "/companies/Agthia-png.png",
  "/companies/alfutaim-jpg.png",
  "/companies/al-qana-png.png",
  "/companies/al-ula-saudi-png.png",
  "/companies/bank-Muscat-png.png",
  "/companies/bank-of-america-png.png",
  "/companies/DAFZA-png.png",
  "/companies/DCT-png.png",
  "/companies/dewa-png.png",
  "/companies/DHCC-jpg.png",
  "/companies/Diriyah-E-Prix-png.png",
  "/companies/DMCC-png.png",
  "/companies/DP-World-png.png",
  "/companies/eithad-cargo-png.png",
  "/companies/ENEC-jpg.png",
  "/companies/etihad-rail-png.png",
  "/companies/FAO-png.png",
  "/companies/FXTM-png.png",
  "/companies/Grundfos-png.png",
  "/companies/IATA-png.png",
  "/companies/savills-png.png",
  "/companies/saxo-png.png",
  "/companies/shangri-la-png.png",
  "/companies/Takeda-png.png",
  "/companies/the-national-aquariu.png",
  "/companies/UN-png.png",
  "/companies/vistatec-jpg.png",
];