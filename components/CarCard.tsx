"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  return <div>CarCard</div>;
};

export default CarCard;
