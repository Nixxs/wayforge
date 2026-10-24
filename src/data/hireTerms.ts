import PlaceIcon from "@mui/icons-material/Place";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import BadgeIcon from "@mui/icons-material/Badge";
import PeopleIcon from "@mui/icons-material/People";
import LuggageIcon from "@mui/icons-material/Luggage";
import SellIcon from "@mui/icons-material/Sell";

// Hire terms shown on the homepage About section and every vehicle page. Keep these
// consistent with public/llms.txt, Camplify and the Google Business Profile.
export const hireTerms = [
    { Icon: SellIcon, term: "Hire", detail: "From $280 per night, minimum 2 nights, with no kilometre limit" },
    { Icon: PlaceIcon, term: "Pick-up", detail: "Perth metro area, with the exact handover location confirmed when you book" },
    { Icon: EventAvailableIcon, term: "Booking", detail: "Through Camplify, with off-road protection options and 24/7 roadside assistance" },
    { Icon: BadgeIcon, term: "Drivers", detail: "Aged 21 or over, with a standard Australian manual car licence or an international licence" },
    { Icon: PeopleIcon, term: "Sleeps", detail: "2 adults + 1 child, or 2 adults on a full-length bed" },
    { Icon: LuggageIcon, term: "Included", detail: "Fridge/freezer, solar and lithium power, bedding, kitchen and cookware, camp chairs and table, water system" },
];
