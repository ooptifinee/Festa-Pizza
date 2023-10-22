import logo from "../assets/logo.webp";
import { Link } from "@solidjs/router";
import festaBackground from "../assets/festa-bg.jpg"

export function Header() {
  return (
     <>
    <header class="w-[auto] h-[180px] overflow-hidden">
        <div class="m-5 flex justify-between items-center fixed z-20 w-full">
        <h2 class="text-[42px] font-bold font-genos">FESTA KOLOMYIA</h2>
        <img class="w-[120px] rounded-full mt-5 mr-[7rem]" src={logo} alt="logo" />
        <div class="mr-[30px]">
            <Link class="m-4" href="https://www.instagram.com/festa.kolomyia/">
                Instagram
            </Link>
            <Link class="m-4" href="https://www.facebook.com/festa.kolomyya/">
                Facebook
            </Link>
        </div>
    </div>
        <img src={festaBackground} alt="festa-bg" class="opacity-20 object-cover"/>
    </header>
      </>
  );
}
