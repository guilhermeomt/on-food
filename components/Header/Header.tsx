import Link from "next/link";
import Image from "next/image";
import Styles from "./Header.module.css";
import { IconBookmark, IconHome } from "@/icons";

export function Header() {
  return (
    <header>
      <nav className={Styles.nav}>
        <div className={Styles.brand}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                alt="OnFood "
                width="45"
                height="36"
              />
              <span>OnFood</span>
            </a>
          </Link>
        </div>
        <ul className="flex">
          <li>
            <Link href="/">
              <a>
                <IconHome />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/favoritos">
              <a>
                <IconBookmark />
                Favoritos
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
