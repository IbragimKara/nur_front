'use client'
import Image from "next/image";
import s from "./page.module.scss";
import Link from 'next/link'
import { HomePage } from "@/modules";
import AboutUs from "@/modules/AboutUs/AboutUs";
export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
