import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineSpotify } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

export function LinksMoreLife() {
  return (
    <>
      <div className="container mx-auto px-4 text-center flex gap-12 items-center justify-center ">
        <div className="flex items-center justify-center gap-10">
          <a href="https://www.instagram.com/morelifersl/" target="_blank">
            <LuInstagram size="2.5rem" />
          </a>
          <a
            href="https://chat.whatsapp.com/IaDLqM5aVj16M8SamyB2kx"
            target="_blank"
          >
            <FaWhatsapp size="2.5rem" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-10">
          <a
            href="https://open.spotify.com/playlist/4alIDVB0NsrEVpcUCqLFUb?si=y6HlBTrmQYmwiGVOq_4PXQ&utm_source=copy-link&utm_medium=copy-link&nd=1&_branch_match_id=1339291247279621846&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq9TLyczL1q8q8S6w8A2ozHBJsq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FAOfMrs06AAAA"
            target="_blank"
          >
            <AiOutlineSpotify size="2.5rem" />
          </a>

          <a
            href="https://www.google.com/maps/place/Av.+Gov.+Jorge+Lacerda,+570+-+Budag,+Rio+do+Sul+-+SC,+89165-457/@-27.2232696,-49.6568913,17z/data=!3m1!4b1!4m6!3m5!1s0x94dfb856419e1d73:0x98228f4c5c934033!8m2!3d-27.2232696!4d-49.6568913!16s%2Fg%2F11c5c0h718?entry=ttu&g_ep=EgoyMDI0MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <CiLocationOn size="2.5rem" />
          </a>
        </div>
      </div>
    </>
  );
}
