import serviceImg from "../assets/images/service.jpg";
import fillWalletImg from "../assets/images/fillWallet.jpg";
import statisticsImg from "../assets/images/statistics.jpg";
import governoratesImg from "../assets/images/governorates.jpg";
import createNewOwnerImg from "../assets/images/createNewOwner.jpg";

export const homeNavigation = [
  {
    to: "createServiceOwner",
    title: "Create Service Owner",
    background: `url(${createNewOwnerImg}) center /cover no-repeat border-box`
  },
  {
    to: "createServiceOwner/addService",
    title: "Create Service",
    background: `url(${serviceImg}) center /cover no-repeat border-box`
  },
  {
    to: "fillUserWallet",
    title: "Fill User's Wallet",
    background: `url(${fillWalletImg}) center /cover no-repeat border-box`
  }
];
