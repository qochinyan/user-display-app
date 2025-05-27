import "./SideBar.scss";
import Logo from "../../assets/logo.svg";
import OrganizationIcon from "../ui/OrganizationIcon.tsx";
import SettingIcon from "../ui/SettingIcon.tsx";
import { NavLink } from "react-router-dom";
import UserIcon from "../ui/UserIcon.tsx";
import WorkerIcon from "../ui/WorkerIon.tsx";
import PlaceIcon from "../ui/PlaceIcon.tsx";
import ProductIcon from "../ui/ProductIcon.tsx";
import OrderIcon from "../ui/OrderIcon.tsx";
import ScanIcon from "../ui/ScanIcon.tsx";

export default function SideBar() {
  return (
    <div className="side-bar__container">
      <NavLink to="/" className="side-bar__logo">
        <img src={Logo} alt="Logo" className="logo-image" />
      </NavLink>
      <div className="side-bar__labels">
        <button className="side-bar__toggle-button">
          <span className="toggle-button__arrow"></span>
        </button>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "side-bar__label--active side-bar__label" : "side-bar__label";
          }}
          to={"./organization"}
        >
          <OrganizationIcon />
          <span className="label__text">Organization</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "side-bar__label--active side-bar__label" : "side-bar__label";
          }}
          to={"./roles"}
        >
          <SettingIcon />
          <span className="label__text">Roles</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "side-bar__label--active side-bar__label" : "side-bar__label";
          }}
          to={"./users"}
        >
          <UserIcon />
          <span className="label__text">Users</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "side-bar__label--active side-bar__label" : "side-bar__label";
          }}
          to={"./workers"}
        >
          <WorkerIcon />
          <span className="label__text">Workers</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "side-bar__label--active side-bar__label" : "side-bar__label";
          }}
          to={"./places"}
        >
          <PlaceIcon />
          <span className="label__text">Places</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "side-bar__label--active side-bar__label" : "side-bar__label";
          }}
          to={"./products"}
        >
          <ProductIcon />
          <span className="label__text">Products</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "side-bar__label--active side-bar__label" : "side-bar__label";
          }}
          to={"./orders"}
        >
          <OrderIcon />
          <span className="label__text">Orders</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "side-bar__label--active side-bar__label" : "side-bar__label";
          }}
          to={"./scan-history"}
        >
          <ScanIcon />
          <span className="label__text">Scan History</span>
        </NavLink>
      </div>
    </div>
  );
}
