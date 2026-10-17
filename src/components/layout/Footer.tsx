import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer section-wrap"><a className="brand" href="#home">  <span className="brand-mark">
      <img src="/image/sakib.png" alt="" className="items-center justify-center"/></span>
      <span className="brand-copy">SAKIBUL AMIN<small></small></span></a><span className="copyright">© {new Date().getFullYear()} SAKIBUL AMIN</span><a className="back-top" href="#home">BACK TO TOP <div></div> <ArrowUpRight size={18} /></a></footer>
  );
}
