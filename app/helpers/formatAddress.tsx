import { FaMapMarkerAlt, FaGlobe } from "react-icons/fa"; // Icons from react-icons
import { IUserAddress } from "../types/users/address";

export function formatAddress(
  address: IUserAddress,
  format: "full" | "partial" | "table" = "full"
): JSX.Element {
  const { country, city, region, street, postalCode, houseNumber } = address;

  const colors = {
    country: "text-gray-500", // Color for country
    city: "text-gray-700", // Color for city
    region: "text-gray-600", // Color for region
    street: "text-gray-700", // Color for street
    postalCode: "text-gray-500", // Color for postal code
  };

  switch (format) {
    case "full":
      return (
        <div className="flex flex-row items-center gap-3 text-sm">
          {/* Street and house number */}
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="mr-1 text-yellow-400 text-lg" />
            <span className={colors.street}>
              {street}, {houseNumber}
            </span>
          </div>

          {/* City and region */}
          <div className="flex items-center gap-1">
            <span className={colors.city}>{city}</span>,{" "}
            <span className={colors.region}>{region}</span>
          </div>

          {/* Postal code */}
          <div className="flex items-center gap-1">
            <span className={colors.postalCode}>{postalCode}</span>
          </div>

          {/* Country */}
          <div className="flex items-center gap-1">
            <FaGlobe className="mr-1 text-gray-400 text-lg" />
            <span className={colors.country}>{country}</span>
          </div>
        </div>
      );

    case "partial":
      return (
        <div className="flex flex-row items-center gap-3 text-sm">
          {/* Street and house number */}
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="mr-1 text-yellow-400 text-lg" />
            <span className={colors.street}>
              {street}, {houseNumber}
            </span>
          </div>

          {/* City and region */}
          <div className="flex items-center gap-1">
            <span className={colors.city}>{city}</span>,{" "}
            <span className={colors.region}>{region}</span>
          </div>
        </div>
      );

    case "table":
      return (
        <div className="flex flex-row items-center gap-2 text-sm">
          {/* City and country */}
          <FaMapMarkerAlt className="mr-1 text-yellow-400 text-lg" />
          <div className="flex items-center gap-1">
            <span className={colors.city}>{city}</span>,{" "}
            <span className={colors.country}>{country}</span>
          </div>
        </div>
      );

    default:
      return <></>; // Return empty block by default
  }
}
