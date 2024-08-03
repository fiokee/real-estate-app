import Image from "next/image";
import styles from "./page.module.css";
import HomeListing from "./components/Listings";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=''>
      <Navbar/>
      <HomeListing/>
    </main>
  );
}
